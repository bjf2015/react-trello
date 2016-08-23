var React = require('react');
var ReactDOM = require('react-dom');


var Card = React.createClass({
   getInitialState: function() {
       return {
           highlight: false
       };
   },
   onClick: function() {
       this.setState({
           highlight: !this.state.highlight
       });
   },
   render: function() {
       var classes = 'card ' + (this.state.highlight ? 'highlight' : '');
       return (
           <div className={classes} onClick={this.onClick}>
               <div className="card-name">{this.props.name}</div>
               <div className="card-nickname">{this.props.nickname} </div>
               <div className="card-job">
                   {this.props.job}
               </div>
           </div>
       );
   }
});

var CardList = function() {
    return (
        <div className='card-list'> 
            <Card name='Michael' nickname= 'Killer' job='Developer'/>
            <Card name='Bryan' nickname= 'Spike' job='teacher'/>
            <Card name='Joe' nickname= 'Raider' job='hobo'/>
        </div>
        );
};


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<CardList />, document.getElementById('app'));
});