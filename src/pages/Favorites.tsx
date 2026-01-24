import { useState } from "react";
import { getFavorites } from "../utils/favoritesStorage.ts";
import TeacherCard from "../components/TeacherCard/TeacherCard.tsx";
import type { Teacher } from "../types/teacher.ts";


interface Props {
    teachers: Teacher[];
}

const Favorites = ({ teachers }: Props) => {
    const [favoriteIds] = useState<string[]>(() => getFavorites());

    

    const favoriteTeachers = teachers.filter(t => favoriteIds.includes(t.id));

    return (
        <section>
            <h2>Favorites</h2>

            {favoriteTeachers.length === 0 && (
                <p>No favorite teachers found.</p>
            )}

            {favoriteTeachers.map(teacher => (
                <TeacherCard 
                key={teacher.id} 
                teacher={teacher}
              />
            ))}
        </section>    )
};

export default Favorites;