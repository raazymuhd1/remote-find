import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/auth";
import { jobApi } from "./services/job";
import { userApi } from "./services/user"

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [jobApi.reducerPath]: jobApi.reducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware).concat(jobApi.middleware).concat(userApi.middleware)
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type {
    RootState,
    AppDispatch
}