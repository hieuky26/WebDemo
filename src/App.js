import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import SimpleBottomNavigation from "./component/nav";
import Movies from "./Pages/Movies/Movies";
import Trending from "./Pages/Trending/Trending";
import TV from "./Pages/TV/TV";
import Search from "./Pages/Search/Search";
import Container from '@material-ui/core/Container';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/tv" component={TV} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation/>
    </BrowserRouter>
  );
}

export default App;


