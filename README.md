# 🚀 Portfolio CI/CD Pipeline (React + AWS + GitHub Actions)

## 📌 Overview

This project is a **production-style CI/CD pipeline** for my personal Portfolio Website. It is a React (Vite) application that automatically deploys to:

- GitHub Pages
- AWS S3 (served via CloudFront CDN)

The pipeline ensures reliable, secure, and consistent deployments using modern DevOps practices.

The live websites as at the time of writing this documentation can be viewed at:

- GitHub deployed: https://paulbuchi.xyz
- Amazon S3 deployed: https://d29cd1d5kxejhs.cloudfront.net/

### Note

This project is designed as an improvement on an earlier project on how to [Host a Static Website On Amazon S3 and Setup DNS With Amazon CloudFront](https://github.com/ecoderP/AWS-Projects/tree/main/Static%20website%20hosting%20on%20S3%20-%20Robust%20approach)

---

## 🏗️ Architecture

```
GitHub (main branch)
        ↓
GitHub Actions (CI/CD)
        ↓
Build → Test → Artifact
        ↓
   ├── GitHub Pages
   └── S3 → CloudFront (CDN)
```

![Architecture diagram for Ci/CD Pipeline](src/img/CI-CD%20Pipeline%20for%20Portfolio3.webp)

---

## ⚙️ CI/CD Workflow

### Trigger

- Runs on push to `main`

---

### Pipeline Stages

#### 1. Build

- Install dependencies (`npm ci`)
- Build app (`npm run build`)
- Upload artifact (`dist/`)

---

#### 2. Test

- Run unit tests using Vitest
- Blocks deployment on failure

---

#### 3. Deploy

### GitHub Pages

- Download artifact
- Deploy using `actions/deploy-pages`

### AWS S3 + CloudFront

- Authenticate via OIDC (no static credentials)
- Sync build output to S3
- Invalidate CloudFront cache

---

## 🔐 Security

- Uses OIDC to assume AWS IAM role
- No hardcoded AWS credentials
- Least-privilege IAM policy

---

## 🌐 Deployment Targets

| Platform        | Purpose                            |
| --------------- | ---------------------------------- |
| GitHub Pages    | Primary hosting with custom domain |
| S3 + CloudFront | Secondary production CDN           |

---

## 📦 Technologies Used

- React (Vite)
- GitHub Actions
- AWS S3
- AWS CloudFront
- IAM (OIDC)
- Vitest

---

## 🚀 Key Features

- ✅ Build once, deploy to multiple platforms
- ✅ Automated testing before deployment
- ✅ Secure AWS authentication (OIDC)
- ✅ Serve through CDN via CloudFront
- ✅ CDN cache invalidation
- ✅ Artifact-based deployment consistency

---

## ⚠️ Future Improvements

- Add PR preview deployments
- Introduce staging environment
- Implement Infrastructure as Code (Terraform)
- Add end-to-end testing (Playwright)

---

## 🧠 What This Project Demonstrates

- CI/CD pipeline design
- Cloud deployment best practices
- Secure DevOps workflows
- Multi-environment deployment strategy

---

## 📬 Contact

Feel free to connect or reach out if you’d like to discuss this project!

- https://paulbuchi.xyz
