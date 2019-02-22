import React, { Component } from 'react';
import Logo from './logo'
import SearchBar from './searchBar';
import RecentPosts from './recentPosts';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Logo/>
          <SearchBar/>
          <RecentPosts/>
        </div> 
      </div>
    );
  }
}
