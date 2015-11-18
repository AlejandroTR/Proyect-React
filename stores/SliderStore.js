/*
 * Module dependencies
 */

import Reflux from 'reflux';
import $ from 'jquery';
import ImageActions from '../actions/ImageActions';

let sliderData = [
  { id: 1, img: './img/spectre.jpg', title: 'Spectre', description: 'Acción' },
  { id: 2, img: './img/sicario.jpg', title: 'Sicario', description: 'Acción' },
  { id: 3, img: './img/marte.jpg', title: 'Marte', description: 'Ciencia Ficción' }
];

var ImageStore = Reflux.createStore({
    datas: [],

    init: function() {
        this.fetchList();
    },

    fetchList: function() {
      this.setState({
        datas: sliderData
      });
      }.bind(this);
    }
});

export default ImageStore;
