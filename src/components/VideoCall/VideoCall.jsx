import React, { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContext = createContext();

function VideoCallContextProvider({ children }) {
	const [callAccepted, setCallAccepted] = useState(false);
	const [callEnded, setCallEnded] = useState(false);
	const [callState, setcallState] = useState(false);
	const [name, setName] = useState('');
	const [call, setCall] = useState({});
	const [stream, setstream] = useState();
	const [me, setMe] = useState();

	const myVideo = useRef();
	const userVideo = useRef();
	const connectionRef = useRef();
	const interval = useRef();
	const socket = useRef();

	useEffect(() => {
		window.onbeforeunload = (event) => {
			if (connectionRef.current) {
				connectionRef.current.destroy();
				socket.current.emit('leaveCall');
			}
		};

		const checkUser = localStorage.getItem('user');
		if (checkUser) {
			const user = JSON.parse(localStorage.getItem('user')).data;
			const connectionSocket = io('http://localhost:5000', {
				auth: {
					id: user.id,
					token: user.token,
				},
				reconnectionDelayMax: 10000,
			});

			socket.current = connectionSocket;

			navigator.mediaDevices.getUserMedia({ audio: true, video: true })
				.then((currentStream) => {
					setstream(currentStream);
					myVideo.current.srcObject = currentStream;
				});
			connectionSocket.on('me', (id) => setMe(id));

			connectionSocket.on('callUser', ({ from, signal, name: callerName }) => {
				setCall({ from, isReceivingCall: true, name: callerName, signal });
			});

			connectionSocket.on('disconnected', () => {
				console.log('desconectando');
				setCall({ isReceivingCall: false });
				setCallAccepted(false);
				setCallEnded(true);
			});
		}
	}, []);

	const answerCall = () => {
		setCallAccepted(true);

		const peer = new Peer({ initiator: false, stream, trickle: false });

		peer.on('signal', (data) => {
			socket.current.emit('answerCall', { signal: data, to: call.from });
		});

		peer.signal(call.signal);

		peer.on('stream', (currentStream) => {
			userVideo.current.srcObject = currentStream;
		});

		connectionRef.current = peer;
	};

	const callUser = (id) => {
		const peer = new Peer({ initiator: true, stream, trickle: false });
		peer.on('signal', (data) => {
			interval.current = setInterval(() => {
				socket.current.emit('callUser', {
					from: me,
					name: 'Llamador',
					signalData: data,
					userToCall: id,
				});
			}, 1000);
		});

		peer.on('stream', (currentStream) => {
			userVideo.current.srcObject = currentStream;
		});

		socket.current.on('callAccepted', (signal) => {
			setCallAccepted(true);
			clearInterval(interval.current);
			peer.signal(signal);
		});

		socket.current.on('userNotFound', () => {
			clearInterval(callUser);
		});

		connectionRef.current = peer;
	};

	const leaveCall = () => {
		socket.current.emit('leaveCall');
	};

	return (
		<SocketContext.Provider
			value={{
				answerCall,
				call,
				callAccepted,
				callEnded,
				callUser,
				connectionRef,
				leaveCall,
				me,
				myVideo,
				name,
				stream,
				userVideo,
			}}
		>
			{children}
		</SocketContext.Provider>
	);
}

export { VideoCallContextProvider, SocketContext };
