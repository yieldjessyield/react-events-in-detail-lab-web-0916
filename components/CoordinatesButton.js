const React = require('react');

class CoordinatesButton extends React.Component{
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    // onReceiveCoordinates: {this.props.onReceiveCoordinates}
  }

  handleClick(event) {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  // ReceiveCoordinates(){
  //   var event = window.event

  //   var coor = []
  //   coor.push(event.clientX)
  //   coor.push(event.clientY)

  //   return coor
  // }


  render(){
    return(
      <button onClick={this.handleClick}>Coords</button>
      )
  }

}

module.exports = CoordinatesButton
