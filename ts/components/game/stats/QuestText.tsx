import * as React from "react";
import * as Immutable from "immutable";
import Entity from "../../../Entity";
import EntityInPlay from "./../EntityInPlay";
import {CardOracleProps, EntityInPlayProps} from "../../../interfaces";
import Secret from "./../Secret";
import Quest from "./../Quest";
import {GameTag, MetaDataType} from "../../../enums";

interface QuestTextProps extends EntityInPlayProps, CardOracleProps {
	text: string;
	title?: string;
	secrets: Immutable.Map<number, Entity>;
	isTop:boolean;
}

export default class QuestText extends EntityInPlay<QuestTextProps> {
	
	constructor() {
		super('quest');
	}

	protected jsx() {

		let filteredQuests = this.props.secrets.filter((potentialQuest: Entity) => !!potentialQuest.getTag(GameTag.QUEST));

		//Pushing questText
		let components = [(
			<div
				className={"quest-text"}
					title={this.props.title}
			>
				{this.props.text}
			</div>
		)];

		//If I have quests, then I start pushing the card info if hovering
		if (this.state.isHovering) {
			let questEntities= []
			//getting dem entities
			filteredQuests.keySeq().forEach(k => 
				questEntities.push(this.props.secrets.get(k))
			);
	
			for (var i = 0; i < questEntities.length; i++){
				components.push(
					<Quest 	
							text={this.props.text}
							isTop={this.props.isTop}
							title={"quest"}
							entity={questEntities[i]}
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
