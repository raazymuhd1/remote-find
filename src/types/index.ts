type Link = {
    id: number;
    title: string;
    url: string;
}

type Job = {
    id: number;
    companyName: string;
    companyPicture: string;
    role: string;
    requirements: string[];
    responsibilities: string[];
    description: string;
    detail: JobDetail;
    createdAt: Date;
    authorId: number;
}

interface JobDetail {
    id: number;
    location: string;
    position: string;
    type: string;
    salaryRange: string;
    jobId: string;
}

type User = {
    id: number;
    username: string;
    email: string;
    password: string;
    picture: string;
    jobs?: Job[];
}

type UserForm = Omit<User, "id" | "jobs" | "picture">

export type { 
    Link,
    Job,
    JobDetail,
    User,
    UserForm
}