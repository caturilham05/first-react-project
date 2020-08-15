import React from 'react';
import './css/Blog.css';

const Blog = (props) => {
    return <div className="blog-wrap">
        <img src="https://placeimg.com/640/480/tech" alt=""/>
        <p>{props.Tanggal}</p>
        <p>{props.Judul}</p>
        <p>{props.Summary}</p>
    </div>
}

export default Blog;