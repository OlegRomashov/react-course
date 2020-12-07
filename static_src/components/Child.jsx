import React from 'react'
import PropTypes from 'prop-types'

export default class Child extends React.Component {

  componentWillMount() {
    console.log('Child componentWillMount')
  }

  componentDidMount() {
    console.log('Child componentDidMount')
  }

  componentDidUpdate() {
    console.log('Child componentDidUpdate')
  }

  render() {
    console.log('Child render')
    return (
      <h2> Это компонент Child, counter: {this.props.counter} </h2>
    )
  }
}

Child.propTypes = {
  counter: PropTypes.number.isRequired,
}