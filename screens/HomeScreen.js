import React from 'react'
import { connect } from 'react-redux'
import {
  Image,
  Platform,
  ScrollView,
  Text,
  StyleSheet,
  View,
} from 'react-native'
import { IconButton } from 'react-native-paper'

import RecordsContainer from '../components/RecordsContainer'

import AuthActions from '../store/reducers/AuthReducer'

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {

    return (
      <React.Fragment>
        <View style={styles.container}>
          <View style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={{ flex: 1 }}>
              <IconButton
                icon="exit-to-app"
                size={20}
                onPress={this.props.signOutRequest}
              />
            </View>
            <View style={styles.welcomeContainer}>
              <Image
                source={
                  require('../assets/images/proveat-384.png')
                }
                style={styles.welcomeImage}
              />
            </View>
            <View style={styles.getStartedContainer}>
              <Text style={styles.getStartedText}>Get started by opening</Text>
            </View>
            <RecordsContainer />
          </View>
        </View>
      </React.Fragment>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
    margin: 4
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    marginBottom: 60
  },
  getStartedText: {
    alignSelf: "center",
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});

const mapDispatchToProps = (dispatch) => ({
  signOutRequest: () => dispatch(AuthActions.signOutRequest())
})

export default connect(null, mapDispatchToProps)(HomeScreen)