import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';

import { withRouter } from 'react-router-dom';

class SearchBar extends Component {

    handleFormSubmit = function({query}) {
        this.props.onSubmit(query);
    }

    renderInput(field) {
        return <input type="text" placeholder="&#xf002; Search DailySmarty" {...field.input} />    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <form className={`search-bar search-bar__${this.props.page}`} onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>                <div className="search-bar__wrapper">
                    <Field name="query" component={this.renderInput}/>      
                    <p>Press Return to search</p>    
                </div>
            </form>
        )
    }
}

SearchBar = reduxForm({
    form: 'searchBar'
})(SearchBar);

SearchBar = withRouter(SearchBar)

export default SearchBar;