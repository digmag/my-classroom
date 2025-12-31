import type { Course } from "@/shared/model";

interface CoursePage {
    page: Array<Course>
    pagination: {
        current: number,
        size: number,
    }
}

export type { CoursePage }