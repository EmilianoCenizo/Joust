import * as React from "react";

import EntityList from "./EntityList";
import Entity from "../../Entity";
import Option from "../../Option";
import Card from "./Card";
import {GameTag} from "../../enums";
import {CardType} from "../../enums";
import {EntityListProps} from "../../interfaces";
import Choice from "../../Choice";

interface ChoicesProps extends EntityListProps {
	isMulligan: boolean;
	choices: Immutable.Map<number, Choice>;
}

class Choices extends EntityList<ChoicesProps> {

	protected className(): string {
		return 'choices';
	}

	protected sort(entity: Entity): number {
		return this.props.choices.get(entity.id).getIndex();
	}

	private count: number = 0;

	protected beforeRender() {
		this.count = 0;
	}

	protected renderEntity(entity: Entity, option: Option, index?: number): JSX.Element {

		var hidden = false;

		if(this.props.hideCards) {
			entity = new Entity(entity.id, entity.getTags());
		}
		else if (!entity.cardId && this.props.cardOracle && this.props.cardOracle.has(+entity.id)) {
			let cardId = this.props.cardOracle.get(entity.id);
			entity = new Entity(entity.id, entity.getTags(), cardId);
			hidden = true;
		}

		// hard limit mulligan cards to 4, see issue #85
		this.count++;
		if(this.props.isMulligan && (entity.cardId === 'GAME_005' || (!entity.revealed && this.count > 4))) {
			return null;
		}

		return (<Card entity={entity}
			option={option}
			optionCallback={this.props.optionCallback}
			assetDirectory={this.props.assetDirectory}
			cards={this.props.cards}
			isHidden={hidden}
			controller={this.props.controller}
			cardArtDirectory={this.props.cardArtDirectory}
			/>);
	}
}

export default Choices;
