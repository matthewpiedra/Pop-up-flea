import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_white">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">Pop Up Flea</div>
                <div className="footer_copyright">Copyright © 2021 Pop Up Flea. All rights reserved. </div>
            </Fade>
        </footer>
    );
};

export default Footer;