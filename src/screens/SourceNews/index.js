import { useDispatch, useSelector } from 'react-redux';
import { FlatList, RefreshControl, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useCallback, useEffect, useState, useLayoutEffect } from 'react';
import { getSourceNews, cleanUpSourceNews } from '../../redux/actions/news';
import { NewsCard } from '../../components';
import styles from './styles';

export default function SourceNews({ navigation, route }) {
    const dispatch = useDispatch();
    const [refreshing, setRefreshing] = useState(false); // refresh state
    const { id, name } = route.params;
    const { selectedSourceNews } = useSelector(state => state.news);

    const loadData = useCallback(() => {
        // call to load top headlines with filters
        setRefreshing(true);
        dispatch(getSourceNews(id, () => setRefreshing(false)));
    }, [dispatch, id]);

    const onCardPress = articleDetails => {
        // navigate to article details screen with article details as params
        navigation.navigate('Details', articleDetails);
    };

    useEffect(() => {
        //load data in initial load & on filters change
        loadData();
        return () => dispatch(cleanUpSourceNews()); //clean up source news
    }, [dispatch, loadData]);

    useLayoutEffect(() => {
        navigation.setOptions({ title: name }); // set title of screen by source name
    }, [name, navigation]);

    return (
        <View style={styles.flexOne}>
            <SafeAreaView style={styles.flexOne}>
                <FlatList
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={loadData} />}
                    data={selectedSourceNews}
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
