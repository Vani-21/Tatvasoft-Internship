import React from "react";
import { useNavigate } from "react-router-dom";
//import { useState,useEffect  } from "react";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";

import "./login_styles.css";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Formik } from 'formik';
import * as Yup from "yup";
import authService from "../../Service/auth.service";
import { toast } from 'react-toastify';
import "./login_styles.css";
import { useAuthContext } from "../../context/auth";


const Login = () => {
   
  // const [email, setEmail] = useState("");
  // const[password,setPassword]=useState('');
  // const [open, setOpen] = useState(false);
  // const [anchorEl, setAnchorEl] = useState(null);
  const Navigate = useNavigate();
  const authContext = useAuthContext();
  // const [user, setUser] = useState([]);

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
  //   console.log("User detail:",res.data);
  //   setUser(res.data);
  //   });
  // }, []);
  const initialValues = {
    email: '',
    password: ''
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(5, "Password must be 5 characters at minimum")
    .required("Password is required"),
  });
  const onSubmit = (values) => {
    authService.login(values).then((res) => {
      delete res._id;
      delete res.__v;
      authContext.setUser(res);
      Navigate("/");
      toast.success("Successfully logged in");
    });
    
    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    // }, 400);
    // alert("Form Submitted Successfully....")
  };
  // const NavigateHome = () => {
  //   Navigate('/');
  //   // alert('The login button is clicked...')
  //   console.log("Email:", email);
  //   console.log("Password",password);
  // }
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  //   setOpen(false);
  // };
  
  return (
    <>
      <div style={{ padding: 5 }}></div>
      <div className="container">
                    <div style={{justifyContent:"center",display:"flex", fontSize:18}}>
                    <Breadcrumbs separator="›" aria-label="breadcrumb" className="breadcrumb-wrapper">
                    <Link color="inherit" href="/" title="Home" className="link-custom" style={{textDecoration:"none",fontSize:18}} >Home</Link>
                    <Typography className="typo-custom" style={{fontSize:18}}>Login</Typography>
                    </Breadcrumbs></div>
                
                <div>
                    <div className='center'>
                        <h1 className="loginheader">
                            Login or Create an Account
                            <span className="underline"></span>
                            </h1>
                        
                    </div>

                </div>
      </div>
      
<div style={{margin:'auto',width:'70%'}}>
    <div className="side-by-side1">
        <div className="customer">
          <Typography variant="h6" className="custom-typography1" style={{fontWeight:500}} mt={ 3}>New Customer</Typography>
            <div style={{marginBottom:10, width:'500px'}}></div>
            <p className='paraStyle'>Registration is free and easy.</p>
            <div style={{marginBottom:10}}></div>
            <ul  style={{fontSize:'15px',color:'#212121'}}>
                <li style={{paddingBottom:12}}>Faster checkout</li>
                <li style={{paddingBottom:12}}>Save multiple shipping addresses</li>
                <li style={{paddingBottom:12}}>View and track orders and more</li>
            </ul>
            <div style={{marginBottom:'150px'}}></div>
            <Button 
                variant="contained" 
                type="submit"
                style={{ 
                  backgroundColor: '#f14d54', 
                  color: 'white', 
                  width:220,
                  height:45, 
                  fontSize:20,
                  fontWeight:500,
                  fontFamily:("Roboto", "Helvetica", "Arial", "sans-serif"),
                  textTransform:"revert"}}
                  onClick={()=>Navigate('/register')}
            >
                Create an Account
            </Button>
        </div>  
   
        <div className="loginpart">
        <Typography variant="h6" className="custom-typography1" style={{fontWeight:500}} >Registered Customers</Typography>
        
        <p className='paraStyle1'>If you have an account with us, please log in</p>
        

      <Formik 
            initialValues={initialValues} 
            validationSchema={validationSchema} 
            onSubmit={onSubmit}
        >
        {({ 
            values, 
            errors, 
            touched, 
            isSubmitting, 
            handleChange, 
            handleBlur, 
            handleSubmit }) => {
            return (
                <form onSubmit={handleSubmit}>
                    <div style={{
                        display: "flex",
                        flexDirection: 'column',
                        marginBottom: 5,
                        rowGap: 10
                    }}>
                        <div>
                          <div className='label'>Email Address* </div>
                          <TextField
                            type='email'
                            id="email"
                            variant="outlined"
                            style={{width:'390px'}}
                            onChange={handleChange}
                            name="email"
                            size="small"
                            autoComplete="off"
                            onBlur={handleBlur}
                            
                          />
                          
                          {errors.email && touched.email && <div style={{
                            color: 'red',
                            fontSize: 15,
                            marginBottom: 10,
                            }}>{errors.email}</div>}
                          </div>
                          <div style={{paddingBottom:20}}></div>
                        <div>
                        <div className='label'>Password*</div>
                        <TextField
                            type='password'
                            id="password"
                            style={{ width: '390px' }}
                            onChange={handleChange}
                            name="password"
                            size="small"
                            autoComplete="off"
                            variant="outlined"
                            onBlur={handleBlur}
                            
                        />
                        {errors.password && touched.password && 
                            <div style={{
                                color: 'red',
                                fontSize: 15,
                                marginBottom: 10
                            }}>
                        {errors.password}</div>}
                        </div>
                    </div>
                    <div style={{ marginBottom: '60px' }}></div>
                    <Button 
                        variant="contained" 
                        type="submit" 
                        disabled={isSubmitting} 
                        style={{ 
                          backgroundColor: '#f14d54', 
                          color: 'white', 
                          width:100,
                          height:45, 
                          fontSize:20,
                          fontWeight:500,
                          fontFamily:("Roboto", "Helvetica", "Arial", "sans-serif"),
                          textTransform:"revert"}}
                    >
                        Login
                    </Button>
                </form>
            );  }
        }
      </Formik>
        </div>
    </div>
</div>
        
    </>);
}
export default Login;