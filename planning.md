# 🛠️ Parcours DevOps complet & progressif : Linux, Python, Terraform, Ansible, Docker, CI/CD, Cloud

> 🎯 Objectif : apprendre, pratiquer et t’amuser en construisant une vraie stack DevOps de A à Z, sans contrainte de temps.

---

## 🧱 1. Linux – Le socle incontournable

### 🎯 Objectifs
- Maîtriser le terminal
- Gérer fichiers, users, processus, services
- Automatiser des tâches simples

### 🧩 Étapes

- Naviguer : `ls`, `cd`, `pwd`, `tree`, `find`, `du`
- Gérer fichiers : `touch`, `nano`, `mv`, `rm`, `cat`, `less`
- Permissions : `chmod`, `chown`, `umask`
- Utilisateurs, groupes : `adduser`, `usermod`, `groups`
- Services : `systemctl`, `journalctl`
- Logs : `/var/log/`, `grep`, `tail -f`
- Cron jobs : `crontab -e`, `at`
- Scripts Bash simples : `if`, `while`, `case`, `$?`

### 🧪 Projets & défis

- 🧪 Crée un script Bash de sauvegarde automatique compressée
- 🧪 Planifie un nettoyage automatique de logs chaque semaine
- 🎮 Défi : [OverTheWire Bandit](https://overthewire.org/wargames/bandit/)

---

## 🐍 2. Python – Automatiser et manipuler

### 🎯 Objectifs
- Bases + scripts utiles pour l’admin sys
- Automatisation + outils persos

### 🧩 Étapes

- Bases : variables, conditions, boucles, fonctions
- Fichiers : lecture/écriture
- Modules standard : `os`, `sys`, `subprocess`, `json`, `argparse`
- Gestion de fichiers, logs, processus
- YAML avec `pyyaml`
- Environnements virtuels (`venv`)

### 🧪 Projets & défis

- 🧪 Script CLI : backup compressé d’un dossier
- 🧪 Script “rapport système” : CPU, RAM, disque → JSON
- 🧪 Générateur d'inventaire dynamique Ansible (via IPs de Terraform)
- 🎮 Défis : [Exercism Python](https://exercism.org/tracks/python)

---

## 🧱 3. Terraform – Déployer l’infrastructure

### 🎯 Objectifs
- Infrastructure as Code (IaC)
- Créer VMs, réseaux, disques

### 🧩 Étapes

- Init, provider (local, cloud)
- Ressources : VM, fichier, clé SSH, user
- Variables, outputs, state
- Modules réutilisables
- Provisioning avec fichiers ou remote-exec

### 🧪 Projets & défis

- 🧪 Crée une VM locale ou cloud avec clé SSH
- 🧪 Module réutilisable pour créer n’importe quelle VM
- 🧪 Générer une sortie `inventory.ini` compatible Ansible

---

## ⚙️ 4. Ansible – Configurer automatiquement

### 🎯 Objectifs
- Déployer des services, gérer des fichiers
- Maintenir un état stable sur les machines

### 🧩 Étapes

- Inventaire statique et dynamique
- Modules `apt`, `copy`, `template`, `user`, `lineinfile`, `service`
- Playbooks YAML bien structurés
- Templates Jinja2
- Rôles : `defaults`, `tasks`, `handlers`
- Tags, conditions, boucles

### 🧪 Projets & défis

- 🧪 Playbook pour déployer Nginx + index.html
- 🧪 Créer un rôle "webserver" complet
- 🧪 Déploiement complet d’un stack (Nginx + app + logs + firewall)

---

## 🐳 5. Docker – Isolation et portabilité

### 🎯 Objectifs
- Conteneuriser une app/service
- Comprendre images, volumes, réseaux

### 🧩 Étapes

- Docker CLI : `docker run`, `build`, `ps`, `exec`
- Dockerfile : créer ton image
- Volumes & ports
- Docker Compose
- Lien avec Ansible (via module `docker_container`)
- Lien avec Terraform (provider Docker)

### 🧪 Projets & défis

- 🧪 Conteneuriser une app Flask ou Nginx
- 🧪 Déployer avec Ansible une stack Docker Compose
- 🧪 Script Python qui gère des conteneurs (via subprocess)

---

## ☁️ 6. Cloud – Passage à l’échelle

### 🎯 Objectifs
- Déployer ta stack sur un vrai cloud
- Comprendre sécurité, coût, provisioning

### 🧩 Étapes

- AWS / GCP / Azure / Scaleway (choix)
- Clé SSH, user, firewall, VM
- Terraform + Ansible combinés
- Sécurité : `ufw`, ports, users

### 🧪 Projets & défis

- 🧪 Déployer une infra sur le cloud
- 🧪 Playbook Ansible post-cloud : installation + config + logs
- 🧪 Générer dynamiquement l’inventaire depuis Terraform

---

## 📈 7. Monitoring & Alerting – Observer ton infra

### 🎯 Objectifs
- Surveiller performances et erreurs
- Être notifié si ça plante

### 🧩 Étapes

- Linux : `top`, `htop`, `iotop`, `nmon`
- Collecte : `prometheus-node-exporter`, `glances`
- Logs : rotation, analyse automatique
- Alertes via script Python ou Ansible handler

### 🧪 Projets & défis

- 🧪 Script Python qui alerte si RAM > 80%
- 🧪 Installer Prometheus exporter via Ansible
- 🧪 Dashboard avec Grafana (optionnel)

---

## 🔁 8. CI/CD – L’automatisation ultime

### 🎯 Objectifs
- Automatiser tout à chaque commit

### 🧩 Étapes

- Git : commits propres, branches
- GitHub Actions / GitLab CI
- Linter : `ansible-lint`, `terraform fmt`
- Pipeline : test → build → deploy

### 🧪 Projets & défis

- 🧪 Pipeline : `terraform plan`, `apply`, `ansible-playbook`
- 🧪 GitHub Actions qui teste et déploie ton infra
- 🧪 Badge de build + notifications Slack/Discord

---

## 📦 9. Portfolio DevOps – Ton CV vivant

### 🎯 Objectifs
- Centraliser tout ton apprentissage
- Présenter des projets concrets

### 🧩 Étapes

- Repo Git bien structuré : `infra/`, `ansible/`, `scripts/`
- `README.md` documenté : résumé + captures d’écran + instructions
- Héberger une app statique (site perso ?)
- Créer une page Notion, site Hugo, ou GitHub Pages

---

## 🎮 10. Défis bonus & idées de projets

- 🧪 Crée ton propre "mini-lab" local (avec Vagrant ou Docker)
- 🧪 Projet final : “Lancer une infra complète avec une seule commande”
- 🎮 Participer à [Hack The Box](https://www.hackthebox.com/)
- 🎮 Jouer à [SysAdmin CTF](https://trailofbits.github.io/ctf/)

---

## 🔚 Tu maîtrises quand...

- Tu déploies une VM + Docker + app + monitoring en 1 commande
- Tu automatises TOUT avec Terraform + Ansible
- Tu es capable de debugger, optimiser, documenter ce que tu fais
- Tu peux l’expliquer à quelqu’un d’autre 😊

