import React, { useContext } from "react";
import Card from "../ui/Card";
import styles from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";

const MeetupItem = (props) => {
  const favoriteContext = useContext(FavoritesContext);
  const itemsIsFavorite = favoriteContext.itemIsFavorite(props.id);

  const toggleFavoriteStatusHandler = () => {
    if (itemsIsFavorite) {
      favoriteContext.removeFavorite(props.id);
    } else {
      favoriteContext.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      });
    }
  };

  return (
    <Card>
      <li className={styles.item}>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavoriteStatusHandler}>{itemsIsFavorite ? "Remove from favorites" : "To favorites"}</button>
        </div>
      </li>
    </Card>
  );
};

export default MeetupItem;
