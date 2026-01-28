import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "../../types";

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
        signin:  builder.mutation<User, Omit<UserAuthData, "username">>({
            query: (userData) => ({
                url: "/signin",
                method: "POST",
                body: userData
            })
        }),
        signup: builder.mutation<User, UserAuthData>({
            query: (userData) => ({
                url: "/signup",
                method: "POST",
                body: userData
            }),
        })
    })
})


export const { useSigninMutation, useSignupMutation } = authApi