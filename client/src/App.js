import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Layout from './common/Layout';
import TodoList from "./TodoComp/TodosList.js";
import Galery from "./PhotoComp/Galery";
import AllPosts from "./PostComp/AllPosts";
import Users from "./UserComp/Users.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route index element={
            <div>
              <h1>home page</h1>
              <div>
                <Link to="/TodoComp">
                  <button>Todos</button>
                </Link>
                <Link to="/PhotoComp">
                  <button>Photos</button>
                </Link>
                <Link to="/PostComp">
                  <button>Posts</button>
                </Link>
                <Link to="/UserComp">
                  <button>Users</button>
                </Link>
              </div>
            </div>
          } />
          <Route path='/TodoComp' element={<TodoList />} />
          <Route path='/PhotoComp' element={<Galery />} />
          <Route path='/PostComp' element={<AllPosts />} />
          <Route path='/UserComp' element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;