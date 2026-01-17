import type { Teacher } from "../../types/teacher.ts";

interface Props {
    teacher: Teacher;
}

const TeacherCard = ({teacher}: Props) => {
    return (
        <article>
            <p>
                {teacher.name} {teacher.surname} 
            </p>
        </article>
    )
};

export default TeacherCard;