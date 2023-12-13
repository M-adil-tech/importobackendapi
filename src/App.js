import './App.css';
import { BrowserRouter,Router,Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import SignUpseller from './components/SignUpseller';
import Home from './components/Home';
import Signupoption from './components/Signupoption';
import Login from './components/Login';
import Mainbuyer from './components/Mainbuyer';
import Bidcreatebybuyer from './components/Bidcreatebybuyer';
import Mainseller from './components/Mainseller';
import Bidcreatebyseller from './components/Bidcreatebyseller';
import Sellerprofile from './components/Sellerprofile';
import Buyerprofile from './components/Buyerprofile';
import Viewbidsseller from './components/Viewbidsseller';
import Buyerprebids from './components/Buyerprebids';
import Calculatefeas from './components/Calculatefeas';
import Footer from './components/Footer';
import Buyercurrentbids from './components/Buyercurrentbids';
import Sellercurrentbids from './components/Sellercurrentbids';
import Maintransporter from './components/Maintransporter';
import Transporterprofile from './components/Transporterprofile';
import Biddetails from './components/Biddetails';
import Aboutus from './components/Aboutus';
import Viewbidpriceb from './components/Viewbidpriceb';
import Viewbidprices from './components/Viewbidprices';
import Acceptseller from './components/Acceptseller';
import Accepttrans from './components/Accepttrans';
import Viewbuyerprofile from './components/Viewbuyerprofile';
import Editbidbuyer from './components/Editbidbuyer';
import Editbidseller from './components/Editbidseller';
import Viewbidstrans from './components/Viewbidstrans';
import SellerResponse from './components/SellerResponse';
import Buyerdashboard from './components/Buyerdashboard';
import Sellerdashboard from './components/Sellerdashboard';
import Dashboardtrans from './components/Dashboardtrans';
import TransResponse from './components/TransResponse';
import Buyerpayment from './components/Buyerpayment';


import { UserProvider } from "./useUser";




function App() {

  return (
    <>
    <UserProvider>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<NavBar />}>
      <Route index element={<Home />}/>
          <Route path="signUpSeller" element={<SignUpseller signas="Sign Up" />} />
          <Route path="signUpOption" element={<Signupoption />} />
          <Route path="Login" element={<Login />} />
          <Route path="Mainbuyer" element={<Mainbuyer />} />
          <Route path="Bidcreatebybuyer" element={<Bidcreatebybuyer />} /> 
          <Route path="Mainseller" element={<Mainseller />} />
          <Route path="Bidcreatebyseller" element={<Bidcreatebyseller />} />
          <Route path="Sellerprofile" element={ <Sellerprofile/> } />
          <Route path="Buyerprofile" element={<Buyerprofile />}/>
          <Route path="Viewbidsseller" element={<Viewbidsseller />}/>
          <Route path="Buyerprebids" element={<Buyerprebids />}/>
          <Route path="Editbidbuyer" element={<Editbidbuyer />}/>
          <Route path="Buyercurrentbids" element={<Buyercurrentbids />}/>
          <Route path="sellercurrentbids" element={<Sellercurrentbids />}/>
          <Route path="Maintransporter" element={<Maintransporter />}/>
          <Route path="Transporterprofile" element={<Transporterprofile />}/>
          <Route path="Biddetails" element={<Biddetails />}/>
          <Route path="Aboutus" element={<Aboutus />}/>
          <Route path="Calculatefeas" element={<Calculatefeas />}/>
          <Route path="Viewbidpriceb/:bidId" element={<Viewbidpriceb/>}/>
           <Route path="Viewbidprices" element={<Viewbidprices/>}/>
          <Route path="Acceptseller" element={<Acceptseller/>}/>
          <Route path="Accepttrans" element={<Accepttrans/>}/>
          <Route path="Viewbuyerprofile" element={<Viewbuyerprofile/>}/>
          <Route path="Editbidseller" element={<Editbidseller/>}/>
          <Route path="Viewbidstrans" element={<Viewbidstrans/>}/>
          <Route path="SellerResponse/:bidId" element={<SellerResponse/>}/> 
          <Route path="Buyerdashboard" element={<Buyerdashboard/>}/>
          <Route path="Sellerdashboard" element={<Sellerdashboard/>}/>
          <Route path="Dashboardtrans" element={<Dashboardtrans/>}/>
          <Route path="TransResponse" element={<TransResponse/>}/>
          <Route path="Buyerpayment" element={<Buyerpayment/>}/>

         </Route>
      
      </Routes>
      <Footer/>
      </BrowserRouter>
      </UserProvider>
      </>

  )
}

export default App;