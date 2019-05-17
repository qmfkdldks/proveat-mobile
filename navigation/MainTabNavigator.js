import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import IncomeScreen from '../screens/IncomeScreen';
import ExpenseScreen from '../screens/ExpenseScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='dashboard'
    />
  ),
};

const IncomeStack = createStackNavigator({
  Income: IncomeScreen,
});

IncomeStack.navigationOptions = {
  tabBarLabel: 'Income',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='pluscircle'
    />
  ),
};

const ExpenseStack = createStackNavigator({
  Expense: ExpenseScreen,
});

ExpenseStack.navigationOptions = {
  tabBarLabel: 'Expense',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='minuscircle'
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  IncomeStack,
  ExpenseStack,
});
