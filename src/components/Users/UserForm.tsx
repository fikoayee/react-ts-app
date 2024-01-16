import { Form, json, redirect } from "react-router-dom";
import classes from "../Posts/PostForm.module.css";
import {User} from "../../interfaces/User.interface"


interface Props {
  user?: User;
  method: any;
}

const UserForm: React.FC<Props> = ({ user, method }) => {
  return (
    <>
      <Form method={method} className={classes.form}>
        <p>
          <label htmlFor="name">name</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            pattern=".*\S+.*"
            defaultValue={user ? user.name : ""}
          />
        </p>
        <p>
          <label htmlFor="username">username</label>
          <input
            id="username"
            type="text"
            name="username"
            required
            pattern=".*\S+.*"
            defaultValue={user ? user.username : ""}
          />
        </p>
        <p>
          <label htmlFor="email">email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            pattern=".*\S+.*"
            defaultValue={user ? user.email : ""}
          />
        </p>

        <p>
          <label htmlFor="street">street</label>
          <input
            id="street"
            type="text"
            name="street"
            required
            pattern=".*\S+.*"
            defaultValue={user ? user.address.street : ""}
          />
        </p>

        <p>
          <label htmlFor="suite">suite</label>
          <input
            id="suite"
            type="text"
            name="suite"
            required
            pattern=".*\S+.*"
            defaultValue={user ? user.address.suite : ""}
          />
        </p>

        <p>
          <label htmlFor="city">city</label>
          <input
            id="city"
            type="text"
            name="city"
            required
            pattern=".*\S+.*"
            defaultValue={user ? user.address.city : ""}
          />
        </p>
        <p>
          <label htmlFor="zipcode">zipcode</label>
          <input
            id="zipcode"
            type="text"
            name="zipcode"
            required
            pattern=".*\S+.*"
            defaultValue={user ? user.address.zipcode : ""}
          />
        </p>

        <p>
          <label htmlFor="phone">phone</label>
          <input
            id="phone"
            type="text"
            name="phone"
            required
            pattern=".*\S+.*"
            defaultValue={user ? user.phone : ""}
          />
        </p>

        <p>
          <label htmlFor="website">website</label>
          <input
            id="website"
            type="text"
            name="website"
            required
            pattern=".*\S+.*"
            defaultValue={user ? user.website : ""}
          />
        </p>

        <p>
          <label htmlFor="companyName">company name</label>
          <input
            id="companyName"
            type="text"
            name="companyName"
            required
            pattern=".*\S+.*"
            defaultValue={user ? user.company.name : ""}
          />
        </p>

        <p>
          <label htmlFor="companyPhrase">company catch phrase</label>
          <input
            id="companyPhrase"
            type="text"
            name="companyPhrase"
            required
            pattern=".*\S+.*"
            defaultValue={user ? user.company.catchPhrase : ""}
          />
        </p>

        <p>
          <label htmlFor="companyBs">company business</label>
          <input
            id="companyBs"
            type="text"
            name="companyBs"
            required
            pattern=".*\S+.*"
            defaultValue={user ? user.company.bs : ""}
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
  const method = reactRouterObj.request.method;
  const data = await reactRouterObj.request.formData();

  const userData = {
    name: data.get("name"),
    username: data.get("username"),
    email: data.get("email"),
    address:{
      street: data.get("street"),
      suite: data.get("suite"),
      city: data.get("city"),
      zipcode: data.get("zipcode"),
    },
    phone: data.get("phone"),
    geo:{
      lat: 999999999,
      lng: 999999999,
    },
    website: data.get("website"),
    company:{
      name: data.get("companyName"),
      catchPhrase: data.get("companyPhrase"),
      bs: data.get("companyBs")
    }
  };

  let url = "https://jsonplaceholder.typicode.com/users";
  if (method === "PATCH") {
    const userId = reactRouterObj.params.userId;
    url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  }

  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(userData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  if (!response.ok) {
    throw json({ message: "Could not update/create user." }, { status: 500 });
  } else {
    response.json().then((json) => console.log(json));
    return redirect("/users");
  }
}
