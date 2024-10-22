import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Counter from './Counter';
import Childclass from './Childclass';
import DynamicRendering from './DynamicRendering';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";
import ApiHandling from './ApiHandling';


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['->'];

function Home() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

 
  
  //Props
  var property1 = "Land"
  var property2 = "House"
  
  //Internal css
  const arr = ['JAVA', 'C++', 'PYTHON', 'C', 'JAVASCRIPT']
  
  //Keys , Values , Hookes
  const [arr1, setArr1] = useState([]);
  const [Reset,setReset] = useState(false);
  const generateArray = () => {
    const newArr = [];
    for (let i = 73; i <= 143; i++) {
      newArr.push('727723euit' + i);
    }
    setArr1(newArr);
    setReset(true);
  }
  const handleReset = () => {
    setArr1([]);
    setReset(false);
  }
  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                    <Typography onClick={handleLogout}>Logout</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <div>
          <h1>1)STATE :</h1>
        <div className='state'>
          <center>
            <div className='counter'>
              <h3>Products Counter...!</h3>
              <Counter />
            </div>
          </center>
        </div>
          <h1>2)PROPS:</h1>
        <div className='props'>
          <div className='pc'>
          <h3 style={{marginBottom:'0px'}}>This is Parent class:</h3>
          <center>
            <h4 style={{marginTop:'0px', fontStyle:'italic',color:'blue'}}>I have a '{property1}' and '{property2}'</h4>
          </center>
          <Childclass data1={property1} data2={property2} />
          </div>
        </div>
          <h1>3)DYNAMIC RENDERING:</h1>
        <div className='dynamicRendering'>
          <div className='form'>
          <center><h3>Enter your details</h3></center>
          <DynamicRendering />
          </div>
        </div>
          <h1>4)TYPES OF CSS</h1>
        <div className='css'>
          <div className='inline'>
            <h1>a)Inline</h1>
            <h2 style={{ color: 'CaptionText', textAlign: 'center', marginBottom:'0px' }}>About me</h2>
            <h3 style={{ textAlign: 'center', fontStyle: 'italic', color: 'blue', marginTop:'0px' }}>I am Manoj kumar from Palani</h3>
          </div>
          <div>
            <style>
              {`
                .head2{
                    font-size:20px;
                    color:blue;
                    }
                    .head1{
                        text-align:center;
                }
          `  }
            </style>
            <div className='internal'>
            <h1>b)Internal</h1>
            <div className='internal2'>
            <h2 className='head1'>Programming Languages</h2>
            <ol className='head2'>
              {
                arr.map((a, b) => (<li value={b + 1}>{a}</li>))
              }
            </ol>
            </div>
            </div>
          </div>
          <div className='external1'>
            <h1>c)External</h1>
          <div className='external2'>
            <div id="grid">
              <div class="cell">
                <div class="odd"></div>
                <div class="even"></div>
                <div class="odd"></div>
                <div class="even"></div>
                <div class="odd"></div>
                <div class="even"></div>
                <div class="odd"></div>
                <div class="even"></div>
              </div>
              <div class="cell">
                <div class="even"></div>
                <div class="odd"></div>
                <div class="even"></div>
                <div class="odd"></div>
                <div class="even"></div>
                <div class="odd"></div>
                <div class="even"></div>
                <div class="odd"></div>
              </div>
              <div class="cell">
                <div class="odd"></div>
                <div class="even"></div>
                <div class="odd"></div>
                <div class="even"></div>
                <div class="odd"></div>
                <div class="even"></div>
                <div class="odd"></div>
                <div class="even"></div>
              </div>
              <div class="cell">
                <div class="even"></div>
                <div class="odd"></div>
                <div class="even"></div>
                <div class="odd"></div>
                <div class="even"></div>
                <div class="odd"></div>
                <div class="even"></div>
                <div class="odd"></div>
              </div>
              <div class="cell">
                <div class="odd"></div>
                <div class="even"></div>
                <div class="odd"></div>
                <div class="even"></div>
                <div class="odd"></div>
                <div class="even"></div>
                <div class="odd"></div>
                <div class="even"></div>
              </div>
              <div class="cell">
                <div class="even"></div>
                <div class="odd"></div>
                <div class="even"></div>
                <div class="odd"></div>
                <div class="even"></div>
                <div class="odd"></div>
                <div class="even"></div>
                <div class="odd"></div>
              </div>
              <div class="cell">
                <div class="odd"></div>
                <div class="even"></div>
                <div class="odd"></div>
                <div class="even"></div>
                <div class="odd"></div>
                <div class="even"></div>
                <div class="odd"></div>
                <div class="even"></div>
              </div>
              <div class="cell">
                <div class="even"></div>
                <div class="odd"></div>
                <div class="even"></div>
                <div class="odd"></div>
                <div class="even"></div>
                <div class="odd"></div>
                <div class="even"></div>
                <div class="odd"></div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <h1>5)KEYS AND VALUES</h1>
        <div className='keysAndValues'>
              <div className='keys'>
                <center><h2>IT B</h2>
                <button onClick={generateArray}>Generate Roll Nos</button>
                </center>
                <ul>
                  {arr1.map((a, b) => (
                    <li value={b}>{a}</li>
                  ))}
                </ul>
                <center>{Reset && (<button onClick={handleReset}>reset</button>)}</center>
              </div>
        </div>
        <h1>6)API HANDLING</h1>
        <div className='Api'>
          <div className='API'>
          <center><ApiHandling/></center>
          </div>
        </div>
      </div>

    </div>
  );
}
export default Home;
