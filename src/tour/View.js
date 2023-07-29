import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

export default function View() {
    const [tour, setTour] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8080/api/tours/${id}`).then((res) => {
            setTour(res.data)
        })
    }, [])
    return (
        <>
            <div style={{margin: "auto", width: 600}}>
                <h1 style={{marginTop: 100, marginBottom: 30}}>Chi tiết tour</h1>
                <h5>Tour du lịch {tour.name} </h5><br/>
                <h5>Giá: {tour.price}</h5><br/>
                <p>Giới thiệu: {tour.description}</p><br/>
                <Link className={'btn btn-info'} to={'/'}>
                    Danh sách
                </Link>
            </div>
            <div>

            </div>
        </>
    )
}