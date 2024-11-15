import {
  Autocomplete,
  Box,
  Button,
  Card,
  CircularProgress,
  Grid,
  IconButton,
  Snackbar,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Product1 from "../../Images/cat-01.jpg";
import Product2 from "../../Images/cat-02.jpg";
import Product3 from "../../Images/cat-06.jpg";
import Product4 from "../../Images/3.jpg";
import Product5 from "../../Images/5.jpg";
import Product6 from "../../Images/banner-05.jpg";
import Product7 from "../../Images/banner-product.jpg";
import Product8 from "../../Images/cat-05.jpg";
import "../product/product.css";
import Divider from "@mui/material/Divider";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import CartList from "../cart_list/Cart_List";
import { Filter } from "@mui/icons-material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Addcart } from "../../Slice/Addcart/Addcart";

// const products =[
//     {
//  id:1,
//         img:Product1,
//         name:'Product 1',
//         Price:'10',
//     },
//     {
//         id:2,
//         img:Product2,
//         name:'Product 2',
//         Price:'12',
//     },
//     {
//         id:3,
//         img:Product3,
//         name:'Product 3',
//         Price:'15',
//     },
//     {
//         id:4,
//         img:Product4,
//         name:'Product 4',
//         Price:'22',
//     },
//     {
//         id:5,
//         img:Product5,
//         name:'Product 5',
//         Price:'15',
//     },
//     {id:6,
//         img:Product6,
//         name:'Product 6',
//         Price:'18',
//     },
//     {id:7,
//         img:Product7,
//         name:'Product 7',
//         Price:'19',
//     }

// ]

const Product = () => {
  const [Allproduct,setAllproduct]=useState([])
  const [products, setproducts] = useState();
  const [OpenAlert, setOpenAlert] = useState(false);
  const [isloading, setisloading] = useState(false);
  // const [Project, setProject] = useState();
  const [Optioncategories, setOptioncategories]=useState ([])
  const [datafilter,setdatafilter]=useState ({})
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  const [Cartlist, setCartlist] = useState([]);
  console.log(Cartlist);

  const Carthandler = (Product) => {
    const isExits = Cartlist.find((Cart) => Cart.id === Product.id);

    if (!isExits) {
      setCartlist((old) => [...old, Product]);
    } else {
      setOpenAlert(true);
    }
  };

  //     useEffect (()=>{
  // // let localItems =localStorage.getItem("CartList")

  // if (Cartlist.length >0) {

  //     let strCartList =JSON.stringify(Cartlist)
  //     localStorage.setItem('CartList',strCartList)
  // }

  //     },[Cartlist])

  const Searchhandler = (event) => {
    const filterarry = products?.Filter(
      (products) => products?.name === event?.target?.value
    );


  };

 
;

  useEffect(() => {
    const Fetchproducts = async () => {
      try {
        setisloading(true);
        const Products = await axios.get("https://fakestoreapi.com/products");

        if (Products.status === 200) {
          setisloading(false);
          setproducts(Products?.data);
          setAllproduct(Products?.data);

          const filtercategoties = Products?.data?.map((item) => {
            return {
              label: item?.category.toUpperCase(),
              value: item?.category,



            }


          })
          console.log( filtercategoties);
          const uniquecategories = filtercategoties.filter((item, index, self) => index === self.findIndex((i) => i.value === item.value))
         

          setOptioncategories(uniquecategories)
        } else {
          setisloading(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    Fetchproducts();
  }, []);


 

  useEffect(() => {
 
    if (datafilter?.value) {
      const newFilterData = Allproduct.filter((product) => product?.category === datafilter.value);
      console.log(newFilterData);
      setproducts(newFilterData)
    }
  }, [datafilter, products]); 
  
  
  return (
    <>
      <Box className="container mt-3 d-flex justify-content-between">
        <TextField
          onChange={Searchhandler}
          placeholder="Search Item"
          size="small"
        />

        <Autocomplete className="me-5" size="small"
          disablePortal
          options={ Optioncategories}
         
          sx={{ width: 250 }}
          onChange={(e,newitem)=>{
            setdatafilter(newitem,);
            
          }}
          renderInput={(params) => <TextField {...params} label="categories" />}
        />
      </Box>
      <Snackbar
        style={{ backgroundColor: "red" }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={OpenAlert}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Product Already in cart List"
      />
      {isloading ? (
        <p className="text-center mt-5">
          <CircularProgress color="success" />
        </p>
      ) : (
        <Grid container className="container mt-5">
          {products?.map((Product, index) => {
            return (
              <>
                <Grid
                  className="mx-3 my-2"
                  item
                  xs={12}
                  md={3}
                  mb={2}
                  sx={{
                    minHeight: "230px",
                    maxHeight: "350px",

                    width: "200px",
                  }}
                >
                  <Card>
                    {" "}
                    <Box
                      className="d-flex align-items-center flex-column w-100"
                      key={index}
                      sx={{
                        padding: "30px",
                        gap: "5px",
                        alignItems: "center",
                        textAlign: "center",
                        cursor: "pointer",
                        width: "250px",
                      }}
                    >
                      <img
                        style={{ maxHeight: "100px", minHeight: "170px " }}
                        className="w-50 itempic"
                        src={Product.image}
                        alt=""
                      />
                      <Tooltip title={Product.title} placement="top">
                        <Typography variant="h6">
                          {" "}
                          {Product?.title?.length >= 13
                            ? `${Product?.title.slice(0, 13)}...`
                            : Product?.title}
                        </Typography>
                      </Tooltip>
                      <Typography className=" " variant="body1">
                        {" "}
                        {Product.price}
                      </Typography>
                      {/* <Typography variant="body1"> {Product.price}</Typography> */}

                      {/* <Typography variant="body2"> {Product.description}</Typography> */}

                      <Typography variant="body1">
                        {" "}
                        {Product.category}
                      </Typography>
                      <Divider
                        sx={{ borderColor: "#333" }}
                        variant="fullWidth"
                      />
                      <Box className="d-flex justify-content-between  w-100">
                        <Tooltip title="View details">
                          <RemoveRedEyeIcon
                            onClick={() => {
                              navigate(`/Productdeatails/${Product?.id}`);
                              
                            }}
                          />{" "}
                        </Tooltip>

                        <Tooltip title="Add in favorite ">
                          <FavoriteIcon  className="" />
                        </Tooltip>

                        <Tooltip title="Add to cart">
                          <AddShoppingCartIcon
                           onClick={()=>dispatch(Addcart())}
                          />
                        </Tooltip>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              </>
            );
          })}
        </Grid>
      )}
    </>
  );
};

export default Product;
