
import TeacherCard from "../components/TeacherCard/TeacherCard.tsx";


export interface Teacher {
  id: string;
  name: string;
  surname: string;
  languages: string[];
  levels: string[];
  rating: number;
  reviews: number;
  price_per_hour: number;
  lessons_done: number;
  avatar_url: string;
  lesson_info: string;
  conditions: string;
  experience: string;
}

interface TeachersProps {
    teachers: Teacher[];
    isLoading: boolean;
    onLoadMore: () => void;
}

const Teachers = ({ teachers, isLoading, onLoadMore }: TeachersProps) => {
   
    return (
    <section>
    <h2>Teachers</h2>

    <ul>
        {teachers.map(teacher => (
         <li key={teacher.id}>
            <TeacherCard teacher={teacher} />
         </li>   
        ))}
    </ul>

    {teachers.length > 0 && (
        <button onClick={onLoadMore} disabled={isLoading}>Load more</button>
    )}
    </section>
    );
};

export default Teachers;