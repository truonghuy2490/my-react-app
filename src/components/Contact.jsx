import { useEffect, useState } from "react";
import "./Contact.css";

function Contact() {
  // create state
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // call API when component loads
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json()) // convert to json
      .then((data) => {
        console.log(data);
        setUsers(data);   // save data
      });
  }, []);


  // call post
  const addNewContact = async (e) => {
    e.preventDefault();
     const formName = e.target.name.value;
    const formEmail = e.target.email.value;

    const newContact = {
      name: formName,
      email: formEmail
    };

    console.log(newContact);
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newContact),
      }
    )
    const data = await res.json();
    console.log(data);
    // console.log(data.name);
    // console.log(data.email);

    alert("Success!");
    const contactToAdd = {
      id: users.length + 1,
      name: data.name,
      email: data.email,
    }
    setUsers([...users, contactToAdd]);
    setEmail("");
    setName("");
  }
  return (
    <div id="contact-container">
      <h1>Contact List</h1>

      <table id="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <form onSubmit={e => addNewContact(e)}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" />

        <label htmlFor="email">Email: </label>
        <input type="text" id="email" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;