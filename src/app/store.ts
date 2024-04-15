import {configureStore, ThunkAction, Action, PayloadAction} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const REQUEST_MINUTE = 60000;
const REQUESTS_PER_MINUTE = 10;

const persistConfig = {
    key: "root",
    version: 1,
    whitelist: ["recentSlice"],
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const rateLimitingMiddleware = () => {
    let lastCalled = 0;
    let requestCount = 0;

    return (next: Function) => (action: PayloadAction<string>) => {
        if (action.type.endsWith('pending')) {
            const now = Date.now();

            if (now - lastCalled > REQUEST_MINUTE) {
                // If more than a minute has passed since the last request, reset the count
                lastCalled = now;
                requestCount = 1;
            } else {
                requestCount += 1;
            }
        }

        if (requestCount > REQUESTS_PER_MINUTE && !action.payload) {
            // If the request count exceeds 10, mark the action and proceed to the reducer
            const markedAction = { ...action, meta: { rateLimited: true } };
            return next(markedAction);
        }

        // If the request count is within the limit, proceed with the original action
        return next(action);
    };
};

// const rateLimitingMiddleware = () => (next: Function) => (action: PayloadAction<string>) => {
//     if (action.type === 'reddit/fetchData/pending') {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 const result = next(action);
//                 resolve(result);
//             }, REQUEST_MINUTE / REQUESTS_PER_MINUTE);
//         });
//     }
//     return next(action);
// };

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
        {
        serializableCheck: {
            ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }
    ).concat(rateLimitingMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
export const persistor = persistStore(store);