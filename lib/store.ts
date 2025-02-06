import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { cartSlice } from "./features/counter/cartSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Configuration de redux-persist
const persistConfig = {
  key: "root",
  storage,
};

// Combiner les reducers
const rootReducer = combineReducers({
  cart: cartSlice.reducer,
});

// Appliquer redux-persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configurer le store Redux
export const store = configureStore({
  reducer: persistedReducer, // Utilise persistedReducer directement
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Désactiver les erreurs de vérification de série
    }),
});

// Persistance du store
export const persistor = persistStore(store);

// Types pour Redux avec TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Hooks personnalisés pour Redux
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
