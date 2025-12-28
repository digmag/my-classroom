import { useMutation } from "@tanstack/react-query";
import { login } from "../login";
import type { Tokens, Login } from "./types";

const useLogin = () =>
    useMutation<Tokens, unknown, Login>({
        mutationFn: (body) => login(body),
    })

export { useLogin }