import SectionHeading from "./SectionHeading";
import FormField from "./FormField";
import { MdAddBox } from "react-icons/md";
import { IoMdRemoveCircle } from "react-icons/io";

const Education = ({ educations, onChange, addEducation, deleteEducation }) => {
  return (
    <>
      <SectionHeading heading={"EDUCATION"} />
      {educations.map((education, index) => (
        <div
          key={index}
          className="relative grid grid-cols-1 gap-6 md:grid-cols-3 p-6 border my-5 border-gray-300"
        >
          {index !== 0 && (
            <button
              className="absolute top-2 right-2  text-red-600 text-3xl"
              onClick={() => deleteEducation(index)}
            >
              <IoMdRemoveCircle />
            </button>
          )}
          <FormField
            name="school"
            label="School"
            placeholder=""
            type="text"
            value={education.school}
            onChange={(e) => onChange(e, index)}
          />
          <FormField
            name="degree"
            label="Degree"
            placeholder=""
            type="text"
            value={education.degree}
            onChange={(e) => onChange(e, index)}
          />
          <FormField
            name="city"
            label="City"
            placeholder=""
            type="text"
            value={education.city}
            onChange={(e) => onChange(e, index)}
          />
          <FormField
            name="startDate"
            label="Start Date"
            type="date"
            value={education.startDate}
            onChange={(e) => onChange(e, index)}
          />
          <FormField
            name="endDate"
            label="End Date"
            type="date"
            value={education.endDate}
            onChange={(e) => onChange(e, index)}
          />
          <FormField
            name="description"
            label="Description"
            placeholder=""
            type="text"
            value={education.description}
            onChange={(e) => onChange(e, index)}
          />
        </div>
      ))}
      <button onClick={addEducation}>
        <MdAddBox className="text-blue-500 text-3xl" />
      </button>
    </>
  );
};

export default Education;
