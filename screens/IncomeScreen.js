import React from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native'
import LedgerForm from '../components/LedgerForm'

export default class IncomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Income',
  };

  render() {
    return (
      <View style={{ flex: 1, padding: 4 }}>
        <LedgerForm tag_list={["income"]} />
      </View>
    );
  }
}