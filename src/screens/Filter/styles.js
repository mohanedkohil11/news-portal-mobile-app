import { StyleSheet } from 'react-native';
import { BaseColor, FontWeight, Typography } from '../../config';

export default StyleSheet.create({
    wrapContent: {
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    headerBtnContainer: { marginRight: 10 },
    headerBtn: StyleSheet.flatten([
        Typography.headline,
        { color: BaseColor.primary, fontWeight: FontWeight.semibold },
    ]),
    categoryTitle: StyleSheet.flatten([
        Typography.headline,
        { color: BaseColor.text, fontWeight: FontWeight.semibold },
    ]),
    flexOne: { flex: 1 },
    categoryFilterContainer: { paddingHorizontal: 20, paddingVertical: 15 },
    tagStyle: {
        marginTop: 8,
        marginRight: 8,
    },
});
