import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/auth";
import { jobApi } from "./services/job";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [jobApi.reducerPath]: jobApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware).concat(jobApi.middleware)
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type {
    RootState,
    AppDispatch
}