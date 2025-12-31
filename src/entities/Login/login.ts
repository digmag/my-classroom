import { API_PATH } from "@/shared/constants"
import axios from "axios"
import type { Login } from "./model";
import type { Tokens } from "@/shared/model";

const login = async (body: Login) => {
    const { data: response } = await axios.post<Tokens>(API_PATH.LOGIN, body)
    return response;
}

export { login }