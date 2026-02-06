import type { Link } from "../types"

/**
 * @dev navbar links
 */
const links: Link[] = [
    { id: 1, title: "Find Jobs", url: "/" },
    { id: 2, title: "Post Jobs", url: "/post-jobs" },
    { id: 3, title: "Community", url: "/community" },
]

// SIDEBAR DATA
const jobFilter = {
    jobLocation: [
    { id: 1, title: "On Site", isActive: true },
    { id: 2, title: "Remote", isActive: false },
    { id: 3, title: "Hybrid", isActive: false },
    ],
    jobTypes: [
    { id: 1, title: "Fulltime", isActive: true },
    { id: 2, title: "Part time", isActive: false },
    { id: 3, title: "Freelance", isActive: false },
    { id: 4, title: "Contract", isActive: false },
    ],
    salaryRange: [
    { id: 1, title: "$1k-$2k", isActive: true },
    { id: 2, title: "$3k-$4k", isActive: false },
    { id: 3, title: "$5k-$6k", isActive: false },
    { id: 4, title: "Custom", isActive: false },
    ],
    roles: [
        { id: 1, title: "Product Designer", isActive: true },
        { id: 2, title: "UI/UX Designer", isActive: false },
        { id: 3, title: "Web Designer", isActive: false },
        { id: 4, title: "Frontend Developer", isActive: false },
        { id: 5, title: "Fullstack Developer", isActive: false },
    ]
}

const createJobOptions = {
    jobLocation: [
    { id: 1, value: "On Site"},
    { id: 2, value: "Remote" },
    { id: 3, value: "Hybrid" },
    ],
    jobTypes: [
    { id: 1, value: "Fulltime"},
    { id: 2, value: "Part time" },
    { id: 3, value: "Freelance" },
    { id: 4, value: "Contract" },
    ]
}

export {
    links,
    jobFilter,
    createJobOptions
}