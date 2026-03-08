function UserInfo() {

  const name = "Bharath";
  const age = 21;
  const city = "Chennai";
   const user = {
    name: "Bharath",
    email: "bharath@gmail.com",
    phone: "9876543210"
  };
 const fruits = ["Apple", "Mango", "Orange", "Banana"];
     const users = [
    { id: 1, name: "Bharath", age: 21 },
    { id: 2, name: "Arun", age: 22 },
    { id: 3, name: "Kumar", age: 23 }
  ];
   const user1 = [
    {
      name: "Bharath",
      skills: ["HTML", "CSS", "JavaScript"]
    }
  ];
    const isLoggedIn = true;
      const age1 = 20;
      const isAdmin = true;
      const user2 = {
  name: "John",
  address: {
    city: "Chennai"
  }
};
 const username = null;
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>City: {city}</h3>
      <h1>Name: {user.name}</h1>
      <h2>Email: {user.email}</h2>
      <h3>Phone: {user.phone}</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
       {users.map((user) => (
        <p key={user.id}>
          Name: {user.name} | Age: {user.age}
        </p>
      ))}
      {user1.map((user, index) => (
        <div key={index}>
          <h2>{user.name}</h2>

          <ul>
            {user.skills.map((skill, i) => (
              <li key={i}>- {skill}</li>
            ))}
          </ul>
          <h1>
        {isLoggedIn ? "Welcome User" : "Please Login"}
      </h1>
          <h2>
        {age1 >= 18 ? "Adult" : "Minor"}
      </h2>
       {isAdmin && <h1>Admin Dashboard</h1>}
       <h2>{user2?.address?.city}</h2>

        </div>
      ))}
      <h1>{username ?? "Guest User"}</h1>
    </div>
  );
}

export default UserInfo;