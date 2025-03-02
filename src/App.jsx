import { useState } from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    resumeFile: null,
    designation: "",
    address: "",
    email: "",
    phoneNo: "",
    summary: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resumeFile: e.target.files[0],
    });
  };

  return (
    <>
      <NavBar />
      <div className="m-12">
        <About formData={formData} handleChange={handleChange} handleFileChange={handleFileChange}/>
        {console.log(formData)}
      </div>
    </>
  );
}

export default App;
