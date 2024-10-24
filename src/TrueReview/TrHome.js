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
import Dialog from '@mui/material/Dialog';
import Alert from '@mui/material/Alert';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { useState } from 'react';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

import { Card, CardContent, CardMedia, CardActionArea } from '@mui/material';


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

  //actual code
  const[learn,setLearn] = useState(false);
  const toggleLearn = () => {
    setLearn(!learn);
  }

  const[start,setStart] = useState(true);
  const toggleStart = () => {
    setStart(false);
  }

  // dialog funsctions
  const [dialogOpen, setDialogOpen] = useState(false);
  const [anonymousName, setAnonymousName] = useState('');

  const handleNameChange = (e) => {
    setAnonymousName(e.target.value);
  }

  const handleDialogClose = () => {
    setDialogOpen(!dialogOpen);
  }

  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
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
            <LogoutRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </ListItem>
    </Box>
  );

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
      title: 'The Lord of the Rings: The Two Towers',
      year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
      title: 'Star Wars: Episode IV - A New Hope',
      year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
      title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
      year: 1964,
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    {
      title: 'Star Wars: Episode VI - Return of the Jedi',
      year: 1983,
    },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    {
      title: 'Eternal Sunshine of the Spotless Mind',
      year: 2004,
    },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
  ];
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
              <MenuIcon onClick={toggleDrawer(true)} />
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
      {/* <div className='top'> */}
      {/* <div className='About'>
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
    </div>  */}
      {/* </div>   */}

      {/* Dialog to enter anonymous name */}
      <Dialog open={dialogOpen} >
        <DialogTitle>Please enter your Anonymous Name</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter your anonymous name"
            type="text"
            fullWidth
            variant="standard"
            value={anonymousName}
            onChange={handleNameChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Submit</Button>
        </DialogActions>
      </Dialog>

      {/* actual code starts */}
    <div className="homepage">

        <div className="MainButton">
          <div className='logo5'>
          </div>
          <div className='Buttons'><button className='subButton' onClick={handleDialogClose}>Set AnonymousName</button></div>
        </div>
        {start && (
          <div>
      <main>
        <div className="hero-section">
          <div className='left'>
          <h1 style={{fontSize:'50px'}}>About Us</h1>
          <h2>We make your dreams happen</h2>
          <h2>Connecting Audience To both online and offline Brands</h2>
          </div>
          <div className='right'>
            <h1>"Explore reviews across a variety of categories."</h1>
            <h1>"Help others by sharing your honest feedback."</h1>
          </div>
        </div>
      </main>
          <div className= 'downButtons'>
            <button onClick={toggleStart}>Get Started</button>
            <button onClick={toggleLearn}>Learn more</button>
          </div>
          {learn && (
            <div className='learn'>
                <div className='subLearn'>
                    <h2>
                    TrueReview is a platform designed to offer honest, 
                    anonymous reviews of products purchased both online and offline.
                     Our goal is to ensure that no one is offended while providing high-quality,
                      genuine feedback on a wide range of products. 
                      Users can upload photos at any time and submit detailed reviews, 
                      helping others make informed purchasing decisions. With TrueReview, 
                      everyone has the chance to share their experiences openly, 
                      while maintaining complete privacy.
                    </h2>
                </div>
            </div>
          )}
      </div> )}
    </div>
    
    {/* actual code starts 2 */}
    <div className='actual2'>
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Products"
            color='white'
            slotProps={{
              input: {
                ...params.InputProps,
                type: 'search',
              },
            }}
          />
        )}
      />
    </Stack>
    </div>
    <p style={{paddingLeft:'50px'  ,fontSize:'20px'}}>Search reviews for Products</p>
    {/* card */}
    <div className='card'>
      {/* card1 */}
      <div className='p1'>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://whirlpoolindia.vtexassets.com/arquivos/ids/164386/Xpert-care-Silver-lid-open-O3-6.5kg_1500x1500.jpg?v=638000290210600000"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <div style={{textAlign:'center'}}>Washing Machine</div>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    {/* card2 */}
    <div className='p1'>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn.thewirecutter.com/wp-content/media/2024/07/laptopstopicpage-2048px-3685-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <div style={{textAlign:'center'}}>Laptop</div>    
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
        {/* card3 */}
    <div className='p1'>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn.thewirecutter.com/wp-content/media/2024/08/lcdledtvs-2048px-hisenseu8n-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <div style={{textAlign:'center'}}>TV</div>    
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </div>
    </div>
  );
}
