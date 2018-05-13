import React from 'react';

const onDragStartHandler = (event) => {
  event.dataTransfer.setData("text/plain", event.target.id);
  event.dataTransfer.dropEffect = "move";
}

const TodoItem = (props) => { 
  return (
    <div className="card-body" id={props.id} draggable="true" onDragStart={onDragStartHandler}>
      {props.todoText}
    </div>
  )
}

export default TodoItem;