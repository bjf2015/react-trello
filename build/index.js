var React = require('react');
var ReactDOM = require('react-dom');

var tasks1 = ['Task1', 'Task2', 'Task3']
var tasks2  = ['Task4', 'Task5', 'Task6']
var tasks3 = ['Task7', 'Task8', 'Task9']

var Card = function(props) {
    return (
       <div className="card">{props.text}</div>
        );
};

//add value in the input tag
var AddItem = function(props) {
  return(
    <form onSubmit={props.onAddSubmit}>
      <input type="text" placeholder="enter task" onChange={props.onAddInputChanged} value={props.value}/>
      <button type="submit">Submit</button>
    </form>

    )
};

//event.currentTarget
var List = React.createClass({ // ListContainer

getInitialState: function() {
        return {
          item: '',
          listItems: this.props.cards
                    }
        },


  onAddSubmit: function(event) {
    event.preventDefault();
    console.log('button pressed');
    // var updatedList = this.state.cards;
    // updatedList.push(this.state.item);
   this.setState({
      item:'',
      listItems: this.state.listItems.concat([this.state.item])
   })

},

onAddInputChanged: function(event) {
  event.preventDefault();
  console.log(event.target.value);

  this.setState({
      item: event.target.value,
    
    });
},



  render: function(props) {
    var myList = [];
    for (var i = 0; i < this.state.listItems.length; i++) {
        myList.push(<Card text={this.state.listItems[i]} />);
    }
    return (
      <div className="card-list">
        <div className="list">{this.props.title}</div>
        {myList}

        <AddItem onAddSubmit={this.onAddSubmit} onAddInputChanged={this.onAddInputChanged} value={this.state.item}/>
      </div>
    );

  }
});



var Board = React.createClass({
  getInitialState: function() {
    return {
      titles : ["Title1", "Title2", "Title3"],
      tasks : [tasks1, tasks2, tasks3]
    }
  },

  //add updatedItems: function()
  render: function() {
    var list = [];
    for(var i = 0; i < this.state.titles.length; i++) {
      list.push(<List title={this.state.titles[i]} cards={this.state.tasks[i]} />);
    };
console.log(list);
    return (
        <div className="Board">{list}</div>
      )
  }
});


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board />, document.getElementById('app'));
});