import SectionHeading from "./SectionHeading";
import FormField from "./FormField";
const About = () => {
  return (
    <>
      <SectionHeading heading={"ABOUT SECTION"} />
      <div className=" grid grid-cols-3 gap-6 p-6 border my-5 border-gray-300">
        <FormField label="First Name" placeholder="e.g. John" type="text" />
        <FormField label="Middle Name" placeholder="e.g. Herbert" type="text" />
        <FormField label="Last Name" placeholder="e.g. Doe" type="text" />
        <FormField label="Your Image"  type="file" />
        <FormField label="Designation" placeholder="e.g. Sr.Accountants" type="text" />
        <FormField label="Address" placeholder="e.g. Lake Street-23" type="text" />
        <FormField label="Email" placeholder="e.g. johndoe@gmail.com" type="text" />
        <FormField label="Phone No." placeholder="e.g. 946-754-489" type="text" />
        <FormField label="Summary" placeholder="e.g. Doe" type="text" />

      </div>
    </>
  );
};

export default About;
