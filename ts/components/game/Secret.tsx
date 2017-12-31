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
}

export default class Secret extends EntityInPlay<SecretProps> {
	
	constructor() {
		super('secret');
	}
	
	protected jsx() {
		let components = [];

		const divStyle = {
			"margin-left": (this.props.index * 100).toString()+"px"
		  };
		  
			components.push(<div key="hover" style={divStyle} className="secret-reveal mouse-over">
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
