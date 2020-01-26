// React Imports
import React from "react";

// Components
import Display from "../../components/Display";

// Styles
import "./styles.scss";

function Favorites(props) {
  const { favorites: beers, handleFavorites } = props;
  return (
    <>
      { beers.size > 0 ? (
        <Display beers={beers} handleFavorites={handleFavorites} />
      ) : (
        <div style={{padding: "20px"}}>No beers here... 💩</div>
      )}
    </>
  );
}

export default Favorites;
