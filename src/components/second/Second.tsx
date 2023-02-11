import React from "react"
import Button from '@mui/material/Button';
import Mock from "../mock/mock";
import Item from "../items/items";
import Grid from '@mui/material/Grid';
import { Container } from "@mui/material";
import "./secondStyle.css"

const Second=()=>{


    return(
        <div className="secondContainer">
          
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <div className="secondText">
                            <p className="titleP">Se miembro del mejor gimnasio</p>
                            <div className="secondP">
                                <p>+ de 300 sedes</p>
                                <p>Instalaciones de primer nivel</p>
                                <p>Profesores certificados</p>
                                <Button variant="contained">Contained</Button>
                            </div>
                       


                        </div>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <div className="secondImage">
                        
                                <Grid container spacing={2}>
                            {Mock.map((item)=>{
                                return(
                                    
                                            <Item data={item}/>

                                    
                                )
                            })}
                            </Grid>
                        
                        </div>
                    </Grid>
                </Grid>
      
        </div>
    )

}

export default Second