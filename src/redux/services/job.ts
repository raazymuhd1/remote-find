import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseUrl = `http://localhost:5000/api/job`

export const jobApi = createApi({
    reducerPath: "jobApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getAllJobs: builder.query({
            query: () => `/all`,
        })
    })
})