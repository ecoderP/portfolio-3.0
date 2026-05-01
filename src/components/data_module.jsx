// Import SVGs for skills
import React from "react";
import { GrPersonalComputer } from "react-icons/gr";
import { GrCloudSoftware } from "react-icons/gr";
import { IoGitCompareSharp } from "react-icons/io5";
import { FaWordpress } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

//Skills data

// Import projects data
import staticWebSiteImg from "../../src/img/static-website.webp";

// Articles data
import AWSVPCImg from "../../src/img/AWSVirtualPrivateCloud.webp";

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
    title: "CI/CD Pipeline for Dual Deployment (React + AWS + GitHub Actions)",
    img: staticWebSiteImg,
    description:
      "This project implements a production-style CI/CD pipeline for a React (Vite) application, deploying automatically to both GitHub Pages and Amazon S3 served via Amazon CoudFront.  This project demonstrates a full workflow covering build automation, testing, secure cloud deployment, and multi-environment delivery.",
    technologies: [
      "AWS (S3, CloudFront, IAM: OIDC Authentication, CloudTrail)",
      "Frontend (React, Vite)",
      "Other Tools (Git, Github Actions, Vitest, Tailwind CSS )",
    ],
    link: "https://github.com/ecoderP/portfolio-3.0",
  },
  {
    id: 2,
    title: "Static Website Hosting on S3",
    img: staticWebSiteImg,
    description:
      "Responsive single-page portfolio application built with React and Vite, hosted on AWS S3 and distributed via Amazon CloudFront to enable low-latency content delivery. Implemented a CI/CD pipeline with GitHub Actions to automate build and deployment workflows, improving release consistency. Optimized frontend performance through efficient asset bundling and responsive design, ensuring fast load times across devices.",
    technologies: [
      "AWS (S3, CloudFront), Frontend (React, Vite), Tools (Git, Github Actions,)",
    ],
    link: "https://github.com/ecoderP/AWS-Projects/tree/main/Static%20website%20hosting%20on%20S3%20-%20Robust%20approach",
  },
  {
    id: 3,
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

export const Articles = [
  {
    id: 1,
    articleTitle:
      "How to build a VPC with public and private subnets using AWS CLI",

    desc: "Create a Virtual Private Cloud (VPC) on AWS, lunch an EC2 instance in the public subnet, and set up a NAT Gateway for secure internet access from the private subnet. This guide covers VPC creation, subnet configuration, EC2 instance setup, and NAT Gateway implementation using AWS CLI commands.",
    img: AWSVPCImg,
    link: "https://github.com/ecoderP/AWS-Projects/blob/main/Build%20a%20virtual%20private%20cloud/READ%20ME.md",
  },
];
