import React from 'react';
import Filter from '../screens/Filter';
import TabNavigator from './TabNavigator';
import SourceNews from '../screens/SourceNews';
import NewsDetails from '../screens/NewsDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="TabNavigator">
                <RootStack.Screen
                    name="TabNavigator"
                    component={TabNavigator}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen
                    name="Details"
                    component={NewsDetails}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen name="SourceNews" component={SourceNews} />
                <RootStack.Screen name="Filter" component={Filter} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
