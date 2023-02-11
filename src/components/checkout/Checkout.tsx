import React from "react";
import Grid from '@mui/material/Grid';
import { useSelector,useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import { addProduct,emptyList,deleteItem } from "../../store/cartSlice";
import "./styleCheckout.css"

const Checkout=()=>{

    const{wishList,noun}=useSelector((state:any)=>state.cart)
    const dispatch=useDispatch()
    console.log(wishList, "wish")
    console.log(noun, "changeNoun")

    return(
        <div className="checkoutContainer">

            {wishList.length==0 ? (
                <img src="wish.jpg" alt="loading" id="wish"/>

            ):(

           <>
            <p>Checkout yo</p>
            {wishList.map((item:any)=>{
                return(
                    <div className="checkoutCont">    
                        <Grid container spacing={6}>
                            <Grid item md={6} xs={12}>
                                <div className="checkoutImg">
                                    <img src={item.img} alt="loading" />
                                </div>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <div className="checkoutText">
                                    <p>{item.description} </p>
                                    <p>{item.descriptionFull} </p>
                                    <div className="checkoutButton">
                                        <Button variant="contained">Descargar clase</Button>
                                        <Button variant="contained" onClick={()=>dispatch(deleteItem(item.id))}>Borrar clase</Button>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                )
            })}
            <Button variant="contained" onClick={()=>dispatch(emptyList())} id="emptyWish">Vaciar Carrito</Button>
            </>
            )}
        </div>
    )

}

export default Checkout