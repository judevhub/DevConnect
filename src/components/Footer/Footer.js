import React from 'react'
import styled from 'styled-components';
import github from '../../assets/svg/github.svg';

export default function Footer() {
    return (
        <FooterContainer className="main-footer">

            <div className="footer-middle">
                <div className="container-fluid">
                    <div className="row">
                        {/* Column 1 */}
                        <div className="col-md-4 col-sm-6">
                            <h4 style={{color:'white'}}>About Us</h4>
                            <ul className="list-unstyled">
                               
                                <li><a href="/#">Our Blogs</a></li>
                                <li><a href="/#">Video Presentations</a></li>
                                <li></li>
                            </ul>
                        </div>
                        {/* Column 2 */}
                        <div className="col-md-4 col-sm-6">
                            <h4 style={{color:'white'}}>Contact Us</h4>
                            <ul className="list-unstyled">
                                <li><a href="mailto:test@mail.com">Email</a></li>
                                <li><a href="/#">Linkedin</a></li>
                            </ul>
                        </div>
                        {/* Column 3 */}
                        <div className="col-md-3 col-sm-6">
                            <h4 style={{color:'white'}}>Find Us</h4>
                            <ul className="list-unstyled">
                                <li><a href="/#"> <img src={github} alt="github" className="icons" />  Github</a></li>

                            </ul>
                        </div>
                    </div>
                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <p className="text-xs-center" style={{color:'white'}}>
                            &copy; {new Date().getFullYear()} DevHub JU - All Rights Reserved
                        </p>
                        {/* <img height={50} src={logo} alt="logo"/> */}
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
h4{
    padding-bottom: 1rem;
}
.footer-middle {
    background: #0069D9;
    padding-top: 3rem;
    color: var(--mainWhite);
}
.footer-bottom{
    padding-top: 3rem;
    padding-bottom: 2rem;
}
ul li a {
    color: var(--mainSilverGrey);
}
ul li a: hover{
    color: var(--mainLightGrey);
}
ul li{
    padding-bottom: 10px;
    color: white;
}
.icons{
    height: 20px;
    padding-right: 5px;
    color: white;
}
`;