import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import store from './src/settings/Store';
import { Provider } from 'react-redux';
import MainScreen from './src/apps/main/components/MainScreen';

export default function App() {
    return (
        <Provider store={store}>
            <MainScreen/>
        </Provider>
    );
}
