import React from "react"
import ReactDOM from "react-dom"
import './index.css'



const Person = ({img,name,job,children}) =>{
    const url = `https://randomuser.me/api/portraits/men/${img}.jpg`;
    return(
      <article className="person">
          <img src= {url}
               alt="person" />
          <h4>{name}</h4>
          <h4>{job}</h4>
          {children}
      </article>

    );

};

const PersonList = () =>{

    return <section className="person-list">
        <Person img="34" name="john" job="developer" />
        <Person img="20" name="Bob" job="Engineer">
            <p>
                Whoozah its the children right here
            </p>
        </Person>
        <Person img="78" name="Alice" job="Doctor" />
    </section>

};





ReactDOM.render(<PersonList></PersonList>,
document.getElementById('root'));

