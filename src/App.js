import React, { useState } from "react";
import './index.css'

function App() {

  const[person,setPerson] =useState({ firstName : "", email : "", age :""})
  
  const[people,setPeople] =useState([])

   const handleChange = (e) =>{
    const name = e.target.name
    const value = e.target.value
    setPerson({...person,[name] : value})
   }

  const handleSubmit = (e) =>{
      e.preventDefault()
      if(person.firstName && person.email && person.age){
        const newperson ={...person, id : new Date().getTime().toString()} 
        setPeople(...people,newperson);
        setPerson({firstName : "" ,email: "",age : ""})
      }
  }

  return (
     <div className="container">
     <article>
        <form>
          <div>
            <label htmlFor="firstName">Name :</label>
            <input 
            type="text"
            id="firstName"
            name="firstName"
            value={person.firstName}
            onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email">email :</label>
            <input 
            type="text"
            id="email"
            name="email"
            value={person.email}
            onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="age">Age :</label>
            <input 
            type="text"
            id="age"
            name="age"
            value={person.age}
            onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
     
        {people.map((person) => {
          const {id,firstName,email,age} = person
          return(
            <div key = {id}>
               <h4>{firstName}</h4>
                   <p>{email}</p>
                   <h2>{age}</h2>
            </div>
          )
        })} 

       </article>
    </div>
  );
}

export default App;
