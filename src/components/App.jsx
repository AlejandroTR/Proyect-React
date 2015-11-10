import React from 'react';
import Slider from './Slider.jsx';

export default React.createClass({
  getInitialState: function() {
    return {count: 0};
  },

  render: function() {
    return <Slider />;
  }
});
