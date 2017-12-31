import * as React from "react";
import * as Immutable from "immutable";
import Entity from "../../../Entity";
import EntityInPlay from "./../EntityInPlay";
import {CardOracleProps, EntityInPlayProps} from "../../../interfaces";
import Secret from "./../Secret";

interface SecretTextProps extends EntityInPlayProps {
	text: string;
	title?: string;
	secrets: Immutable.Map<number, Entity>;

}

export default class SecretText extends EntityInPlay<SecretTextProps> {
	
	constructor() {
		super('secret');
	}

	protected jsx() {

		let components = [(
			<div
				className={"secret-text"}
					title={this.props.title}
			>
				{this.props.text}
			</div>
		)];

		let index = 0;
		if (this.state.isHovering) {

			this.props.secrets.keySeq().forEach(k => 
			
			components.push(

				<Secret 	
						text={this.props.text}
						title={"secret"}
						index={index++}
						entity={this.props.secrets.get(k)}
						optionCallback={this.props.optionCallback}
						assetDirectory={this.props.assetDirectory}
						cardArtDirectory={this.props.cardArtDirectory}
						cards={this.props.cards}
						controller={this.props.controller}
						descriptors={this.props.descriptors}
						/>
				)
			);
		}	
		
		return components;

		}
}
