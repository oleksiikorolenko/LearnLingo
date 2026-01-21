const FAVORITES_KEY = "favorite_teachers";

export const getFavorites = (): string[] => {
    const data = localStorage.getItem(FAVORITES_KEY);
    return data ? JSON.parse(data) : [];
};

export const addFavorite = (id: string): void => {
    const favorites = getFavorites();
    if (!favorites.includes(id)) {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites, id]));
    }
};

export const removeFavorite = (id: string): void => {
    const favorites = getFavorites().filter(favId => favId !== id);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

export const isFavorite = (id: string): boolean => {
    return getFavorites().includes(id);
};

