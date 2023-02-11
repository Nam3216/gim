import React from "react";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Container } from "@mui/material";
import "./styleHome.css"

const Home=()=>{


    return(
        <>
        <div className="homeContainer">
            
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        
                            <div className="homeImage">
                                <h3>Potenciamos tu Bienestar</h3>
                                <p>¡Comenza hoy mismo!</p>
                                <div className="homeButton">
                                    <Button variant="contained"><a href="#gimmember" className="aLink" > Asociate Ahora</a></Button>
                                    <Button variant="contained"><a href="#activities" className="aLink" > Actividades Online</a></Button>
                                </div>
                            </div>
                    </Grid>
                    <Grid item md={6} xs={12}>
                            <div className="homeSecond">

                            </div>
                        
                    </Grid>
                </Grid>
       
        </div>

        </>
    )

}

export default Home