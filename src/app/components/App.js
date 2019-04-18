import React from 'react';
import ReactDOM from 'react-dom';
import Statistic from './Statistics';
import Homes from './Homes';
import Home from './Home';
import '../styles/style.css'
import NavBar from './NavBar';
import {BrowserRouter, Switch,Route} from 'react-browser-router';
import {Main} from './Main'
import { Header } from './Header';
import Sth from './Sth';
import Favicon from 'react-favicon';

export class App extends React.Component{
    // constructor(props) {
    //     super(props);
    //     this.state = { component: false };
    //     this.handleClick = this.handleClick.bind(this);
    //     this.showStatistic = this.showStatistic.bind(this);
    //   }
      
    //   handleClick(e) {
    //     this.setState({ component: <Homes/> });
    //     $(e.target).parent().addClass('active').siblings().removeClass('active');
    //   }
    //   showStatistic(e){
    //     this.setState({component:<Statistic/>});
    //     $(e.target).parent().addClass('active').siblings().removeClass('active');
    //     console.log(e.target)
        
        
    //   }
    render()
    {
        return(
        <div className="grid-container">
        <Favicon url="http://oflisback.github.io/react-favicon/public/img/github.ico"/>
        <NavBar/>
            {/* <ul>
              <li><img src="../images/Logo (1).png"/></li>
              <li><a href='#' onClick={this.handleClick}>Home</a></li>
              <li><a href='#' onClick={this.showStatistic}>y</a></li>
              <li><a href='#' onClick={this.handleClick}>z</a></li>
              <li><a href='#' onClick={this.showStatistic}>a</a></li>
             </ul> */}
             
             
        <Header/>
        
        <Switch>
                
            <Route exact path='/' component={Home}/>
            <Route path='/homes' component={Homes}/>
            <Route path='/statistics' component={Statistic}/>
            <Route path='/sth' component={Sth}/>
           
          </Switch>
      </div>
        );
    }
}