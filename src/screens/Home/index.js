import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, RefreshControl, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { NewsCard } from '../../components';
import { getTopHeadlines } from '../../redux/actions/news';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { BaseColor } from '../../config';
import styles from './styles';

export default function Home({ navigation }) {
    const dispatch = useDispatch();
    const [refreshing, setRefreshing] = useState(false); // refresh state
    const { topHeadlines, filters } = useSelector(state => state.news);

    const loadData = useCallback(() => {
        // call to load top headlines with filters
        setRefreshing(true);
        dispatch(getTopHeadlines(filters, () => setRefreshing(false)));
    }, [dispatch, filters]);

    useEffect(() => {
        //load data in initial load & on filters change
        loadData();
    }, [loadData, filters]);

    return (
        <View style={styles.flexOne}>
            <SafeAreaView style={styles.flexOne}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Filter')}
                    style={styles.contentFilter}>
                    <FontAwesome5 name="filter" size={20} color={BaseColor.grayColor} solid />
                    <Text style={styles.filterTitle}>Filter</Text>
                </TouchableOpacity>

                <FlatList
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={loadData} />}
                    scrollEventThrottle={1}
                    data={topHeadlines}
                    initialNumToRender={10}
                    keyExtractor={item => item.title}
                    renderItem={({ item }) => {
                        return (
                            <NewsCard
                                authorName={item.author}
                                date={item.publishedAt}
                                image={item.urlToImage}
                                title={item.title}
                                onPress={() => { }}
                            />
                        );
                    }}
                />
            </SafeAreaView>
        </View>
    );
}
