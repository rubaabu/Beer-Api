// React imports
import React from "react";

// Components
import Display from "../../components/Display";

// Styles
import "./styles.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  handleInput = event => {
    const text = event.target.value;
    this.setState({
      input: text
    });
  };

  render() {
    const { beers, handleSearch, handleFavorites, favorites } = this.props;
    const { input } = this.state;

    return (
      <>
        <div className="search">
          <input
            type="text"
            value={input}
            onChange={this.handleInput}
            placeholder="Search for beer..."
          />
          <button type="button" onClick={() => handleSearch(input)}>
            Search
          </button>
        </div>
        <Display
          beers={beers}
          handleFavorites={handleFavorites}
          favorites={favorites}
        />
      </>
    );
  }
}

export default Home;
