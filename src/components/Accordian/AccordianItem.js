import React from "react";
import { ItemHeader} from './ItemHeader';
import { ItemContent } from './ItemContent';

export class AccordianItem extends React.Component {
	constructor(props) {
			super();
			this.showContent = this.showContent.bind(this);
			};
	
	showContent = () => {
		this.props.expand();
		//console.log();
	}		

	render() {
	const active = this.props.active;
	const header = this.props.children.header;
		return(
	<div>
		<label onClick={(e) => {this.showContent()}} ><ItemHeader collapsable={active}>{header}</ItemHeader></label>
		{active?(<ItemContent>{this.props.children.values}</ItemContent>):null}
    </div>
			);
	}
}

