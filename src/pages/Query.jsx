import React, { useState } from "react";
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../styles/Query.css'

const FeedbackForm = () => {
  const [method, setMethod] = useState("");
  const [method2, setMethod2] = useState("");

  const handleMethodChange = (event) => {
    setMethod(event.target.value);
  };

  const handleMethod2Change = (event) => {
    setMethod2(event.target.value);
  };

  // Inline styles for the form
  // const formContainerStyle = {
  //   paddingTop: '30px',
  //   paddingLeft: '20px',
  //   backgroundImage: 'url("../assets/backgroundTile.jpg")',
  //   marginLeft: '400px',
  //   marginRight: '410px',
  //   marginTop: '110px',
  //   borderRadius: '20px',
  //   height: '1100px',
  //   borderStyle: 'solid',
  //   borderColor: 'lightblue',
  //   fontSize: '20px',
  // };

  // const inputStyle = {
  //   height: '40px',
  //   width: '600px',
  //   fontSize: '18px',
  // };

  // const submitButtonStyle = {
  //   backgroundColor: 'black',
  //   color: 'white',
  //   padding: '12px 20px',
  //   border: 'none',
  //   borderRadius: '4px',
  //   cursor: 'pointer',
  //   textAlign: 'center',
  //   fontSize: '18px',
  //   width: '100px',
  // };

  // const errorStyle = {
  //   color: 'white',
  //   backgroundColor: 'red',
  // };

  // const thankYouMessageStyle = {
  //   display: 'none',
  //   textAlign: 'center',
  //   backgroundImage: 'url("../assets/backgroundTile.jpg")',
  // };

  return (
    <div>
        <NavBar/>
    <div className="query-container">        
      <form className="form" id="Form" method="post" action="mailto:binuri.20221514@iit.ac.lk">
        <label htmlFor="fullName">Full Name:</label>
        <br /><br />
        <input type="text" name="full name" id="fullName" autocomplete="off"  />
        <br /><span id="invalidName" className="error" ></span><br /><br />
        
        <label htmlFor="number">Phone Number:</label>
        <br /><br />
        <input type="text" name="phone number" id="number" autocomplete="off"  />
        <br /><span id="invalidNumber" className="error" ></span><br /><br />
        
        <label htmlFor="email">Email Address:</label>
        <br /><br />
        <input type="text" name="Email" id="email" autocomplete="off"  />
        <br /><span id="invalidEmail" className="error"></span><br />
        <br />
        
        <p>How satisfied were you with our website today? Choose from 0 to 5. Where 0 is extremely dissatisfied and 5 is extremely satisfied.</p>
        <input type="radio" id="num1" name="rating" />
        <label htmlFor="num1">1</label>
        <input type="radio" id="num2" name="rating" />
        <label htmlFor="num2">2</label>
        <input type="radio" id="num3" name="rating" />
        <label htmlFor="num3">3</label>
        <input type="radio" id="num4" name="rating" />
        <label htmlFor="num4">4</label>
        <input type="radio" id="num5" name="rating" />
        <label htmlFor="num5">5</label>
        <br /><span id="invalidRadio" className="error" ></span><br /><br />
        
        <label htmlFor="details">Please could you tell us your reasons for giving this rating:</label><br /><br />
        <textarea id="details" name="Details" ></textarea>
        <br /><span id="invalidDetails" className="error" ></span><br /><br />

        <label htmlFor="method2">If you had to complete this task again, how would you prefer to do it? (optional):</label><br /><br />
        <select name="Method2" id="method2"  value={method2} onChange={handleMethod2Change}>
          <option value="select">--Please Select--</option>
          <option value="phone">Phone</option>
          <option value="website">Website</option>
          <option value="webchat">Webchat</option>
          <option value="socialMedia">Social Media</option>
          <option value="email">Email</option>
        </select>  <br/><br /><br/>     
        <input type="submit" value="Send"  />
        <br />
      </form>
    </div><br />
    <Footer/>
    </div>
  );
};

export default FeedbackForm;
//mongodb+srv://Yasara:<db_password>@atlascluster.pr425nk.mongodb.net/