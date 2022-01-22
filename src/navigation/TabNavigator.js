import React from 'react';
import Home from '../screens/Home';
import History from '../screens/History';
import Sources from '../screens/Sources';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BaseColor } from '../config';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    const getIcon = ({ color, size, route }) => {
        // get tab icon color,size and name by tab name

        const icons = {
            Home: <AntDesign name={'home'} size={size} color={color} />,
            History: <FontAwesome5 name={'history'} size={size} color={color} />,
            Sources: <MaterialIcons name={'source'} size={size} color={color} />,
        };

        return icons[route.name];
    };

    const screenOptions = ({ route }) => ({
        tabBarIcon: ({ color, size }) => getIcon({ color, size, route }),
        headerShown: false,
        tabBarActiveTintColor: BaseColor.primary,
    });

    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
            <Tab.Screen name="Sources" component={Sources} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="History" component={History} />
        </Tab.Navigator>
    );
}
