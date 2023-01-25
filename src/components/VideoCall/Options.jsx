import React, { useContext, useState } from 'react';
import { SocketContext } from './VideoCall';

function Options({ children }) {
	const { me, callAccepted, name, setName, leaveCall, callUser, callEnded } =
      useContext(SocketContext);

	const [idToCall, setIdToCall] = useState('');

	const getInCall = () => {
		callUser(idToCall);
	};

	return (
		<div>
			<input onChange={(e) => setIdToCall(e.target.value)} type="text" />
			{callAccepted && !callEnded ? (
				<button onClick={leaveCall} type="button">Salir</button>
			) : (
				<button
					onClick={getInCall}
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
