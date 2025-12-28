interface Login {
    login: string,
    password: string
}

interface Tokens {
    accessToken: string,
    refreshToken: string
}

export type { Login, Tokens }