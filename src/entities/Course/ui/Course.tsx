import type { Course as CourseProps } from "@/shared/model"
import { Button, Card, Col, Row, Typography } from "antd"

const { Text } = Typography

interface CoursePropsWithHandlers extends CourseProps {
    onClick: () => void
}

const Course = ({ name, creator, teachers, students, onClick }: CoursePropsWithHandlers) => {
    return (
        <Card title={name} size="small" style={{ width: '100%' }} extra={
            <Button type="text" onClick={onClick}>Детали курса</Button>
        }>

            <Row>
                <Col>
                    <Text>
                        Создатель: {creator.user?.fullName}
                    </Text>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Text>
                        Преподаватели: {teachers.flatMap(teacher => teacher.user.fullName).join(', ')}
                    </Text>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Text>Количество учащихся: {students.length}</Text>
                </Col>
            </Row>
        </Card>
    )
}

export { Course }