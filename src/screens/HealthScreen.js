import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import { health } from '../config/data';


export default function HealthScreen() {
    const [newsData, setNewsData] = useState([])

    useEffect(() => {
        setNewsData(health.articles)
    }, [])

    return (
        <Cards newsData={newsData} />
    )
}
