import { useState, useEffect } from 'react'
import getGifs from '../services/getGifs'

export default function useGifs({ keyword }) {
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        setLoading(true)
        const keyWordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
        getGifs({ keyword: keyWordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                if (keyword) localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword])

    return {loading, gifs}
}