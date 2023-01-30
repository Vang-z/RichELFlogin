import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {loginSlice} from "./login/slice";
import {securitySlice} from "./security/slice";
import {validationSlice} from "./validation/slice";
import {progressSlice} from "./progress/slice";


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['login'],
};

const rootReducer = combineReducers({
    login: loginSlice.reducer,
    security: securitySlice.reducer,
    validation: validationSlice.reducer,
    progress: progressSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware => [
        ...getDefaultMiddleware({serializableCheck: false})
    ]),
    devTools: true
})

export const persistedStore = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;