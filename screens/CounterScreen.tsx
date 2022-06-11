import React from "react"
import { View, Text, Button } from "react-native"
import store from "../stores/Counter"

class CounterScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.state
  }
  componentDidMount() {
    store.onChange(this._onChange.bind(this))
  }
  _onChange() {
    this.setState(store.state)
  }
  componentWillUnmount() {
    console.log("componentWillUnmount")
  }
  increment() {
    store.dispatch("increment")
  }
  decrement() {
    store.dispatch("decrement")
  }
  render () {
    return (
      <View>
        <Text>Counter</Text>
        <Text>It is {this.state.count}</Text>
        <Button title="increment" onPress={() => this.increment()} />
        <Button title="decrement" onPress={() => this.decrement()} />
      </View>
    )
  }
}

export default CounterScreen