import { useState } from "react";
import classes from './NewPost.module.css';

function NewPost() {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [saving, setSaving] = useState(false);

  function updateTitleHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    setSaving(true);
    fetch('https://jsonplaceholder.typicode.com/posts',
    {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    // Todo: Handle the creation of new posts and send new post data to https://jsonplaceholder.typicode.com/posts (via a POST) request

    setSaving(false);
  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div>
        <label>Title</label>
        <input type="text" onChange={updateTitleHandler} value={enteredTitle} />
      </div>
      <button>Save</button>
    </form>
  );
}

export default NewPost;
