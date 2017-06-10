import React, {Component} from "react";
import { connect } from 'react-redux';
import { toggleDropdown, TOGGLE_DROPDOWN, initialState } from '../actions';
import LanguageAspect from './language-aspect';
import ListItemsContainer from './list-items-container';



//component which describes the function of each
//individual button
class LanguageBtn extends Component {

	handleClickBtn(){ 	
		this.props.toggleDropdown(this.props.language); //<--
	}

	render() {
	console.log("After render: ", this.props.language);
		return (
			<div>
				<span 
				onClick={this.handleClickBtn.bind(this)}
				> {this.props.name}	
				</span>
				<ListItemsContainer />
			</div>
			);
	}
}



//todo
//research bootstrap: dropdown open, btn_style, btn, dropdown-toggle

// When is it that we want to display the li and the language?
// How does the dropdown toggle know where to be? What causes that?
// Look at the flow and composition of the React Components / architecture

const mapDispatchToProps = (dispatch) => {
	return {
		toggleDropdown: (nextLanguage) => dispatch(toggleDropdown(nextLanguage))
	}
}

const mapStateToProps = (state) => {
	return {
		languages: state.languages,
		dropdown: state.dropdown,
		liReducer: state.liReducer
	}
}


export default connect(
mapStateToProps, mapDispatchToProps)(LanguageBtn, LanguageAspect);
//do I need to connect ListItems even though it's already in LanguageBtn?
//I think I need to connect mapDispatchToProps to this???