import React from 'react';
import store from './src/settings/Store';
import { Provider } from 'react-redux';
import MainScreen from './src/apps/main/components/MainScreen';

if(__DEV__) {
    import("./src/settings/ReactotronConfig")
}

export default function App() {
    return (
        <Provider store={store}>
            <MainScreen/>
        </Provider>
    );
}
