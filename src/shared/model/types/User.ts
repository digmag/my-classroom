interface User {
    fullName: string
    login: string
}

enum ROLE {
    STUDENT = 'STUDENT',
    TEACHER = 'TEACHER',
    ADMIN = 'ADMIN'
}

interface UserWithRole {
    user: User
    role: ROLE
}

export { ROLE }
export type { User, UserWithRole }
