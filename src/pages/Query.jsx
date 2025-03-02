// import React, { useState } from "react";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
// import contactImage from "../assets/query.jpg";
// import "../styles/Query.css";

// const FeedbackForm = () => {
//   // State for form data
//   const [formData, setFormData] = useState({
//     full_name: "",
//     phone_number: "",
//     email_address: "",
//     satisfaction_rating: "",
//     feedback_reason: "",
//     preferred_task_method: "select",
//   });

//   // Handle form input changes
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     console.log("Form Data:", formData);

//     try {
//       const response = await fetch("http://localhost:5000/submit-feedback", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert("Feedback submitted successfully!");
//       } else {
//         alert("Error submitting feedback");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div>
//       <NavBar />
//       <div className="contact-image-container">
//         <img src={contactImage} alt="Contact Us" className="contact-image" />
//         <h1 className="contact-heading">CONTACT US</h1>
//       </div>

//       <div className="query-container">
//         <form className="form" onSubmit={handleSubmit}>
//           {/* Full Name */}
//           <label htmlFor="fullName">Full Name:</label><br /><br />
//           <input
//             type="text"
//             id="fullName"
//             name="full_name"
//             value={formData.full_name}
//             onChange={handleChange}
//             autoComplete="off"
//           />
//           <br /><br />

//           {/* Phone Number */}
//           <label htmlFor="number">Phone Number:</label><br /> <br />
//           <input
//             type="text"
//             id="number"
//             name="phone_number"
//             value={formData.phone_number}
//             onChange={handleChange}
//             autoComplete="off"
//           />
//           <br /><br />

//           {/* Email Address */}
//           <label htmlFor="email">Email Address:</label><br /><br />
//           <input
//             type="text"
//             id="email"
//             name="email_address"
//             value={formData.email_address}
//             onChange={handleChange}
//             autoComplete="off"
//           />
//           <br /><br />

//           {/* Satisfaction Rating */}
//           <p>
//             How satisfied were you with our website today? Choose from 1 to 5.
//             Where 1 is extremely dissatisfied and 5 is extremely satisfied.
//           </p><br /><br />
//           {[1, 2, 3, 4, 5].map((num) => (
//             <label key={num}>
//               <input
//                 type="radio"
//                 name="satisfaction_rating"
//                 value={num}
//                 checked={formData.satisfaction_rating === String(num)}
//                 onChange={handleChange}
//               />
//               {num}
//             </label>
//           ))}
//           <br /><br />

//           {/* Feedback Reason */}
//           <label htmlFor="details">
//             Please could you tell us your reasons for giving this rating:
//           </label><br /><br />
//           <textarea
//             id="details"
//             name="feedback_reason"
//             value={formData.feedback_reason}
//             onChange={handleChange}
//           ></textarea>
//           <br /><br />

//           {/* Preferred Task Method */}
//           <label htmlFor="method2">
//             If you had to complete this task again, how would you prefer to do
//             it? (optional):
//           </label><br /><br />
//           <select
//             id="method2"
//             name="preferred_task_method"
//             value={formData.preferred_task_method}
//             onChange={handleChange}
//           >
//             <option value="select">--Please Select--</option>
//             <option value="phone">Phone</option>
//             <option value="website">Website</option>
//             <option value="webchat">Webchat</option>
//             <option value="socialMedia">Social Media</option>
//             <option value="email">Email</option>
//           </select>
//           <br /><br />

//           {/* Submit Button */}
//           <input type="submit" value="Send" />
//         </form>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default FeedbackForm;

import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import contactImage from "../assets/query.jpg";
import "../styles/Query.css";

