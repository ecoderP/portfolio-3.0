// Import SVGs for skills
import React from "react";
import { GrPersonalComputer } from "react-icons/gr";
import { GrCloudSoftware } from "react-icons/gr";
import { IoGitCompareSharp } from "react-icons/io5";
import { FaWordpress } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

// Import projects data

//Skills data

export const Skills = [
  {
    id: 1,
    "skill-name": "Frontend Development",
    icon: <GrPersonalComputer />,
    desc: "React, JavaScript, HTML, CSS, Tailwind CSS, scss",
  },
  {
    id: 2,

    "skill-name": "API Development",
    icon: <FaCode />,
    desc: "RESTful APIs, GraphQL",
  },
  {
    id: 3,
    "skill-name": "Cloud Development",
    icon: <GrCloudSoftware />,
    desc: "AWS Lambda, Amplify, API Gateway, S3, DynamoDB, CloudFormation, CDK, EC2, VPC, IAM, Cloud Watch",
  },
  {
    id: 4,
    "skill-name": "CI/CD",
    icon: <IoGitCompareSharp />,
    desc: "Git, Github Actions",
  },
  {
    id: 5,
    "skill-name": "Content Management",
    icon: <FaWordpress />,
    desc: "WordPress, CMS, Woocommerce",
  },
];

export const PortfolioProjects = [
  {
    id: 1,
    title: "Static Website Hosting on S3",
    img: "https://via.placeholder.com/300x200.png?text=Project+1",
    description:
      "Static website built with React JS and hosted on AWS S3. It features a responsive design and is optimized for performance.",
    technologies: ["React", "Amazon S3", "AWS CloudFront", "GitHub Actions"],
    link: "https://github.com/ecoderP/AWS-Projects/tree/main/Static%20website%20hosting%20on%20S3%20-%20Robust%20approach",
  },
  {
    id: 2,
    title: "AI Water Quality Advisor",
    img: "https://via.placeholder.com/300x200.png?text=Project+2",
    description:
      "AI powered web application that analyzes household water quality test results and provides safety assessments, possible issues and treatment recommendations based on international water quality guidelines (WHO/EPA).",
    technologies: [
      "AWS Amplify",
      "AWS Lambda",
      "API Gateway",
      "AWS DynamoDB",
      "AWS Bedrock",
      "React JS",
      "Cognito",
      "GitHub",
    ],
    link: "https://github.com/ecoderP/ai-water-quality-advisor",
  },
];
