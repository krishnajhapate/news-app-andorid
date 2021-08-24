import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';

import { business } from '../config/data';

export default function Business() {
    const [newsData, setNewsData] = useState([])

    useEffect(() => {
        setNewsData(business.articles)
    }, [])

    return (
        <Cards newsData={newsData} />
    )
}
