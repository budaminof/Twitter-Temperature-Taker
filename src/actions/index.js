import * as types from '../constants/ActionTypes';

export function newTweet(tweet) {
 return { type: types.NEW_TWEET, tweet };
}

export function newSearch() {
 return { type: types.SEARCH_TERM };
}

export function newData(data) {
  return { type: types.NEW_DATA, data };
}