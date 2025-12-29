import { http, HttpResponse } from "msw";
import { API_PATH } from "../constants";

const registrationHandler = http.post(API_PATH.REGISTRATION, () => {
    return HttpResponse.json({
        accessToken: 'access-token',
        refreshToken: 'refresh-token'
    })
})

export { registrationHandler }