import { useState } from "react";
import classes from './NewPost.module.css';

function NewPost({addValue}) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [saving, setSaving] = useState('Save');

  function updateTitleHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    setSaving('Saving...');

  const newData = {
    userId: 1,
    id: 1989898,
    title: enteredTitle,
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  } 
    fetch('https://jsonplaceholder.typicode.com/posts',
    {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) =>
      { 
        setSaving('Save');
        addValue(json)
      }
      );
    // Todo: Handle the creation of new posts and send new post data to https://jsonplaceholder.typicode.com/posts (via a POST) request

    setEnteredTitle('');
  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div>
        <label>Title</label>
        <input type="text" onChange={updateTitleHandler} value={enteredTitle} />
        {/* <div>{enteredTitle}</div> */}
      </div>
      <button >{saving}</button>
    </form>
  );
}

export default NewPost;
