import { Form, json, redirect } from "react-router-dom";
import classes from "../Posts/PostForm.module.css"

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo:{
        lat: number,
        lng: number
    }
  },
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string
  }
}

interface Props {
    user?: User;
    method: any;
  }

const UserForm: React.FC<Props> = ({ user, method }) => {
    return (
     <>
      <Form method={method} className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={user ? user.name : ""}
        />
      </p>
      <p>
        <label htmlFor="body">Content</label>
        <textarea
          id="body"
          name="body"
          rows={5}
          required
          defaultValue={user ? user.username : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button">Cancel</button>
        <button>Save</button>
      </div>
    </Form>
     </>
    );
  };
  export default UserForm;


  export async function action(reactRouterObj: any) {
    const method = reactRouterObj.request.method
    const data = await reactRouterObj.request.formData();
  
    const userData = {
      title: data.get("title"),
      body: data.get("body"),
    };
  
    let url = "https://jsonplaceholder.typicode.com/posts";
    if (method === "PATCH") {
      const postId = reactRouterObj.params.postId
      url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    }
  
    const response = await fetch(url, {
      method: method,
      body: JSON.stringify(userData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  
    if (!response.ok) {
      throw json({ message: "Could not save post." }, { status: 500 });
    } else {
      response.json().then((json) => console.log(json));
      return redirect("/posts");
    }
  }