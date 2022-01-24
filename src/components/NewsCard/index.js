import React from 'react';
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import styles from './styles';

export default function NewsCard({ style, image, title, authorName, date, onPress }) {
    const articleDate = new Date(date);
    const formattedDate =
        articleDate.toLocaleDateString() + ' ' + articleDate.toLocaleTimeString().slice(0, -3);

    return (
        <View style={[style, styles.container]}>
            <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
                <ImageBackground source={{ uri: image }} style={styles.blockImage}>
                    <View style={styles.body}>
                        {!!authorName && (
                            <Text numberOfLines={1} style={[styles.subtitle, styles.author]}>
                                {authorName}
                            </Text>
                        )}

                        {!!title && (
                            <Text style={styles.title} numberOfLines={2}>
                                {title}
                            </Text>
                        )}

                        {!!date && (
                            <Text style={[styles.subtitle, styles.alignStart]} numberOfLines={1}>
                                {formattedDate}
                            </Text>
                        )}
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
}
