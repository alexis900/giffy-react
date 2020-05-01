import { useState, useEffect, useContext } from 'react'
import getGifs from '../services/getGifs'
import GifsContext  from '../context/GifContext'

export default function useGifs({ keyword }) {
    const [loading, setLoading] = useState(false)
    const {gifs, setGifs} = useContext(GifsContext)

    useEffect(() => {
        setLoading(true)
        const keyWordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
        getGifs({ keyword: keyWordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                if (keyword) localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword, setGifs])

    return {loading, gifs}
}