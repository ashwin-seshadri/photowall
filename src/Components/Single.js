import React, {Component} from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component{
    render() {
        // console.log(this.props);
        // console.log(`loading = ${this.props.loading}`);
        const {match, posts} = this.props;
            // console.log(match);
            // console.log(posts);
            const id = Number(match.params.id);
            // console.log(id);
            const post = posts.find((post) => post.id === id);
            // console.log(post.description);
            const comments = this.props.comments[id] || [];
            const index = this.props.posts.findIndex((post) => post.id === id);
        if(this.props.loading === true){
            return <div className='loader'> ...loading </div>
        } else if(post){
            console.log(`loading again = ${this.props.loading}`);
            return (
                <div className='single-photo'>
                    <Photo post={post} {...this.props} index={index} />
                    <Comments startAddingComment={this.props.startAddingComment} comments={comments} id={id} />
                </div>
            )
        } else {
           return <h1>...no post found</h1>
        }
    }
}

export default Single;