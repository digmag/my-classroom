import { http, HttpResponse } from "msw";
import { API_PATH } from "../constants";

const loginHandler = http.post(API_PATH.LOGIN, () => {
    return HttpResponse.json({
        accessToken: 'access-token',
        refreshToken: 'refresh-token'
    })
})

export { loginHandler }