import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import * as Yup from 'yup'
import axios from "axios";

export default function FormTour(props) {

    const navigate = useNavigate();

    const validation = Yup.object().shape({
        name: Yup.string().min(3, "Too short")
            .max(30, "Too long")
            .matches(/[a-zA-Z]+/, "Invalid name!")
            .required("Required!"),
        price: Yup.number().min(0, "Too young")
            .max(100000000, "Too old")
            .required("Required!"),
        description: Yup.string().min(3, "Too short")
            .max(30, "Too long")
            .matches(/[a-zA-Z]+/, "Invalid description!")
            .required("Required!"),
    })

    return (
        <>
            <Formik
                initialValues={props.tour}
                onSubmit={(values) => {
                    save(values)
                }}
                enableReinitialize={true}
                validationSchema={validation}
            >
                <Form className={`form`}>
                    {props.tour.id == null && <>
                        <div>
                            <h2>Thêm tour</h2>
                        </div>
                    </>}

                    {props.tour.id != null && <>
                        <div>
                            <h2>Sửa tour</h2>
                        </div>
                    </>}
                    <div className="mb-3">
                        <label htmlFor={'name'} className={'form-label'}>Tên</label>
                        <Field name={'name'} type={'text'} className={'form-control'} id={'name'}
                               placeholder={'Nhập tên'}/>
                        <span><ErrorMessage className={'error'} name={'name'}/></span>
                    </div>
                    <div className="mb-3">
                        <label htmlFor={'price'} className={'form-label'}>Giá</label>
                        <Field name={'price'} type={'number'} className={'form-control'} id={'price'}
                               placeholder={'Nhập giá'}/>
                        <span><ErrorMessage className={'error'} name={'price'}/></span>
                    </div>
                    <div className="mb-3">
                        <label htmlFor={'description'} className={'form-label'}>Mô tả</label>
                        <Field name={'description'} type={'text'} className={'form-control'} id={'description'}
                               placeholder={'Mô tả'}/>
                    </div>
                    <div className="mb-3">
                        <div style={{textAlign: "center"}}>
                            {props.tour.id == null && <>
                                    <button className={'btn btn-primary'}>Thêm</button>
                            </>}

                            {props.tour.id != null && <>
                                    <button className={'btn btn-warning'}>sửa</button>
                            </>}

                            &ensp;&ensp;
                            <Link className={'btn btn-info'} to={'/'}>
                                Danh sách
                            </Link>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    )

    function save(values) {
        axios.post('http://localhost:8080/api/tours', values).then(() => {
            navigate('/')
            localStorage.clear()
        })
    }

}