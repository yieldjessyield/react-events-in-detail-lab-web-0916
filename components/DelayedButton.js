const React = require('react');

class DelayedButton extends React.Component{
  constructor(props) {
    super(props);

    this.delayedClick = this.delayedClick.bind(this);
  }

  delayedClick(event) {
    let myDelay = this.props.delay;
    event.persist();
    setTimeout(() => {this.props.onDelayedClick(event)}, myDelay);
  }



  render(){
    return(
      <button onClick={this.delayedClick}>Click-y</button>
      )
  }

}

module.exports = DelayedButton
