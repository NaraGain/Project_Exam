import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";



export default function NavigatorButton () {

    const navigate = useNavigate()

    return <Button className="mb-3" type="default"
    onClick={()=>navigate(-1, {replace : true})}>Back</Button>
}