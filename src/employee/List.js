import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";

export default function List() {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/tours").then((res) => {
            setTours(res.data);
        });
    }, []);

    return (
        <>
            <div className={`content`}>
                <h1 style={{textAlign: "center", color: "blue", marginBottom: 50}}>Danh sách tour</h1>
                <div className={`row`} style={{marginBottom: 10}}>
                    <div className={`cog-lg-6`}>
                        <Link to={`/create`} className={`btn btn-primary`}>Thêm</Link>
                    </div>
                    <div className={`cog-lg-6`}></div>
                </div>
                <table className={`table table-hover`}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên</th>
                            <th>Giá</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                    {tours.map((tour, index) =>
                            <tr key={index}>
                                <td>{tour.id}</td>
                                <td><Link to={`/views/${tour.id}`}
                                style={{textDecoration:"none", color: "black"}}>{tour.name}</Link></td>
                                <td>{tour.price}</td>
                                <td>
                                    <Link to={`/update/${tour.id}`} className={`btn btn-warning`}>Sửa</Link>&ensp;
                                    <Link to={`/delete/${tour.id}`} className={`btn btn-danger`}>Xóa</Link>&ensp;
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </>
    )
}