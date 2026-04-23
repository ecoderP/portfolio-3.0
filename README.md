# 🚀 Portfolio CI/CD Pipeline (React + AWS + GitHub Actions)

## 📌 Overview

This project demonstrates a **production-style CI/CD pipeline** for a React (Vite) application, automatically deploying to:

- GitHub Pages
- AWS S3 (served via CloudFront CDN)

The pipeline ensures reliable, secure, and consistent deployments using modern DevOps practices.

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
https://paulbuchi.xyz
