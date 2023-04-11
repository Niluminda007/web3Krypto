import { Navbar, Footer, Welcome, Transactions, Services } from "./components";
const App = () => {
  return (
    <div className="App">
      <div className="min-h-screen">
        <div className="bg-dark">
          <Navbar />
          <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />
      </div>
    </div>
  );
};

export default App;
//
