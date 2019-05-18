import React from 'react';

import {
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  View,
} from 'react-native';

import LedgersContainer from '../components/LedgersContainer';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {

    return (
      <React.Fragment>
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
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
            <LedgersContainer />
          </ScrollView>
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


export default HomeScreen