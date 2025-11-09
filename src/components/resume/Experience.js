import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-4xl font-bold"> Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Cloud Computing Internship"
            subTitle="Besant Technologies - (Sep 2024 - Apr 2025)"
            result="Chennai, Tamilnadu, India"
            des="Proficient in AWS services (EC2, RDS, S3, Cloud Front,IAM).
Automated processes using AWS Lambda and enforced security with IAM policies.Architected and implemented VPCs with subnets,route tables,IGW, and NAT Gateways.Configured and managed EC2 instances, setting up SSH, HTTP, and MySQL.Implemented an end-to-end CI/CD pipeline in a DevOps environment using tools like Git, Jenkins, Docker, and Kubernetes for automated build, test, and deployment processes. Integrated code versioning, containerization, and continuous monitoring to ensure rapid, reliable, and consistent application delivery across environments.
."
          />
          <ResumeCard
            title="AWS Internship"
            subTitle="Marcello Tech Tiruchurappalli - (Dec 2024 - Jan 2025)"
            result="Tiruchurappalli, Tamilnadu, India"
            des="Worked on deploying and managing cloud-based applications using core AWS services like EC2, S3, Lambda, and RDS. Gained hands-on experience in cloud architecture, automation, and monitoring using IAM, CloudWatch, and CloudFormation.
."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
