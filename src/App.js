import "./App.css";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Row from "./Components/Row";
import requests from "./Requests";

function App() {
  return (
    <div className="app">
      
      <Navbar />
      <Banner />

      <Row title="Trending now" fetchUrl={requests.fetchTrending} />

      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

      <Row title="Comedy" fetchUrl={requests.fetchComedy} />
    </div>
  );
}

export default App;
