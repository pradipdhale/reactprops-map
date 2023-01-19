import React from 'react'
import Card from './Card'
import contacts from './contacts.js'


const insertData = (contact) => {
  return(
    <Card key={contact.id} name={contact.name} source={contact.source} email={contact.email} />
  )
}

const MainCard = () => {
  return (
    <div className="App">

      {contacts.map(insertData)}
      {/* <Card
        name={contacts[0].name}
        source={contacts[0].source}
        email={contacts[0].email}
      />
       <Card
        name={contacts[1].name}
        source={contacts[1].source}
        email={contacts[1].email}
      />
       <Card
        name={contacts[2].name}
        source={contacts[2].source}
        email={contacts[2].email}
      /> */}
    </div>
  )
}

export default MainCard
