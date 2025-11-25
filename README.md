# 🚀 DevOps Engineer Portfolio - Shishir Shetty

[![Live Site](https://img.shields.io/badge/Live-shishirshetty.vercel.app-blue?style=for-the-badge&logo=vercel)](https://shishirshetty.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://hub.docker.com)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-Ready-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)](https://kubernetes.io/)

> **Production-grade portfolio website showcasing DevOps expertise, cloud architecture skills, and infrastructure automation projects. Built with modern web technologies and deployed using industry-standard DevOps practices.**

---

## 🎯 Overview

Professional portfolio website for **Shishir Shetty**, a Senior DevOps Engineer and Cloud Architect specializing in:
- 🐳 **Container Orchestration**: Kubernetes, Docker, EKS, GKE
- ☁️ **Cloud Platforms**: AWS, GCP, Multi-Cloud Architecture
- 🔧 **Infrastructure as Code**: Terraform, Ansible, CloudFormation
- 🔄 **CI/CD Automation**: GitHub Actions, GitLab CI, Jenkins, ArgoCD
- 📊 **Monitoring & Observability**: Prometheus, Grafana, ELK Stack
- 🛡️ **Security & Compliance**: DevSecOps, Secret Management, Policy as Code

---

## ⚙️ DevOps Implementation

This portfolio itself is a **DevOps showcase project**, demonstrating enterprise-grade infrastructure practices:

### 🐳 **Containerization with Docker**
- **Multi-stage Dockerfile** optimizing build and runtime
- Lightweight production images using Node.js 20 Alpine
- Automated builds and versioning via CI/CD
- Published to Docker Hub with semantic versioning

### ☸️ **Kubernetes Orchestration**
- Production-ready K8s manifests (`deployment.yml`, `service.yml`, `ingress.yml`)
- Tested on **AWS EKS** and **GCP GKE** clusters
- Horizontal Pod Autoscaling (HPA) configured
- Resource limits and health checks implemented

### 🧩 **Helm Chart Integration**
- Complete Helm chart in `helm/portfolio-site-chart/`
- Parameterized configurations via `values.yaml`
- Environment-specific overrides supported
- Auto-updated image tags through CI pipeline

### 🚀 **CI/CD Pipeline (GitHub Actions)**
```yaml
Workflow: Build → Test → Containerize → Update Helm → Deploy
├── Code quality checks (ESLint, TypeScript)
├── Docker multi-arch builds (amd64/arm64)
├── Automated image tagging (git SHA + build number)
├── Helm chart version updates
└── ArgoCD sync trigger
```

**Key Features:**
- Automated Docker builds on every push
- Secure secret management (GitHub Secrets)
- Auto-increment versioning (`${{ github.run_number }}`)
- Git-based rollback capability

### 🔁 **GitOps with ArgoCD**
- **ArgoCD** deployed in-cluster for continuous delivery
- Auto-sync from Git repository to Kubernetes
- Declarative application management
- Visual dashboard for deployment tracking
- One-click rollback to previous versions

### 🔒 **Security Best Practices**
- ✅ All secrets managed via GitHub Secrets
- ✅ No hardcoded credentials in code/manifests
- ✅ Container image vulnerability scanning
- ✅ RBAC policies for K8s access control
- ✅ TLS/SSL termination at ingress layer

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework**: Next.js 15.4 (React 19, App Router)
- **Styling**: Tailwind CSS v4, Framer Motion
- **Icons**: Lucide React
- **Fonts**: Oswald, Inter, JetBrains Mono

### **DevOps Toolchain**
- **Container**: Docker, Docker Compose
- **Orchestration**: Kubernetes, Helm
- **CI/CD**: GitHub Actions, ArgoCD
- **Cloud**: AWS (EKS, ECR, Route53), GCP (GKE, Artifact Registry)
- **IaC**: Terraform (infrastructure), Helm (applications)
- **Monitoring**: Prometheus, Grafana (optional setup available)

---

## 🚀 Quick Start

### **Local Development**
```bash
# Clone repository
git clone https://github.com/shishirshetty77/portfolio-site.git
cd portfolio-site

# Install dependencies
npm install

# Run development server
npm run dev
# Open http://localhost:3000
```

### **Docker Deployment**
```bash
# Build production image
docker build -t portfolio-site:latest .

# Run container
docker run -p 3000:3000 portfolio-site:latest

# Or use Docker Compose
docker-compose up prod
```

### **Kubernetes Deployment**
```bash
# Apply manifests directly
kubectl apply -f k8s/manifests/

# Or use Helm
helm install portfolio ./helm/portfolio-site-chart

# Port-forward to access
kubectl port-forward svc/portfolio-service 8080:80
```

---

## 📊 SEO & Performance

- ✅ **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- ✅ **Meta Tags**: Comprehensive Open Graph & Twitter Cards
- ✅ **Structured Data**: JSON-LD schema for rich snippets
- ✅ **Sitemap**: Auto-generated XML sitemap
- ✅ **Robots.txt**: Search engine optimized
- ✅ **Keywords**: DevOps, Cloud Engineer, Kubernetes, AWS, Terraform

---

## 📁 Project Structure

```
portfolio-site/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   ├── data/             # Static data (skills, projects, experience)
│   └── context/          # React context providers
├── public/               # Static assets, sitemap, robots.txt
├── k8s/                  # Kubernetes manifests
│   └── manifests/        # Deployment, Service, Ingress
├── helm/                 # Helm chart
│   └── portfolio-site-chart/
│       ├── Chart.yaml
│       ├── values.yaml
│       └── templates/
├── .github/workflows/    # CI/CD pipelines
├── dockerfile            # Multi-stage Docker build
├── docker-compose.yml    # Local Docker orchestration
└── README.md             # This file
```

---

## 🎨 Features

- ✨ **Premium UI/UX**: Linear/Arc/Vercel-inspired design
- 🌓 **Dark/Light Mode**: Smooth theme transitions
- 📱 **Fully Responsive**: Mobile-first approach
- ♿ **Accessible**: WCAG 2.1 AA compliant
- 🎭 **Micro-interactions**: Framer Motion animations
- 🎯 **SEO Optimized**: Complete metadata & structured data
- 🎮 **Easter Egg**: Konami Code activation

---

## 📈 DevOps Metrics

| Metric | Value |
|--------|-------|
| **Build Time** | ~2-3 minutes |
| **Docker Image Size** | ~150 MB (Alpine) |
| **Deployment Time** | <30 seconds |
| **K8s Pods** | Auto-scaling 2-10 replicas |
| **Uptime SLA** | 99.9% |

---

## 🤝 Contributing

This is a personal portfolio, but feedback and suggestions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -m 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## 📧 Contact

**Shishir Shetty**  
Senior DevOps Engineer & Cloud Architect

- 🌐 Website: [shishirshetty.vercel.app](https://shishirshetty.vercel.app)
- 💼 LinkedIn: [shishir-shetty](https://www.linkedin.com/in/shishir-shetty-715028230/)
- 🐙 GitHub: [@shishirshetty77](https://github.com/shishirshetty77)
- 📧 Email: shishirshetty77@gmail.com

---

## 📄 License

This project is open source and available under the MIT License.

---

<div align="center">

**Built with 💙 using DevOps best practices**

⭐ **Star this repo if you find it useful!** ⭐

</div>
