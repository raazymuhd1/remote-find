import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "../../types";

const baseUrl = `http://localhost:5000/api/user`

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getUser: builder.query<User, { userId: number, userToken: string }>({
            query: (userData) => ({
                url: `/get-user/${userData?.userId}`,
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${userData?.userToken}`
                }
            }),
            transformResponse: (response: { data: User }) => {
                return response?.data
            },
            transformErrorResponse: (response) => {
                console.log(`error response ${response.data}, status ${response.status}`)
                return response.data
            }
        })
    })
})

export const { useGetUserQuery } = userApi