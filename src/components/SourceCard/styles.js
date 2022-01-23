import { StyleSheet } from 'react-native';
import { Typography, FontWeight, BaseColor } from '../../config';

export default StyleSheet.create({
    body: {
        paddingVertical: 20,
        paddingHorizontal: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: BaseColor.dividerColor,
        borderBottomWidth: 1,
        overflow: 'hidden',
    },
    title: StyleSheet.flatten([
        Typography.title3,
        {
            fontWeight: FontWeight.semibold,
            color: BaseColor.text,
        },
    ]),
});
