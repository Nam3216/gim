import React,{useState} from "react";
import { useSelector } from "react-redux";
import Button from '@mui/material/Button';
import "./styleContact.css"

const Contact=()=>{
    const{wishList}=useSelector((state:any)=>state.cart)
    const[info, setInfo]=useState({name:"",surname:"",message:""})

    console.log(wishList, "wishlist")

    const handlerInput=(e:any)=>{
        e.preventDefault()
        console.log(e.target.value)
        setInfo({...info,[e.target.name]:e.target.value})

    }

    const handlerSubmit=(e:any)=>{
        e.preventDefault()
        console.log(info)

    }

    console.log(info, "info")
    return(
        <div className="contact">
            <div className="contactCont">
                <p className="contactP">Contacto</p> 
           </div>
            <form className="form" onSubmit={handlerSubmit}>
                <p>Nombre</p>
                <input type="text" name="name" onChange={handlerInput}/>
                <p>Apellido</p>
                <input type="text" name="surname" onChange={handlerInput}/>
                <p>Mensaje</p>
                <textarea  name="message" onChange={handlerInput}/>
                <div className="buttonForm">
                    <Button variant="contained" type="submit"  > Enviar</Button>
                </div>
            </form>
        </div>
    )


}

export default Contact