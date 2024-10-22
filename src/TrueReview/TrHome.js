import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person'; // My Profile
import CategoryIcon from '@mui/icons-material/Category'; // Categories
import SettingsIcon from '@mui/icons-material/Settings'; // Settings
import GroupAddIcon from '@mui/icons-material/GroupAdd'; // Invite Friends
import StarIcon from '@mui/icons-material/Star'; // TrueReview Features
import ThumbUpIcon from '@mui/icons-material/ThumbUp'; // Top Reviews
import AddIcon from '@mui/icons-material/Add'; // Add Review
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'; // log out

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function TrHome() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path); // Navigates to the provided path
        setOpen(false); // Closes the drawer after navigation
    }
  
    const DrawerList = (
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        {/* <List>
          {['My Profile', 'Categories', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
         {/* <List>
        {menuItems1.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
        <Divider />
        <List>
        {menuItems2.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigate('/my-profile')}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="My Profile" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <br></br>
        <br></br>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigate('/categories')}>
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText primary="Categories" />
          </ListItemButton>
        </ListItem>
        
        
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigate('/truereview-features')}>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="TrueReview Features" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigate('/top-reviews')}>
            <ListItemIcon>
              <ThumbUpIcon />
            </ListItemIcon>
            <ListItemText primary="Top Reviews" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigate('/add-review')}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Add Review" />
          </ListItemButton>
        </ListItem>
      </List>
      <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigate('/settings')}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigate('/invite-friends')}>
            <ListItemIcon>
              <GroupAddIcon />
            </ListItemIcon>
            <ListItemText primary="Invite Friends" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigate('logout')}>
            <ListItemIcon>
            <LogoutRoundedIcon/>
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </Box>
    );
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={toggleDrawer(true)}/>
            {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            TrueReview
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          
        </Toolbar>
      </AppBar>
      {/* drawer line */}
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
    <div className='top'>
    <div className='About'>
    <div class="container">
      <h1 style={{fontSize:'100px', marginTop:0 , marginBottom:0}}>About</h1>
        <h2 style={{fontSize:'50px'}}>"Quality reviews for smarter shopping"</h2>
        <p>TrueReview is a platform designed to offer honest, anonymous reviews of products purchased both online and offline.
           Our goal is to ensure that no one is offended while providing high-quality, genuine feedback on a wide range of products.
            Users can upload photos at any time and submit detailed reviews, helping others make informed purchasing decisions.
             With TrueReview, everyone has the chance to share their experiences openly, while maintaining complete privacy.</p>
    </div>
        <div class="logo">
            </div>
    </div> 
    </div>  
</div>
  );
}
