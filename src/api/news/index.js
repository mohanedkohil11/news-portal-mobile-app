import { Alert } from 'react-native';
import requester from '../requester';

export const getTopHeadlines = async (
    { country, category } = { country: 'eg', category: 'business' },
) => {
    // Get top headlines depending on country and category.
    try {
        const response = await requester.get(
            `/top-headlines?country=${country}&category=${category}`,
        );
        return response.data;
    } catch (err) {
        Alert.alert('Failed to load Top Headlines');
        return err;
    }
};

export const getTopHeadlineSources = async () => {
    // Get top headlines sources.
    try {
        const response = await requester.get('/top-headlines/sources');
        return response.data;
    } catch (err) {
        Alert.alert('Failed to load Sources');
        return err;
    }
};

export const getSourceNews = async sourceId => {
    // Get top sources news.
    try {
        const response = await requester.get(`/top-headlines?sources=${sourceId}`);
        return response.data;
    } catch (err) {
        Alert.alert('Failed to load Source news');
        return err;
    }
};
