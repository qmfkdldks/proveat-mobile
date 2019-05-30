import React from 'react'
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native'

// import { connect } from 'react-redux'
import ProveatApi from '../store/api/ProveatApi'

class AuthLoadingScreen extends React.Component {

    componentDidMount() {
        this._bootstrapAsync()
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const accessToken = await AsyncStorage.getItem('access-token')
        const client = await AsyncStorage.getItem('client')
        const uid = await AsyncStorage.getItem('uid')

        const apiObj = ProveatApi()
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        const response = await apiObj.validateToken(accessToken, client, uid)
        this.props.navigation.navigate(response.ok ? 'Main' : 'Auth')
    }

    // Render any loading content that you like here
    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        )
    }
}

export default AuthLoadingScreen