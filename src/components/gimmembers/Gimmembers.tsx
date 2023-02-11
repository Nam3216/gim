import React,{useState} from "react";
import Grid from '@mui/material/Grid';
import { Container } from "@mui/material";
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import CheckIcon from '@mui/icons-material/Check';
import "./styleGimmemebers.css"

const Gimmembers=()=>{
    const[check, setCheck]=useState("mensual")

    const handleGim=(component:string)=>{
        setCheck(component)

    }

    return(
        <div className="gim" id="gimmember">
            <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                    <div className="gimText">
                        <p className="titleP">Elige tu Plan</p>
                        <p>Todo lo que buscás en un solo lugar. Estás a un click de distancia de asociarte a la comunidad deportiva más grande del país.</p>
                        <div className="buttonCont">
                                                
                            <Button variant="contained" onClick={()=>handleGim("mensual")}>Mensual</Button>
                            <Button variant="contained" onClick={()=>handleGim("anual")}>Anual</Button>
                        </div>   
                      

                    </div>
                </Grid>
                <Grid item md={6} xs={12}>
                 
                    <div className="gimPlanContainer">
                    <Grid container spacing={2} >
                        {check=="mensual" ? (<>
                            <Grid item lg={6} md={12} sm={12} xs={12}>
                                <div className="gimPlanMensual">
                                  
                                        <p className="titlePlanP">Mensual</p>
                                        <p className="titlePlan">Plan Plus</p>
                                        <Divider className="dividerGrid" />
                                        <p>$ 9.000 por mes</p>
                                        <Button variant="contained" className="buttonGim">Asociate</Button>
                                    
                                        <div className="planList">
                                            <CheckIcon className="checkList"/>  <p>Mas de 300 sedes</p>
                                        </div>
                                        <div className="planList">
                                            <CheckIcon className="checkList"/>   <p>Profesores certificados</p>
                                        </div>
                                        <div className="planList">
                                            <CheckIcon className="checkList"/>   <p>Rutinas a medida </p>
                                        </div>
                                        <Divider className="dividerGrid" />
                                        <img src="certified.png" alt="loading" className="logoCert"/>
                                        
                                    
                                 </div>
                          </Grid>
                           
                            
                            <Grid item lg={6} md={12} sm={12} xs={12}>
                                    <div className="gimPlanMensual">
                                       
                                            <p className="titlePlanP">Mensual</p>
                                            <p className="titlePlan">Plan Total</p>
                                            <Divider className="dividerGrid" />
                                            <p>$ 10.000 por mes</p>
                                            <Button variant="contained" className="buttonGim">Asociate</Button>
                                           
                                            <div className="planList">
                                                <CheckIcon className="checkList"/>  <p>Mas de 300 sedes</p>
                                            </div>
                                            <div className="planList">
                                                <CheckIcon className="checkList"/>  <p>Profesores certificados</p>
                                            </div>
                                            <div className="planList">
                                                <CheckIcon className="checkList"/>  <p>Rutinas a medida</p>
                                            </div>
                                            <Divider className="dividerGrid" />
                                            <img src="certified.png" alt="loading" className="logoCert"/>
                                       
                                    </div>
                            </Grid></>
                            ):(<>
                            <Grid item lg={6} md={12} sm={12} xs={12}>
                                <div className="gimPlanMensual">
                                  
                                        <p className="titlePlanP">Anual</p>
                                        <p className="titlePlan">Plan Plus</p>
                                        <Divider className="dividerGrid" />
                                        <p>$ 100.000 en 12 pagos</p>
                                        <Button variant="contained" className="buttonGim">Asociate</Button>
                                    
                                        <div className="planList">
                                            <CheckIcon className="checkList"/>  <p>Mas de 300 sedes</p>
                                        </div>
                                        <div className="planList">
                                            <CheckIcon className="checkList"/>   <p>Profesores certificados</p>
                                        </div>
                                        <div className="planList">
                                            <CheckIcon className="checkList"/>   <p>Rutinas a medida </p>
                                        </div>
                                        <Divider className="dividerGrid" />
                                        <img src="certified.png" alt="loading" className="logoCert"/>
                                        
                                    
                                 </div>
                          </Grid>
                           
                            
                            <Grid item lg={6} md={12} sm={12} xs={12}>
                                    <div className="gimPlanMensual">
                                       
                                            <p className="titlePlanP">Anual</p>
                                            <p className="titlePlan">Plan Total</p>
                                            <Divider className="dividerGrid" />
                                            <p>$ 110.000 en 12 pagos</p>
                                            <Button variant="contained" className="buttonGim">Asociate</Button>
                                           
                                            <div className="planList">
                                                <CheckIcon className="checkList"/>  <p>Mas de 300 sedes</p>
                                            </div>
                                            <div className="planList">
                                                <CheckIcon className="checkList"/>  <p>Profesores certificados</p>
                                            </div>
                                            <div className="planList">
                                                <CheckIcon className="checkList"/>  <p>Rutinas a medida</p>
                                            </div>
                                            <Divider className="dividerGrid" />
                                            <img src="certified.png" alt="loading" className="logoCert"/>
                                       
                                    </div>
                            </Grid>
                            </>
                            )}

                       
                    </Grid>
                    </div>
                </Grid>
            </Grid>

        </div>
    )
}

export default Gimmembers