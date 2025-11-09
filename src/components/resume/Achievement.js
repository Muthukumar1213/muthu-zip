import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2025 - 2028</p>
          <h2 className="text-4xl font-bold"> Certifications</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="AWS Solutions Architect Associate"
            subTitle=""
            des="Achieved AWS Certified Solutions Architect – Associate, demonstrating expertise in designing and deploying scalable, secure, and cost-optimized cloud solutions on AWS. "
          />
          
        </div>
      </div>
      {/* <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">--</p>
          <h2 className="text-4xl font-bold">--</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="TNSI 2021"
            subTitle=""
            result="2021"
            des="A Business pitch for the selected idea ”Self Taught”. There are three rounds: selection of idea, 3 days
            boot comps and a final business pitch."
          />
          
        </div>
      </div> */}
    </motion.div>
  );
};

export default Achievement;
