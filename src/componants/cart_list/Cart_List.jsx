import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

const CartList = (props) => {
  const { open, toggleDrawer } = props;
  const [CartItems, setCartItems] = useState([]);

  useEffect(() => {
    const CartItemArray = localStorage.getItem("CartList");
    const parsedCartItemArray = JSON.parse(CartItemArray) || [];
    setCartItems(parsedCartItemArray);
  }, []);

  return (
    <div>
   
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <h5>Cart Item</h5>
          {CartItems?.map((item, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2, padding: 1 }}>
              <Typography variant="body1">{item.name}</Typography>
              <img width="70px" src={item.img} alt={item.name} />
              <Typography variant="body2">{item.Price}</Typography>
            </Box>
          ))}
        </Box>
      </Drawer>
    </div>
  );
};

export default CartList;
