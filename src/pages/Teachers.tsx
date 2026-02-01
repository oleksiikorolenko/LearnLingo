

import TeacherCard from "../components/TeacherCard/TeacherCard.tsx";
import { useEffect, useState } from "react";


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
const savedFilters = localStorage.getItem("teacherFilters");

const initialFilters = savedFilters
? JSON.parse(savedFilters)
: {
     selectedLanguage: "All",
      selectedLevel: "All",
      selectedPrice: "All",
};

    const [selectedLanguage, setSelectedLanguage] = useState<string>(initialFilters.selectedLanguage);
    const [selectedLevel, setSelectedLevel] = useState<string>(initialFilters.selectedLevel);
    const [selectedPrice, setSelectedPrice] = useState<string>(initialFilters.selectedPrice);

    useEffect(() => {
        const filters = {
            selectedLanguage,
            selectedLevel,
            selectedPrice
        };

        localStorage.setItem("teacherFilters", JSON.stringify(filters))
    }, [selectedLanguage, selectedLevel, selectedPrice]);

   

    const filteredTeachers = teachers.filter(teacher => {
        const matchesLanguage = selectedLanguage === "All" || teacher.languages.includes(selectedLanguage);

        const matchesLevel = selectedLevel === "All" || teacher.levels.includes(selectedLevel);

        const matchesPrice = selectedPrice === "All" || teacher.price_per_hour <= Number(selectedPrice);

        return matchesLanguage && matchesLevel && matchesPrice;
    })
   
    return (
    <section>
    <h2>Teachers</h2>
    <div>
  <select value={selectedLanguage} onChange={e => setSelectedLanguage(e.target.value)}>
    <option value="all">All languages</option>
    <option value="English">English</option>
    <option value="German">German</option>
    <option value="French">French</option>
  </select>

  <select value={selectedLevel} onChange={e => setSelectedLevel(e.target.value)}>
    <option value="All">All levels</option>
    <option value="A1 Beginner">A1 Beginner</option>
    <option value="A2 Elementary">A2 Elementary</option>
    <option value="B1 Intermediate">B1 Intermediate</option>
    <option value="B2 Upper-Intermediate">B2 Upper-Intermediate</option>
    <option value="C1 Advanced">C1 Advanced</option>
    <option value="C2 Proficient">C2 Proficient</option>
  </select>

  <select value={selectedPrice} onChange={e => setSelectedPrice(e.target.value)}>
    <option value="all">Any price</option>
    <option value="20">Up to 20$</option>
    <option value="30">Up to 30$</option>
    <option value="40">Up to 40$</option>
  </select>
</div>

    <ul>
        {filteredTeachers.map(teacher => (
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