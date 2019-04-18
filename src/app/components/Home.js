import React from 'react';
import PropTypes from 'prop-types';
import Mycharts from './Mycharts';

export class Home extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={value:"put text"}
    //     this.handleChange= this.handleChange.bind(this); 
    // }
    // handleChange(e){
    //     const value = e.target.value;
    //     this.setState({value});
    // }
    constructor(props){
        super(props);
        this.state={dataValue:"data"}
    }
   
    
    render(){
        return(
        <>
            <div className="welcome-message"><h1>Hello John!</h1></div>
            <div className="charts">
                 
                    
                    <Mycharts/>
                   
                  
                  
            </div>
            <div className="item5">
                  <div className="dashboard-item task">
                    <div className="dashboard-item__header"><p>Tasks</p></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className="dashboard-item messages">
                    <div className="dashboard-item__header"><p>Messages</p></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className="dashboard-item activity">
                    <div className="dashboard-item__header"><p>Activity</p></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
            </div>
            
              {/* <div>{this.state.component}</div> */}
              </>  
        )
    }

}
Home.propTypes ={
    name: PropTypes.string,
    age: PropTypes.number
};
export default Home;