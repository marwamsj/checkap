import React from 'react';
import {Card} from 'react-bootstrap';
import './UserList.css'

function UserList({user}) {
    return (
        <div className="blc">
            {user.map((el)=>(<Card key={el.id} className="card" border="danger" style={{ width: '18rem' }}>
          <Card.Header>{el.name}</Card.Header>
          <Card.Body>
          <Card.Text>{el.email}</Card.Text>
          <Card.Text>Address: {el.address.city}</Card.Text>
          <Card.Text>Phone: {el.phone}</Card.Text>
          <Card.Text>Company: {el.company.name}</Card.Text>
         </Card.Body>
         </Card>
          ))}
        </div>
    )
}

export default UserList
