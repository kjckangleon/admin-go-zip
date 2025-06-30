import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalStyle from "./globalStyles";
import { Helmet } from "react-helmet-async";
import Home from "./pages/home/Home";

const App = () => (
  <>
    <Helmet>
      <title>Edu 4U | Educational Consultancy</title>
      <meta
        name="description"
        content="Study in the UK with expert guidance from Edu 4U."
      />
    </Helmet>
    <GlobalStyle />
    <Header />
    <Home />
    <Footer />
  </>
);

export default App;
