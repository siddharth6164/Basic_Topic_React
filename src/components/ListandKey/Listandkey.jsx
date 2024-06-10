import React from 'react'

const Peoples =[
    {id:0,name: 'John',age:20},
    {id:1,name: 'Mohn',age:21},
    {id:2,name: 'Aohn',age:22},
    {id:3,name: 'Bohn',age:23},
    {id:4,name: 'Lohn',age:24},
]


function Listandkey() {
    const listItems = Peoples.map((people)=>
        <li key={people.id}>
            <h3>{people.id} {people.name} {people.age}</h3>
        </li>
    )
    return (
        <ul>
            {listItems}
        </ul>
    )
}

export default Listandkey