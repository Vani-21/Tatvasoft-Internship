import React from "react";
//import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from '@mui/material/Button';
import { Breadcrumbs, TextField, Link, Typography} from "@mui/material";
//import { Avatar } from "@mui/material";
//import { Popover } from "@mui/material";
//import LogoutIcon from '@mui/icons-material/Logout';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Formik } from 'formik';
import * as Yup from "yup";
//import axios from "axios";
import { toast } from 'react-toastify';
import "./register_styles.css";
import authService from "../../Service/auth.service";



const Register = () => {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    const [role,setRole]=useState('');
    // const [open, setOpen] = useState(false);
    // const [anchorEl, setAnchorEl] = useState(null);
    const Navigate = useNavigate('');
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        roleId: 0,
        password: '',
        confirmPassword: '',
    }

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required('Last name is required'),
        email: Yup.string()
            .email("Invalid email address format")
            .required('Email is required'),
        password:Yup.string()
            .min(5,"Password must be 5 Characters at minimum")
            .required('Password is required'),
        confirmPassword:Yup.string()
            .required('Confirm Password is required')
            .oneOf(
                [Yup.ref('password'), null], 
                'Password and Confirm Password must be match'
                ),
        roleId: Yup.number().required("Role is required"),
    });

    const onSubmit = (data) => {
        delete data.confirmPassword;
        authService.create(data).then((res) => {
          Navigate("/");
          toast.success("Successfully registered");
        });
      };
    // const onFormSubmit = (values, { setSubmitting }) => {
    //     const requestData={
    //         "firstName":values.firstName,
    //         "lastName":values.lastName,
    //         "email":values.email,
    //         "password":values.password,
    //         "confirmPd":values.confirmPd
    //     }
    //     console.log("On Form Submit:", values);
    //     setTimeout(() => {
    //         alert(JSON.stringify(values, null, 2));
    //         setSubmitting(false);
    //     }, 400);
    //     alert("Form Submitted Successfully....");
    //     axios.post("https://jsonplaceholder.typicode.com/posts",requestData).then((res)=>{
    //         if(res.status===201){
    //             console.log(res.data.id);
    //             toast.success('API call completed Successfully', {
    //                 position: "top-right",
    //                 autoClose: 3000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 theme: "light",
    //                 });
    //         }
    //     });    
    // }
    // const NavigateHome = () => {
    //     Navigate('/');
    //     // alert('The login button is clicked...')
    //     console.log("Name:", name);
    //     console.log("Email:", email);
    // }
    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setAnchorEl(null);
    //     setOpen(false);
    // };
    return (
        <>
            <div style={{ padding: 5 }}></div>
            <div >
                <div className="container">
                    <div style={{paddingLeft:640, fontSize:18}}>
                    <Breadcrumbs separator="›" aria-label="breadcrumb" className="breadcrumb-wrapper">
                    <Link color="inherit" href="/" title="Home" className="link-custom" style={{textDecoration:"none",fontSize:18}} >Home</Link>
                    <Typography className="typo-custom" style={{fontSize:18}}>Create an Account</Typography>
                    </Breadcrumbs></div>
                
                <div>
                    <div className='center'>
                        <h1 className="loginheader">
                            Login or Create an Account
                            <span className="underline"></span>
                            </h1>
                        
                    </div>

                </div>
                <div style={{
                    width:'75%',
                    margin:'auto',
                }}>
                    
                        <Formik 
                              initialValues={initialValues} 
                              validationSchema={validationSchema} 
                              onSubmit={onSubmit}
                        >
                            {({ values, 
                                errors, 
                                touched, 
                                isSubmitting, 
                                handleChange, 
                                handleBlur, 
                                handleSubmit }) => {
                                 return(
                                    <form onSubmit={handleSubmit} >
                                        <div className="form-box">
                                            <div className="personal_info">
                                        <Typography variant="h6" className="custom-typography" style={{fontWeight:500}}>Personal Information</Typography>
                                        <p className='paraStyle'>Please enter the following information to create your account.</p>
                                        
                                        <div className='side-by-side'>
                                           <div>
                                            <div className='label'>First Name* </div>
                                            <TextField
                                                id="first-name"
                                                type='text'
                                                name="firstName"
                                                size="small"
                                                variant="outlined"
                                                style={{width:'532px',border: 'none'}}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                            />
                                            {errors.firstName && touched.firstName && <div style={{
                                                color: "red",
                                                fontSize: 15,
                                                marginBottom: 15
                                            }}>{errors.firstName}</div>}
                                            </div> 
                                        <div>
                                            <div className='label'>Last Name* </div>
                                            <TextField
                                                type='text'
                                                name="lastName"
                                                id="last-name"
                                                size="small"
                                                variant="outlined"
                                                style={{width:'532px'}}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                            />
                                            {errors.lastName && touched.lastName && <div style={{
                                                color: 'red',
                                                fontSize: 15,
                                                marginBottom: 15,
                                            }}>{errors.lastName}</div>}
                                            </div>
                                        </div>
                                            
                                        <div style={{padding:5}}></div>
                                    <div className='side-by-side'>
                                        <div>
                                            <div className='label'>Email Address* </div>
                                             <TextField
                                                type='email'
                                                id="email"
                                                size="small"
                                                variant="outlined"
                                                style={{width:'532px'}}
                                                onChange={handleChange}
                                                name="email"
                                                onBlur={handleBlur}
                                            />
                                            {errors.email && touched.email && <div style={{
                                                color: 'red',
                                                fontSize: 15,
                                                marginBottom: 15,
                                            }}>{errors.email}</div>}
                                            </div>

                                            <div>
                                            <div className='label'>Roles</div>
                                            <Select
                                            name='role'
                                            value={role}
                                            size="small"
                                            style={{width:'532px'}}
                                            onChange={(event) => {
                                                        setRole(event.target.value);
                                                    }}
                                                
                                            >
                                            <MenuItem value=""></MenuItem>
                                            <MenuItem value={'Buyer'}>Buyer</MenuItem>
                                            <MenuItem value={'Seller'}>Seller</MenuItem>
                                            </Select>
                                            {errors.roleId && touched.roleId && <div style={{
                                                color: 'red',
                                                fontSize: 15,
                                                marginBottom: 15,
                                            }}>{errors.roleId}</div>}
                                            </div>
                                    </div>
                                    </div>
                                            
                                            <div style={{
                                            display: "flex",
                                            flexDirection: 'column',
                                            rowGap: 10
                                        }}>
                                        <div style={{marginTop:70}}>
                                                <Typography variant="h6" className="custom-typography" style={{fontWeight:500}}>Login Information</Typography>
                                               
                                        </div>
                                        <div className='side-by-side'>
                                                <div>
                                                <div className='label'>Password*</div>
                                                <TextField
                                                type='password'
                                                id="password"
                                                size="small"
                                                style={{width:'532px'}}
                                                onChange={handleChange}
                                                name="password"
                                                variant="outlined"
                                                onBlur={handleBlur}
                                                 />
                                                 {errors.password && touched.password && <div style={{
                                                color: 'red',
                                                fontSize: 15,
                                                marginBottom: 15,
                                            }}>{errors.password}</div>}
                                            </div>
                                            <div>
                                                <div className='label'>Confirm Password*</div>
                                                <TextField
                                                type='password'
                                                onChange={handleChange}
                                                style={{width:'532px'}}
                                                size="small"
                                                name="confirmPassword"
                                                id="confirm-password"
                                                variant="outlined"
                                                onBlur={handleBlur}
                                                 />
                                             {errors.confirmPassword && touched.confirmPassword && <div style={{
                                                color: 'red',
                                                fontSize: 15,
                                                marginBottom: 15,
                                            }}>{errors.confirmPassword}</div>}
                                            </div>
                                            </div>
                                        </div>
                                           <div style={{marginBottom:60}}></div>
                                            <Button 
                                            variant="contained" 
                                            type="submit" 
                                            style={{ 
                                                backgroundColor: '#f14d54', 
                                                color: 'white', 
                                                width:130,
                                                height:45, 
                                                fontSize:20,
                                                fontWeight:550,
                                                fontFamily:("Roboto", "Helvetica", "Arial", "sans-serif"),
                                                textTransform:"capitalize"}}
                                                disabled={isSubmitting}
                                            >
                                                register
                                            </Button>  

                                    </div>              
                                    </form>

                                
                                );
                            }
                            }
                        </Formik>
</div>
                    </div>
                </div>
        </>);
}

export default Register;
