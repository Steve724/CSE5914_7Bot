import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaSearchLocation size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                        <div>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: '##fff', marginRight: '2rem' }} /> 1-666-666-6666</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{ color: '##fff', marginRight: '2rem' }} /> 7_bot@cocktail.com</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>Team: 7_Bot</h4>
                    <p>"We want to create a cocktail ordering chatbot for bar ordering. 
                        The chatbot would start off asking for the table number. 
                        Then the robot will ask for customers’ preference and give recommendations"</p>
                    <div className='social'>
                        <FaFacebook size={30} style={{ color: '##fff', marginRight: '1rem' }} />
                        <FaTwitter size={30} style={{ color: '##fff', marginRight: '1rem' }} />
                        <FaLinkedin size={30} style={{ color: '##fff', marginRight: '1rem' }} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer

