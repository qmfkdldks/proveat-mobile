import React from 'react'
import { View, ScrollView } from 'react-native'
import LedgerForm from '../components/LedgerForm'

export default class IncomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Income',
  };

  render() {
    return (
      <ScrollView style={{ flex: 1, padding: 4 }}>
        <LedgerForm tag_list={["income"]} />
      </ScrollView>
    );
  }
}