import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route, hashHistory, IndexRoute } from 'react-router-dom';

import styles from './App.css';

class App extends Component
{
	render()
	{
		console.log(styles);
		//console.log(About);
		return (
		
			<div>
				<Link to={`/about/`}>
				link here
				</Link>
			</div>
		
		);
	}
}

export default App;