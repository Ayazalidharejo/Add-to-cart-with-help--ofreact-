import { Box, Button, Card, IconButton, Snackbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Product1 from "../../Images/cat-01.jpg"
import Product2 from "../../Images/cat-02.jpg"
import Product3 from "../../Images/cat-06.jpg"
import Product4 from "../../Images/3.jpg"
import Product5 from "../../Images/5.jpg"
import Product6 from "../../Images/banner-05.jpg"
import Product7 from "../../Images/banner-product.jpg"
import Product8 from "../../Images/cat-05.jpg"
import "../product/product.css"
import Divider from '@mui/material/Divider';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import CartList from '../cart_list/Cart_List'



const products =[
    {
 id:1,    
        img:Product1,
        name:'Product 1',
        Price:'10',
    },
    {
        id:2,
        img:Product2,
        name:'Product 2',
        Price:'12',
    },
    {
        id:3,
        img:Product3,
        name:'Product 3',
        Price:'15',
    },
    {
        id:4,
        img:Product4,
        name:'Product 3',
        Price:'22',
    },
    {
        id:5,
        img:Product5,
        name:'Product 3',
        Price:'15',
    },
    {id:6,
        img:Product6,
        name:'Product 3',
        Price:'18',
    },
    {id:7,
        img:Product7,
        name:'Product 3',
        Price:'19',
    }

]

const Product = () => {
    const [OpenAlert,setOpenAlert]=useState(false)
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenAlert(false);
      };
    const [Cartlist,setCartlist]= useState([])
    console.log(Cartlist);
    
    const Carthandler=(Product)=>{
        const isExits=Cartlist.find((Cart)=>Cart.id ===Product.id) ;
       
       
        


      
        if(!isExits){
            setCartlist((old)=>[...old,Product])
            let strCartList =JSON.stringify(Cartlist)
            localStorage.setItem('CartList',strCartList)
        }else{
         setOpenAlert(true)
        }
       
       
      
        
    };
   
  return (


<>
<Snackbar style={{backgroundColor:'red'}}
anchorOrigin={{ vertical:'top', horizontal:'right' }}
        open={OpenAlert}
        autoHideDuration={6000}
        onClose={handleClose}
         message="Product Already in cart List"
       
      />
<Card  sx={{display:'flex',gap:'30px'}}  className="container mt-3"> 
{products?.map((Product,index)=>{
    return(
        <>
      
    <Box key={index} sx={{padding:'30px', gap:'30px' ,alignItems:'center',border:'1px solid red',textAlign:'center',cursor:'pointer',width:'250px'}}>
<img className='w-50 itempic' src={Product.img} alt="" />
 
<Typography variant='h5'> {Product.name}</Typography>
<Typography variant='h5'> {Product.Price}</Typography>
<Divider sx={{borderColor:'#333'}} variant='fullWidth'/>
<Box className="d-flex justify-content-between">
<ShareIcon/>
<FavoriteIcon/>
<AddShoppingCartIcon onClick= {()=>{ Carthandler(Product)}} />
</Box>
    </Box>
      </>
    )
})}
</Card>
</>

  )
}

export default Product