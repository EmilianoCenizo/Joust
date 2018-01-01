import * as React from "react";
import EntityInPlay from "./EntityInPlay";
import {CardOracleProps, EntityInPlayProps} from "../../interfaces";
import Card from "./Card";
import SecretText from "./stats/SecretText";
import * as Immutable from "immutable";
import Entity from "../../Entity";

interface QuestProps extends EntityInPlayProps {
	text: string;
	title: string;
	isTop:boolean;
	
}
export default class Quest extends EntityInPlay<QuestProps> {
	
	constructor() {
		super('quest');
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
		
		components.push(<div key="hover" className={this.getDivClassNames()}>
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
