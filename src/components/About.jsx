import SectionHeading from "./SectionHeading";
import FormField from "./FormField";
const About = ({ aboutData, aboutChange, aboutFileChange }) => {
  return (
    <>
      <SectionHeading heading={"ABOUT SECTION"} />
      <div className=" grid grid-cols-1  md:grid-cols-3 gap-6 p-6 border my-5 border-gray-300">
        <FormField
          name="firstName"
          label="First Name"
          placeholder="e.g. John"
          type="text"
          value={aboutData.firstName}
          onChange={aboutChange}
        />
        <FormField
          name="middleName"
          label="Middle Name"
          placeholder="e.g. Herbert"
          type="text"
          value={aboutData.middleName}
          onChange={aboutChange}
        />
        <FormField
          name="lastName"
          label="Last Name"
          placeholder="e.g. Doe"
          type="text"
          value={aboutData.lastName}
          onChange={aboutChange}
        />
        <FormField
          name="imageFile"
          label="Your Image"
          type="file"
          onFileChange={aboutFileChange}
        />
        <FormField
          name="designation"
          label="Designation"
          placeholder="e.g. Sr.Accountants"
          type="text"
          value={aboutData.designation}
          onChange={aboutChange}
        />
        <FormField
          name="address"
          label="Address"
          placeholder="e.g. Lake Street-23"
          type="text"
          value={aboutData.address}
          onChange={aboutChange}
        />
        <FormField
          name="email"
          label="Email"
          placeholder="e.g. johndoe@gmail.com"
          type="text"
          value={aboutData.email}
          onChange={aboutChange}
        />
        <FormField
          name="phoneNo"
          label="Phone No."
          placeholder="e.g. 946-754-489"
          type="text"
          value={aboutData.phoneNo}
          onChange={aboutChange}
        />
        <FormField
          name="summary"
          label="Summary"
          placeholder="e.g. Doe"
          type="text"
          value={aboutData.summary}
          onChange={aboutChange}
        />
      </div>
    </>
  );
};

export default About;
