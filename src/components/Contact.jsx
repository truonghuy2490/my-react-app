import { useEffect, useState } from "react";
import "./Contact.css";

function Contact() {
  // create state
  const [users, setUsers] = useState([]);
  
  // call API when component loads
  useEffect(() => {
    
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json()) // convert to json
      .then((data) => {
        console.log(data);
        setUsers(data);   // save data
      });
  }, []);
  

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
    </div>
  );
}

export default Contact;