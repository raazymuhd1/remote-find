import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User, AuthResponse } from "../../types";

interface UserAuthData {
    username: string;
    email: string;
    password: string;
}

const baseUrl = `http://localhost:5000/api/auth`

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        signin:  builder.mutation<AuthResponse, Omit<UserAuthData, "username">>({
            query: (userData) => ({
                url: "/signin",
                method: "POST",
                body: userData
            }),
            transformErrorResponse: (response) => {
                console.log(`error response ${response.data}, status ${response.status}`)
                return response.data
            }
        }),
        signup: builder.mutation<AuthResponse, UserAuthData>({
            query: (userData) => ({
                url: "/signup",
                method: "POST",
                body: userData
            }),
        })
    })
})


export const { useSigninMutation, useSignupMutation } = authApi