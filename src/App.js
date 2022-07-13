
import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import { Nav } from './components/nav/Nav';
import {Home} from './pages/home/Home'
import {Breakfast} from './pages/breakfast/Breakfast'
import {Lunch} from './pages/lunch/Lunch'
import {Dinner} from './pages/dinner/Dinner'
import {Snacks} from './pages/snacks/Snacks'
import { ShareRecipe } from './pages/sharerecipe/ShareRecipe';
import  {Login} from './pages/login/Login'
import { Footer } from './components/footer/Footer';
import { ViewRecipe } from './pages/viewrecipe/ViewRecipe';
import styled from 'styled-components';
function App() {
  return (
    <Router>
      <Nav/>
      <Content>
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
        </Routes>
        <Routes>
            <Route exact path="/breakfast" element={<Breakfast/>}></Route>
        </Routes>
        <Routes>
            <Route exact path="/lunch" element={<Lunch/>}></Route>
        </Routes>
        <Routes>
            <Route exact path="/dinner" element={<Dinner/>}></Route>
        </Routes>
        <Routes>
            <Route exact path="/snacks" element={<Snacks/>}></Route>
        </Routes>
        <Routes>
            <Route exact path="/sharerecipe" element={<ShareRecipe/>}></Route>
        </Routes>
        <Routes>
            <Route exact path="/login" element={<Login/>}></Route>
        </Routes>
        <Routes>
            <Route exact path="/viewRecipe" element={<ViewRecipe/>}></Route>
        </Routes>
      </Content>
      <Footer/>
    </Router>
  );
}

const Content = styled.div`
    min-height:100vh ;
`
export default App;
