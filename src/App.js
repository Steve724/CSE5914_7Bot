import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'
import MyComponent from "./MyComponent";
import HttpCats from "./HttpCats";
import {Routes,Route,Link} from "react-router-dom";
import Home from "./routes/Home";
import About from "./PageComponents/About";
import Finish from "./PageComponents/Finish";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cocktail" element={<About/>} />
        <Route path="/finish" element={<Finish/>} />
      </Routes>
        {/*<MyComponent/>*/}
        {/*<HttpCats/>*/}
    </div>
  );
}

export default App;
