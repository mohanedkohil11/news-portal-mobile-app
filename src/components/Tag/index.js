import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default function Tag({ style, primary, outline, onPress, children }) {
    return (
        <TouchableOpacity
            style={[styles.default, primary && styles.primary, outline && styles.outline, style]}
            activeOpacity={0.9}
            onPress={onPress}>
            <Text
                style={[primary && styles.textPrimary, outline && styles.textOutline]}
                numberOfLines={1}>
                {children}
            </Text>
        </TouchableOpacity>
    );
}
