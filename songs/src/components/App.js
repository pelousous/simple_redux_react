import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from '../reducers';
import SongList from './SongList';
import SongDetail from './SongDetail';

const store = createStore(reducers);

const App = () => {
    return <Provider store={store}>
                <div className="ui container grid">
                    <div className="ui row">
                        <div className="eight wide column">
                            <SongList />
                        </div>
                        <div className="eight wide column">
                            <SongDetail />
                        </div>
                    </div>
                </div>
            </Provider>
}

export default App;

/*
The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.

Since any React component in a React Redux app can be connected, most applications will render a <Provider> at the top level, with the entire app’s component tree inside of it.

Normally, you can’t use a connected component unless it is nested inside of a <Provider>.
*/