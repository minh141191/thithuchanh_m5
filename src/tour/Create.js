import {useState} from "react";
import {Tour} from "../model/Tour";
import {useNavigate} from "react-router-dom";
import FormTour from "./FormTour";


export default function Create() {
    const [tour] = useState(new Tour())
    const navigate = useNavigate()

    return (
        <>
            <FormTour tour={tour} naviage={navigate}/>
        </>
    )
}