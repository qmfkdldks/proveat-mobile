import React from 'react'
import { View } from 'react-native'
import { Card, Title, Paragraph, Chip, List } from 'react-native-paper'
import styled from 'styled-components'

const StyledCard = styled(Card)`
margin: 4px;
`
const StyledView = styled(View)`
flex-direction: row;
flex-wrap: wrap;
padding: 12px;
`

const StyledChip = styled(Chip)`
margin: 4px;
`

const OrderCard = (props) => {
    const { name, aasm_state, discount_percentage, items, created_at } = props
    const date_time = new Date(created_at).toLocaleString()

    const list_items = items.map((item) => (
        <List.Item
            key={item.id}
            title={item.product.name}
        />))

    return (
        <StyledCard>
            <Card.Content>
                <Title>Order {name}</Title>
                <Paragraph>{date_time}</Paragraph>
                <List.Section>
                    {list_items}
                </List.Section>
            </Card.Content>
        </StyledCard>
    )
}

export default OrderCard