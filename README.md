# Task 06 - Cloud Infrastructure Deployment & Monitoring Capstone

## Architecture
App (Node.js) -> Docker Container -> Cloud (AWS EC2 / DigitalOcean / GCP Cloud Run) -> Prometheus (metrics) -> Grafana (dashboard) -> Uptime Kuma (health alerts)

## Implementation Steps

### 1. Containerized Service with Automated Env Config
- Used docker-compose with env_file .env for automated environment variable injection
- Multi-container setup with app, prometheus, grafana, uptime-kuma
- Healthcheck implemented at /health endpoint

### 2. Deployment to Cloud (Choose one)
**Option A - AWS EC2:**
```bash
# On EC2 instance
sudo apt update && sudo apt install docker.io docker-compose -y
git clone https://github.com/mshamna16shana-glitch/cloud-infrastructure-capstone.git
cd cloud-infrastructure-capstone
cp .env.example .env
sudo docker-compose up -d
