
import axios from "axios";
import React , {useState , useEffect} from "react";
import Footer from "../Footer/index.js";
import { Body , Textbox , Form , Banner  , Span  , Button , BtnBlock , Container , Question , AnswerOption , RadioInput ,CloseIcon,FormHeader,Button2, Button3 } from'./Style.js';
import { Link } from "react-router-dom";


const Questionnaire = () => {


////////////////////////////////////
const [showForm, setShowForm] = useState(false);
const [result, setResult] = useState(null);


const handleSubbmitMassage = () => {
  setShowForm(false);
};


const Form2 = () => {
  const [view, setview] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubbmitMassage(view);
    window.location.reload();
   
  };

  return (
    <Form show={showForm}>
      <FormHeader><i className="fa fa-child"></i> {result}</FormHeader>
      <br />
      <Button2 type="submit" onClick={handleSubmit}>close</Button2>
      <Link to ="/appointment"><Button3 type="submit">See Specialists</Button3></Link>
    </Form>
  );
};


const handleSubmit2 = (e) => {
  e.preventDefault();
  //boolean value
  const randomBoolean = Math.random() < 0.5;
  setResult(randomBoolean ? "The child is autistic" : "The child is not autistic");
  setShowForm(true);
};

////////////////////////////////////////
  const [ questions , setQuestions ] = useState([])
  const [ answers , setAnswers] = useState([]);

  const handleAnswerChange = (questionId, optionId) => {
    const newAnswers = [...answers];
    const index = newAnswers.findIndex((a) => a.questionId === questionId);
    if (index === -1) {
      newAnswers.push({ questionId, optionId });
    } else {
      newAnswers[index].optionId = optionId;
    }
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    console.log('Answers:', answers);
    // Send answers to server, etc.
    
  };

  useEffect ( ()=> {
    axios.get('js/data.json').then(res =>{setQuestions(res.data.questions)})
  } , [] )

  const autismQuestions = questions.map( (questionItem) => {
    return(
      <fieldset>
        
        <legend>Questions</legend>
     
        <Container>
        {questionItem.id <15 ?(
          <div key={questionItem.id}>
            <Question>{questionItem.question}</Question>
            
            {questionItem.options.map((o) => (
              <AnswerOption key={o.id}>
                <RadioInput
                  type="radio"
                  name={`question-${questionItem.id}`}
                  value={o.id}
                  checked={
                    answers.find((a) => a.questionId === questionItem.id)?.optionId === o.id
                  }
                  onChange={() => handleAnswerChange(questionItem.id, o.id)}
                  required
                />
                <Span>{o.text}</Span>
                
              </AnswerOption>
            ))}
          </div>
         ) : (
          <div key={questionItem.id}>
          <Question>{questionItem.question}</Question>
            <AnswerOption>
              <RadioInput
                type={questionItem.type}
                name={`question-${questionItem.id}`}
                onChange={(e) => handleAnswerChange(questionItem.id, e.target.value)}
                required 
              />              
            </AnswerOption>
        </div>
         )}
      </Container>
          
        </fieldset>
    )
  } )

  return (
  <React.Fragment>
    <Body>
    <Textbox>
      <Form action="/">
        <Banner></Banner>
        <br/>
        {autismQuestions}
        <BtnBlock>
          <Button type="submit" onClick={handleSubmit2 }>Submit</Button>
      {showForm && <Form2 />}
        </BtnBlock>
        
      </Form>
    </Textbox>
    </Body>
    <Footer/>
  </React.Fragment>
  );
}

export default Questionnaire;


/**
 *  const autismQuestions = questions.map( (questionItem) => {
    return(
      <fieldset>
          <legend>Questions</legend>
     
          <div className="question"  key={questionItem.id}>
            <Question>{questionItem.question}</Question>
            {questionItem.options.map((o) => (
              <div className="question-answer" key={o.id}>
                <div>
                  <InputRadio type="radio" name="physician" id={o.id} value="none"
                    checked={
                      answers.find((a) => a.questionId === questionItem.id)?.optionId === o.id
                    }
                    onChange={() => handleAnswerChange(questionItem.id, o.id)}
                  />
                  <LabelRadio htmlFor={o.id} ><Span>{o.text}</Span></LabelRadio>
                </div>
              </div>
            ))}
          </div>
          
        </fieldset>
    )
  } )
 */