import React, { Component } from 'react'

export default class Default extends Component {
  render() {
    console.log(this.props);
    return(
      <div className = "container">
        <div className = "row">
          <div className="col-10 mx-auto text-center text-uppercase pt-5">
            <h1 className = "display-3">Pusiste mal la dirección, por favor: Vuelve a la página de inicio.</h1>
          </div>
        </div>
      </div>
    )
  }
}
