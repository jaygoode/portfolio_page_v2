import {
  automation_stack,
  dev_tools,
  fullstack_stack,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import {SkillIntro, AutomationStackText, FullstackStackText, DevToolsText} from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9" }}
    >
      <SkillIntro />

      <AutomationStackText />
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {automation_stack.map((image, index) => (
          <SkillDataProvider
          key={index}
          src={image.Image}
          width={image.width}
          height={image.height}
          index={index}
          title={image.skill_name}
          />
        ))}
      </div>

      <FullstackStackText />
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {fullstack_stack.map((image, index) => (
          <SkillDataProvider
          key={index}
          src={image.Image}
          width={image.width}
          height={image.height}
          index={index}
          title={image.skill_name}
          />
        ))}
      </div>
      <DevToolsText />
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {dev_tools.map((image, index) => (
          <SkillDataProvider
          key={index}
          src={image.Image}
          width={image.width}
          height={image.height}
          index={index}
          title={image.skill_name}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
