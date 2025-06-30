import React from "react";
import { Routes, Route, Navigate  } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import GlobalStyle from "globalStyles";

import Header from "components/Header";
import Footer from "components/Footer";

import Home from "pages/home/Home";
import YearZero from "pages/year-zero/YearZero";
import Bachelor from "pages/bachelor/Bachelor";
// import Master from "./pages/Master";
// import Contact from "./pages/Contact";
// import Courses from "./pages/Courses";
// import Finance from "./pages/Finance";
// import ReferAFriend from "./pages/ReferAFriend";

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
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/study/year-zero" element={<YearZero />} />
      <Route path="/study/bachelor" element={<Bachelor />} />
      {/* <Route path="/master" element={<Master />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/finance" element={<Finance />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/refer-a-friend" element={<ReferAFriend />} /> */}
    </Routes>
    <Footer />
  </>
);

export default App;
