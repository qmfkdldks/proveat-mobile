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
  static navigationOptions = {
    title: 'Please sign in',
  }

  constructor(props) {
    super(props)

    this.state = {
      email: 'company2@gmail.com',
      password: '007rkdqm'
    };
  }

  _signInAsync = () => {
    this.props.signInRequest(this.state.email, this.state.password)
  }

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
}

const mapDispatchToProps = (dispatch) => ({
  signInRequest: (email, password) => dispatch(AuthActions.signInRequest(email, password))
})

export default connect(null, mapDispatchToProps)(SignInScreen)