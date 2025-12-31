import { useInfiniteQuery, type InfiniteData } from "@tanstack/react-query";
import { getCourses } from "../api";
import { GET_COURSES_KEY } from "../lib";
import type { CoursePage } from "./types";

const useGetCourses = (page: number = 0) =>
    useInfiniteQuery<CoursePage, unknown, InfiniteData<CoursePage>>({
        queryFn: ({ pageParam = 0 }) => getCourses(pageParam as number),
        queryKey: [GET_COURSES_KEY],
        initialPageParam: page,
        getNextPageParam: (lastPage) => lastPage.pagination.current + 1
    })

export { useGetCourses }