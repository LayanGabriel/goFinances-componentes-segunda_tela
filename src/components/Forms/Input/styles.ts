import { TextInput } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"


export const Container = styled(TextInput)`
width: 100%;
padding:16px 18px;

font-family: ${({theme})=>theme.fonts.regular};
font-size: ${RFValue(14)}px;

color: ${({ theme })=>theme.colors.text_dark};
background-color: ${({ theme })=>theme.borderRadius.madium}px;
margin-bottom: 10px;
`