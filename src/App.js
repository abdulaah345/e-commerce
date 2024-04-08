import Productdetails from "./components/productdetails";
import About from "./components/About";
import Navbar from "./components/navebar";
import Productlist from "./components/productlist";
import Slider from "./components/slider";
import{ BrowserRouter, Route ,Switch} from "react-router-dom";
function App() {
  return (
    <div className="App">
           
      <BrowserRouter>
      <Navbar/>
        <Switch>

          
          <Route path="/"  exact  >

             <Slider/>
             <Productlist/>

          </Route>
   
         <Route path="/about">

          <About/>
         </Route>

        <Route path="/product/:ProductId">

          <Productdetails/>

        </Route>


          
        


        </Switch>
      
      
      </BrowserRouter>

      
    </div>
  );
}

export default App;
