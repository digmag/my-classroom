interface RegistrationBody {
    login: string,
    password: string,
    email: string,
    fullName: string
}

interface Tokens {
    accessToken: string,
    refreshToken: string
}

export type { RegistrationBody, Tokens }