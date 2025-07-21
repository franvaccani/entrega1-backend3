# Imagen base oficial de Node
FROM node:18

# Crear carpeta de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Exponer el puerto (igual al de tu .env, probablemente 3000)
EXPOSE 3000

# Comando que inicia tu aplicación
CMD ["npm", "start"]