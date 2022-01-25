import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { BaseColor } from '../../config';
import styles from './styles';

export default function SourceCard({ source, onPress }) {
    if (!source) return null; // in case no source return nothing

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
            <View style={styles.body}>
                <Text numberOfLines={1} style={styles.title}>
                    {source}
                </Text>

                <AntDesign name="right" size={20} color={BaseColor.text} />
            </View>
        </TouchableOpacity>
    );
}
