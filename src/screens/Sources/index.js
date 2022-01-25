import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { getTopHeadlinesSources } from '../../redux/actions/news';
import SourceCard from '../../components/SourceCard';
import EmptyState from '../../components/EmptyState';
import styles from './styles';

export default function Sources({ navigation }) {
    const dispatch = useDispatch();
    const [refreshing, setRefreshing] = useState(false); // refresh state
    const { topHeadlinesSources } = useSelector(state => state.news);

    const loadData = useCallback(() => {
        // call to load top headlines sources
        setRefreshing(true);
        dispatch(getTopHeadlinesSources(() => setRefreshing(false)));
    }, [dispatch]);

    const onCardPress = source => {
        // navigate to source news screen with source name as params
        navigation.navigate('SourceNews', source);
    };

    useEffect(() => {
        //load data in initial load & on filters change
        loadData();
    }, [loadData]);

    return (
        <View style={styles.flexOne}>
            <SafeAreaView style={styles.flexOne}>
                <FlatList
                    contentContainerStyle={styles.flexGrowOne}
                    ListEmptyComponent={() => <EmptyState />}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={loadData} />}
                    data={topHeadlinesSources}
                    initialNumToRender={10}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return <SourceCard source={item.name} onPress={() => onCardPress(item)} />;
                    }}
                />
            </SafeAreaView>
        </View>
    );
}
