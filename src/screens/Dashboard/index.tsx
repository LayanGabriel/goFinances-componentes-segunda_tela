import { Feather } from '@expo/vector-icons';
import React from 'react';
import {
    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    UserWrapper,
    Icon,
    HighlightCards,
    Transactions,
    Text,
    TransactionList
} from "./styles";
import { HighlightCard } from '../../components/HighlightCard';
import { Transaction } from '../../components/Transaction';



export function Dashboard() {
   const data =[{
    type:'down',
    title:'Mecanica Thomaz',
    amount:'- R$ 180,00',
    dataTransaction:'18/06/2023',
    typeExpense:'Manutenção'
   },
   {
    type:'up',
    title:'Salario',
    amount:'R$ 12.000,00',
    dataTransaction:'05/06/2023',
    typeExpense:'Salario'
   },
   {
    type:'down',
    title:'Conta de Energia',
    amount:'- R$ 596,00',
    dataTransaction:'28/06/2023',
    typeExpense:'Energia',
   },
   {
    type:'down',
    title:'Jogos Variados',
    amount:'- R$ 680,00',
    dataTransaction:'05/07/2023',
    typeExpense:'Entretenimento ',
   }]
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://plus.unsplash.com/premium_photo-1663090435873-c6afdb77389c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9zdG8lMjBkZSUyMG11bGhlciUyMGJvbml0YXxlbnwwfHwwfHx8MA%3D%3D' }} />
                        <User>
                            <UserGreeting>Olá</UserGreeting>
                            <UserName>Aluno</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power" />

                </UserWrapper>
            </Header>
            <HighlightCards>
                <HighlightCard
                    type='up'
                    title='Entradas'
                    amount='R$ 17.000,00'
                    lastTransaction='Última entrada em 16 de Junho'
                />
                <HighlightCard
                    type='down'
                    title='Saídas'
                    amount='- R$ 12.000,00'
                    lastTransaction='Última saída em 16 de Junho'
                />
                <HighlightCard
                    type='total'
                    title='Total'
                    amount='R$ 7.000,00'
                    lastTransaction='De 1 a 16 de Junho'
                />
            </HighlightCards>

            <Transactions>
                <Text>Listagem</Text>
                <TransactionList
                data={data}
                renderItem={({ item }) => <Transaction data={item}/>}  
                />
                
            
            </Transactions>
        </Container>
    );
}