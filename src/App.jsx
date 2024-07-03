import './App.css'
import Achievements from './components/achievements';
import Exclusive from './components/exclusive';
import Header from './components/header';
import Explore from './components/explore';
import Footer from './components/footer';


function App() {
   return(
   <div>
    <Header></Header>
    <Achievements></Achievements>
    <Exclusive></Exclusive>
    <Explore></Explore>
    <Footer></Footer>
    </div>
   );
}

export default App;
