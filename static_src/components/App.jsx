import React from 'react'
import Child from './Child'

export default class App extends React.Component {
  state = {
    text: 'Наш первый React-компонент',
    counter: 0,
  }

  componentWillMount() {
    console.log('Parent componentWillMount')
  }

  componentDidMount() {
    console.log('Parent componentDidMount')
    setTimeout(() => this.setState({ 'text': 'Обновленный React-компонент' }),
      3000)
  }

  componentDidUpdate() {
    console.log('Parent componentDidUpdate')
  }

  handleClick = () => {
    this.setState({ 'counter': this.state.counter + 1 })
  }

  render() {
    console.log('Parent render')
    return (
      <div>
        <h1> {this.state.text} </h1>
        <Child counter={this.state.counter} />
        <button onClick={this.handleClick}> Кнопка +1 </button>
      </div>
    )
  }
}