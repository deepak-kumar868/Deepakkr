import React from 'react'
import './Footer.css';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <div className="container">

            <div className='aboutme'>
                <Typography variant='h5'>About Me</Typography>
                <Typography>
                    Hey,my name is Deepak Kumar.I am a Programmer and Full-Stack Developer.
                </Typography>

                <Link to='/contact' className='footerContactBtn'>
                    <button>Contact Us</button>
                </Link>

            </div>

            <Typography variant='h6'>Social Media</Typography>
            <div className='socialMedia'>
                <a href='https://linkidin.com' target='black'><i className="fa fa-linkedin" id="linked"></i></a>

                <a href='https://github.com' target='black'> <i className="fa fa-github-square github" id="github"></i></a>

                <a href='https://twitter.com' target='black'><i className="fa fa-twitter" id="twitter"></i></a>

                <a href='https://facebook.com' target='black'><i className="fa fa-facebook-square" id="facebook"></i></a>

                <a href='https://instagram.com' target='black'><i className="fa fa-instagram" id="instagram"></i></a>
            </div>

        </div >
    )
}

export default Footer