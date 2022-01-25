import { StyleSheet } from 'react-native';
import { BaseColor, Typography } from '../../config';

export default StyleSheet.create({
    contentFilter: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        justifyContent: 'center',
        zIndex: 1,
    },
    filterTitle: StyleSheet.flatten([
        Typography.title3,
        { color: BaseColor.grayColor, marginLeft: 5 },
    ]),
    flexOne: { flex: 1 },
    flexGrowOne: { flexGrow: 1 },
});
