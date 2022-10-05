import React, {useState, useEffect} from "react";
import Post, {PostProps} from '../post/Post';
import classNames from './App.module.css'

// There are 2 waya to declarate a function:
// function A ()
//
// or:
//
// const a = () => {};

const posts: PostProps[] = [
	{
		title: 'example post 1',
		description: 'some text 1',
		author: 'ruben',
		isPublished: true,
	},
	{
		title: 'example post 2',
		description: 'some text 2',
		author: 'ruben',
		isPublished: true,
	},
	{
		title: 'example post 3',
		description: 'some text 3',
		author: 'ruben',
		isPublished: false,
	},
]

const App: React.FC = () => {
	const [showPublished, setShowPublished] = useState<boolean>(false);
	const toggleShowAll = () => {
		setShowPublished(prevShowPublished => !prevShowPublished);
	}
	useEffect(() => {
		document.title = showPublished ? "Published posts" : "All posts";
	}, [showPublished])

	return (
		<div className={classNames.wrapper}>
			<h1 className={classNames.title}>Hello typescript!</h1>
			<button onClick={toggleShowAll}>
				{showPublished ? "Show All" : "Show Published Only"}
			</button>
			<div className={classNames.postsWrapper}>
				{posts.filter(post => showPublished ? post.isPublished : true).map((post) => (<Post key={post.title} {...post}/>))}
			</div>
		</div>
	)
}

export default App;
