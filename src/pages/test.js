import React from 'react';
import { IndexRoute } from 'react-router'
import { BrowserRouter as Router, Route ,Link} from 'react-router-dom'
import './test.css'
import LB from './lb'
import DF from './df'
import LSY from './lsy'


// class SAPage extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>Simple SAP</h1>
//                 <ul className='header'>
//                     <li><Link to='/lb'>李白</Link></li>
//                     <li><Link to='/df'>杜甫</Link></li>
//                     <li><Link to='/lsy'>李商隐</Link></li>
//                 </ul>

//                 <div className='content'>
//                     {this.props.children}
//                 </div>
//             </div>
//         )
//     }
// }

class Test extends React.Component{

    render(){
        return(
            <div>
                 <Router>
                    <h1>Simple SAP</h1>
                    <ul className='header'>
                        <li><Link to='/lb'>李白</Link></li>
                        <li><Link to='/df'>杜甫</Link></li>
                        <li><Link to='/lsy'>李商隐</Link></li>
                    </ul>

                    <div className='content'>
                        <Route path='/' exact={ true }  component={ LB }></Route>
                        <Route path={'/lb'} component={ LB }></Route>
                        <Route path={'/df'} component={ DF }></Route>
                        <Route path={'/lsy'} component={ LSY }></Route>
                    </div>
                </Router>
            </div>
            // <Router>
            //     <Route path='/' exact={ true }  component={ SAPage }>
            //         {/* <IndexRoute component={ LB }></IndexRoute> */}
            //         <RouterChildContext component={LB} />
            //         <Route path={'/lb'} component={ LB }></Route>
            //         <Route path={'/df'} component={ DF }></Route>
            //         <Route path={'/lsy'} component={ LSY }></Route>
            //     </Route>
               
            // </Router>
           
        )
    }
};
export default Test;
// const routes = {
//     path: '/',
//     component: SAPage,
//     childRoutes: [
//       { path: 'lb', component: LB },
//       { path: 'df', component: DF },
//       { path: 'lsy', component: LSY },
//     ]
//   }
{/* <Router routes={routes} /> */}