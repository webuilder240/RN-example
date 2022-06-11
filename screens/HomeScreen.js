import React from "react";
import { View, Text, Button } from "react-native"

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>ホーム画面</Text>
      <Button title="ユーザー" onPress={() => navigation.navigate('User', {
        userId: 1
      })} />
      <Button title="Counter" onPress={() => navigation.push('Counter')} />
    </View>
  )
}

export default HomeScreen