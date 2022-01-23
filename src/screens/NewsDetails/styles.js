import { StyleSheet } from 'react-native';
import { BaseColor, FontWeight, Typography } from '../../config';

export default StyleSheet.create({
    imgBanner: {
        width: '100%',
        flex: 1,
    },
    headerBtn: {
        position: 'absolute',
        zIndex: 1,
        top: 15,
        left: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    externalBtn: {
        left: undefined,
        right: 10,
        padding: 5,
    },
    body: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    headContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        zIndex: 2,
        justifyContent: 'flex-end',
    },
    title: StyleSheet.flatten([
        Typography.title1,
        {
            fontWeight: FontWeight.bold,
            color: BaseColor.whiteColor,
            marginBottom: 7,
            alignSelf: 'flex-end',
        },
    ]),
    subtitle: StyleSheet.flatten([
        Typography.headline,
        {
            fontWeight: FontWeight.semibold,
            color: BaseColor.whiteColor,
            marginBottom: 7,
            alignSelf: 'flex-end',
        },
    ]),
    description: StyleSheet.flatten([
        Typography.title3,
        {
            fontWeight: FontWeight.semibold,
            color: BaseColor.whiteColor,
            lineHeight: 35,
        },
    ]),
    alignStart: {
        alignSelf: 'flex-start',
    },
    author: {
        backgroundColor: 'rgba(126, 126, 126, 0.5)',
        padding: 5,
        borderRadius: 5,
    },
    descriptionContainer: {
        backgroundColor: '#1f1f1f',
        padding: 20,
        flexGrow: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    flexOne: { flex: 1 },
    scrollContainer: {
        flexGrow: 1,
    },
});
