import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
//need to fix the style
const FrenchNumbers = (props) => (
    <div>
	    <h2 id="margin_top_bottom">Les nombres</h2>
		    <div className="list">
			    <ul>
			        <li id="col_head">{props.language[0].numbers.card.name}</li>
			    </ul>
		            {props.language[0].numbers.card.nums.map((num, i) => <li key={i}>{num}</li>)}
	        </div>

	<div className="list">
		<ul>
			<li id="col_head">{props.language[0].numbers.ord.name}</li>
		</ul>
		{props.language[0].numbers.ord.nums.map((num, i) => <li key={i}>{num}</li>)}
	</div>
    
    </div>
);

function mapStateToProps(state) {
	return {
		language: state.languages,
		dropdown: state.dropdown
	}
}

export default withRouter(connect(mapStateToProps)(FrenchNumbers));
