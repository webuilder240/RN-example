import React from "react"
import { View, Text } from "react-native"


class UserScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }
  render () {
    return (
      <View>
        <Text>ユーザー画面</Text>
        <Text>It is {this.state.date.toLocaleDateString()}</Text>
      </View>
    )
  }
}

export default UserScreen