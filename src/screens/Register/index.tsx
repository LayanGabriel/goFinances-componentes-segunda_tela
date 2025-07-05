import React, { useState } from "react";
import { Container, Header, Title } from "../Dashboard/styles";
import { Form, TransactionTypeContainer, Button, ButtonText, CategorySelect, SubmitButton, SubmitButtonText } from "./styles";
import { Input } from "./styles";
import { Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

export function Register() {
  const [transactionType, setTransactionType] = useState<'income' | 'outcome' | null>(null);
  const [category, setCategory] = useState('');

  function handleSelectType(type: 'income' | 'outcome') {
    setTransactionType(type);
  }

  function handleSubmit() {
    // Aqui vai a lógica de envio do formulário
    console.log('Enviado:', { transactionType, category });
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Input placeholder="Nome" />
        <Input placeholder="Valor" keyboardType="numeric" />

        <TransactionTypeContainer>
          <Button isActive={transactionType === 'income'} onPress={() => handleSelectType('income')}>
            <Feather name="arrow-up-circle" size={20} color="green" />
            <ButtonText>Entrada</ButtonText>
          </Button>

          <Button isActive={transactionType === 'outcome'} onPress={() => handleSelectType('outcome')}>
            <Feather name="arrow-down-circle" size={20} color="red" />
            <ButtonText>Saida</ButtonText>
          </Button>
        </TransactionTypeContainer>

        <CategorySelect
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
        >
          <Picker.Item label="Categoria" value="" />
          <Picker.Item label="Alimentação" value="alimentacao" />
          <Picker.Item label="Lazer" value="lazer" />
          <Picker.Item label="Transporte" value="transporte" />
        </CategorySelect>

        <SubmitButton onPress={handleSubmit}>
          <SubmitButtonText>Enviar</SubmitButtonText>
        </SubmitButton>
      </Form>
    </Container>
  );
}
