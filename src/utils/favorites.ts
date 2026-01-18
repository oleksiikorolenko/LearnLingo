import type { Teacher } from "../types/teacher";

export const getFavorites = (userId: string): Teacher[] => {
    const data = localStorage.getItem(`favorites_${userId}`);
    return data ? JSON.parse(data) : [];
};

export const toggleFavorite = (
    userId: string,
    teacher: Teacher
): Teacher[] => {
    const favorites = getFavorites(userId);

    const exists = favorites.some(item => item.id === teacher.id);

    const updated = exists
    ? favorites.filter(item => item.id !== teacher.id)
    : [...favorites, teacher];

    localStorage.setItem(`favorites_${userId}`, JSON.stringify(updated));

    return updated
}

export const isFavorite = (userId: string, teacherId: string): boolean => {
    const favorites = getFavorites(userId);
    return favorites.some(item => item.id === teacherId)
};