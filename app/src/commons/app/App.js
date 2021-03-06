import React from 'react'

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  }

  render() {
    return (
      <div className="App">
        { this.props.children }
      </div>
    )
  }
}
