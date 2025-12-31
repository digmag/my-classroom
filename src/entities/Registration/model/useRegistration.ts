import { useMutation } from "@tanstack/react-query";
import type { RegistrationBody } from "./types";
import { registration } from "../api";
import type { Tokens } from "@/shared/model";

const useRegistration = () =>
    useMutation<Tokens, unknown, RegistrationBody>({
        mutationFn: (body) => registration(body)
    })

export { useRegistration }