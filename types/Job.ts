import type {Salary} from "~/types/Salary";

export interface Job {
    id: string
    userId: string
    title: string
    description: string
    tags: string[]
    created: number
    salary: Salary
}