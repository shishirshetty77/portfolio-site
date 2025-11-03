# ⚙️ DevOps Implementation

![CI/CD](https://img.shields.io/github/actions/workflow/status/your-username/your-repo/ci.yml?label=CI%2FCD&logo=githubactions&logoColor=white&color=blue)
![Docker](https://img.shields.io/badge/Docker-Automated%20Builds-2496ED?logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Managed%20Cluster-326CE5?logo=kubernetes&logoColor=white)
![Helm](https://img.shields.io/badge/Helm-Chart%20Integration-0F1689?logo=helm&logoColor=white)
![Argo CD](https://img.shields.io/badge/Argo%20CD-Auto%20Deployments-FE6A16?logo=argo&logoColor=white)
![Security](https://img.shields.io/badge/Security-Secrets%20Managed-green?logo=github&logoColor=white)

---

This project is **fully DevOps-enabled**, combining containerization, orchestration, automation, and continuous delivery.

---

## 🐳 1. Containerization with Docker
- Built a **multi-stage Dockerfile** to separate build and runtime stages.  
- The **build stage** compiles the Next.js app; the **runtime stage** serves optimized production output.  
- The final Docker image is **lightweight** and deployed to **Docker Hub**.  
- Each image is **auto-tagged and versioned** via the CI pipeline.

---

## ☸️ 2. Kubernetes Deployment
- The app runs inside a **Kubernetes cluster** (tested on both **AWS EKS** and a **kind cluster on a GCP VM**).  
- Kubernetes handles **pod management, scaling, and service exposure**.  
- Services can be accessed using **NodePort** or **port-forwarding**, depending on the environment.

---

## 🧩 3. Helm Chart Integration
- All Kubernetes manifests are **templated into a Helm chart** named `portfolio-site-chart`.  
- `values.yaml` allows **dynamic configuration** and **environment-specific overrides**.  
- Each new build automatically **updates the Helm chart’s image tag** through the CI workflow.

---

## 🚀 4. Continuous Integration (CI) with GitHub Actions
- **GitHub Actions** automates the complete build pipeline:
  - Code quality checks  
  - Docker image build and push  
  - Helm chart update with new image tag  
- The workflow uses `${{ github.run_number }}` to **auto-increment image tags** (`1`, `2`, `3`, …).  
- A **Personal Access Token (PAT)** is used for secure commits back to the repository.  
- Secrets such as `DOCKERHUB_USERNAME`, `DOCKERHUB_TOKEN`, and `TOKEN` are **securely stored in GitHub Secrets**.

---

## 🔁 5. Continuous Deployment (CD) with Argo CD
- **Argo CD**, deployed inside the cluster, automates synchronization between the GitHub repo and Kubernetes.  
- Any new commit to the `main` branch triggers Argo CD to **detect changes and redeploy the latest version**.  
- The **Argo CD dashboard** provides visibility, version control, and rollback capabilities.

---

## 🔒 6. Security and Secrets Management
- All credentials and tokens are managed as **GitHub Secrets**.  
- No sensitive data is **hardcoded** in manifests or CI/CD workflows.  

---

## 💻 7. Local and Remote Access
To test the application locally, run:
```bash
kubectl port-forward svc/portfolio-service 8080:80 --address 0.0.0.0
