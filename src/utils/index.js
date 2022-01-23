import { useEffect, useState } from 'react';
import { PixelRatio } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const scaleValue = PixelRatio.get() / 2;

export const scaleWithPixel = (size, limitScale = 1.2) => {
    /* setting default upto 20% when resolution device upto 20% with defalt iPhone 7 */
    const value = scaleValue > limitScale ? limitScale : scaleValue;
    return size * value;
};

export const useNewsHistory = () => {
    /* custom hook to control setting and getting news history from local storage */
    const [newsHistory, setNewsHistory] = useState({});

    const updateHistoryByOne = articleDetails => {
        const articleTitle = articleDetails.title; // use article title as id because there no uid in fetched data
        const oldHistory = { ...newsHistory }; // copy history form state

        if (oldHistory[articleTitle]) {
            // check if article is viewed before and delete it
            delete oldHistory[articleTitle];
        }

        // add new article to the top and then the rest
        const updatedHistory = {
            [articleTitle]: articleDetails,
            ...oldHistory,
        };

        // saving the new history and then add it to the state
        AsyncStorage.setItem('newsHistory', JSON.stringify(updatedHistory)).then(() =>
            setNewsHistory(updatedHistory),
        );
    };

    //initial load for the history from local storage
    useEffect(() => {
        AsyncStorage.getItem('newsHistory').then(stringifiedHistory => {
            setNewsHistory(JSON.parse(stringifiedHistory) || {});
        });
    }, []);

    return { newsHistory, updateHistoryByOne };
};
