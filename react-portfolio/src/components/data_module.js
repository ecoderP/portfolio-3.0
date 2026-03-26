// Import SVGs for skills
import React from "react";
import { GrPersonalComputer } from "react-icons/gr";
import { GrCloudSoftware } from "react-icons/gr";
import { IoGitCompareSharp } from "react-icons/io5";
import { FaWordpress } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

export const skills = [
  {
    name: "Frontend Development",
    icon: <GrPersonalComputer />,
    desc: "React, JavaScript, HTML, CSS, Tailwind CSS, scss",
  },
  {
    name: "API Development",
    icon: <FaCode />,
    desc: "RESTful APIs, GraphQL",
  },
  {
    name: "Cloud Development",
    icon: <GrCloudSoftware />,
    desc: "AWS Lambda, Amplify, API Gateway, S3, DynamoDB, CloudFormation, CDK, EC2, VPC, IAM, Cloud Watch",
  },
  {
    name: "CI/CD",
    icon: <IoGitCompareSharp />,
    desc: "Git, Github Actions",
  },
  {
    name: "Content Management",
    icon: <FaWordpress />,
    desc: "WordPress, CMS, Woocommerce",
  },
];
