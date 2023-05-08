import React, { Component } from "react";
import Home from "./../Home/index";
import Footer from "../../Components/Footer/index";
import Third_Section from "../ThirdSection/index.js";
import FeedbackSection from "../FeedbackSection/index";
import SecondSection from "../SecondSection/index";
class Index extends Component{
  render(){
  return (
    <div>
      <Home />
      <SecondSection />
      <Third_Section />
      <FeedbackSection />
      <Footer />
    </div>
  );
}
}
export default Index;
