import styled from "styled-components/native";
import { Picker } from '@react-native-picker/picker';
import { TextInput } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

interface ButtonProps {
  isActive: boolean;
}

export const Form = styled.View`
  flex: 1;
  padding: 24px;
  width: 100%;
`;

export const TransactionTypeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 16px;
`;


export const Button = styled.TouchableOpacity<ButtonProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 0.48;
  background-color: ${({ isActive }) => (isActive ? '#dcdcdc' : '#f0f2f5')};
  padding: 12px;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  margin-left: 8px;
  font-size: 14px;
`;

export const CategorySelect = styled(Picker)`
  background-color: white;
  border-radius: 5px;
  margin-bottom: 16px;
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: #ff7a00;
  padding: 16px;
  align-items: center;
  border-radius: 5px;
`;

export const SubmitButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

export const Input = styled(TextInput)`
    width: 100%;
    padding: 16px 18px;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text_dark};
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: ${({ theme}) => theme.borderRadius.medium}px;
`