import { Alert } from 'react-native';
import requester from '../requester';

export const getTopHeadlines = async (
    { country, category } = { country: 'eg', category: 'business' },
) => {
    // Get top headlines depending on country and category.
    try {
        const response = await requester.get(
            `/top-headliness?country=${country}&category=${category}`,
        );
        return response.data;
    } catch (err) {
        Alert.alert('Failed to load Top Headlines');
        return err;
    }
};
