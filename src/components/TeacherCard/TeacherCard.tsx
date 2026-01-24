import type { Teacher } from "../../types/teacher.ts";
// import { toggleFavorite, isFavorite } from "../../utils/favorites.ts";
import { useAuth } from "../../auth/useAuth.ts";
import { useState } from "react";
import { addFavorite, removeFavorite, isFavorite } from "../../utils/favoritesStorage.ts";
import Modal from '../Modal/Modal.tsx';
import BookTrialForm from '../BookTrialForm/BookTrialForm.tsx';


interface Props {
    teacher: Teacher;
}

const TeacherCard = ({teacher}: Props) => {
    const [isExpanded, setIsExpanded] = useState(false);
const favorite = isFavorite(teacher.id);
    const {user} = useAuth();
    const [favoriteState, setFavoriteState] = useState<boolean>(favorite);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // const favorite = user
    // ? isFavorite(user.uid, teacher.id)
    // : false;

    const handleFavorite = () => {
        if(!user) {
            alert('This feature is available only for authorized users');
            return;
        }
if (favoriteState) {
  removeFavorite(teacher.id);
  setFavoriteState(false);
} else {
  addFavorite(teacher.id);
  setFavoriteState(true);
}

        // toggleFavorite(user.uid, teacher);
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
  {favoriteState ? '❤️' : '🤍'}
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
            <button onClick={() => setIsModalOpen(true)}>
  Book trial lesson
</button>
            {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                    <BookTrialForm />
                </Modal>
            )}
        </article>
    )
};

export default TeacherCard;


