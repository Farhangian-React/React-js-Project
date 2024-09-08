import React from "react";
import { Helmet } from "react-helmet";
import './PageTitle.css';

export const PageTitle=({title,description})=>{
return(
    <Helmet>
        <link  rel="icon"  href='https://png.pngtree.com/png-clipart/20230817/original/pngtree-mountains-logo-design-sky-high-vector-picture-image_10974603.png' />
        <title> {title}</title>
        <meta name="description" content={description}/>
    </Helmet>
)
}