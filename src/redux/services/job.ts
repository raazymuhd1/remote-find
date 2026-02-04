import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Job } from "../../types";

const baseUrl = `http://localhost:5000/api/job`

export const jobApi = createApi({
    reducerPath: "jobApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getAllJobs: builder.query<Job[], void>({
            query: () => `/get-all`,
            transformResponse: (response: { data: Job[] }) => {
                return response?.data
            },
            transformErrorResponse: (response) => {
                console.log(`error response ${response.data}, status ${response.status}`)
                return response.data
            }
        })
    })
})

export const { useGetAllJobsQuery } = jobApi