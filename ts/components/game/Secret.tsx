import * as React from "react";
import EntityInPlay from "./EntityInPlay";
import {CardOracleProps, EntityInPlayProps} from "../../interfaces";
import Card from "./Card";
import SecretText from "./stats/SecretText";
interface SecretProps extends EntityInPlayProps {
	text: string;
	title: string;
}

export default class Secret extends EntityInPlay<SecretProps> {
	
	constructor() {
		super('secret');
	}
	
	protected jsx() {
		let components = [
			<SecretText text={this.props.text} title={this.props.title} />
		];

	if (this.state.isHovering) {
		components.push(<div key="hover" className="secret-reveal mouse-over">
			<Card
				entity={this.props.entity}
				assetDirectory={this.props.assetDirectory}
				cards={this.props.cards}
				isHidden={false}
				controller={this.props.controller}
				cardArtDirectory={this.props.cardArtDirectory}
				option={null}
			/></div>);
		}
	return components
	}
}
