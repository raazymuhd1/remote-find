import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "../../types";

const baseUrl = `http://localhost:5000/api/`

const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        signin:  builder.mutation<User, string>({
            query: () => ``
        })
    })
})