import React from 'react';
import {
    ImageBackground,
    ScrollView,
    Text,
    TouchableHighlight,
    View,
    Linking,
    Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import { useWindowDimensions } from 'react-native';
import { scaleWithPixel } from '../../utils';

const BackButton = ({ navigation }) => {
    // Back Button with position absolute to hover over the background image

    return (
        <TouchableHighlight
            style={styles.headerBtn}
            underlayColor={'rgba(126, 126, 126, 0.5)'}
            onPress={navigation.goBack}>
            <Ionicons name="chevron-back" color={'white'} size={40} />
        </TouchableHighlight>
    );
};

const CheckSourceButton = ({ url }) => {
    // Button to open url source in browsers with position absolute to hover over the background image

    const openUrl = () => {
        Linking.openURL(url).catch(() => Alert.alert(`Don't know how to open this URL: ${url}`));
    };

    if (!url) {
        return null;
    }

    return (
        <TouchableHighlight
            style={[styles.headerBtn, styles.externalBtn]}
            underlayColor={'rgba(126, 126, 126, 0.5)'}
            onPress={openUrl}>
            <Feather name="external-link" color={'white'} size={30} />
        </TouchableHighlight>
    );
};

const Header = ({ author, title, publishedAt, height }) => {
    // the upper part of the article {title,date,source}

    const articleDate = new Date(publishedAt);
    const formattedDate =
        articleDate.toLocaleDateString() + ' ' + articleDate.toLocaleTimeString().slice(0, -3); // formatting date to dd/mm/yyyy (24-hours):min

    return (
        <View style={[styles.headContainer, { minHeight: scaleWithPixel(height * 0.55) - 50 }]}>
            {!!author && (
                <Text numberOfLines={1} style={[styles.subtitle, styles.author]}>
                    {author}
                </Text>
            )}

            {!!title && (
                <Text style={styles.title} numberOfLines={3}>
                    {title}
                </Text>
            )}

            {!!publishedAt && (
                <Text style={[styles.subtitle, styles.alignStart]} numberOfLines={1}>
                    {formattedDate}
                </Text>
            )}
        </View>
    );
};

const Description = ({ description }) => {
    // lower part to show the complete article details

    return (
        <View style={styles.descriptionContainer}>
            {description ? (
                <Text style={styles.description}>{description}</Text>
            ) : (
                <Text style={[styles.description, { textAlign: 'center' }]}>No Data</Text>
            )}
        </View>
    );
};

export default function NewsDetails({ navigation, route }) {
    const { height } = useWindowDimensions();
    const { urlToImage, title, author, publishedAt, description, url } = route.params;

    return (
        <View style={styles.flexOne}>
            <ImageBackground
                source={{ uri: urlToImage }}
                style={[styles.imgBanner, { height: scaleWithPixel(height * 0.55) }]}>
                <BackButton navigation={navigation} />

                <CheckSourceButton url={url} />

                <View style={styles.body}>
                    <SafeAreaView style={styles.flexOne}>
                        <ScrollView contentContainerStyle={styles.scrollContainer}>
                            <Header
                                author={author}
                                publishedAt={publishedAt}
                                title={title}
                                height={height}
                            />
                            <Description description={description} />
                        </ScrollView>
                    </SafeAreaView>
                </View>
            </ImageBackground>
        </View>
    );
}
