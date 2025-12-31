import { API_PATH, STORAGE_KEYS } from "@/shared/constants"
import { storageUtils } from "@/shared/lib"
import type { Tokens } from "@/shared/model"
import axios from "axios"
import type { CoursePage } from "../model/types"

const size = 20;

const getCourses = async (page: number = 0) => {
    const token = storageUtils.getItem<Tokens>(STORAGE_KEYS.TOKENS).accessToken

    const headers = {
        Authorization: `Bearer ${token}`
    }

    const { data: response } = await axios.get<CoursePage>(
        API_PATH.COURSES,
        { headers, params: { page, size } }
    )

    return response
}

export { getCourses }