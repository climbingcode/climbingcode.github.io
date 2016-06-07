import React from 'react';
import content from 'config/content.json';

import 'styles/skills.scss'

class Blog extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		var blogs = [];

		content.blogs.forEach(function(blog, index) {
			var blog = <div className="blog" key={'blog_' + index}>
							<h2>{blog.title}</h2>
							<p>{blog.content}</p>
							<h6><i>{blog.datePublished}</i></h6>
						</div>;
			blogs.push(blog)
		});

		return (
			<div className="blogs">
				{blogs}
			</div>
		)
	}

}

export default Blog;