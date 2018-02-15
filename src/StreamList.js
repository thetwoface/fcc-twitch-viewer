import React, {Component} from 'react';
import Stream from './Stream';

export default class StreamList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			streams: [
				{id: 'freecodecamp', data: null},
				{id: 'ESL_SC2', data: null}
			]
		};
	}

	render() {
		const streamListItems = this.state.streams.map((stream) => {
			return <Stream data={stream} key={stream.id}/>;
		});

		return (
			<div className='py-5 bg-light'>
				<div className='container'>
					{streamListItems}
				</div>
			</div>
		);
	}

	componentDidMount() {

	}
}
