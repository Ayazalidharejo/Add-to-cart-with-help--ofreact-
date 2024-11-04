import {
  Box,
  Button,
  Grid,
  Grid2,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import Hero from "../../../Images/signup-g.svg";
import { Password, Visibility, VisibilityOff } from "@mui/icons-material";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useForm, Controller } from "react-hook-form";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      Password: "",
    },
  });
  return (
    <div className="mt-3">
      <Grid container spacing={2}>
        <Grid className="text-center" item xs={6}>
          <img className="img-filud" src={Hero} alt="" />
        </Grid>
        <Grid className="text-center " item xs={6}>
          <Box className="text-center">
            <Typography>Get Start Shopping</Typography>
            <Typography>
              Welcome to FreshCart! Enter your email to get started.
            </Typography>
          </Box>

          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <Box>
              <Grid container spacing={0.1}>
                <Grid item xs={6} md={6} lg={5.9}>
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => <TextField
                    type="text"
                    size="small"
                    {...field}
                    fullWidth
                    placeholder="First Name"
                  />}
                  />
                 
                </Grid>
                <Grid className="mx-1 " item xs={6} md={6} lg={5.9}>
                <Controller
                    name="lastname"
                    control={control}
                    render={({ field }) => <TextField
                    type="text"
                    size="small"
                    {...field}
                    fullWidth
                    placeholder="Second  Name"
                  />}
                  />
                </Grid>
                <Grid className=" mb-3" item xs={12} md={6} lg={11.9}>
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => <TextField
                    type="email"
                    size="small"
                    {...field}
                    fullWidth
                    placeholder="Email"
                  />}
                  />
                </Grid>
                <Grid className="mb-2" item xs={6} md={6} lg={11.9}>
                  
                  <OutlinedInput
                  
                    type="showPassword"
                    fullWidth
                    size="small"
                    id="outlined-adornment-weight"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword
                              ? "hide the password"
                              : "display the password"
                          }
                          edge="end"
                          onClick={() => {
                            setShowPassword(!showPassword);
                          }}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "weight",
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={11.9}>
                  <Button type="submit" fullWidth variant="contained">
                    Register
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Signup;
