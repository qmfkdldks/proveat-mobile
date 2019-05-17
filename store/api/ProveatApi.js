// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import { AsyncStorage } from 'react-native'

// our "constructor"
const ProveatApi = (baseURL = 'http://192.168.0.61:3000/api/v1') => {
    // ------
    // STEP 1
    // ------
    //
    // Create and configure an apisauce-based api object.
    //
    const authHeaderKeys = [
        'access-token',
        'token-type',
        'client',
        'expiry',
        'uid'
    ]

    const api = apisauce.create({
        // base URL is read from the "constructor"
        baseURL,
        // here are some default headers
        headers: {
            'Cache-Control': 'no-cache',
        },
        // 10 second timeout...
        timeout: 30000
    })

    const AuthTokenMonitor = async (response) => {
        if (response.ok) {
            console.log("setItem in storage")
            // Setting header keys here
            for (const key of authHeaderKeys) {
                const header_value = response.headers[key]
                // console.log(header_value)
                if (header_value) {
                    // api.setHeader(key, header_value)
                    try {
                        await AsyncStorage.setItem(key, header_value)
                    } catch (error) {
                        console.log(error)
                    }
                }
            }
        }
    }

    api.addMonitor(AuthTokenMonitor)

    const AuthTokenTransformer = async (request) => {
        for (const key of authHeaderKeys) {
            request.headers[key] = await AsyncStorage.getItem(key)
        }
        // authHeaderKeys.forEach((key) => {

        // if (request.headers[key] == undefined) {

        //     console.log("----")
        //     console.log(request.headers[key])
        // }

        // })
    }

    // addAsyncRequestTransform is for fetching data from storage
    api.addAsyncRequestTransform(AuthTokenTransformer)

    // ------
    // STEP 2
    // ------
    //
    // Define some functions that call the api.  The goal is to provide
    // a thin wrapper of the api layer providing nicer feeling functions
    // rather than "get", "post" and friends.
    //
    // I generally don't like wrapping the output at this level because
    // sometimes specific actions need to be take on `403` or `401`, etc.
    //
    // Since we can't hide from that, we embrace it by getting out of the
    // way at this level.
    //
    const validateToken = (accessToken, client, uid) => api.get('companies/auth/validate_token', { 'access-token': accessToken, client: client, uid: uid })
    const signIn = (email, password) => api.post('companies/auth/sign_in', { email, password })
    const floorsIndex = () => api.get('companies/floors')

    // ------
    // STEP 3
    // ------
    //
    // Return back a collection of functions that we would consider our
    // interface.  Most of the time it'll be just the list of all the
    // methods in step 2.
    //
    // Notice we're not returning back the `api` created in step 1?  That's
    // because it is scoped privately.  This is one way to create truly
    // private scoped goodies in JavaScript.
    //
    return {
        // a list of the API functions from step 2
        validateToken,
        signIn,
        floorsIndex
    }
}

// let's return back our create method as the default.
export default ProveatApi