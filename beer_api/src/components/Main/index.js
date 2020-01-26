// React imports
import React from "react";

// General imports
import axios from "axios";
import { Switch, Route } from "react-router-dom";

// Configs
import { BASE_URL } from "../../configs/constants";

// Pages
import Home from "../../pages/Home";
import Favorites from "../../pages/Favorites";

// Styles
import "./styles.scss";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      favorites: new Map()
    };
  }

  componentDidMount = () => {
    this.handleSearch();
  };

  handleSearch = async (text) => {
    const params = text && {
      params: {
        beer_name: text
      }};

    const res = await axios.get(BASE_URL, params);
    this.setState({ beers: res.data });
  };

  handleFavorites = (type, beer) => {
    const { favorites } = this.state;

    if (type) {
      const favoriteBeer = { ...beer };

      favoriteBeer.favorite = true;

      favorites.set(beer.id, favoriteBeer);
      this.setState({ favorites });
    } else {
      favorites.delete(beer.id);

      this.setState({ favorites });
    }
  };

  render() {
    const { beers, favorites } = this.state;
    return (
      <main>
        <>
          <Switch>
            <Route exact path="/">
              <Home
                beers={beers}
                favorites={favorites}
                handleFavorites={this.handleFavorites}
                handleSearch={this.handleSearch}
              />
            </Route>
            <Route path="/favorites">
              <Favorites
                favorites={favorites}
                handleFavorites={this.handleFavorites}
              />
            </Route>
          </Switch>
        </>
      </main>
    );
  }
}

export default Main;
