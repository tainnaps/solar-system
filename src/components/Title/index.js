import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2 className="title">{headline}</h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
