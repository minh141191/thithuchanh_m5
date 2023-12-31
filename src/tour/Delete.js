import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import {useEffect, useState} from "react";

export default function Delete() {
    const navigate = useNavigate();
    const {id} = useParams();

    const [tour, setTour] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/tours/${id}`).then((res) => {
            setTour(res.data);
        });
    }, []);

    const deleteTour =  async (id) => {
        Swal.fire({
                title: 'Bạn muốn xoá tour này?',
                showDenyButton: true,
                confirmButtonText: 'Xóa',
                denyButtonText: 'Hủy',
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                axios.delete(`http://localhost:8080/api/tours/${id}`).then(() => {
                    Swal.fire({
                        title: 'Đã xóa!',
                        icon: 'success'
                    })
                })
                navigate("/");
            } else if (result.isDenied) {
                Swal.fire({
                    title: 'Đã hủy!',
                    icon: 'info'
                })
                navigate(`/delete/${id}`);
            }
        })
    };
    return (
        <>
            <div style={{margin: "auto", width: 600}}>
                <h1 style={{marginTop: 100, marginBottom: 50}}>Xóa tour</h1>
                <h5>Tour du lịch {tour.name} </h5><br/>
                <h5>Giá: {tour.price}</h5><br/>
                <p style={{width: 600}}>Giới thiệu: {tour.description}</p><br/>
                <div className={`d-flex justify-content-start`}>
                    <button className={`btn btn-danger`} onClick={() => deleteTour(tour.id)}>Xóa tour</button>
                    &ensp;
                    <Link to={`/`} className={`btn btn-info`}>Danh sách</Link>
                </div>

            </div>
            <div>

            </div>
        </>
    )
}