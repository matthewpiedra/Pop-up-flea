import React from 'react';
import Fade from 'react-reveal/Fade';

const Description = () => {
    return (
        <Fade>
            <div className="highlight_center_wrapper">
                <h2>Highlights</h2>
                <div className = "highlight_description_wrapper">
                    <div className="highlight_description">
                        <span>Welcome to Pop Up Flea! Feel free to come on down to see the Pop Up shops/vendors we will be hosting!</span>  
                    </div>
                
                    <div className="highlight_description">
                        <span>We have a large selection of choices, such as: Food, Clothes, Art, and much more! The date, address, and location of our next event is placed above. We'd be happy to see you there!</span>
                    </div>

                    <div className="highlight_description">
                        <span>If you need a map, not to worry. We have you covered on that as well! We will also have certain events going on throughout the day, so don't miss out on that either! (psst, there may even be a few prizes to be given out...)</span>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Description;