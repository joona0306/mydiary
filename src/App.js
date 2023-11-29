import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div className="layout">
      <div className="wrap">
        <Header />
        <Main></Main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
