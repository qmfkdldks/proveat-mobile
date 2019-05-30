import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, ListView } from 'react-native'
import OrdersActions from '../../store/reducers/OrdersReducer'
import LedgersActions from '../../store/reducers/LedgersReducer'
import LedgerCard from '../LedgerCard'
import OrderCard from '../OrderCard'
import InfiniteScrollView from 'react-native-infinite-scroll-view'

class RecordsContainer extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: this._rowHasChanged.bind(this),
            }),
        };

        // Update the data store with initial data.
        // this.state.dataSource = this.getUpdatedDataStore(props);
    }

    componentWillMount() {
        // Initial fetch for data, assuming that listData is not yet populated.
        this._loadMoreContentAsync();
    }

    componentWillReceiveProps(nextProps) {
        // Trigger a re-render when receiving new props (when redux has more data).
        this.setState({
            dataSource: this.getUpdatedDataSource(nextProps),
        });
    }

    _loadMoreContentAsync = () => {
        const { ledgersPage, ledgersPerPage, ordersPage, ordersPerPage } = this.props
        if (ledgersPage != 0) {
            console.log("requested ledgers")
            this.props.ledgersIndexRequest(ledgersPage, ledgersPerPage)
        }
        if (ordersPage != 0) {
            console.log("requested orders")
            this.props.ordersIndexRequest(ordersPage, ordersPerPage)
        }
    }

    getUpdatedDataSource = (props) => {
        // See the ListView.DataSource documentation for more information on
        // how to properly structure your data depending on your use case.
        const { orders, ledgers } = props
        const combined = [...orders, ...ledgers]
        // console.log(combined.length)
        // rows = props.orders
        combined.sort((a, b) => {
            const a_created_at = new Date(a)
            const b_created_at = new Date(b)
            if (a_created_at > b_created_at) {
                return 1;
            }
            if (a_created_at < b_created_at) {
                return -1;
            }
            return 0;
        })
        let ids = combined.map((obj, index) => index);
        return this.state.dataSource.cloneWithRows(combined);
    }

    _rowHasChanged = (r1, r2) => {
        // You might want to use a different comparison mechanism for performance.
        return JSON.stringify(r1) !== JSON.stringify(r2);
    }

    renderRow = (data) => {
        return (data.orderable_id != undefined) ? <OrderCard key={data.id} {...data} /> : <LedgerCard key={data.id} {...data} />
    }

    canLoadMore = () => {
        const { ledgersPage, ledgersIsLoading, ordersPage, ordersIsLoading } = this.props
        const moreOrders = (ordersPage > 0) ? true : false
        const moreLedgers = (ledgersPage > 0) ? true : false

        return (moreOrders && !ordersIsLoading) || (moreLedgers && !ledgersIsLoading)
    }

    render() {

        return (
            <React.Fragment>
                <ListView
                    enableEmptySections
                    renderScrollComponent={props => <InfiniteScrollView {...props} />}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    canLoadMore={this.canLoadMore}
                    onLoadMoreAsync={this._loadMoreContentAsync}
                />
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    const { ledgersStore, ordersStore } = state

    return ({
        ledgers: ledgersStore.ledgers,
        ledgersIsLoading: ledgersStore.isLoading,
        ledgersPage: ledgersStore.page,
        ledgersPerPage: ledgersStore.per_page,

        orders: ordersStore.orders,
        ordersIsLoading: ordersStore.isLoading,
        ordersPage: ordersStore.page,
        ordersPerPage: ordersStore.per_page
    })
}

const mapDispatchToProps = (dispatch) => ({
    ordersIndexRequest: (page, per_page) => dispatch(OrdersActions.ordersIndexRequest(page, per_page)),
    ledgersIndexRequest: (page, per_page) => dispatch(LedgersActions.ledgersIndexRequest(page, per_page))
})

export default connect(mapStateToProps, mapDispatchToProps)(RecordsContainer)