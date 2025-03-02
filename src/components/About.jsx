import SectionHeading from "./SectionHeading";
import FormField from "./FormField";
const About = ({ formData, handleChange, handleFileChange }) => {
  return (
    <>
      <SectionHeading heading={"ABOUT SECTION"} />
      <div className=" grid grid-cols-3 gap-6 p-6 border my-5 border-gray-300">
        <FormField
          name="firstName"
          label="First Name"
          placeholder="e.g. John"
          type="text"
          value={formData.firstName}
          handleChange={handleChange}
        />
        <FormField
          name="middleName"
          label="Middle Name"
          placeholder="e.g. Herbert"
          type="text"
          value={formData.middleName}
          handleChange={handleChange}
        />
        <FormField
          name="lastName"
          label="Last Name"
          placeholder="e.g. Doe"
          type="text"
          value={formData.lastName}
          handleChange={handleChange}
        />
        <FormField
          name="resumeFile"
          label="Your Image"
          type="file"
          handleFileChange={handleFileChange}
        />
        <FormField
          name="designation"
          label="Designation"
          placeholder="e.g. Sr.Accountants"
          type="text"
          value={formData.designation}
          handleChange={handleChange}
        />
        <FormField
          name="address"
          label="Address"
          placeholder="e.g. Lake Street-23"
          type="text"
          value={formData.address}
          handleChange={handleChange}
        />
        <FormField
          name="email"
          label="Email"
          placeholder="e.g. johndoe@gmail.com"
          type="text"
          value={formData.email}
          handleChange={handleChange}
        />
        <FormField
          name="phoneNo"
          label="Phone No."
          placeholder="e.g. 946-754-489"
          type="text"
          value={formData.phoneNo}
          handleChange={handleChange}
        />
        <FormField
          name="summary"
          label="Summary"
          placeholder="e.g. Doe"
          type="text"
          value={formData.summary}
          handleChange={handleChange}
        />
      </div>
    </>
  );
};

export default About;
