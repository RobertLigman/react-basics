import React from 'react';

export class Header extends React.Component{
    
    handleHamburger(){
            
            $("nav").toggle();
                 $(".grid-container").toggleClass("move-sidebar",500)
            
        
        
            
        
        // toggleClass("toggle-visible");
        

    }
    render(){
        return(
            <header>
                <ul>
                <li><i className="fas fa-bars" onClick={this.handleHamburger.bind(this)}></i></li>
                <li><i className="fas fa-search"></i></li>
                <li><button><i className="fas fa-plus"></i>Add project</button></li>
                <li><i className="fas fa-envelope"></i></li>
                <li><i className="fas fa-bell"></i></li>
                </ul>
            </header>
        )
    }
}