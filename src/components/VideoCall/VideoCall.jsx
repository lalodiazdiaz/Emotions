import React, { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import Peer from 'peerjs';

const SocketContext = createContext();

function VideoCallContextProvider({ children }) {
	const [callAccepted, setCallAccepted] = useState(false);
	const [callEnded, setCallEnded] = useState(false);
	const [callState, setcallState] = useState(false);
	const [name, setName] = useState('');
	const [call, setCall] = useState({});
	const [stream, setstream] = useState();
	const [me, setMe] = useState();
	const [myPeer, setmyPeer] = useState();

	const myVideo = useRef();
	const userVideo = useRef();
	const connectionRef = useRef();
	const dataConnection = useRef();
	const interval = useRef();
	const socket = useRef();

	useEffect(() => {
		if (connectionRef.current) {
			connectionRef.current.destroy();
		}
		const checkUser = localStorage.getItem('user');
		const user = JSON.parse(localStorage.getItem('user')).data;
		socket.current = io(process.env.REACT_APP_SOCKET_URL, {
			auth: {
				id: user.id,
				token: user.token,
			},
			reconnectionDelayMax: 10000,
			transports: ['websocket'],
		});

		const peer = new Peer();

		peer.on('open', (id) => {
			setmyPeer(id);
		});

		connectionRef.current = peer;

		navigator.mediaDevices.getUserMedia({ audio: true, video: true })
			.then((currentStream) => {
				setstream(currentStream);
				myVideo.current.srcObject = currentStream;
			});

		socket.current.on('me', (id) => setMe(id));

		socket.current.on('callUser', ({ from, name: callerName, otherPeer }) => {
			setCall({ from, isReceivingCall: true, name: callerName, otherPeer });
			setCallAccepted(false);
		});

		socket.current.on('disconnected', () => {
			setCallAccepted(false);
		});

		socket.current.on('destroyPeer', () => {
			dataConnection.current.close();
			connectionRef.current.destroy();
			socket.current.disconnect();
			setcallState(!callState);
		});

		connectionRef.current.on('call', (myCall) => {
			myCall.answer(myVideo.current.srcObject);
			myCall.on('stream', (currentStream) => {
				userVideo.current.srcObject = currentStream;
			});
		});
	}, [callState]);

	const answerCall = () => {
		setCall({ isReceivingCall: false });

		connectionRef.current.on('connection', (conn) => {
			conn.on('open', () => {
				conn.on('data', (data) => {
					if (data === 'end') {
						conn.close();
						connectionRef.current.destroy();
						socket.current.disconnect();
						setCallAccepted(false);
						setcallState(!callState);
					}
				});
			});

			dataConnection.current = conn;
		});

		socket.current.emit('answerCall', { from: myPeer, fromId: me, to: call.from });

		connectionRef.current.on('close', () => {
			setCallAccepted(false);
			setcallState(!callState);
		});

		setCallAccepted(true);
	};

	const callUser = (id) => {
		interval.current = setInterval(() => {
			socket.current.emit('callUser', {
				from: me,
				myPeer,
				name: 'Llamador',
				userToCall: id,
			});
		}, 750);

		socket.current.on('callAccepted', (from) => {
			setCallAccepted(true);
			clearInterval(interval.current);

			const conn = connectionRef.current.connect(from);
			conn.on('open', () => {
				conn.on('data', (data) => {
					if (data === 'end') {
						conn.close();
						connectionRef.current.destroy();
						socket.current.disconnect();
						setCallAccepted(false);
						setcallState(!callState);
					}
				});
			});

			dataConnection.current = conn;
			const myCall = connectionRef.current.call(from, myVideo.current.srcObject);
			myCall.on('stream', (currentStream) => {
				userVideo.current.srcObject = currentStream;
			});
		});

		connectionRef.current.on('close', () => {
			dataConnection.current.close();
			setCallAccepted(false);
			setcallState(!callState);
		});
	};

	const leaveCall = () => {
		dataConnection.current.send('end');
		setCallAccepted(false);
	};

	return (
		<SocketContext.Provider
			// eslint-disable-next-line react/jsx-no-constructed-context-values
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
