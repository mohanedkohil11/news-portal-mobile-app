import React from 'react';
import store from './redux/store';
import Navigator from './navigation';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <Navigator />
            </Provider>
        </SafeAreaProvider>

    );
}
