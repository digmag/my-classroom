import axios from "axios"
import type { RegistrationBody } from "../model";
import { API_PATH } from "@/shared/constants";
import type { Tokens } from "@/shared/model";

const registration = async (body: RegistrationBody) => {
    const { data: response } = await axios.post<Tokens>(API_PATH.REGISTRATION, body)

    return response
}

export { registration }