import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header.layout";
import Footer from "./Footer.layout";
import "./styles.css";
import HomePage from "../../components/home/HomePage.component";

function App() {
  const [jobs, setJobs] = useState<any>();

  useEffect(() => {
    axios.get("http://localhost:5000/api/jobs").then((response) => {
      setJobs(response.data);
    });
  });
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
