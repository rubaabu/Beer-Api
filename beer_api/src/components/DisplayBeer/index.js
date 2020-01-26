// React imports
import React from "react";

// Icons
import { TiStarOutline, TiStarFullOutline } from "react-icons/ti";

// Styles
import "./styles.scss";

class DisplayBeer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  componentDidMount() {
    const { favorite } = this.props.beer;
    if (favorite) {
      this.setState({
        active: true
      });
    }
  }

  handleStar = beer => {
    const { handleFavorites } = this.props;
    const { active } = this.state;

    const type = !active;

    handleFavorites(type, beer);

    this.setState({
      active: !active
    });
  };

  shorten = (str, maxLen, separator = " ") => {
    if (str.length <= maxLen) return str;
    return `${str.substr(0, str.lastIndexOf(separator, maxLen))}...`;
  };

  render() {
    const { beer } = this.props;
    const { id, name, image_url, description } = beer;
    const { active } = this.state;

    return (
      <div className="beer" key={id}>
        <button type="button" onClick={() => this.handleStar(beer)}>
          {active ? (
            <TiStarFullOutline size="2em" color="#07D0B2" />
          ) : (
            <TiStarOutline size="2em" color="#07D0B2" />
          )}
        </button>

        <div className="content">
          <div className="image">
            <img alt={name} src={image_url} />
          </div>
          <div className="description">
            <div className="title">{name}</div>
            <p>{this.shorten(description, 120)}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayBeer;
