import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Button, TextField } from '@mui/material';
import tatvasoftLogo from "../../images/Tatvasoftlogo.svg";
import "./header.css";
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/auth';
import { useMemo, useState } from 'react';
import { RoutePaths } from '../../utils/enum';
import bookService from '../../Service/book.service';
import Shared from '../../utils/shared';

const Header = () => {
    const authContext = useAuthContext();
    //const cartContext = useCartContext();
    const [query, setquery] = useState("");
    const [bookList, setbookList] = useState([]);
    const [openSearchResult, setOpenSearchResult] = useState(false);
    const navigate = useNavigate();

    const openMenu = () => {
        document.body.classList.toggle("open-menu");
      };
    
      const items = useMemo(() => {
        return Shared.NavigationItems.filter(
          (item) =>
            !item.access.length || item.access.includes(authContext.user.roleId)
        );
      }, [authContext.user]);
    
      const logOut = () => {
        authContext.signOut();
        // cartContext.emptyCart();
      };
    
      const searchBook = async () => {
        const res = await bookService.searchBook(query);
        setbookList(res);
      };
    
      const search = () => {
        document.body.classList.add("search-results-open");
        searchBook();
        setOpenSearchResult(true);
      };
    
    //   const addToCart = (book) => {
    //     if (!authContext.user.id) {
    //       navigate(RoutePaths.Login);
    //       toast.error("Please login before adding books to cart");
    //     } else {
    //       Shared.addToCart(book, authContext.user.id).then((res) => {
    //         if (res.error) {
    //           toast.error(res.error);
    //         } else {
    //           toast.success("Item added in cart");
    //           cartContext.updateCart();
    //         }
    //       });
    //     }
    //   };
    
    return (
<div>
        <div className="topheader"></div>
    <div>
        <div className="navcontainer">
             <img src={tatvasoftLogo} alt='Logo' className='logoo' ></img>
            <div className="navbar">
                <div className="navbarstyle">
                {!authContext.user.id && (
                    <>
                <Link to={RoutePaths.Login} 
                    style={{ 
                        marginLeft: 10, 
                        color: '#f14d54', 
                        textDecoration: 'none'
                }}>
                    Login
                </Link>
                

                <span style={{ marginLeft:10, fontWeight:100, color:'lightgray'}}>  |   </span>
                
                <Link to={RoutePaths.Register} 
                    style={{ 
                        marginLeft: 10, 
                        color: '#f14d54', 
                        textDecoration: 'none' 
                }}>
                    Register
                </Link>
                
                </> 
                )}

                {items.map((item,index) => (
                    <span  key={index} >
                    <Link to={item.route} title={item.name}
                    style={{ 
                        marginLeft: 10, 
                        color: '#f14d54', 
                        textDecoration: 'none' 
                }}>
                    {item.name}
                    <span style={{ marginLeft:10, fontWeight:100, color:'lightgray'}}>  |  </span>

                  </Link>
                  
                  </span>
                ))
                }
                </div> 
                
                <a href="/cart" alt="Cart" className="cart">
                    <ShoppingCartIcon sx={{color:"#f14d54"}}/>
                    <span style={{margin:0,color:"#f14d54",fontWeight:500}} >
                        {/* {cartContext.cartData.length} */}
                        </span> 
                        Cart
                </a>
                {authContext.user.id && (
                   <div className='logout'>
                      <Button 
                          onClick={() => logOut()}
                          variant="outlined"
                           style={{
                            borderColor:"lightgray",
                            color:"black",
                            "&:hover": {
                                backgroundColor: "#5FA021",
                                cursor: "pointer"
                            }
                            }}>
                         Log out
                       </Button>
                   </div>
                 )}
            </div>
        </div>
    </div> 
    
    
    <div className="appbar">
        <div className="appcontainer">
            <div className="searchbar">
                <TextField 
                    id="text"
                    name="text"
                    placeholder="What are you looking for..."
                    variant="outlined"
                    size='small'
                    style={{width:560}}
                    
                    />

                <Button 
                    className="search-btn"  
                    sx={{
                        backgroundColor:"#80BF32",
                        color:"white",
                        height:40,
                        width:120,
                        fontSize:16,
                        marginLeft:1,
                        textTransform:"capitalize",
                        transition: "background-color 0.3s",
                        "&:hover": {
                            backgroundColor: "#5FA021",
                            cursor: "pointer"
                        }
                    }}>
                        <SearchIcon sx={{color:"white",fontWeight:500}}/>
                            <span>Search</span>
                </Button>
            </div>
        </div>
    </div>
</div>
        )
    };

    export default Header;