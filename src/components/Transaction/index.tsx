import {
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    DataTransaction,
    TypeExpense,
    LeftGroup
} from "./styles"
import React from 'react';

interface Data {
    type: 'up' | 'down' | 'total'
    title: string
    amount: string
    typeExpense: string
    dataTransaction: string
    icon?: string
}

/* const icon = {
     up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign',
    sales: 'dollar-sign',
} */


interface Props{
    data: Data
}


export function Transaction({ data }: Props) {
    return (
        <Container >
            <Header>
                <Title >
                    {data.title}
                </Title>
                <Amount type={data.type}>
                    {data.amount}
                </Amount>
            </Header>

            <Footer>
                <LeftGroup>
                    <TypeExpense >
                        {data.typeExpense}
                    </TypeExpense>
                </LeftGroup>

                <DataTransaction >
                    {data.dataTransaction}
                </DataTransaction>
            </Footer>
        </Container>
    )
}

