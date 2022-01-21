import { StyleSheet } from 'react-native';
import { scaleWithPixel } from '../../utils';
import { Typography, FontWeight, BaseColor } from '../../config';

export default StyleSheet.create({
    container: {
        margin: 7,
        borderRadius: 15,
        overflow: 'hidden',
    },
    blockImage: {
        height: scaleWithPixel(200),
        width: '100%',
        borderRadius: 15,
    },
    body: {
        position: 'absolute',
        padding: 15,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    title: {
        ...Typography.title2,
        fontWeight: FontWeight.bold,
        color: BaseColor.whiteColor,
        marginBottom: 7,
        alignSelf: 'flex-end',
    },
    subtitle: {
        ...Typography.headline,
        fontWeight: FontWeight.semibold,
        color: BaseColor.whiteColor,
        marginBottom: 7,
        alignSelf: 'flex-end',
    },
    alignStart: {
        alignSelf: 'flex-start',
    },
});
