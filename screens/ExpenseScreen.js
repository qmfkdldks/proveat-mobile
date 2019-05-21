import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native'
import LedgerForm from '../components/LedgerForm'

class ExpenseScreen extends React.Component {
  static navigationOptions = {
    title: 'Expense',
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 4 }}>
        <LedgerForm minus={true} tag_list={["expense"]} />
      </View>
    )
  }
}

export default ExpenseScreen
