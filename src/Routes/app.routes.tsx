import React from "react";
import { Register } from "../screens/Register";
import { Dashboard } from "../screens/Dashboard";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {useTheme} from "styled-components/native"
import {MaterialIcons} from "@expo/vector-icons"

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes(){
    const theme = useTheme();
    return(

        <Navigator id={undefined} 
        screenOptions={{
            headerShown: false,
            tabBarActiveBackgroundColor:theme.colors.primary,
            tabBarActiveTintColor:theme.colors.text,
            tabBarLabelPosition:'beside-icon',
        }}>


         <Screen
            name="Listagem"
            component={Dashboard}
            options={{
                tabBarIcon:(({size ,color}) =>  (
                    <MaterialIcons
                        name="format-list-bulleted"
                        size={size}
                        color={color}
                    />
                ))
            }}
        />

         <Screen
            name="Cadastrar"
            component={Register}
        />
        </Navigator>
    )
}

