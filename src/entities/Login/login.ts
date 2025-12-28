import { API_PATH } from "@/shared/constants"
import axios from "axios"
import type { Tokens, Login } from "./model";

const login = async (body: Login) => {
    const { data: response } = await axios.post<Tokens>(API_PATH.LOGIN, body)
    return response;
}

export { login }