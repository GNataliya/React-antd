import style from './style.module.css';

import { Routes, Route } from 'react-router-dom'; 

import Header from '../components/Header';
// import Banner from '../components/Banner';
import Content from '../containers/Content';
import Footer from '../components/Footer';


function App() {
  return (
    <>
      <div className={style.app}>
        <Header />

        {/* <Banner /> */}

        <Routes>
            <Route path='*' element={<Content />} />    
        </Routes>

        <Footer />
      </div>
    </>  
  );
}

export default App;
