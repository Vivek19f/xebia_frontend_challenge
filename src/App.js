import Header from './Header'
import Blogs from "./Blogs";
import Home from "./Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CreateBlog from './CreateBlog';
import BlogDetails from './BlogDetails';
import NotFound from './404';

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      <div className="content">
        <Switch>
          <Route exact path='/'><Home/></Route>
          <Route exact path='/blogs'><Blogs/></Route>
          <Route path='/blogs/new'><CreateBlog/></Route>
          <Route path='/blogs/:title'><BlogDetails/></Route>
          <Route path='*'><NotFound/></Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
