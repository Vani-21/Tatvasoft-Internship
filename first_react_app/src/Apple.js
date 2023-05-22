import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { useState } from "react";
//import Input from '@mui/material/Input';
import { Avatar, Popover, TextField } from "@mui/material";
//import { blue, deepPurple } from "@mui/material/colors";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';



export const Apple = () => {
    const [name, setName] = useState("Vani");
    const [email, setEmail] = useState("vnayk2108@gmail.com");
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const Navigate = useNavigate()
    const onHomePageButtonClick = () => {
       
        console.log("Name:",name);
        console.log("Email:",email);
        Navigate("/");
    };
    const handleClick = (event) =>{
        console.log(123);
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleClose = () =>{
        setAnchorEl(null);
        setOpen(false);
    };
    return(
    <div style={{
        padding:"5px",
        }}>

        <div style={{
            display: "flex",
            justifyContent: "flex-end",
            
        }}
         
        >

         <div  style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            columnGap: 5,
            cursor: "pointer",
        }}
            onClick={handleClick}>
        <Avatar sx={{ bgcolor: "blue"}}>VN</Avatar>
        
        </div>
        </div>

      <div style={{
        display:"flex",
        padding: 5,
        flexDirection: "column",
        rowGap: 8,
      }}>
        <TextField variant="outlined" type="text" value={name} label="Name" placeholder="Name" onChange= {(e) => setName(e.target.value)}/>
        <TextField variant="outlined" type="email" value={email} label="Email" placeholder="Email" onChange= {(e) => setEmail(e.target.value)}/>

        <Button variant="contained" onClick={onHomePageButtonClick} className="">Submit</Button>
         {/* <button onClick={onHomePageButtonClick}>Navigate to home page</button> */}

         </div>

         
          <Popover
             open={open}
            
             anchorOrigin={{
                 vertical: 'bottom',
                 horizontal: 'left',
             }}
             transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
             }}
             anchorEl={anchorEl}
             onClose={handleClose}
          >
              <div style={{
                padding:5,
              }}>


            <h5>Vani Nayak</h5>
            <LogoutOutlinedIcon onClick={onHomePageButtonClick}/>
              {/* <Button variant="contained" onClick={onHomePageButtonClick} className="">
                  
                </Button> */}
              </div>
           </Popover>

    </div>
    );
};

