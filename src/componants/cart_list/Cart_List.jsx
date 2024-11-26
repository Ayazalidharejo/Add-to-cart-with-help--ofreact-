import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useEffect, useState } from 'react';
import { Button, ButtonGroup, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { dicrementquanitity, increasequanitity, RemoveItem } from '../ProductSlice/ProductSlice';
import DeleteIcon from '@mui/icons-material/Delete';

const CartList = (props) => {
  const { open, toggleDrawer } = props;
  const [CartItems, setCartItems] = useState([]);
  const { items } = useSelector((state) => state.Products)
  const dispatch = useDispatch()







  useEffect(() => {
    const CartItemArray = localStorage.getItem("CartList");
    const parsedCartItemArray = JSON.parse(CartItemArray) || [];
    setCartItems(parsedCartItemArray);
  }, []);

  return (
    <div>

      <Drawer open={open}
       onClose={toggleDrawer(false)}
       > <Box >
        <Box className="position-relative" sx={{ width: 450 }} role="presentation"
        //  onClick={toggleDrawer(false)}
         >
          <h5 className='mt-2'>Cart Item</h5>
          {!items.length?<Typography className=' text-center'  variant='h6'>Noyhing to show</Typography> :items?.map((item, index) => (
            <Box key={index} className="d-flex justify-content-between align-items-center">
              <div className='d-flex align-items-center'>
                <img width="70px" src={item?.image} alt={item?.name} />
                <Typography variant="body1">{item?.title?.length >= 13
                  ? `${item?.title.slice(0, 13)}...`
                  : item?.title}</Typography>
              </div>
              <ButtonGroup className='d-flex  align-items-center' size='small' variant="text" aria-label="Basic button group">

                <Button><RemoveIcon  onClick={()=>dispatch( dicrementquanitity(item))} /></Button>
                <Button>{item?.quanitity}</Button>
                <Button> <AddIcon onClick={()=>dispatch( increasequanitity(item))} /></Button>
              </ButtonGroup>
              <Typography variant="body2">{item?.price}</Typography>
              <Button><DeleteIcon onClick={()=>dispatch( RemoveItem(item))}/>  </Button>
            

             
            </Box>
          ))}


        </Box>
        <Box className="d-flex justify-content-between bg-secondary py-2 w-100 rounded text-white px-2 position-absolute top-100 start-50 translate-middle align-items-center ">  
          <Typography variant='body2'> TotalPrice</Typography>
          <Typography variant='h6'> $120</Typography>
        </Box>
        </Box>
      </Drawer>
    </div>
  );
};

export default CartList;
