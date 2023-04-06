import React from "react";
import { connect } from 'react-redux';

import {getPosts} from "./actions/action"

const App = (props) => {

  return (
    <div>
      <button onClick={()=>props.getPosts()}>Request</button>
      {props.ds.posts && props.ds.posts.data.map((post,i) => <div style={{padding:'15px', border:'1px solid black'}}>
        <div>{post.NewsId} { i === 1 && <button >Delete</button> }</div> 
        <div>{post.Title}</div>
        <img src={post.Image} style={{width:'200px'}} />
        <div>{post.Details}</div>
      </div>)}
      
    </div>
  );
}

export default connect(state=>state, { getPosts })(App);
