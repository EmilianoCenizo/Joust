import * as React from "react";
import * as Immutable from "immutable";
import Entity from "../../../Entity";
import EntityInPlay from "./../EntityInPlay";
import {CardOracleProps, EntityInPlayProps} from "../../../interfaces";
import Secret from "./../Secret";

interface SecretTextProps extends EntityInPlayProps, CardOracleProps {
	text: string;
	title?: string;
	secrets: Immutable.Map<number, Entity>;
	isTop:boolean;
}

export default class SecretText extends EntityInPlay<SecretTextProps> {
	
	constructor() {
		super('secret');
	}

	protected jsx() {
		//Pushing secretText
		let components = [(
			<div
				className={"secret-text"}
					title={this.props.title}
			>
				{this.props.text}
			</div>
		)];

		//If I have secrets, then I start pushing the card info if hovering
		if (this.state.isHovering) {
			let secretEntities= []
			let revealedSecretEntities = []
			
			//getting dem entities
			this.props.secrets.keySeq().forEach(k => 
				secretEntities.push(this.props.secrets.get(k))
			);
	
			for (var i = 0; i < secretEntities.length; i++){
				//I'll try to reveal the secrets that were saw
				if(!secretEntities[i].revealed){
					let cardId = this.props.cardOracle.get(secretEntities[i].id);
					secretEntities[i] = new Entity(secretEntities[i].id, secretEntities[i].getTags(), cardId);			
				}
				components.push(
					<Secret 	
							text={this.props.text}
							isTop={this.props.isTop}
							title={"secret"}
							index={i}
							entity={secretEntities[i]}
							optionCallback={this.props.optionCallback}
							assetDirectory={this.props.assetDirectory}
							cardArtDirectory={this.props.cardArtDirectory}
							cards={this.props.cards}
							controller={this.props.controller}
							descriptors={this.props.descriptors}
							/>
					)
			}
		}
		
		return components;
		}
}
