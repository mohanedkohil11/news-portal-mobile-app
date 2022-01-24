import React from 'react';
import { FlatList, View } from 'react-native';
import { NewsCard } from '../../components';
import { useNewsHistory } from '../../utils';
import EmptyState from '../../components/EmptyState';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

export default function History({ navigation }) {
    const { newsHistory } = useNewsHistory();

    const onCardPress = articleDetails => {
        // navigate to article details screen with article details as params
        navigation.navigate('Details', articleDetails);
    };

    return (
        <View style={styles.flexOne}>
            <SafeAreaView style={styles.flexOne}>
                <FlatList
                    contentContainerStyle={styles.flexGrowOne}
                    ListEmptyComponent={() => <EmptyState />}
                    data={Object.values(newsHistory)}
                    initialNumToRender={10}
                    keyExtractor={item => item.title}
                    renderItem={({ item }) => {
                        return (
                            <NewsCard
                                authorName={item.author}
                                date={item.publishedAt}
                                image={item.urlToImage}
                                title={item.title}
                                onPress={() => onCardPress(item)}
                            />
                        );
                    }}
                />
            </SafeAreaView>
        </View>
    );
}
