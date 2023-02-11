import React from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import "./styleItems.css"

interface dataType{
    data:{
        id:Number,
        img:string,
        description:string,
        button:string,
        link:string
    }
}

const Item=({data}:dataType)=>{
const{id,img,description,button,link}=data

return(

        <Grid item lg={6} md={12} sm={12} xs={12}>
            <div className="item">
                <img src={img} alt="loading" className="itemImg"/>
                <p>{description} </p>
                <Button variant="contained">{button} </Button>
            </div>
             
        </Grid>

)

}

export default Item