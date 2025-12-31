import { useMutation } from "@tanstack/react-query";
import { login } from "../login";
import type { Login } from "./types";
import type { Tokens } from "@/shared/model";

const useLogin = () =>
    useMutation<Tokens, unknown, Login>({
        mutationFn: (body) => login(body),
    })

export { useLogin }