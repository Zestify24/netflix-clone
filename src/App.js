import Row from "./Row.js";
import './App.css';
import requests from "./requests.js"
import Banner from "./Banner"
import Nav from "./Nav"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner />
      <br/>
      <Row title="Netflix Originals" fetchUrl={requests.FetchNo} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.FetchTr} />
      <Row title="Top Rated" fetchUrl={requests.FetchTR} />
      <Row title="Comedy Movies" fetchUrl={requests.FetchCM} />
      <Row title="Horror Movies" fetchUrl={requests.FetchHm} />
      <Row title="Romance Movies" fetchUrl={requests.FetchRm} />
      <Row title="Documentries" fetchUrl={requests.FetchDc} />
    </div>
  );
}

export default App;
