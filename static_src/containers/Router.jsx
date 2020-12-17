import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Layout from './Layout'

export default class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={ Layout } />
        <Route exact path='/chat/:chatId/'
               render={ obj => <Layout chatId={Number(obj.match.params.chatId)} /> }
        />
        {/*<Route render={() => <h1 style={{ color: 'red', textAlign: 'center'}}>404 not found</h1>}/>*/}
        <Redirect to={'/'}/>
      </Switch>
    )
  }
}