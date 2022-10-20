import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'
import MyComponent from "./MyComponent";
import HttpCats from "./HttpCats";
import {Routes,Route,Link} from "react-router-dom";
import Home from "./routes/Home";
import About from "./PageComponents/About";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cocktail" element={<About/>} />
      </Routes>
        {/*<MyComponent/>*/}
        {/*<HttpCats/>*/}
    </div>
  );
}

export default App;
