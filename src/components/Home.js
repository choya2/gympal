import React from 'react';

class Home extends React.Component{

    render(){
        return(
            <div className="pusher">
                <div className="ui inverted vertical masthead center aligned segment">
                    <div className="ui container">
                        <div className="ui large secondary inverted pointing menu">
                            <a  href="/" className="active item"> Home </a>
                            <a  href="/" className="item"> About</a>
                            <div class="right item">
                                <a class="ui inverted button"> Log in</a>
                                <a class="ui inverted button"> Sign Up</a>
                            </div>
                        </div>
                    </div>
                    <div className="ui text container">
                        <h1 className="ui inverted header">
                            GymPal
                        </h1>
                        <h2>Find your local gym buddy</h2>
                        <div className="ui huge primary button">
                            Get Started
                            <i className="right arrow icon" />
                        </div>
                    </div>
                </div>
                <div className="ui vertical stripe segment">
                    <div className="ui middle aligned stackable grid container">
                        <div className="row">
                            <div className="eight wide column">
                                <h3 className="ui header"> We help bros find other bros </h3>
                                <p>
                                    With gym pal you can find local gym rats that have a similar schedule with you. . .
                                    Let us find you a perfect partner to reach new fitness goals with
                                </p>
                                <h3 className="ui header"> Gym Scheduling made easy </h3>
                                <p>
                                    Message your local gym pals to go to the gym through this app to schedule a gym
                                    and time that works best with you
                                </p>
                            </div>
                            <div className="six wide right floated column">
                                <img src={require(`../images/founders.jpg`)} className="ui large bordered rounded image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Home;