const FeedbackForm = () => {
  // State for form data
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    email_address: "",
    satisfaction_rating: "",
    feedback_reason: "",
    preferred_task_method: "select",
  });

  // State for error messages
  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // Remove error message as user types
    setErrors({ ...errors, [name]: "" });
  };

  // Validate input fields
  const validateForm = () => {
    let newErrors = {};

    // Full Name Validation
    if (!formData.full_name.trim()) {
      newErrors.full_name = "Full Name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(formData.full_name)) {
      newErrors.full_name = "Full Name should contain only letters and spaces.";
    } else if (formData.full_name.length < 3) {
      newErrors.full_name = "Full Name must be at least 3 characters.";
    }

    // Phone Number Validation (10-digit)
    if (!formData.phone_number.trim()) {
      newErrors.phone_number = "Phone Number is required.";
    } else if (!/^\d{10}$/.test(formData.phone_number)) {
      newErrors.phone_number = "Enter a valid 10-digit phone number.";
    }

    // Email Address Validation
    if (!formData.email_address.trim()) {
      newErrors.email_address = "Email Address is required.";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
        formData.email_address
      )
    ) {
      newErrors.email_address = "Enter a valid email address.";
    }

    // Satisfaction Rating Validation
    if (!formData.satisfaction_rating) {
      newErrors.satisfaction_rating = "Please select a satisfaction rating.";
    }

    // Feedback Reason Validation
    if (!formData.feedback_reason.trim()) {
      newErrors.feedback_reason = "Feedback is required.";
    } else if (formData.feedback_reason.length < 10) {
      newErrors.feedback_reason = "Feedback must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    console.log("Form Data:", formData);

    try {
      const response = await fetch("http://localhost:5000/submit-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Feedback submitted successfully!");
        setFormData({
          full_name: "",
          phone_number: "",
          email_address: "",
          satisfaction_rating: "",
          feedback_reason: "",
          preferred_task_method: "select",
        });
      } else {
        alert("Error submitting feedback");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="contact-image-container">
        <img src={contactImage} alt="Contact Us" className="contact-image" />
        <h1 className="contact-heading">CONTACT US</h1>
      </div>

      <div className="query-container">
        <form className="form" onSubmit={handleSubmit}>
          {/* Full Name */}
          <label htmlFor="fullName">Full Name:</label> <br /><br />
          <input
            type="text"
            id="fullName"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            autoComplete="off"
          /> <br />
          {errors.full_name && <span className="error">{errors.full_name}</span>}
          
          <br /><br />
          {/* Phone Number */}
          <label htmlFor="number">Phone Number:</label> <br /><br />
          <input
            type="text"
            id="number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            autoComplete="off"
          /><br />
          {errors.phone_number && (
            <span className="error">{errors.phone_number}</span>
          )}
          <br /><br />

          {/* Email Address */}
          <label htmlFor="email">Email Address:</label> <br /><br />
          <input
            type="text"
            id="email"
            name="email_address"
            value={formData.email_address}
            onChange={handleChange}
            autoComplete="off"
          /><br />
          {errors.email_address && (
            <span className="error">{errors.email_address}</span>
          )}
           <br /><br />

          {/* Satisfaction Rating */}
          <p>How satisfied were you with our website today?</p> <br /><br />
          {[1, 2, 3, 4, 5].map((num) => (
            <label key={num}>
              <input
                type="radio"
                name="satisfaction_rating"
                value={num}
                checked={formData.satisfaction_rating === String(num)}
                onChange={handleChange}
              />
              {num}
            </label>
          ))}<br />
          {errors.satisfaction_rating && (
            <span className="error">{errors.satisfaction_rating}</span>
          )}
           <br /><br />

          {/* Feedback Reason */}
          <label htmlFor="details">
            Please provide your reasons for giving this rating:
          </label> <br /><br />
          <textarea
            id="details"
            name="feedback_reason"
            value={formData.feedback_reason}
            onChange={handleChange}
          ></textarea><br />
          {errors.feedback_reason && (
            <span className="error">{errors.feedback_reason}</span>
          )}
           <br /><br />

          {/* Preferred Task Method */}
          <label htmlFor="method2">
            If you had to complete this task again, how would you prefer to do it?
          </label> <br /><br />
          <select
            id="method2"
            name="preferred_task_method"
            value={formData.preferred_task_method}
            onChange={handleChange}
          >
            <option value="select">--Please Select--</option>
            <option value="phone">Phone</option>
            <option value="website">Website</option>
            <option value="webchat">Webchat</option>
            <option value="socialMedia">Social Media</option>
            <option value="email">Email</option>
          </select>
          <br /><br />

          {/* Submit Button */}
          <input type="submit" value="Send" />
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default FeedbackForm;
