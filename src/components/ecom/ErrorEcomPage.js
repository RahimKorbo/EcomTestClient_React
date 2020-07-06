import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ErrorEcomPage extends Component {
    render() {
        return (
            <div style={{margin:"325px"}}>
            <Link to="/">Back To Home</Link>
            <h3>404 - Not found</h3>
            <p>
              It looks like nothing was found at this location.
              Maybe try one of the links in the menu or press back to go to the previous page.
                    </p>
           
          </div>
        )
    }
}
