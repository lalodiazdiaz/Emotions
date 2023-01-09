import React, { useContext } from 'react';
import { SocketContext } from './VideoCall';

function Notifications() {
	const { answerCall, call, callAccepted } = useContext(SocketContext);
	return (
		<div>
			{call.isReceivingCall && !callAccepted ? (
				<div>
					<h1>Join to call with: {call.name}</h1>
					<button onClick={answerCall} type="button">Join</button>
				</div>
			) : (
				<h1>No Notifications</h1>
			)}
		</div>
	);
}

export default Notifications;
