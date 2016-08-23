var React = require('react');
var ReactDOM = require('react-dom');







var Card = function(props) {
    return (
       <div>{props.text}</div>
        );
};


var List = function(props) {
  return (
    <div>
    <h2>{props.title}</h2>

    <Card text="Task 1"/>
    <Card text="Task 2"/>
    
    </div>
    );
}
var Board = function(props) {
  return(
    <div>
      <h1>{props.boardTitle}</h1>
      <List title="List 1"/>
      <List title="List 2"/>
      <List title="List 3"/>
    </div>
    );
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board boardTitle="Hello"/>, document.getElementById('app'));
});