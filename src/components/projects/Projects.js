import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  assetWarrenty,
  carsValley,
  Wedding,
  expento,
  petchain,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Serverless Application Deployment on AWS"
          des="Built and deployed a serverless application on AWS using API Gateway, Lambda, RDS, and S3 for scalable, cost-efficient backend operations. Configured secure integrations, automated deployments, and optimized performance using IAM roles and the Serverless Framework."
          src={assetWarrenty}
        />
        <ProjectsCard
          title="Three Tire Application Deployment"
          des="Deployed a three-tier architecture on AWS comprising presentation, application, and database layers using services like EC2, Elastic Load Balancer, and RDS for high availability and scalability."
          src={carsValley}
        />
        <ProjectsCard
          title="End-to-End CI/CD pipeline"
          des="Implemented an end-to-end CI/CD pipeline in a DevOps environment using tools like Git, Jenkins, Docker, and Kubernetes for automated build, test, and deployment processes. Integrated code versioning, containerization, and continuous monitoring to ensure rapid, reliable, and consistent application delivery across environments."
          src={Wedding}
       
        />
      </div>
    </section>
  );
};

export default Projects;
