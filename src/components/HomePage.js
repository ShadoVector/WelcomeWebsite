import React, { useState, useEffect, useRef } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  TextField,
  useScrollTrigger,
  Slide,
  CssBaseline,
} from '@mui/material';
import MyComponent from '../MyComponent';
import { Link, useNavigate } from 'react-router-dom';
import heroImage from '../assets/hero-image.png';
import logo from '../assets/logo.svg';
import { Icon } from '@iconify/react';
import {
  CreditCardIcon,
  StatusOfflineIcon,
  WifiIcon,
} from '@heroicons/react/outline';
import Typed from 'typed.js';
import CountdownTimer from './CountdownTimer';

const appBarStyles = {
  position: 'static',
  backgroundColor: 'white',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
};

const scrolledAppBarStyles = {
  backgroundColor: 'white',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
};

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
const cardStyle = {
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
};

function FeatureCard({ icon, title, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`content ${isHovered ? 'hovered' : ''}`}>
        <div className="icon">{icon}</div>
        <h5 className="title">{title}</h5>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

const HomePage = () => {
  const buttonStyle = {
    backgroundColor: 'white',
    color: '#1976d2',
    fontWeight: 'bold',
    marginRight: '10px',
  };

  const buttonHoverStyle = {
    backgroundColor: '#1976d2',
    color: '#fff',
  };
  const [userEmail, setUserEmail] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    console.log('handleRegister called');
  
    if (!isRegistering) {
      try {
        console.log('Sending API request...');
        setIsRegistering(true);
  
        // Your API call here
        // For example, use axios or fetch
        // await axios.post('/api/register', { email: userEmail });
  
        setUserEmail(userEmail);
        setIsRegistered(true);
        setValidationError('');
        console.log('API request successful');
      } catch (error) {
        console.error('Error registering:', error);
        setValidationError('Error registering. Please try again.');
      } finally {
        setIsRegistering(false);
      }
    } else if (isRegistering) {
      console.log('Registration is already in progress');
    } else {
      setValidationError('Invalid email format');
    }
  };
  
  
  
  const navigate = useNavigate();

  const [isViewMoreHovered, setIsViewMoreHovered] = useState(false);

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Cards', 'Friends', 'Families', 'Merchant', 'Classes'],
      startDelay: 300,
      typeSpeed: 120,
      backSpeed: 80,
      backDelay: 1200,
      smartBackspace: true,
      loop: true,
      showCursor: false,
      cursorChar: '|',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <CssBaseline />
      <HideOnScroll>
        <AppBar style={scrolled ? scrolledAppBarStyles : appBarStyles}>
          <Toolbar>
            <img src={logo} alt="Teleport Pay" style={{ maxWidth: '120px' }} />
            <div style={{ flex: 1 }}></div>
            <Button
              style={buttonStyle}
              sx={{ '&:hover': buttonHoverStyle }}
              component={Link}
              to="/"
            >
              Home
            </Button>
            <Button component={Link} to="/about">
              About
            </Button>
            <Button component={Link} to="/features">
              Features
            </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <div className="airsection">
      <div class='air air1' style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100px', background: 'url(https://1.bp.blogspot.com/-xQUc-TovqDk/XdxogmMqIRI/AAAAAAAACvI/AizpnE509UMGBcTiLJ58BC6iViPYGYQfQCLcBGAsYHQ/s1600/wave.png)', backgroundSize: '1000px 100px', animation: 'wave 30s linear infinite', zIndex: 1000, opacity: 1, animationDelay: '0s' }}></div>
                <div class='air air2' style={{ position: 'absolute', bottom: 10, left: 0, width: '100%', height: '100px', background: 'url(https://1.bp.blogspot.com/-xQUc-TovqDk/XdxogmMqIRI/AAAAAAAACvI/AizpnE509UMGBcTiLJ58BC6iViPYGYQfQCLcBGAsYHQ/s1600/wave.png)', backgroundSize: '1000px 100px', animation: 'wave2 15s linear infinite', zIndex: 999, opacity: 0.5, animationDelay: '-5s' }}></div>
                <div class='air air3' style={{ position: 'absolute', bottom: 15, left: 0, width: '100%', height: '100px', background: 'url(https://1.bp.blogspot.com/-xQUc-TovqDk/XdxogmMqIRI/AAAAAAAACvI/AizpnE509UMGBcTiLJ58BC6iViPYGYQfQCLcBGAsYHQ/s1600/wave.png)', backgroundSize: '1000px 100px', animation: 'wave 30s linear infinite', zIndex: 998, opacity: 0.2, animationDelay: '-2s' }}></div>
                <div class='air air4' style={{ position: 'absolute', bottom: 20, left: 0, width: '100%', height: '100px', background: 'url(https://1.bp.blogspot.com/-xQUc-TovqDk/XdxogmMqIRI/AAAAAAAACvI/AizpnE509UMGBcTiLJ58BC6iViPYGYQfQCLcBGAsYHQ/s1600/wave.png)', backgroundSize: '1000px 100px', animation: 'wave2 5s linear infinite', zIndex: 997, opacity: 0.7, animationDelay: '-5s' }}></div>
        <section
          style={{
            marginBottom: '20%',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, marginTop: '5%' }}>
              <div className="text-center my-6 md:my-16">
                <div className="relative">
                  <h1 className="font-bold text-white text-4xl md:text-6xl mb-4 md:mb-6 leading-[56px] z-50">
                    All Your <span style={{ color: '#e2725b' }} ref={el}></span>
                    <br />
                    Payment Made Easy
                  </h1>
                </div>
                <p className="font-light text-white mb-4 md:mb-10 max-w-xs mx-auto opacity-90">
                  The Tap 'n' Pay App, Just Teleport it!
                </p>
              </div>
            </div>
            <div style={{ flex: 0.5 }}>
              <img
                src={heroImage}
                alt="heroimage"
                style={{ width: '30%', animation: 'moveRight 1s linear' }}
              />
            </div>
          </div>
        </section>
      </div>
      <Container>
        <section style={{ marginBottom: '20%', marginTop: '10%' }}>
          <div className="container">
            <FeatureCard
              icon={<WifiIcon className="h-12 sm:h-6" />}
              title="Tap 'n' Pay"
              description="Teleport Pay makes your card payments just with a tap"
            />
            <FeatureCard
              icon={<StatusOfflineIcon className="h-12 sm:h-6" />}
              title="Offline Transactions"
              description="No Internet worries, just tap on PoS, and your transaction will be completed"
            />
            <FeatureCard
              icon={<CreditCardIcon className="h-12 sm:h-6" />}
              title="Card Management"
              description="Unable to track multiple cards? We provide you with extensive analysis of your cards"
            />

            <div
              className={`view-more-card ${isViewMoreHovered ? 'hovered' : ''}`}
              onMouseEnter={() => setIsViewMoreHovered(true)}
              onMouseLeave={() => setIsViewMoreHovered(false)}
              onClick={() => {
                navigate('/features');
              }}
            >
              <span
                className={`view-more-text ${
                  isViewMoreHovered ? 'hidden' : ''
                }`}
              >
                View More
              </span>
              <Icon
                icon="carbon:next-outline"
                className={`view-more-icon ${
                  isViewMoreHovered ? '' : 'hidden'
                }`}
                style={{ fontSize: '2rem', color: 'white' }}
              />
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '20%' }}>
          <Card style={cardStyle}>
            <CardContent>
              <Typography
                variant="h4"
                style={{ marginBottom: '5%', textAlign: 'center' }}
              >
                Register for Beta!
              </Typography>
              <CountdownTimer />
            </CardContent>
            <Card className="coming-soon-card coming-soon-card-style">
              <CardContent>
                <Typography variant="body2" style={{ marginBottom: '2%' }}>
                  Be the first to know when we launch. Please register for beta
                  access!
                </Typography>
                <div className="coming-soon-form" style={{ marginBottom: '5%', justifyContent: 'center' }}>
                  <TextField
                    label="Your Email Address"
                    variant="outlined"
                    style={{ marginBottom: '5%' }}
                    fullWidth
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <Icon
                          icon="line-md:email-twotone-alt"
                          className="email-icon"
                          style={{ fontSize: '2rem' }}
                        />
                      ),
                    }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ alignContent: 'center' }}
                    startIcon={
                      <Icon
                        icon="gridicons:checkmark-circle"
                        className="checkmark-icon"
                      />
                    }
                    onClick={handleRegister}
                    disabled={isRegistering}
                  >
                    Register
                  </Button>
                  {validationError && <p style={{ color: 'red' }}>{validationError}</p>}
                </div>

                {/* Pass the userEmail to MyComponent only if the user is registered */}
                {isRegistered && <MyComponent userEmail={userEmail} />}
              </CardContent>
            </Card>
          </Card>
        </section>
      </Container>
      {/* footer */}
      <footer>
        <div className="border-t-2 border-gray-200 mt-16 sm:mt-32">
          <div className="mx-4 sm:mx-20 p-6 space-y-8 sm:space-y-12 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-start">
              <div className="flex items-center">
                <div className="flex flex-col items-center">
                  {' '}
                  {/* Center the logo and social media icons */}
                  <img
                    src={logo}
                    alt=""
                    style={{ width: '400px', height: '100px' }}
                  />
                  <div className="sm:w-full mt-2">
                    {' '}
                    {/* "Follow Us" text positioned below the logo */}
                    <div className="flex flex-col space-y-2 items-center">
                      <h5 className="font-medium text-lg">Follow Us</h5>
                      <div className="flex space-x-2">
                        {' '}
                        {/* Display icons horizontally */}
                        <a
                          href="https://www.linkedin.com/company/teleport-pay/?viewAsMember=true"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon
                            icon="line-md:linkedin"
                            className="h-6 w-6 cursor-pointer hover:text-blue-700"
                            style={{ color: '#2c4069' }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:w-full">
                <div className="flex flex-col space-y-2 mt-4 sm:mt-0 sm:items-center">
                  {' '}
                  {/* Center align the items */}
                  <h5 className="font-medium text-lg">Pages</h5>
                  <p className="font-light">Home</p>
                  <p className="font-light">About Us</p>
                  <p className="font-light">Privacy Policy</p>
                  <p className="font-light">Terms of Service</p>
                </div>
              </div>
              <div className="sm:w-full">
                <div className="flex flex-col space-y-2 sm:items-center">
                  {' '}
                  {/* Center align the items */}
                  <h5 className="font-medium text-lg">Our Progress</h5>
                  <a
                    href="https://www.linkedin.com/company/teleport-pay/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="font-light">LinkedIn</p>
                  </a>
                  <a href="/blog">
                    <p className="font-light">Blog</p>
                  </a>
                  <a href="/contact">
                    <p className="font-light">Contact Us</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h5 className="text-center font-medium mt-8">
          Copyright &copy; {new Date().getFullYear()}{' '}
          <span style={{ color: '#e2725b' }}>Teleport Pay</span>. All rights
          reserved.
        </h5>
      </footer>
    </div>
  );
};

export default HomePage;
