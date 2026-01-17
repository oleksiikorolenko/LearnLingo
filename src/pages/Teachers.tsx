import { useEffect, useState } from "react";
import { getTeachers } from "../services/teachers.ts";
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

const TEACHERS_LIMIT = 4;

const Teachers = () => {
    const[teachers, setTeachers] = useState<Teacher[]>([]);
    const[lastKey, setLastKey] = useState<string | null>(null);
    const[isLoading, setIsLoading] = useState(false);
    
    
 const loadTeachers = async () => {
    setIsLoading(true);


const data: Teacher[] = await getTeachers(TEACHERS_LIMIT, lastKey ?? undefined);

setTeachers(prev => [...prev, ...data]);

if(data.length > 0) {
    setLastKey(data[data.length - 1].id);
}

setIsLoading(false);
};

   useEffect(() => {
  loadTeachers();
   // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

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
        <button onClick={loadTeachers} disabled={isLoading}>Load more</button>
    )}
    </section>
    );
};

export default Teachers;