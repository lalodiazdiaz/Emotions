import React, { useContext, useState } from 'react';
import { SocketContext } from './VideoCall';

function Options({ children }) {
	const [idToCall, setIdToCall] = useState('');

	const { me, callAccepted, name, setName, leaveCall, callUser, callEnded } =
      useContext(SocketContext);

	function getInCall() {
		callUser(idToCall);
	}

	return (
		<div>
			<input onChange={(e) => setIdToCall(e.target.value)} type="text" />
			{callAccepted && !callEnded ? (
				<button onClick={leaveCall} type="button">Salir</button>
			) : (
				<button
					onClick={getInCall()}
					type="button"
				>
					Entrar a llamada
				</button>
			)}
			{children}
		</div>
	);
}

export default Options;
