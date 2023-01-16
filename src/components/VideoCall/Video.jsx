import React, { useContext, useState, useRef, useEffect } from 'react';

import { SocketContext } from './VideoCall';

function Video() {
	const { myVideo, userVideo, callEnded, callAccepted } = useContext(SocketContext);
	return (
		<>
			<div>
				<h1>My Video</h1>
				<video ref={myVideo} autoPlay><track kind="captions" /></video>
			</div>
			<div>
				<h1>User Video</h1>
				<video ref={userVideo} autoPlay><track kind="captions" /></video>
			</div>
		</>
	);
}

export default Video;
