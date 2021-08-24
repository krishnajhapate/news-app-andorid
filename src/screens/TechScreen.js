import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';

import { tech } from '../config/data';

export default function TechScreen() {
    const [newsData, setNewsData] = useState([])

    useEffect(() => {
        setNewsData(tech.articles)
    }, [])

    return (
        <Cards newsData={newsData} />
    )
}
