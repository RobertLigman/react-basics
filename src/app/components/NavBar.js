import React from 'react';
import Statistic from './Statistics';
import Homes from './Homes';
import Home from './Home';
import Sth from './Sth';
import '../styles/style.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import image from '../images/Logo.png'


class NavBar extends React.Component{
    handleChange(e){
      let target = $(e.target);
      
      if(target.is("i")){
        $(e.target).parent().parent().addClass('active').siblings().removeClass('active');

      }
      else if(target.is(".logo") || target.parent().is("a")){
          $(".home-link").addClass('active').siblings().removeClass('active');
      }
      else if(!target.is("li")){
        $(e.target).parent().addClass('active').siblings().removeClass('active');
    }
    }
      render(){
          return(
            
            <nav>
              <ul>
                <li ><Link to='/'  className='logo' onClick={this.handleChange}><img src={image}/></Link></li>  
                <li className="active home-link" onClick={this.handleChange} ><Link to='/'><i className="fas fa-home"></i>Home</Link></li>
                <li onClick={this.handleChange}><Link to='/homes' >
                  <i className="fas fa-equals"></i>Workflow
                </Link></li>
                <li onClick={this.handleChange}><Link to='/statistics' onClick={this.handleChange}><i className="fas fa-signature"></i>Statistics</Link></li>
                <li onClick={this.handleChange}><Link to='/sth'  ><i className="fas fa-calendar-alt"></i>Calendar</Link></li>
                <li onClick={this.handleChange}><Link to='/sth'  ><i className="fas fa-user"></i>User</Link></li>
                <li onClick={this.handleChange}><Link to='/sth'  ><i className="fas fa-cog"></i>Settings</Link></li>
              </ul>
            </nav>
            
          )
      }
}
export default NavBar;
NavBar.propTypes={
  name:PropTypes.string,
  changeState:PropTypes.func
}