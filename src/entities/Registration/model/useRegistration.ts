import { useMutation } from "@tanstack/react-query";
import type { Tokens, RegistrationBody } from "./types";
import { registration } from "../api";

const useRegistration = () =>
    useMutation<Tokens, unknown, RegistrationBody>({
        mutationFn: (body) => registration(body)
    })

export { useRegistration }