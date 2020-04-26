import React from 'react'

export default function Detail({ params }) {
    console.log(params.id)
    return <h1>Gif con ID {params.id}</h1>
}
