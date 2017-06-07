/**
 * Created by villadsvalur on 05/06/2017.
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Logger from 'js-logger';
import configureStore from './configureReduxStore';
import Router from './router';
import { getExperiences } from './actions';

Logger.useDefaults();

if (!__DEV__) {
	Logger.setLevel(Logger.WARN);
}

const middleware = [thunk];
const store = configureStore(middleware);

store.dispatch(getExperiences());

class App extends Component {

	state = {store};
	
	render(){
		return (
			<Provider store={this.state.store}>
				<Router/>
			</Provider>
		);
	}

}

export default App;