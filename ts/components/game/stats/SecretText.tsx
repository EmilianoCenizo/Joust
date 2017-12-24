import * as React from "react";

interface SecretTextProps extends React.ClassAttributes<SecretText> {
	text: string;
	title?: string;
}

export default class SecretText extends React.Component<SecretTextProps, {}> {
	
	baseClassName:string = "secret-text";
	isHovering:boolean= false;

	protected startHovering(e) {
		this.isHovering= true;
	}

	protected stopHovering(e) {
		this.isHovering= false;
	}

	protected getClassNames(): string[] {
		let classNames = [];
		classNames.push(this.baseClassName);

		if (this.isHovering) {
			classNames.push('hovering');
		}
		return classNames;
	}

	public render(): JSX.Element {
		return <div className={this.getClassNames().join(' ') }
					title={this.props.title}
					onMouseOver={(e) => {this.startHovering(e)}}
					onTouchStart={(e) => {this.startHovering(e)}}
					onMouseOut={(e) => {this.stopHovering(e)}}
					onTouchEnd={(e) => {this.stopHovering(e)}}
				>{this.props.text}
		</div>;
	}
}
