import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Recipe = ({
  title,
  calories,
  image,
  ingredients,
  url,
  recipe,
  SetFav,
  favorites,
  DeleteRecipe
}) => {

  const SetFavorite = () => {
    SetFav(recipe);
  };

  const RemoveFav=()=>{
    console.log("delete", calories);
    DeleteRecipe(calories)
  }

  return (
    <div className="card border border-secondary text-white col-12 col-md-3 mx-2 my-2 px-0">
      <img src={image} className="card-img" alt={title} />
      { !favorites ? <FontAwesomeIcon onClick={() => SetFavorite()} icon={faHeart} className="text-red fa-2x heartLike"/> : <FontAwesomeIcon  onClick={() => RemoveFav()} icon={faTrash} className="text-wh fa-2x heartLike"/>}
      
      <div className="card-img-overlay card-grey">
        <span className="h5 card-title mr-2">
          <a
            href={url}
            className="text-white linksTitle font-weight-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </span>
      </div>
    </div>
  );
};

export default Recipe;
