import classes from './BlogPosts.module.css';

function BlogPosts({data}) {

  const list = data.map((item)=> <li key={item.id}>{item.title}</li>)

  return <ul classes={classes.list}>
  {list}
  </ul>
}

export default BlogPosts;
