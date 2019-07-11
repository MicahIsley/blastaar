import React, { Component } from 'react';

class CreateCharacter extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	name: '',
    	attack: 1,
    	shield: 2,
    	intelligence: 1,
    	points: 3
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.name);
    this.props.createNewCharacter(this.state);
    event.preventDefault();
  }
  handleClick(event) {
  	var action = event.target.id;
  	if(this.state.points > 0){
	  	if(action === "attUp"){
			this.setState({
				attack: this.state.attack + 1,
				points: this.state.points - 1
			});
	  	}else if(action === "intUp"){
	  		this.setState({
				intelligence: this.state.intelligence + 1,
				points: this.state.points - 1
			});
	  	}else if(action === "shUp"){
	  		this.setState({
				shield: this.state.shield + 2,
				points: this.state.points -1
			});
	  	}else if(action === "attDown"){
	  		if(this.state.attack > 1){
	  			this.setState({
	  				attack: this.state.attack - 1,
					points: this.state.points + 1
	  			});
	  		}else{}
	  	}
	  	else if(action === "intDown"){
	  		if(this.state.intelligence > 1){
	  			this.setState({
	  				intelligence: this.state.intelligence - 1,
					points: this.state.points + 1
	  			});
	  		}
	  	}else if(action === "shDown"){
	  		if(this.state.shield > 2){
	  			this.setState({
	  				shield: this.state.shield - 2,
					points: this.state.points + 1
	  			});
	  		}
	  	}
	}else if(this.state.points === 0){
		if(action === "attDown"){
	  		if(this.state.attack > 1){
	  			this.setState({
	  				attack: this.state.attack - 1,
					points: this.state.points + 1
	  			});
	  		}else{}
	  	}
	  	else if(action === "intDown"){
	  		if(this.state.intelligence > 1){
	  			this.setState({
	  				intelligence: this.state.intelligence - 1,
					points: this.state.points + 1
	  			});
	  		}
	  	}else if(action === "shDown"){
	  		if(this.state.shield > 2){
	  			this.setState({
	  				shield: this.state.shield - 2,
					points: this.state.points + 1
	  			});
	  		}
	  	}
	}
 }

	render(){
		return (
			<div className="row">
				<div className="col-xs-12">
					<div className="row createTitle">Create Your Character</div>
					<div className="row">
						<div className="col-xs-offset-3 col-xs-6" id="createName">
							<div className="row">Name</div>
							<input type="text" maxLength="16" value={this.state.name} onChange={this.handleChange} />
						</div>
						<div className="col-xs-3">
							Remaining Points: {this.state.points}
						</div>
					</div>
					<div className="row createTitle">
						Attack
					</div>
					<div className="row createScale">
						<div className="col-xs-offset-4 col-xs-1 createMinus" id="attDown" onClick={this.handleClick}>-</div>
						<div className="col-xs-2">{this.state.attack}</div>
						<div className="col-xs-1 createPlus" id="attUp" onClick={this.handleClick}>+</div>
					</div>
					<div className="row createTitle">
						Intelligence
					</div>
					<div className="row createScale">
						<div className="col-xs-offset-4 col-xs-1 createMinus" id="intDown" onClick={this.handleClick}>-</div>
						<div className="col-xs-2">{this.state.intelligence}</div>
						<div className="col-xs-1 createPlus" id="intUp" onClick={this.handleClick}>+</div>
					</div>
					<div className="row createTitle">
						Shield
					</div>
					<div className="row createScale">
						<div className="col-xs-offset-4 col-xs-1 createMinus" id="shDown" onClick={this.handleClick}>-</div>
						<div className="col-xs-2">{this.state.shield}</div>
						<div className="col-xs-1 createPlus" id="shUp" onClick={this.handleClick}>+</div>
					</div>
					<div className="row">
						<input className="coolButton" type="submit" value="Submit" onClick={this.handleSubmit} />
					</div>
				</div>
			</div>
		)
	}
}

export default CreateCharacter;