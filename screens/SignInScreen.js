import React from 'react';
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import AuthActions from '../store/reducers/AuthReducer';

class SignInScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: 'company2@gmail.com',
      password: '007rkdqm'
    };
  }

  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    const { email, password } = this.state

    return (
      <View>
        <TextInput
          placeholder="email"
          value={email}
          onChangeText={(email) => this.setState({ email: email })}
        />
        <TextInput
          placeholder="email"
          value={password}
          onChangeText={(password) => this.setState({ password: password })}
        />
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = () => {
    this.props.signInRequest(this.state.email, this.state.password)
    // AsyncStorage.setItem('userToken', 'abc');
    // this.props.navigation.navigate('AuthLoading');
  };
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  signInRequest: (email, password) => dispatch(AuthActions.signInRequest(email, password))
})

export default connect(null, mapDispatchToProps)(SignInScreen)