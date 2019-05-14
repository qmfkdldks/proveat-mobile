import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';

import { connect } from 'react-redux';

class AuthLoadingScreen extends React.Component {

    componentDidMount() {
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        // const userToken = await AsyncStorage.getItem('userToken');
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        if (!this.props.isLoading)
            this.props.navigation.navigate(this.props.isSignedIn ? 'Main' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { auth } = state
    return ({
        accessToken: auth.accessToken,
        isLoading: auth.isLoading,
        isSignedIn: auth.isSignedIn
    })
}

export default connect(mapStateToProps, null)(AuthLoadingScreen)