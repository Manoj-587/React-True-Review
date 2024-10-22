import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './TRCss.css';
import { useNavigate } from 'react-router-dom';

const MyProfile = () => {
    const Nav = useNavigate();
    const handleArrowBack = () => {
        Nav('/');
    }
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="back"
              sx={{ mr: 2 }}
            >
              <ArrowBackIcon onClick={handleArrowBack} />
              
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Profile
            </Typography>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="edit"
              sx={{ mr: 2 }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="more"
              sx={{ mr: 2 }}
            >
              <MoreVertIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="profile-container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="header-icons">
            <IconButton className="back-button" aria-label="back">
              ←
            </IconButton>
            <h2>Info</h2>
            <IconButton className="close-button" aria-label="close">
              ✕
            </IconButton>
          </div>
          <div className="avatar-container">
            <Avatar sx={{ bgcolor: deepOrange[500], width: 80, height: 80 }}>
              MK
            </Avatar>
            <div className="camera-icon">📷</div>
          </div>
          <h3 className="profile-name">Manoj Kumar</h3>
          <p className="status">Online</p>
        </div>

        {/* Profile Details */}
        <div className="profile-details">
          <div className="bio-section">
            <p>Bio</p>
            <p>70</p>
          </div>
          <div className="bio-text">
            <p>Any details such as age, occupation, or city. Example: 23 y.o. designer from San Francisco</p>
          </div>

          <div className="details-section">
            <div className="detail-item">
              <span className="icon">👤</span>
              <span>Name</span>
              <span className="detail-value">Manoj Kumar</span>
            </div>
            <div className="detail-item">
              <span className="icon">📞</span>
              <span>Phone number</span>
              <span className="detail-value">+91 90259 80093</span>
            </div>
            <div className="detail-item">
              <span className="icon">🔗</span>
              <span>t.me/username</span>
              <span className="detail-value add-link">Add username</span>
            </div>
          </div>

          <p className="username-info">Username lets people contact you on Telegram without needing your phone number.</p>

          <div className="details-section">
            <div className="detail-item">
              <span className="icon">📢</span>
              <span>Personal channel</span>
              <span className="detail-value add-link">Add</span>
            </div>
            <div className="detail-item">
              <span className="icon">🎂</span>
              <span>Date of Birth</span>
              <span className="detail-value add-link">Add</span>
            </div>
          </div>

          <p className="dob-info">Only your contacts can see your birthday.</p>

          <div className="add-account">
            <Button variant="contained" color="primary">+ Add Account</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
