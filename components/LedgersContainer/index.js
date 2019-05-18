import React from 'react'
import { connect } from 'react-redux'
import LedgersActions from '../../store/reducers/LedgersReducer'
import LedgerCard from '../LedgerCard'

class LedgersContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    componentDidMount() {
        this.props.ledgersIndexRequest()
    }

    render() {
        const { ledgers } = this.props
        const ledgerCards = ledgers.map((ledger) => <LedgerCard key={ledger.id} {...ledger} />)
        return (
            <React.Fragment>
                {ledgerCards}
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    const { auth, ledgersStore } = state

    return ({
        isSignedIn: auth.isSignedIn,
        ledgers: ledgersStore.ledgers
    })
}

const mapDispatchToProps = (dispatch) => ({
    ledgersIndexRequest: () => dispatch(LedgersActions.ledgersIndexRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(LedgersContainer)