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
        return err;
    }
};
