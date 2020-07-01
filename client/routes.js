import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Switch} from 'react-router-dom'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        <div> Butts</div>
      </Switch>
    )
  }
}

export default withRouter(connect()(Routes))
