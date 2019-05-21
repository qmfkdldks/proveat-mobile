import React from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import { TextInput, Button } from 'react-native-paper'

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
    const { colors } = this.props.theme

    return (
      <View style={styles.container}>
        <TextInput
          placeholder="email"
          mode="outlined"
          label="Email"
          value={email}
          style={styles.inputContainerStyle}
          onChangeText={(email) => this.setState({ email: email })}
        />
        <TextInput
          placeholder="email"
          mode="outlined"
          label="Password"
          value={password}
          style={styles.inputContainerStyle}
          onChangeText={(password) => this.setState({ password: password })}
        />
        <Button mode="contained" style={{ margin: 8, alignSelf: 'flex-end' }} onPress={this._signInAsync}>Sign In</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  wrapper: {
    flex: 1,
  },
  inputContainerStyle: {
    margin: 8,
  },
});

const mapDispatchToProps = (dispatch) => ({
  signInRequest: (email, password) => dispatch(AuthActions.signInRequest(email, password))
})

export default connect(null, mapDispatchToProps)(SignInScreen)