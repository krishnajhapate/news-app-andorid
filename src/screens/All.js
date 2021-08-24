import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards';
import { all } from '../config/data'

export default function All() {

    const [newsData, setNewsData] = useState([])

    useEffect(() => {
        setNewsData(all.articles)
    }, [])
    console.log(newsData)

    return (
        <Cards newsData={newsData} />
    )
}


