import React from "react";
import SectionHeading from "./SectionHeading";
import FormField from "./FormField";
import { MdAddBox } from "react-icons/md";
import { IoMdRemoveCircle } from "react-icons/io";

const Achievements = ({
  achievements,
  onChange,
  addAchievement,
  deleteAchievement,
}) => {
  return (
    <>
      <SectionHeading heading="ACHIEVEMENTS" />

      {achievements.map((achievement, index) => (
        <div
          key={index}
          className="relative grid grid-cols-1 gap-6 md:grid-cols-2 p-6 border my-5 border-gray-300"
        >
          {index !== 0 && (
            <button
              className="absolute top-2 right-2  text-red-600 text-3xl"
              onClick={() => deleteAchievement(index)}
            >
              <IoMdRemoveCircle />
            </button>
          )}
          <FormField
            name="title"
            label="Title"
            placeholder="hackathon winner"
            type="text"
            value={achievement.title}
            onChange={(e) => onChange(e, index)}
          />
          <FormField
            name="description"
            label="Description"
            placeholder="state hackathon"
            type="text"
            value={achievement.description}
            onChange={(e) => onChange(e, index)}
          />
        </div>
      ))}

      <button onClick={addAchievement}>
        <MdAddBox className="text-blue-500 text-3xl" />
      </button>
    </>
  );
};

export default Achievements;
