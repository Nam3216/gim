import React,{useState} from "react"
import MockActivities from "../mock/mockActivities"
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { addProduct,changeNoun } from "../../store/cartSlice";
import {useSelector,useDispatch} from "react-redux"
import "./styleActivity.css"
import { height } from "@mui/system";

const Activities=()=>{
    const[checkWish,setCheckWish]=useState([0])
    const[returnCheck,setReturnCheck]=useState(/*"favorite-btn-notadded"*/false)
    const dispatch=useDispatch()
    const{wishList,noun}=useSelector((state:any)=>state.cart)
//<>💙</>
    const handlerFavorite=(item:any)=>{/*lo agrego y lo saco de la wishlist, podria ir al redux esto*/
    console.log(item,"item")

            dispatch(addProduct({
               
                item
            }))

            let filter=checkWish.filter(x=>x==item.id)
            if(filter.length==0){
                setCheckWish([...checkWish,item.id])
               // setReturnCheck(`favorite-btn${item.id}` )
               setReturnCheck(true)
            }else{
                let filterTakeOut=checkWish.filter(x=>x!=item.id)
                setCheckWish(filterTakeOut)
              //  setReturnCheck("favorite-btn-notadded")
              setReturnCheck(false)
            }
            
           

        }

        const handlerNoun=()=>{
            alert("n")
            dispatch(changeNoun())
        }
        
        console.log(wishList, "wish")
   console.log(noun, "nou")
//{ checkWish=="added" ? "favorite-btn" : "favorite-btn-notadded" }


    return(
        <div className="activityCont" id="activities">
            <div style={{height:50}}></div>{/*sino quedaba blanco, si no habia nada aca*/}
            <div className="activityText">
                <p className="titlePActivity">Actividades a distancia</p>
                <p>No dejes que la falta de tiempo te impida entrenar. Hacelo desde tu case con nuestras clases online!</p>
            </div>
            <div className="activityItems">
                <Grid container spacing={2}>
                {MockActivities.map((item)=>{
                    if(item.shift=="morning"){
                        return(
                        
                                <Grid item md={3} sm={6} xs={12}>
                                    <div className="itemActivity" key={item.id}>
                                        <img src={item.img} alt="activity"/>
                                        <Button className="favorite-btn" onClick={()=>handlerFavorite(item)}>❤️ </Button>
                                        <div className="itemActivityText">
                                            <p >{item.description}</p>
                                 
                                        </div>
                                    </div>
                                
                                </Grid>
                        

                        )
                    }
                
                })}
                </Grid>
                {wishList.length>0 && <Button variant="contained" id="buttonWish">Chequea tu WishList</Button>}
                
            </div>
           
        </div>
    )


}

export default Activities