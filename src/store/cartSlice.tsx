import { withStyles } from "@mui/material"
import {createSlice} from "@reduxjs/toolkit"

const initialState:any={
    wishList:[],
    noun:[]
}

export const cartSlice:any=createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        addProduct:(state:any,action:any)=>{
        
           /*lo agrego y lo saco de la wishlist, podria ir al redux esto*/
            let findItem=state.wishList.find((x:any)=>x.id==action.payload.item.id)
            console.log(findItem,"find")
            if(findItem==null){
                state.wishList=[...state.wishList,action.payload.item]//si no esta en lista q lo agregue
    
            }/*else{
         
                
                alert("ya esta")
              
            }*/
            
        
        },
        changeNoun:(state:any,action:any)=>{
            alert("ok")
            state.noun=[1]

        },
        emptyList:(state:any,action:any)=>{
            state.wishList=[]
        },
        deleteItem:(state:any,action:any)=>{
            
            console.log(action.payload, "id")//lo agarro solamente como action.payload porq solo eso paso
            let filterList=state.wishList.filter((x:any)=>x.id!=action.payload)
           
            state.wishList=filterList
        }
    }
})

export const {addProduct,changeNoun,emptyList,deleteItem}=cartSlice.actions 
export default cartSlice.reducer