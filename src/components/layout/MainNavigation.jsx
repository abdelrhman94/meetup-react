import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/new-meetup"}>New Meetup</Link>
          </li>
          <li>
            <Link to={"/favorites"}>
              Favorites
              <span className={styles.badge}>{favoritesCtx.totalFavorite}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
