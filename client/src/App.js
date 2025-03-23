import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { PrimeReactProvider } from 'primereact/api';
import { PrimeIcons } from 'primereact/api';
import 'primeicons/primeicons.css';
import { Button } from "primereact/button";     
import './App.css';
import Layout from './common/Layout';
import TodoList from "./TodoComp/TodosList.js";
import Galery from "./PhotoComp/Galery";
import AllPosts from "./PostComp/AllPosts";
import Users from "./UserComp/Users.js";

function App() {
  return (
    <PrimeReactProvider>
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route index element={
            <div className="my-app">
              home page
              <div>
                <Link to="/TodoComp">
                <Button label="Todos" icon="pi pi-list-check" iconPos="right" style={{ backgroundColor: 'purple'}} className="Categories" />
                </Link>
                <Link to="/PhotoComp">
                  <Button label="Photos" icon="pi pi-images" iconPos="right" style={{ backgroundColor: 'pink'}} className="Categories" />
                </Link>
                <Link to="/PostComp">
                <Button label="Posts" icon="pi pi-pen-to-square" iconPos="right" style={{ backgroundColor: 'green'}} className="Categories" />
                </Link>
                <Link to="/UserComp">
                <Button label="Users" iconPos="right" icon="pi pi-users" style={{ backgroundColor: 'blue'}} className="Categories" />
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
    </PrimeReactProvider>
  );
}

export default App;