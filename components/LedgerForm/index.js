import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native'
import { Calculator } from 'react-native-calculator'
import LedgersActions from '../../store/reducers/LedgersReducer';

class LedgerForm extends React.Component {
    //   static navigationOptions = {
    //     title: 'Expense',
    //   }

    constructor(props) {
        super(props)

        this.state = {
            description: "",
            tag_list: props.tag_list || []
        };
    }

    createLedger = (total) => {
        const { description, tag_list } = this.state
        this.props.ledgersCreate({ description, tag_list, total })
    }


    render() {
        const { description, tag_list } = this.state
        return (
            <View style={{ flex: 1 }}>
                <Calculator
                    style={{ flex: 1 }}
                    hasAcceptButton
                    onAccept={this.createLedger}
                    roundTo={2} />
            </View>
        )
    }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
    ledgersCreate: ({ description, tag_list, total }) => dispatch(LedgersActions.ledgersCreateRequest(description, tag_list, total))
})

export default connect(null, mapDispatchToProps)(LedgerForm)
