import React, {Component} from 'react';

class Draggable extends Component {
  onDragStartHandler = (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
    event.dataTransfer.dropEffect = "move";
  }

  onDropHandler = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
    console.dir(event.target)
  }

  onDragOverHandler = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }

  render () {
    return(
      <div id="dragDropZone" onDrop={this.onDropHandler} onDragOver={this.onDragOverHandler}>
        <div id="zone1">
          Drag Drop Zone 1
          <div id="draggable1" draggable="true" onDragStart={this.onDragStartHandler}>draggable1</div>
          <div id="draggable2" draggable="true" onDragStart={this.onDragStartHandler}>draggable2</div>
          <div id="draggable3" draggable="true" onDragStart={this.onDragStartHandler}>draggable3</div>
          <div id="draggable4" draggable="true" onDragStart={this.onDragStartHandler}>draggable4</div>
          <div id="draggable5" draggable="true" onDragStart={this.onDragStartHandler}>draggable5</div>
        </div>
        <div id="zone2" onDrop={this.onDropHandler} onDragOver={this.onDragOverHandler}>
          Drag Drop Zone 2
        </div>
      </div>
    )
  }
}

export default Draggable;