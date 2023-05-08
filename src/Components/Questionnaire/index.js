import React from "react";
import Footer from "../Footer/index.js";

//import './style.css';

const Questionnaire = () => {
  return (
  <React.Fragment>
    <div>
    <div className="testbox">
      <form action="/">
        <div className="banner"></div>
        <br/>
        <fieldset>
          <legend>Questionsn</legend>

          <div className="question">
            <label>Qestion 1</label>
            <div className="question-answer">
              <div>
                <input type="radio" value="none" id="radio_1" name="physician"/>
                <label htmlFor="radio_1" className="radio"><span>Yes</span></label>
              </div>
              <div>
                <input  type="radio" value="none" id="radio_3" name="physician"/>
                <label htmlFor="radio_3" className="radio"><span>No</span></label>
              </div>

            </div>
          </div>

        </fieldset>
        <div className="btn-block">
          <button type="submit" href="/">Submit</button>
        </div>
      </form>
    </div>
    </div>
    <Footer/>
  </React.Fragment>
  );
}

export default Questionnaire;