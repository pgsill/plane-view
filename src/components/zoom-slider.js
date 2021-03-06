import React, { Component } from 'react';

export default class SettingsBox extends Component {
	constructor(props) {
	  super(props);
	  this.state = {value: 50};
	  this.handleInput = this.handleInput.bind(this);
	  this.handleChange = this.handleChange.bind(this);
	}

	handleInput(e){
		this.setState({value: e.target.value});
		this.props.onZoom(e.target.value / 100 + .2);
	}

	handleChange(e){
		this.props.onPlaneCheck(e.target.name, e.target.checked);
	}

	handleView(e){
		let view = e.target.id;
		this.setState({view: view});

		console.log("CHANGED TO VIEW #" + view);

		this.props.onChangeView(view);
	}

	checkedTest(e){
		console.log("e.target.value");
		return false
	}

	render() {
		return (
		<div className="settings-box">
			<div className="settings-zoom">
				<b>Zoom:</b>
				<br/>
				<input type="range" onInput={this.handleInput} className="slider"/>
				<br/>
			</div>
			<div className="settings-view">
				<button className="btn" id="0" onClick={this.handleView.bind(this)}>Top</button> <br/>
				<button className="btn" id="1" onClick={this.handleView.bind(this)}>Side</button> <br/>				
				<button className="btn" id="2" onClick={this.handleView.bind(this)}>Front</button> <br/>
			</div>
			<div className="settings-showhide">
				<b>Show/Hide Planes</b>
				<br/>
				<input type="checkbox" name="sr71" defaultChecked="checked" onChange={this.handleChange.bind(this)} />SR-71
				<input type="checkbox" name="xb70" defaultChecked="checked" onChange={this.handleChange.bind(this)} />XB-70
				<input type="checkbox" name="a380" onChange={this.handleChange.bind(this)} />A380-800
				<br/>
				<input type="checkbox" name="f4p" onChange={this.handleChange.bind(this)} />F-4 Phantom II
				<input type="checkbox" name="f111"  onChange={this.handleChange.bind(this)} />F-111 Aardvark
				<input type="checkbox" name="an72"  onChange={this.handleChange.bind(this)} />An-72
				<br/>
				<input type="checkbox" name="c172"  onChange={this.handleChange.bind(this)} />Cessna 172
				<input type="checkbox" name="rafale"  onChange={this.handleChange.bind(this)} />Dassault Rafale
				<input type="checkbox" name="su34"  onChange={this.handleChange.bind(this)} />Su-34
			</div>
		</div>
		);
	}
}