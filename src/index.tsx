import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import MintApp from './MintApp';
import HomeApp from './App';
import StakeAp from './components/stakingApp';


//components
import Footer from './components/Footer';

import './index.css';
import "../node_modules/video-react/dist/video-react.css"; 


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path ='/homeapp' element={<HomeApp/>}/>
            <Route path ='/' element={<MintApp/>}/>
            

        </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root'),
);
