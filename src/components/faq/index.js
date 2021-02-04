import React from 'react';
// import MyButton from '../utils/MyButton';
// import Zoom from 'react-reveal/Zoom';

const FAQ = () => {
    return (
        <div className="faq_center_wrapper">
            <h4>FAQ</h4>
            <div className = "faq_question_wrapper">
                <div className="faq_question">
                    <span>What are Pop Ups?</span>
                </div>
                    <div className = "faq_answer_wrapper">
                        <div className="faq_answer">
                            <span>Pop Ups are flash sales where they only exist for days, weeks, or even months. 
                            Sometimes they take place in stores and other times in the outdoors.</span>
                        </div>
                    </div>
            </div>
            <div className="faq_question_wrapper">
                <div className="faq_question">
                    <span>How much do Pop Ups cost?</span>
                    <div className="faq_answer_wrapper">
                        <div className="faq_answer">
                            <span>To enter Pop Ups they can be free or have a price however what you spend on the actual 
                                    at the event is what you can afford. We try to have PopUps from different price range so you don't 
                                    feel left out</span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    );    
}

export default FAQ;