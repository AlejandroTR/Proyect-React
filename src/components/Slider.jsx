import React from 'react';

let sliderListData = [
  { id: 1, src: 'tiger', description: 'Vee' },
  { id: 2, src: 'lion', description: 'Simba' },
  { id: 3, src: 'dog', description: 'Buck' },
  { id: 4, src: 'sealion', description: 'Seel' }
];

export default React.createClass({
  getInitialState: function() {
    return {
      slider: []
    };
  },
/*
  componentDidMount: function() {
    this._fetchRemoteData();
  },

  handleCancelEdit: function(e) {
    this.setState({editing: null});
  },

  handleResetClick: function(e) {
    this.setState({
      animals: []
    });
  },

  handleFetchClick: function(e) {
    this._fetchRemoteData();
  },

  _fetchRemoteData: function() {
    setTimeout(function() {
      this.setState({
        animals: animalsListData
      });
    }.bind(this), 2000);
  },

  handleRemoveAnimal: function(id, e){
    if (this.state.editing !== null){return;}
    let newListAnimals = this.state.animals.filter( animal => animal.id !== id );
    this.setState({ animals: newListAnimals });
  },

  prueba: function(id, e){
    //this.setState({ editing: id});
    let newListAnimals = [];
    this.state.animals.map( a => {
      if (a.id == id){a.name = 'Pepe';}
      newListAnimals.push({ id : a.id, animal: a.animal, name: a.name });
    });
    this.setState({animals: newListAnimals, editing: null});

  },

  handleEditAnimal: function(id, e){
    if (this.state.editing !== null){return;}
    this.setState({editing: id});
  },

  handleModifyAnimal: function(animal, name) {
    let editing = this.state.editing;
    let newListAnimals = this.state.animals.map( a => {
    return editing !== a.id ? a : {id: a.id, animal: animal, name: name};});
    this.setState({animals: newListAnimals, editing: null});
  },

  addAnimal: function(animal, name) {
    let animals = this.state.animals;
    let id = Math.random().toString(36).slice(2);
    animals.push({
      id: id,
      animal: animal,
      name: name
    });
    this.setState({
      animals: animals
    });
  },*/

  _fetchRemoteData: function() {

      this.setState({
        slider: sliderListData
      });

  },

  render: function() {

    this._fetchRemoteData();
    return (
      <div className = 'container content-bg'>
      	<section>
        	<div className = 'container' id='owlSlider'>
        		<div className = 'row slider'>
              {
            		this.state.slider.map( (slider, index)  => {
                  return(
                  <div>
                    <div className = 'col-lg-12'>
                      <div className = 'pic-with-overlay' onClick = '' >
                        <img className = 'img-responsive' src = '' alt = {slider.src} />
                        <div className = 'bg'>&nbsp;</div>
                        {slider.description}
                      </div>
                    </div>
                  </div>
                  )
    				    })
              }
				    </div>
    			</div>
    		</section>
    	</div>
    );
        		
  }

});
