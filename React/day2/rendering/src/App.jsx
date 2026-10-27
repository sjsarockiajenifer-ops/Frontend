
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Student from "./Components/Student";
import ProductCard from "./Components/ProductCard";
const App=()=>{
  return(<>
  <div>
      <Student/>
      <Header/>
      <Content/>
      <Footer/>
      <div>
      <ProductCard ProductName="Laptop" Price={50000} Category="Electronics" Availability="In Stock"/>
      <ProductCard ProductName="Mobile" Price={20000} Category="Accessories" Availability="In Stock"/>
      <ProductCard ProductName="Keyboard" Price={1500} Category="Computer Accessories" Availability="Out of Stock"/>
      </div>
    </div>
  </>
    
  );
}
export default App;