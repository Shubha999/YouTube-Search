import React, { Component } from 'react';

/* function based component, not much interactive
const SearchBar = () => {
	return <input />;
};

*/

// Class based function

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: '' };
	}

	render() {
		return (
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={e => this.onInputChange(e.target.value)}
				/>
			</div>
		);
	}

	onInputChange(term) {
		this.setState({ term });
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;
