import { configureStore } from "@reduxjs/toolkit";
import {
	persistStore,
	persistReducer,
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducers from "./slices";

const persistConfig = {
	key: "raz",
	storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (defaultMiddleware) => {
		return defaultMiddleware({
			serializableCheck: {
				ignoreActions: [PERSIST, FLUSH, PAUSE, PURGE, REGISTER, REHYDRATE],
			},
		});
	},
});

export const persistor = persistStore(store);
export default store;
