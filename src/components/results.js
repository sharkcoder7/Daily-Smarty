import React, { Component } from 'react';

import Logo from './logo';
import SearchBar from './searchBar';

class Results extends Component {
    render() {
        return (
            <div>
                <h1>Results</h1>
                <Logo size={55}/>
                <SearchBar/>
            </div>
        )
    }
}

export default Results;