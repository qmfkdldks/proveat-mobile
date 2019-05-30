import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, RefreshControl } from 'react-native'
import LedgersActions from '../../store/reducers/LedgersReducer'
import LedgerCard from '../LedgerCard'

class LedgersContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.ledgersIndexRequest()
    }

    _onRefresh = () => {
        console.log("Refreshing...")
        this.props.ledgersIndexRequest()
    }


    render() {
        const { ledgers } = this.props
        const ledgerCards = ledgers.map((ledger) => <LedgerCard key={ledger.id} {...ledger} />)
        return (
            <React.Fragment>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.props.isLoading}
                            onRefresh={this._onRefresh}
                        />
                    }>
                    {ledgerCards}
                </ScrollView>
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    const { auth, ledgersStore } = state

    return ({
        isSignedIn: auth.isSignedIn,
        ledgers: ledgersStore.ledgers,
        isLoading: ledgersStore.isLoading
    })
}

const mapDispatchToProps = (dispatch) => ({
    ledgersIndexRequest: () => dispatch(LedgersActions.ledgersIndexRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(LedgersContainer)