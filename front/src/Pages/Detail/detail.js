import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet'

function DetailPage() {

    const [datam, setDatam] = useState([])
    let { _id } = useParams();
    useEffect(() => {

        axios.get(`http://localhost:4002/cards/${_id}`).then(({ data }) => {
            setDatam(data);
        });

    }, [])


    return (

        <>

            <Helmet>
                <title> Detail Page </title>
            </Helmet>
            <div>
                <img src={datam.imageUrl} />
                <h3> {datam.name} </h3>
                <h4>  {datam.title}  </h4>
                <p> {datam.price} $ </p>
            </div>


        </>
    )
}

export default DetailPage