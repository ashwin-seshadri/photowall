import { database } from "../database/config";
import { ref, update, onValue, push, get } from 'firebase/database';

export function startAddingPost(post){
    return (dispatch) => {
        return update(ref(database, 'posts'), { [post.id]: post }).then(()=>{
            dispatch(addPost(post));
        }).catch((error) => {
            console.log(error);
        })
    }
}

export function startLoadingPosts(){
    return (dispatch) => {
        return get(ref(database, 'posts')).then((snapshot)=>{
            let posts = [];
            snapshot.forEach((child) => {
                posts.push(child.val());
            });
            dispatch(loadPosts(posts));
        }).catch((error) => {
            console.log(error);
        })
    }
}

export function startRemovingPost(index, id){
    return (dispatch) => {
        const updates = {
            [`posts/${id}`]: null,
            [`comments/${id}`]: null
           };

           console.log(updates);

        return update(ref(database), updates).then(() => {
            dispatch(removePost(index));
        }).catch((error) => {
            console.log(error);
        });
    }
}

export function startAddingComment(comment, postId){
    return (dispatch) => {
        return push(ref(database, `comments/${postId}`), comment).then(() => {
            dispatch(addComment(comment, postId));
        })
    }
}

export function startLoadingComments(){
    return (dispatch) => {
        return onValue(ref(database,'comments'), (snapshot) => {
            let comments = {};
            snapshot.forEach((child) => {
                comments[child.key] = Object.values(child.val());
            });
            dispatch(loadComments(comments));
        }, {
            onlyOnce: true
          });
    }
}

// remove post
export function removePost(index){
    return {
        type: 'REMOVE_POST',
        index
    };
}

// add post
export function addPost(post){
    return {
        type: 'ADD_POST',
        post
    }
}

// load posts
export function loadPosts(posts){
    return {
        type: 'LOAD_POSTS',
        posts
    }
}

// add comment
export function addComment(comment, postId){
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}

// load comments
export function loadComments(comments){
    return {
        type: 'LOAD_COMMENTS',
        comments
    }
}