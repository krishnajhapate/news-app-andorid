import { NativeBaseProvider, ScrollView, FlatList } from 'native-base'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { all } from '../config/data'

export default function All() {

    const [newsData, setNewsData] = useState([])

    useEffect(() => {
        setNewsData(all.articles)
    }, [])
    console.log(newsData)
    // newsData. 

    return (
        <NativeBaseProvider>
            <ScrollView
                height={850}
            >
                <FlatList
                    data={newsData}
                    renderItem={({ item }) => (
                        <View style={styles.newsContainer}>
                            <Text style={styles.title}>
                                {item.title}
                            </Text>
                            <Text style={styles.date}>
                                {item.publishedAt}
                            </Text>
                            <Text style={styles.newsDescription}>
                                {item.description}
                            </Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.source.id}

                />
            </ScrollView>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    newsContainer: {
        padding: 10
    },
    title: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: "600"
    },
    newsDescription: {
        fontSize: 16,
        marginTop: 10
    },
    date: {
        fontSize: 14
    },
})