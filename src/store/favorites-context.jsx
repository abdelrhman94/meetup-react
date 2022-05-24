import { useState, createContext } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorite: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const [userFavorites, setFavorites] = useState([]);

  const addFavorite = (favoriteMeetup) => {
    setFavorites((prevUserFavorite) => {
      return prevUserFavorite.concat(favoriteMeetup);
    });
  };
  const deleteFavorite = (meetupId) => {
    setFavorites((prevUserFavorite) => {
      return prevUserFavorite.filter((favorite) => favorite.id !== meetupId);
    });
  };
  const itemIsFavorite = (meetupId) => {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorite: userFavorites.length,
    addFavorite: addFavorite,
    removeFavorite: deleteFavorite,
    itemIsFavorite: itemIsFavorite,
  };

  return (
    <FavoritesContext.provider value={context}>
      {children}
    </FavoritesContext.provider>
  );
};

export default FavoritesContext;
