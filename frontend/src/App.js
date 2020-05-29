import React from 'react'
import { Provider } from 'react-redux'

import Sidebar from './components/Sidebar/index'
import Video from './components/Video/index'

import store from './store'

export default class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Provider store={store}>
					<Video />
					<hr />
					<Sidebar />
				</Provider>
			</div>
		)
	}
}
