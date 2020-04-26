import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import useGifs from '../../hooks/useGifs'

const POPULAR_GIFS = ["Matrix", "Chile", "Colombia", "Ecuador"]

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()

    const { loading, gifs } = useGifs({ keyword })

    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }
    

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={keyword} onChange={handleChange}/>
                <button>Buscar</button>
            </form>
            <h3>Última busqueda</h3>
            <ListOfGifs gifs={gifs}/>
            <h3 className="App-title">Los gifs más populares</h3>
            <ul>
                {
                    POPULAR_GIFS.map((popularGif) => (
                        <li key={popularGif}>
                            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}