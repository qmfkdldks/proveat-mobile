import React from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity, Text } from 'react-native'
import { CalculatorInput } from 'react-native-calculator'
import { TextInput, Button } from 'react-native-paper'
import TagInput from "../TagInput"
import LedgersActions from '../../store/reducers/LedgersReducer';

class LedgerForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            total: 0,
            description: "",
            tag_list: props.tag_list || []
        };
    }

    createLedger = () => {
        const { description, tag_list, total } = this.state
        this.props.ledgersCreate({ description, tag_list, total })
    }


    render() {
        const { description, tag_list, total } = this.state
        return (
            <View style={{ flex: 1, padding: 10 }}>
                <CalculatorInput
                    value={total}
                    onChange={(value) => this.setState({ total: value })}
                    // hasAcceptButton
                    style={{ flex: 1 }}
                    roundTo={2} />
                <TextInput mode="outlined" label="description" placeholder="Note goes here" multiline numberOfLines={3} />
                <TagInput tag_list={tag_list} />
                <Button icon="done" mode="contained" onPress={this.createLedger} style={{ alignSelf: "flex-end" }}>Create!</Button>
            </View>
        )
    }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
    ledgersCreate: ({ description, tag_list, total }) => dispatch(LedgersActions.ledgersCreateRequest(description, tag_list, total))
})

export default connect(null, mapDispatchToProps)(LedgerForm)
