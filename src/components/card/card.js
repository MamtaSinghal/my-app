import React from 'react';

const Card = ({todo}) =>{
    
    return (
    
        <div class="card" style={{ width: "18rem" }}>
        <img class="card-img-top" style={{height:'250px'}} src={todo.avatar} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">
            {todo.first_name}{' '}{todo.last_name}
          </h5>
          <p class="card-text">{todo.email}</p>
        </div>
      </div>
      
    
    )
}

export default Card