import { SET_RECENT_POSTS } from './types';

import axios from 'axios';

export function fetchRecentPosts() {
    return function(dispatch) {
        axios.get('https://api.dailysmarty.com/posts')
            .then(response => {
                console.log(response.data.posts);
                dispatch({
                    type: SET_RECENT_POSTS,
                    payload: response.data.posts
                })
            })
    }
}

export function fetchPostsWithQuery(query) {
    return function(dispatch) {
        axios.get(`https://api.dailysmarty.com/search?q=${query}`)
            .then(response => {
                console.log(response.data.posts);
                // dispatch({
                //     type: SET_RECENT_POSTS,
                //     payload: response.data.posts
                // })
            })
    }
}