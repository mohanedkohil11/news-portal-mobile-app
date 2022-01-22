import React, { useCallback, useLayoutEffect, useState } from 'react';
import { View, TouchableOpacity, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../redux/actions/news';
import Tag from '../../components/Tag';
import { Filters } from '../../config';
import styles from './styles';

export default function Filter({ navigation }) {
    const dispatch = useDispatch();
    const { filters } = useSelector(state => state.news);
    const [localFilters, setLocalFilters] = useState(filters);

    const onApply = useCallback(() => {
        dispatch(setFilters(localFilters));
        navigation.goBack();
    }, [dispatch, localFilters, navigation]);

    const onCategoryChange = value => {
        setLocalFilters(prevState => ({ ...prevState, category: value }));
    };

    const onCountryChange = value => {
        setLocalFilters(prevState => ({ ...prevState, country: value }));
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <TouchableOpacity onPress={onApply} style={styles.headerBtnContainer}>
                        <Text style={styles.headerBtn} numberOfLines={1}>
                            Apply
                        </Text>
                    </TouchableOpacity>
                );
            },
        });
    }, [navigation, onApply]);

    return (
        <View style={styles.flexOne}>
            <SafeAreaView style={styles.flexOne} edges={['right', 'left']}>
                <ScrollView>
                    <CategoryFilter
                        title="COUNTRY"
                        selected={localFilters.country}
                        onSelect={onCountryChange}
                        options={Filters.countries}
                    />
                    <CategoryFilter
                        title="CATEGORY"
                        selected={localFilters.category}
                        onSelect={onCategoryChange}
                        options={Filters.categories}
                    />
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const CategoryFilter = ({ title, selected, onSelect, options }) => (
    <View style={styles.categoryFilterContainer}>
        <Text style={styles.categoryTitle}>{title}</Text>
        <View style={styles.wrapContent}>
            {Object.entries(options).map(tag => (
                <Tag
                    primary={tag[0] === selected}
                    outline={!(tag[0] === selected)}
                    key={tag[0]}
                    style={styles.tagStyle}
                    onPress={() => {
                        onSelect(tag[0]);
                    }}>
                    {tag[1]}
                </Tag>
            ))}
        </View>
    </View>
);
