import React from "react";
import { styles } from "../styles/style";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        What is <span className="text-gradient">eLearning</span>
      </h1>
      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <p className="text-[18px] font-Poppins">
          Are you ready to ...
          <br />
          <br />
          As the founder ...
          <br />
          <br />
          Our YouTube chanel is ...
          <br />
          <br />
          At eLearning
          <br />
          <br />
          At eLearning
          <br />
          <br />
          At eLearning
        </p>
        <br />
        <span className="text-[22px]">Md. Abdussamad</span>
        <h5 className="text-[18px] font-Poppins">
          Founder and CEO of eLearning
        </h5>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
