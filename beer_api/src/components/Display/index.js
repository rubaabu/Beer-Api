// React imports
import React from "react";

// Components Import
import DisplayBeer from "../DisplayBeer";

// Styles
import "./styles.scss";

const renderBeers = (beers, props) => {
  const result = [];
  const { handleFavorites, favorites } = props;

  beers.forEach(beer => {
    const newBeerObj = { ...beer };
    const isFavorite = favorites && favorites.has(newBeerObj.id);

    if (isFavorite) {
      newBeerObj.favorite = true;
    }

    result.push(
      <DisplayBeer beer={newBeerObj} handleFavorites={handleFavorites} key={newBeerObj.id} />
    );
  });

  // return all the beers objects inside the array
  return result;
};

function Display(props) {
    const { beers } = props;
    return <div className="beers">{renderBeers(beers, props)}</div>;
}

export default Display;
