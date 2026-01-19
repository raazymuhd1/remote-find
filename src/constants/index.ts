import type { Link } from "../types"

/**
 * @dev navbar links
 */
const links: Link[] = [
    { id: 1, title: "Find Jobs", url: "/" },
    { id: 2, title: "Upload Jobs", url: "/upload-jobs" },
    { id: 3, title: "Community", url: "/community" },
]

// SIDEBAR DATA
const filter = {
    jobLocation: [
    { id: 1, title: "On Site" },
    { id: 2, title: "Remote" },
    { id: 3, title: "Hybrid" },
    ],
    jobTypes: [
    { id: 1, title: "Fulltime" },
    { id: 2, title: "Part time" },
    { id: 3, title: "Freelance" },
    { id: 4, title: "Contract" },
    ],
    salaryRange: [
    { id: 1, value: "$1k-$2k" },
    { id: 2, value: "$3k-$4k" },
    { id: 3, value: "$5k-$6k" },
    ],
    roles: [
        { id: 1, title: "Product Designer" },
        { id: 2, title: "UI/UX Designer" },
        { id: 3, title: "Web Designer" },
        { id: 4, title: "Frontend Developer" },
        { id: 5, title: "Fullstack Developer" },
    ]
}

export {
    links,
    filter
}