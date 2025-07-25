

API para gestionar usuarios y adopciones de mascotas. Incluye documentación Swagger, tests y está dockerizado.

---

## 🚀 Instalación

1. Clonar el proyecto:
```bash
git clone https://github.com/franvaccani/backend3-entrega1.git
cd backend3-entrega1
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar el archivo `.env` (ver `.env.example`):
```env
MONGO_URL=mongodb+srv://franciscovaccani08:franDorrego11@cluster10.2oosqsz.mongodb.net/adoptme?retryWrites=true&w=majority&appName=Cluster10
PORT=3000
```

4. Iniciar el servidor:
```bash
npm start
```

---

## 🔗 Rutas principales

- `GET /api/users`
- `POST /api/users`
- `GET /api/adoptions`
- `POST /api/adoptions`

---

## 🧪 Ejecutar tests

```bash
npm test
```

---

## 🐳 Docker

### Build:
```bash
docker build -t franvaccani/adoptme-api .
```

### Push:
```bash
docker push franvaccani/adoptme-api
```

---

## 🐳 Imagen en Docker Hub

Imagen pública disponible en:

👉 https://hub.docker.com/r/franvaccani/adoptme-api

### Cómo ejecutarla:

```bash
docker pull franvaccani/adoptme-api
docker run -p 3000:3000 franvaccani/adoptme-api
```

Luego accedé a: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)
