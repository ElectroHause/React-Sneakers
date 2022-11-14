import Card from "./Components/Card";
import Header from "./Components/Header";
import Drawer from "./Components/Drawer";
function App() {
  return (
  <div className="wrapper clear">

    <Drawer/>
    <Header/>
  
    <div className="contentSneakers p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1 className="">Все кроссовки</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="serach"/>
          <input placeholder="Поиск...."/>

        </div>
      </div>

      <div className="d-flex">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>

    </div>
  </div>
  );
}

export default App;
