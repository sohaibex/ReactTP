import logo from "./logo.svg";
import "./App.css";
import ClientForm from "./components/Forms/ClientForm";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar title="Client Pannel" />
      </header>

      <ClientForm nom="EL MEDIOUNI" email="sohaib.elmediouni23@gmail.com" />
      <ClientForm nom="Ziad" email="ziad.elmediouni23@gmail.com" />
      <ClientForm
        nom="abdeljabbar"
        email="abdeljabbar.elmediouni23@gmail.com"
      />
      <ClientForm />
      <ClientForm nom="LOUBNA" email="LOUBNA.elmediouni23@gmail.com" />
    </div>
  );
}

export default App;
