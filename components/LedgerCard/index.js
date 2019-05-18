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

const LedgerCard = (props) => {
    const { total, created_at, description, tag_list } = props
    const date_time = new Date(created_at).toLocaleString()
    return (
        <StyledCard>
            {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={(props) => <Avatar.Icon {...props} icon="folder" />} /> */}
            <Card.Content>
                <Title>$ {total}</Title>
                <Paragraph>{description}</Paragraph>
                <Paragraph>{date_time}</Paragraph>
                <StyledView>
                    {tag_list.map((tag, index) => (<StyledChip key={index}>{tag}</StyledChip>))}
                </StyledView>
            </Card.Content>
        </StyledCard>
    )
}

export default LedgerCard