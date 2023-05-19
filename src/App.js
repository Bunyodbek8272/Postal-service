import "./assets/sass/golbal.scss";
import WelcomeLayout from "./layout";
import Partners from "./components/partners";
import Statistics from "./components/statistics";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <WelcomeLayout>
        <Partners />
        <Statistics />
        <Contact />
      </WelcomeLayout>
    </div>
  );
}

export default App;
