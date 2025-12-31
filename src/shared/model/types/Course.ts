import type { UserWithRole } from "./User"

enum MODIFIER {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}

interface Course {
    id: string
    name: string
    creator: UserWithRole
    teachers: UserWithRole[]
    students: UserWithRole[]
    modifier: MODIFIER
    icon?: string
}

export { MODIFIER }
export type { Course }
