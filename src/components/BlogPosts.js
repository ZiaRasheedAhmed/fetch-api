import classes from './BlogPosts.module.css';

function BlogPosts({data}) {

  const list = data.map((item)=> <li key={item.id}>{item.title}</li>)
  console.log(list.length);

  return(
  <div id='listItem'>
    <ul classes={classes.list}>
  {list}
  </ul>
  </div> 
  )
}

export default BlogPosts;
