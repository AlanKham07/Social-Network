import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer';
import React from 'react';

let state = {
    postData: [
        { messages: 'Hello', likesCount: 9, id: 1 },
        { messages: 'How are you?', likesCount: 25, id: 2 }
    ],
};

test('length of posts should be incremented', () => {
    let action = addPostActionCreator('test');
    let newState = profileReducer(state, action);
    //ожидаем получить в state новое сообщение
    expect(newState.postData.length).toBe(3);
});

test('message of new posts should be correct', () => {
    let action = addPostActionCreator('test');
    let newState = profileReducer(state, action);
    expect(newState.postData[2].messages).toBe('test');
});

test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.postData.length).toBe(1);
});

test('after deleting length should`t be decrement if id is incorrect', () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);
    expect(newState.postData.length).toBe(2);
});