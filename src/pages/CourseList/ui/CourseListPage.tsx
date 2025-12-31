import { Course, useGetCourses } from "@/entities/Course"
import { PATHS } from "@/shared/constants";
import { Button, Flex } from "antd"
import { useNavigate } from "react-router-dom";

const CourseListPage = () => {
    const { data, fetchNextPage, isFetchingNextPage } = useGetCourses();
    const navigate = useNavigate();
    return (
        <Flex vertical gap="large" style={{ padding: '1vw', maxHeight: '100%', width: '100%' }} align="center">
            {data?.pages.flatMap(page => page.page).map(course => (
                <Course
                    key={course.id}
                    onClick={() => navigate(`${PATHS.COURSE}/${course.id}`)}
                    {...course}
                />
            ))}
            <Flex style={{ paddingBottom: '1vw' }}>
                <Button onClick={() => fetchNextPage()} loading={isFetchingNextPage} type="primary" size="large">
                    Больше
                </Button>
            </Flex>
        </Flex>
    )
}

export default CourseListPage