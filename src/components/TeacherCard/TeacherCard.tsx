import type { Teacher } from "../../types/teacher.ts";
import { toggleFavorite, isFavorite } from "../../utils/favorites.ts";
import { useAuth } from "../../auth/useAuth.ts";
import { useState } from "react";


interface Props {
    teacher: Teacher;
}

const TeacherCard = ({teacher}: Props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const {user} = useAuth();

    const favorite = user
    ? isFavorite(user.uid, teacher.id)
    : false;

    const handleFavorite = () => {
        if(!user) {
            alert('This feature is available only for authorized users');
            return;
        }

        toggleFavorite(user.uid, teacher);
    }

    const {
        name,
        surname,
        languages,
        rating,
        price_per_hour,
        avatar_url,
        lesson_info,
        experience,
    } = teacher;


    return (
        <article>
            <button onClick={handleFavorite}>
  {favorite ? '❤️' : '🤍'}
</button>
          <img src={avatar_url} alt={`${name} ${surname}`} width={96} height={96} />

            <h3>{name} {surname}</h3>

            <p>
                <strong>Languages:</strong> {languages.join(", ")}
            </p>

            <p>
                <strong>Rating:</strong> {rating}
            </p>

            <p>
                <strong>Price:</strong>{price_per_hour}$/hour
            </p>

            <button onClick={() => setIsExpanded(prev => !prev)}>
                {isExpanded ? "Show less" : "Read more"}
            </button>

            {isExpanded && (
                <>
                    <p>{lesson_info}</p>
                    <p><strong>Experience:</strong> {experience}</p>
                </>
            )}
        </article>
    )
};

export default TeacherCard;


