import { http, HttpResponse } from "msw";
import { API_PATH } from "../constants";

const MOCKS = {
    "page": [
        {
            "id": "course-1",
            "name": "Введение в программирование",
            "creator": {
                "user": {
                    "id": "user-1",
                    "fullName": "Иван Петров",
                    "email": "ivan@example.com"
                },
                "role": "ADMIN"
            },
            "teachers": [
                {
                    "user": {
                        "id": "user-1",
                        "fullName": "Иван Петров",
                        "email": "ivan@example.com"
                    },
                    "role": "ADMIN"
                },
                {
                    "user": {
                        "id": "user-2",
                        "fullName": "Анна Сидорова",
                        "email": "anna@example.com"
                    },
                    "role": "TEACHER"
                }
            ],
            "students": [
                {
                    "user": {
                        "id": "user-3",
                        "fullName": "Мария Иванова",
                        "email": "maria@example.com"
                    },
                    "role": "STUDENT"
                },
                {
                    "user": {
                        "id": "user-4",
                        "fullName": "Алексей Козлов",
                        "email": "alex@example.com"
                    },
                    "role": "STUDENT"
                },
                {
                    "user": {
                        "id": "user-5",
                        "fullName": "Елена Смирнова",
                        "email": "elena@example.com"
                    },
                    "role": "STUDENT"
                }
            ],
            "modifier": "PUBLIC",
            "icon": "https://example.com/icons/programming.png"
        },
        {
            "id": "course-2",
            "name": "Алгебра и математический анализ",
            "creator": {
                "user": {
                    "id": "user-6",
                    "fullName": "Сергей Васильев",
                    "email": "sergey@example.com"
                },
                "role": "ADMIN"
            },
            "teachers": [
                {
                    "user": {
                        "id": "user-6",
                        "fullName": "Сергей Васильев",
                        "email": "sergey@example.com"
                    },
                    "role": "ADMIN"
                }
            ],
            "students": [
                {
                    "user": {
                        "id": "user-7",
                        "fullName": "Дмитрий Попов",
                        "email": "dmitry@example.com"
                    },
                    "role": "STUDENT"
                },
                {
                    "user": {
                        "id": "user-8",
                        "fullName": "Ольга Новикова",
                        "email": "olga@example.com"
                    },
                    "role": "STUDENT"
                }
            ],
            "modifier": "PUBLIC"
        },
        {
            "id": "course-3",
            "name": "Корпоративное обучение",
            "creator": {
                "user": {
                    "id": "user-9",
                    "fullName": "Александр Крылов",
                    "email": "alexander@example.com"
                },
                "role": "ADMIN"
            },
            "teachers": [
                {
                    "user": {
                        "id": "user-9",
                        "fullName": "Александр Крылов",
                        "email": "alexander@example.com"
                    },
                    "role": "ADMIN"
                },
                {
                    "user": {
                        "id": "user-10",
                        "fullName": "Наталья Морозова",
                        "email": "natalia@example.com"
                    },
                    "role": "TEACHER"
                }
            ],
            "students": [
                {
                    "user": {
                        "id": "user-11",
                        "fullName": "Павел Волков",
                        "email": "pavel@example.com"
                    },
                    "role": "STUDENT"
                }
            ],
            "modifier": "PRIVATE",
            "icon": "https://example.com/icons/corporate.png"
        },
        {
            "id": "course-4",
            "name": "Английский для IT-специалистов",
            "creator": {
                "user": {
                    "id": "user-12",
                    "fullName": "Екатерина Белова",
                    "email": "ekaterina@example.com"
                },
                "role": "ADMIN"
            },
            "teachers": [
                {
                    "user": {
                        "id": "user-12",
                        "fullName": "Екатерина Белова",
                        "email": "ekaterina@example.com"
                    },
                    "role": "ADMIN"
                },
                {
                    "user": {
                        "id": "user-13",
                        "fullName": "Роберт Джонсон",
                        "email": "robert@example.com"
                    },
                    "role": "TEACHER"
                }
            ],
            "students": [],
            "modifier": "PUBLIC",
            "icon": "https://example.com/icons/english.png"
        },
        {
            "id": "course-5",
            "name": "Дизайн интерфейсов",
            "creator": {
                "user": {
                    "id": "user-14",
                    "fullName": "Татьяна Орлова",
                    "email": "tatiana@example.com"
                },
                "role": "ADMIN"
            },
            "teachers": [
                {
                    "user": {
                        "id": "user-14",
                        "fullName": "Татьяна Орлова",
                        "email": "tatiana@example.com"
                    },
                    "role": "ADMIN"
                },
                {
                    "user": {
                        "id": "user-15",
                        "fullName": "Максим Соколов",
                        "email": "maxim@example.com"
                    },
                    "role": "TEACHER"
                }
            ],
            "students": [
                {
                    "user": {
                        "id": "user-16",
                        "fullName": "Алина Кузнецова",
                        "email": "alina@example.com"
                    },
                    "role": "STUDENT"
                },
                {
                    "user": {
                        "id": "user-17",
                        "fullName": "Артем Павлов",
                        "email": "artem@example.com"
                    },
                    "role": "STUDENT"
                },
                {
                    "user": {
                        "id": "user-18",
                        "fullName": "Юлия Федорова",
                        "email": "yulia@example.com"
                    },
                    "role": "STUDENT"
                }
            ],
            "modifier": "PRIVATE",
            "icon": "https://example.com/icons/design.png"
        }
    ],
    "pagination": {
        "current": 1,
        "size": 5
    }
}

const courseHandler = http.get(API_PATH.COURSES, async resolver => {
    const page = new URL(resolver.request.url).searchParams.get("page") || '0'
    await Promise.all([new Promise((resolve) => {
        setTimeout(() => resolve([]), 3000)
    })])
    switch (page) {
        case "0":
            return HttpResponse.json({
                page: MOCKS.page,
                pagination: {
                    size: 20,
                    current: 0,
                }
            })
        case "1":
            return HttpResponse.json({
                page: MOCKS.page,
                pagination: {
                    size: 20,
                    current: 1,
                }
            })
        default:
            return HttpResponse.json({
                page: MOCKS.page,
                pagination: {
                    size: 20,
                    current: Number(page),
                }
            })
    }
})

export { courseHandler }