/*
 * Module dependencies
 */

import React from 'react';
import Reflux from 'reflux';
import ImageStore from '../stores/imagestore';

var ImageGrid = React.createClass({
  mixins: [Reflux.connect(ImageStore, 'imagestore')],

  interval: function() {
    $('.carousel').carousel({
      interval: 6000
    })
  },

  render: function() {
      if (this.state.imagestore) {
        return <div className = "container">

                <section id = "slider" className = "carousel slide">

                  <ol className = "carousel-indicators">
                    <li data-target = "#slider" data-slide-to = "0" className = "active"></li>
                    <li data-target = "#slider" data-slide-to = "1"></li>
                    <li data-target = "#slider" data-slide-to = "2"></li>
                  </ol>
                  
                  <div className = "carousel-inner">
                    <div className = "item active">
                      <img src = "./img/spectre.jpg" className = "adaptar"></img>
                      <h3>Spectre</h3>
                    </div>

                    <div className = "item">
                      <img src = "./img/sicario.jpg" className = "adaptar"></img>
                      <h3>Sicario</h3>
                    </div>
                    
                    <div className = "item">
                      <img src = "./img/marte.jpg" className = "adaptar"></img>
                      <h3>Marte</h3>
                    </div>
                  </div>

                  <a href = "#slider" className = "left caroulser-control" data-slide = "prev">
                    <span className = "glyphicon glyphicon-chevron-left"></span>
                  </a>

                  <a href = "#slider" className = "right caroulser-control" data-slide = "next">
                    <span className = "glyphicon glyphicon-chevron-right"></span>
                  </a>

                </section>

              </div>
      }
      else {
          return (<p>No hay imágenes</p>);
      }
  }
});

module.exports = ImageGrid;