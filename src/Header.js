import React from 'react';

export default function Header(props) {
	return (
		<header>
			<nav className="navbar navbar-dark bg-dark box-shadow">
				<div className="container d-flex justify-content-between">
					<a className="navbar-brand" href="/">FCC Twitch Viewer</a>
				</div>
			</nav>
		</header>
	);
}
