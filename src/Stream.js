import React from 'react';

const offlineImg = 'data:image/png;base64,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';

export default function Stream(props) {
	const details = props.details;
	console.log(details);
	if (details && details.hasOwnProperty('stream')) {
		const name = details.stream ? details.stream.display_name : details.display_name;
		const logo = details.stream ? details.stream.logo : offlineImg;
		const footerClassName = details.stream ? 'card-footer border-success bg-success text-light' : 'card-footer border-danger bg-danger text-light';

		return (
			<div className='card mb-4 box-shadow'>
				<img className='card-img-top' src={logo} alt='Stream Preview'/>
				<div className='card-body'>
					<h5 className='card-title'><a href={'https://www.twitch.tv/' + name}>{name}</a></h5>
					{
						details.stream && <p className='card-text'>{details.stream.status}</p>
					}
				</div>
				<div className={footerClassName}>
					{details.stream ? 'ONLINE' : 'OFFLINE'}
				</div>
			</div>
		)
	}
	else {
		return null;
	}
}
