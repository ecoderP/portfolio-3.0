import React from "react";
import Header from "./components/header";
import Intro from "./components/sections/intro";
import About from "./components/sections/about";
import Projects from "./components/sections/projects";
import Skills from "./components/sections/skills";
import Articles from "./components/sections/articles";
import Footer from "./components/footer";
//import { BrowserRouter, Routes, Route, RouterProvider } from "react-router";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Articles />
      </main>
      <Footer />
    </div>
  );
}
