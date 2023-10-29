import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, useScrollTrigger, Slide, CssBaseline } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { Icon } from '@iconify/react';
import card from '../assets/card.jpg';
import p2p from '../assets/p2p.svg';
import offline from '../assets/offline.jpg';
import rfai from '../assets/rfai.svg';
import tap from '../assets/tap.jpg';
import merchant from '../assets/merchant.svg';
import FeatureCard from './Featurecard';

// CSS for the fixed navigation bar
const appBarStyles = {
    position: 'static',
    backgroundColor: 'white',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
};

// CSS for the scrolled navigation bar
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

const Features = () => {

        
    const features = [
        {
            heading: 'Instant Merchant Transfer',
            description:
                'Experience instant money transfers with MoneySync Pay. Say goodbye to waiting times; simply tap, and the money will be in your account in an instant.',
            image: merchant,
        },
        {
            heading: 'Card Management and Analysis',
            description: 'Manage your cards with ease and gain deep insights into your card payments and history with MoneySync Pay.',
            image: card,
        },
        {
            heading: 'Peer to Peer',
            description: 'Enhance your user experience with our interactive and fun Peer-to-Peer features. Send and receive money in an enjoyable way.',
            image: p2p,
        },
        {
            heading: 'Tap and Pay',
            description: 'Complete payments with a simple tap using biometric authentication. MoneySync Pay makes payments quick and easy.',
            image: tap,
        },
        {
            heading: 'Offline Transactions',
            description: 'Don\'t worry about the lack of internet access. MoneySync Pay allows tap-and-pay for Point of Sale (PoS) transactions, even without an internet connection.',
            image: offline,
        },
        {
            heading: 'RFA AI',
            description: 'Utilize our in-house Risk Factor Analysis AI API to receive investment recommendations and insights, making informed decisions with MoneySync Pay.',
            image: rfai,
        },
    ];
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
    // Calculate the target date and time for the countdown

    return (
        <div>
            <CssBaseline />
            <HideOnScroll>
                <AppBar style={scrolled ? scrolledAppBarStyles : appBarStyles}>
                    <Toolbar>
                        <img src={logo} alt="MoneySync Pay" style={{ maxWidth: '120px' }} />
                        <div style={{ flex: 1 }}></div>
                        <Button component={Link} to="/">Home</Button>
                        <Button component={Link} to="/about">About</Button>
                        <Button component={Link} to="/features">Features</Button>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <div className="w-full flex flex-wrap justify-center">
                {features.map((feature, index) => (
                    <FeatureCard key={index} feature={feature} />
                ))}
            </div>            
            <footer>
                <div className="border-t-2 border-gray-200 mt-16 sm:mt-32">
                    <div className="mx-4 sm:mx-20 p-6 space-y-8 sm:space-y-12 text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-start">
                            <div className="flex items-center">
                                <div className="flex flex-col items-center"> {/* Center the logo and social media icons */}
                                    <img src={logo} alt="" style={{ width: "100px", height: "100px" }} />
                                    <div className="sm:w-full mt-2"> {/* "Follow Us" text positioned below the logo */}
                                        <div className="flex flex-col space-y-2 items-center">
                                            <h5 className="font-medium text-lg">Follow Us</h5>
                                            <div className="flex space-x-2"> {/* Display icons horizontally */}
                                                <a
                                                    href="https://www.linkedin.com/company/money-sync-pay/?viewAsMember=true"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Icon icon="line-md:linkedin" className="h-6 w-6 text-blue-600 cursor-pointer hover:text-blue-700" />
                                                </a>
                                                <a
                                                    href="https://www.facebook.com/your_facebook_profile"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Icon icon="line-md:twitter" className="h-6 w-6 text-blue-600 cursor-pointer hover:text-blue-700" />
                                                </a>
                                                <a
                                                    href="https://www.instagram.com/your_instagram_profile"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Icon icon="line-md:instagram" className="h-6 w-6 text-blue-600 cursor-pointer hover:text-blue-700" />
                                                </a>
                                                <a
                                                    href="https://www.facebook.com/your_facebook_profile"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Icon icon="line-md:facebook" className="h-6 w-6 text-blue-600 cursor-pointer hover:text-blue-700" />
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="sm:w-full">
                                <div className="flex flex-col space-y-2 mt-4 sm:mt-0 sm:items-center"> {/* Center align the items */}
                                    <h5 className="font-medium text-lg">Pages</h5>
                                    <p className="font-light">Home</p>
                                    <p className="font-light">About Us</p>
                                    <p className="font-light">Privacy Policy</p>
                                    <p className="font-light">Terms of Service</p>
                                </div>
                            </div>
                            <div className="sm:w-full">
                                <div className="flex flex-col space-y-2 sm:items-center"> {/* Center align the items */}
                                    <h5 className="font-medium text-lg">Our Progress</h5>
                                    <a
                                        href="https://www.linkedin.com/company/money-sync-pay/?viewAsMember=true"
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
                    Copyright &copy; {new Date().getFullYear()} <span className="text-blue-600">Moneysync</span>.
                    All rights reserved.
                </h5>
            </footer>
        </div>
    );
};

export default Features;