import ava1 from "../Assets/avatar-female.png";
import ava2 from "../Assets/avatar-friend.png";
import ava3 from "../Assets/avatar-of-nurse.png";
import { profileReducer, addPostActionCreator, deletePost } from './profile-reducer';

let state = {
  postsData: [
    {id: 1, avatar: ava1, message: "Hey, why nobody love me?", like: 11, dislike: 0},
    {id: 2, avatar: ava2, message: "It's our new program! Hey!", like: 9, dislike: 1},
    {id: 3, avatar: ava3, message: "Hi, It's my first post!", like: 21, dislike: 2},
  ]
};

it('length of posts should be incremented', () => {
  // 1. test data
  let action = addPostActionCreator('it-kamasutra.com');
  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.postsData.length).toBe(4);
});


it('message of new post should be correct', () => {
  // 1. test data
  let action = addPostActionCreator('it-kamasutra.com');
  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.postsData[3].message).toBe("it-kamasutra.com");
});

it('after deleting length of messsages should be decrement', () => {
  // 1. test data
  let action = deletePost(1);
  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.postsData.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
  // 1. test data
  let action = deletePost(100);
  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.postsData.length).toBe(3);
});
