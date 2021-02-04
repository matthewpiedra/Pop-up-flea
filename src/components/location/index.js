import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper"> 
            
            <iframe 

                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d537.5803509375747!2d-73.96276861113688!3d40.72104531617863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25967b1b8e0f7%3A0x927a439e1c9c3b8c!2sSmorgasburg!5e0!3m2!1sen!2sus!4v1611104648724!5m2!1sen!2sus"
                

                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
                title="myframe"
            ></iframe>
            
            <div className="location_tag"> 
                <div className="location"><a href ="https://www.google.com/maps?ll=40.721098,-73.962582&z=19&t=m&hl=en&gl=US&mapclient=embed&daddr=Smorgasburg+90+Kent+Ave+Brooklyn,+NY+11211@40.7210981,-73.9625824">Location</a></div>
            </div>

        </div>
    );
};

export default Location;