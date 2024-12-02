import React from "react";
import { Helmet } from "react-helmet";
import img from "../img/title11.jpg";
import "../index.css"
export const PageTitle=({title,description})=>{
return(
    <Helmet>
        <link  rel="icon"  sizes='16x16'  href={img} />
        <title> {title}</title>
        <meta name="description" content={description}/>
    </Helmet>
)
}