import * as React from "react";
import EntityInPlay from "./EntityInPlay";
import {CardOracleProps, EntityInPlayProps} from "../../interfaces";
import Card from "./Card";
import SecretText from "./stats/SecretText";
import * as Immutable from "immutable";
import Entity from "../../Entity";

interface SecretProps extends EntityInPlayProps {
	text: string;
	title: string;
	index: number;
	isTop:boolean;
}

export default class Secret extends EntityInPlay<SecretProps> {
	
	constructor() {
		super('secret');
	}

	private getDivClassNames(){
		if(this.props.isTop){
			return "secret-reveal top mouse-over"
		} else {
			return "secret-reveal down mouse-over"
		}
	}

	protected jsx() {

		let components = [];

		//Not-so-elegant way to keep distance between secrets
		const divStyle = {
			"margin-left": (this.props.index * 100).toString()+"px"
		  };
		
		components.push(<div key="hover" style={divStyle} className={this.getDivClassNames()}>
			<Card
				entity={this.props.entity}
				assetDirectory={this.props.assetDirectory}
				cards={this.props.cards}
				isHidden={false}
				controller={this.props.controller}
				cardArtDirectory={this.props.cardArtDirectory}
				option={null}
			/></div>);
		return components
	}
}
