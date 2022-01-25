import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default function EmptyState() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>No Data</Text>
        </View>
    );
}
