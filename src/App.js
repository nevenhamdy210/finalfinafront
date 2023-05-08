import React ,{Component} from "react";
import Index from './Homee/Index/index';
import Navbar from './Components/Navbar/index';
import Contact from './Components/Contact/index';
import Login from './Components/Login/index';
import Appointment from './Components/Appointments/index';
import Questionnaire from './Components/Questionnaire/index'
import Schedule from "./Components/Schedules";
import ScheduleAdmin from "./Components/Schedules-Specialist/index.js";
import Understanding_Autism1 from "./Homee/ThirdSection/Understanding_Autism1";
import Understanding_Autism2 from "./Homee/ThirdSection/Understanding_Autism2";
import Understanding_Autism3 from "./Homee/ThirdSection/Understanding_Autism3";
import Understanding_Autism4 from "./Homee/ThirdSection/Understanding_Autism4";
import { BrowserRouter ,Route ,Routes } from "react-router-dom";
class App extends Component {

  state={
    id: 1,
    id2:2
  }

  render(){
  return (
    
    <BrowserRouter>
    <Navbar />
    <Routes>
    
       <Route exact path="/" element={<Index/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/appointment" element={<Appointment/>}/>
       <Route path="/Login" element={<Login/>}/>
       <Route path="/Questionnaire" element={<Questionnaire/>}/>
       <Route path="/Schedule1" element={<Schedule index={1}/>}/>
       <Route path="/Schedule2" element={<Schedule index={2}/>}/>
       <Route path="/Schedule3" element={<Schedule index={3}/>}/>
       <Route path="/Schedule4" element={<Schedule index={4}/>}/>
       <Route path="/Schedule5" element={<Schedule index={5}/>}/>
       <Route path="/Schedule6" element={<Schedule index={6}/>}/>
       <Route path="/Schedule7" element={<Schedule index={7}/>}/>
       <Route path="/Schedule8" element={<Schedule index={8}/>}/>
       <Route path="/Schedule9" element={<Schedule index={9}/>}/>
       <Route path="/ScheduleAdmin" element={<ScheduleAdmin/>}/>
       <Route exact path="/Understanding_Autism1" element={<Understanding_Autism1/>}/>
       <Route exact path="/Understanding_Autism2" element={<Understanding_Autism2/>}/>
       <Route exact path="/Understanding_Autism3" element={<Understanding_Autism3/>}/>
       <Route exact path="/Understanding_Autism4" element={<Understanding_Autism4/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}
}

export default App;
