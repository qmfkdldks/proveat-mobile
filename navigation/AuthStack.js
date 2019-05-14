// import React from 'react';
// import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

// import TabBarIcon from '../components/TabBarIcon';
import SignInScreen from '../screens/SignInScreen';

const AuthStack = createStackNavigator({
  SignIn: SignInScreen,
});

// AuthStack.navigationOptions = {
//   tabBarLabel: 'SignIn',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),
// };

// export default createBottomTabNavigator({
//   AuthStack,
// });

export default AuthStack