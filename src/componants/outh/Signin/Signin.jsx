import { Box, Button, Grid, IconButton, InputAdornment, OutlinedInput, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Hero from "../../../Images/signin-g.svg";
import { Controller, useForm } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Define your validation schema
const schema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
});

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Grid container spacing={2} className='text-center'>
        <Grid item xs={12} md={6}>
          <img src={Hero} alt="Sign In" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="text-center">
            <Typography>Get Started Shopping</Typography>
            <Typography>Welcome to FreshCart! Enter your email to get started.</Typography>
          </Box>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <Grid container spacing={0.1}>
                
                {/* Email Field */}
                <Grid className="mb-3" item xs={12} md={6} lg={11.9}>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        type="email"
                        size="small"
                        {...field}
                        fullWidth
                        placeholder="Email"
                        error={!!errors.email}
                        helperText={errors.email?.message}
                      />
                    )}
                  />
                </Grid>

                {/* Password Field */}
                <Grid className="mb-2" item xs={12} md={6} lg={11.9}>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <OutlinedInput
                        {...field}
                        fullWidth
                        size="small"
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        error={!!errors.password}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end"
                              aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    )}
                  />
                  <p className="text-danger">{errors.password?.message}</p>
                </Grid>

                {/* Submit Button */}
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
}

export default Signin;
