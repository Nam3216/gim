import React from "react"
import Grid from '@mui/material/Grid';
import "./styleFooter.css"


const Footer=()=>{


    return(
        <div className="footer">

            <Grid container>
                <Grid item xs={12} md={4}>
                    <div className="footerLogo">
                        <img src="sport.png" alt="loading" id="logo"/>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <p className="footerTitle">Socios</p>
                    <p>Atencion a socios</p>
                    <p>Solicitud baja</p>
                    <p>Atencion a socios</p>
                </Grid>
                <Grid item xs={12} md={4}>
                    <p className="footerTitle">Legal</p>
                    <p>Eventos y sorteo</p>
                    <p>Terminos y condiciones</p>
                    <p>Defensa del consumidor</p>
                </Grid>

            </Grid>


        </div>
    )
}

export default Footer