import React from "react";
import { AccordianItem } from './AccordianItem';
import { ItemHeader} from './ItemHeader';
import { ItemContent } from './ItemContent';
import styles from './style.css';

export class Accordian extends React.Component {
	constructor(props) {
			super();
			this.itemdata = props.children;
			this.month = new Date().getMonth();
			this.initialState = Array.from({ length: this.itemdata.AccordianHeaders.length }, () => false);
			this.initialState[this.month]=true;
			this.state={
				active:this.initialState
			};
			this.handleClick = this.handleClick.bind(this);
			this.filteredData = this.filteredData.bind(this);
			}

	filteredData()  {
		const rawdata = this.itemdata;
		const finalData = rawdata.AccordianHeaders.map(x => {return{"header":x, "values":[]}});
		for(var i=0 ;i < finalData.length; i++){
			finalData[i].values= rawdata.AccordianItemValues.filter(x => rawdata.AccordianHeaders[new Date(x.dob).getMonth()]==finalData[i].header);;
	}
		console.log(finalData);
		return finalData;
	}

	handleClick = (idx) => {
		const accordianItems = this.state.active;
		accordianItems.fill(false);
		console.log("in act pass ",idx);
		accordianItems[idx]=true;
		this.setState({
				active:accordianItems

		});
	
	}


	render() {
		//
		const fltdData = this.filteredData();

		return(
	<div className={styles.accordian}>
		{fltdData.map((item,index)=><AccordianItem active={this.state.active[index]} expand={(e) => this.handleClick(index,e)}>{item}</AccordianItem>)}
    </div>
			);
		
}
}
