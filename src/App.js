import "./App.css";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import Login from "./Components/Login";
import { useStateValue } from "./StateProvider";
function App() {
  //pulling user from datalayer
  const [{ user }, dispatch] = useStateValue();

  //const [user, setUser] = useState(null); firstly user pulled from state
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>

              <Route path="/">{/*<Chat />*/}</Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
