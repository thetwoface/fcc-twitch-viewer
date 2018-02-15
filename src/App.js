import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import StreamList from './StreamList';

class App extends Component {
	render() {
		return (
			<div className='app-wrapper'>
				<Header/>
				<main role='main'>
					<StreamList/>
				</main>
				<Footer/>
			</div>
		);
	}
}

export default App;
