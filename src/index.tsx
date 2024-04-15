import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {Loading} from "./components/generic/loading/loading";

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    // <React.StrictMode>
        <Provider store={store}>
            <PersistGate
                loading={<Loading />}
                persistor={persistor}
            >
                <App/>
            </PersistGate>
        </Provider>
    // </React.StrictMode>
);

reportWebVitals();
