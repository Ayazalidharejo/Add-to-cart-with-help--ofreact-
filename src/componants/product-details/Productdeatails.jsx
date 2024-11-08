import { CircularProgress, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Productdeatails = () => {
  const Params = useParams();

  const [productsdetails, setproductsdetails] = useState();
  const [isloading, setisloading] = useState(false);

  useEffect(() => {
    const Fetchproducts = async () => {
      try {
        setisloading (true)
        const Products = await axios.get(
          `https://fakestoreapi.com/products/${Params?.Product_id}`
        );

        if (Products.status === 200) {
          setisloading(false);
          setproductsdetails(Products?.data);
        } else {
          setisloading(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    Fetchproducts();
  }, []);
  return (
    <>
      {isloading ? (
        <p className="text-center mt-5">
          <CircularProgress color="success" />
        </p>
      ) : (
        <Grid container className="  mt-5 d-flex justify-content-between  ">
          <Grid item md={6} sm={6} lg={6} className="text-center  ">
            <img
              className="text-center"
              width={"350px"}
              src={productsdetails?.image}
              alt=""
            />
          </Grid>
          <Grid className="   w-100 mt-5 " item md={3} sm={3} lg={3}>
            <Typography variant="h3">{productsdetails?.title}</Typography>
            <i>
              <Typography variant="h4">{productsdetails?.category}</Typography>
            </i>
            <Typography variant="h5">{productsdetails?.description}</Typography>
            <Typography variant="h5">
              Rating: {productsdetails?.rating?.rate} / 5 (
              {productsdetails?.rating?.count} reviews)
            </Typography>
            <Typography variant="h5">
              Price: {productsdetails?.price}
            </Typography>
          </Grid>
          <Grid item md={3} sm={3} lg={3}></Grid>
        </Grid>
      )}
    </>
  );
};

export default Productdeatails;
