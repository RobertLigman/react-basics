// import React from 'react';
// import {render} from 'react-dom';
// import {Home} from './components/Home';
// import {Header} from './components/Header';
// import { homedir, userInfo } from 'os';

// class App extends React.Component{
//     render(){
//         var user= {
//             name: "Anna",
//             hobbies: ["sports","gokarts"]
//         }
//         return(
//             <div className='container'>
//                 <div className="row">
//                     <div className="col-xs-10 col-xs-offset-10">
//                         <Header/>
//                     </div>
//                 </div>

//                 <div className="row">
//                     <div className="col-xs-10 col-xs-offset-10">
//                         <Home name={"Max"} age={27} user={user}/>
//                     </div>
//                 </div>
//             </div>
            
//         )
//     }
// }
// render(<App/>,document.getElementById('app'))
import {App} from './components/App';
import ReactDOM from 'react-dom';
import React from 'react';
import {Home} from './components/Home';
import {HashRouter,Route} from 'react-router-dom';

  class Index extends React.Component {
    
    
    render() {
      return (
        
        <HashRouter>
        <App/>
        </HashRouter>
        
      );
    }
  }
  
  ReactDOM.render(<Index />, document.getElementById("app"));