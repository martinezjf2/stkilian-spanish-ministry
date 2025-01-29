import Head from "next/head";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';

export default function About({data}) {
    const [name, setName] = useState(data.name)
    console.log(data)
    // useEffect(() => {
    //     console.log('Component Loaded')
    //     axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
    //     .then(res => setName(res.data.name))
    // }, [])


    return (
        <div className="">
            <Head>
                <title> Pokemon Page</title>
                <link ref="icon" href="/favicon.ico" />
            </Head>
            <h1>Pokemon Page</h1>
            <h2>{name}</h2>
            <p>This is the Pokemon Page</p>
        </div>
    )
}

// Server Side Rendering
export async function getStaticProps() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
    const data = await res.json()
    return {props: {data}}
}