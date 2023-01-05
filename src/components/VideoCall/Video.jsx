import React, { useContext, useState, useRef, useEffect } from 'react';

import { SocketContext } from './VideoCall';

function Video() {
	const { myVideo, userVideo, callEnded, callAccepted } = useContext(SocketContext);
	return (
		<>
			<div>
				<h1>My Video</h1>
				<video ref={myVideo} autoPlay />
			</div>
			<div>
				{!callEnded && callAccepted
					&& (
						<>
							<h1>User Video</h1>
							<video ref={userVideo} autoPlay />
						</>
					)}
			</div>
		</>
	);
}

export default Video;
