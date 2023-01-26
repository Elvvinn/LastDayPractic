import React, { useEffect, useState } from 'react'
import './trending.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'
function TrendingCards() {

    const [datam, setDatam] = useState([])
    const [search, setSearch] = useState("")
    function getfunc() {
        axios.get("http://localhost:4002/cards").then(({ data }) => {
            setDatam(data);
        });
    }

    useEffect(() => {
        getfunc()
    }, [])

    const deleteclick = (_id) => {
        axios.delete(`http://localhost:4002/cards/${_id}`).then(() => {
            getfunc()
        })
    }

    function sortprice() {
        setDatam([...datam.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))])
    }
    function sortpriceinc() {
        setDatam([...datam.sort((a, b) => (b.price > a.price) ? 1 : ((a.price > b.price) ? -1 : 0))])
    }
    return (
        <>
            <div className='inpdiv'>
                <input type={"text"} placeholder="Search Now" onChange={(e) => setSearch(e.target.value)} className="searchinp" />
                <button onClick={() => sortprice()}>  Sort By price + </button>
                <button onClick={() => sortpriceinc()}>  Sort By price -</button>
            </div>
            <section className='trendingcard'>

                {datam.filter(data => data.name.toLowerCase().includes(search.toLowerCase())).map((element) => (
                    <div>
                        <img src={element.imageUrl} />
                        <h3> {element.name} </h3>
                        <h4>  {element.title}  </h4>
                        <p> {element.price} </p>
                        <Link to={`/detail/${element._id}`}> <button> More Info </button> </Link>
                        <button onClick={() => { (deleteclick(element._id)) }}> Delete Me </button>

                    </div>

                ))}

            </section>
        </>
    )
}

export default TrendingCards