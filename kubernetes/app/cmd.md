# Créer un cluster k8s :
kind create cluster --name dev-cluster

# Build les images Docker :
docker build -t mern-frontend ./frontend
docker build -t mern-backend ./backend

# Injecter dans KIND :
kind load docker-image mern-frontend --name dev-cluster-control-plane
kind load docker-image mern-backend --name dev-cluster-control-plane

# Déployer sur Kube :
kubectl apply -f k8s/


# Verifier les pods et services
kubectl get pods
kubectl get svc

