// Import SVGs for skills
import React from "react";
import { GrPersonalComputer } from "react-icons/gr";
import { GrCloudSoftware } from "react-icons/gr";
import { IoGitCompareSharp } from "react-icons/io5";
import { FaWordpress } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

//Skills data

// Import projects data
import CICDImage from "../../src/img/CI-CDPipeline.webp";

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
    img: CICDImage,
    description:
      "This project implements a production-styled CI/CD pipeline for a modern React application - my portfolio website built with Vite + React. It deploys automatically (on Git Push) to both GitHub Pages and Amazon S3 served via Amazon CloudFront to enable low-latency content delivery. This project demonstrates a full workflow covering build automation, testing, artifacts build for improving release consistency, secure cloud deployment, and multi-environment delivery.",
    technologies: [
      "AWS (S3, CloudFront, IAM: OIDC Authentication, CloudTrail)",
      "Frontend (React + Vite)",
      "Other Tools (Git, Github Actions, Vitest, Tailwind CSS )",
    ],
    link: "https://github.com/ecoderP/portfolio-3.0",
  },
  {
    id: 3,
    title: "AI Water Quality Advisor",
    img: "https://via.placeholder.com/300x200.png?text=Project+2",
    description:
      "An AI powered web application that analyzes household water quality test results and provides safety assessments, possible issues and treatment recommendations based on international water quality guidelines (WHO/EPA).",
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
