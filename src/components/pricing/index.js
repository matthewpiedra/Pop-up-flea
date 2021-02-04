import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        prices:[10, 50, 200],
        positions:['Reuseable Cup', 'Vip Music Tent', 'Family Pass'],
        desc:[
            'Buy one of our Pop Up Flea branded metal cups to get 10% off all drinks!',
            'This gives you access to the Vip Music Tent with one free drink and a socially distanced table (21+)',
            'This pass allows you to get a 4 free meals and a Pop Up Flea Vendor shirt of your choice.'
        ],
        linkto:['http://sales/b','http://sales/m','http://sales/s'],
        delay:[500, 0, 500]

    }

    showBoxes = () => (
        this.state.prices.map((box,i) => (
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bck="#000000"
                                color="#ffffff"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
        
    )

    render(){
        return(
            <div className="bck_white">
                <div className="center_wrapper_prices pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>

                </div>
            </div>
        );
    }
}

export default Pricing;
