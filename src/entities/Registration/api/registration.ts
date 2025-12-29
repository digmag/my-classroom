import axios from "axios"
import type { RegistrationBody, Tokens } from "../model";
import { API_PATH } from "@/shared/constants";

const registration = async (body: RegistrationBody) => {
    const { data: response } = await axios.post<Tokens>(API_PATH.REGISTRATION, body)

    return response
}

export { registration }