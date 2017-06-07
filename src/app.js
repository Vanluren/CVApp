/**
 * Created by villadsvalur on 05/06/2017.
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from './configureStore';
import Router from './router';

const middleware = [thunk];
const store = configureStore(middleware);

class App extends Component {

	state = {store,};
	
	render(){
		return (
			<Provider store={this.state.store}>
				<Router/>
			</Provider>
		);
	}

}

export default App;