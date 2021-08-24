import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';

import { sports } from '../config/data';

export default function SportsScreen() {
    const [newsData, setNewsData] = useState([])

    useEffect(() => {
        setNewsData(sports.articles)
    }, [])

    return (
        <Cards newsData={newsData} />
    )
}
