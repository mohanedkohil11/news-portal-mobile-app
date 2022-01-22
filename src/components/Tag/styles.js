import { StyleSheet } from 'react-native';
import { Typography, BaseColor } from '../../config';

export default StyleSheet.create({
    default: {
        flexDirection: 'row',
    },
    primary: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 17,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: BaseColor.primary,
    },
    textPrimary: StyleSheet.flatten([Typography.caption1, { color: BaseColor.whiteColor }]),
    outline: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 16,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: BaseColor.primary,
    },
    textOutline: StyleSheet.flatten([Typography.caption1, { color: BaseColor.primary }]),
});
