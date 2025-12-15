# Academia Blockchain

Aplicación base creada con React + Vite y lista para empaquetar en Android e iOS usando Capacitor.

## Requisitos
- Node.js 18+
- npm
- Para Android: Android Studio y Java 17.
- Para iOS: Xcode en macOS.

## Scripts
- `npm install`: instala dependencias.
- `npm run dev`: inicia Vite en `http://localhost:3324` aceptando conexiones externas (`--host`).
- `npm run build`: genera la versión estática en `dist/`.
- `npm run preview`: sirve el build en el puerto 3324.
- `npm run android`: copia los archivos web y compila un APK de desarrollo (requiere haber añadido la plataforma con `npx cap add android`).
- `npm run ios`: copia los archivos web y abre el proyecto de Xcode (requiere `npx cap add ios`).

## Subdominio
El archivo `vite.config.js` define `base` y puertos para desplegar bajo `https://academia.blockchaintechnologysas.com` y apuntar el servidor de desarrollo al puerto 3324.

## Despliegue con Nginx y SSL (Certbot)
Este proyecto puede exponerse mediante Nginx actuando como proxy inverso y asegurado con Let's Encrypt. Los pasos generales en un servidor Ubuntu son:

1. **Instalar Nginx y Certbot**:
   ```bash
   sudo apt update
   sudo apt install nginx certbot python3-certbot-nginx
   ```

2. **Crear un bloque de servidor para el subdominio** (ejemplo: `admin.granacoin.com.co` sirviendo el frontend en el puerto interno `7423`):
   ```nginx
   server {
       listen 80;
       listen [::]:80;
       server_name admin.granacoin.com.co;

       location / {
           proxy_pass http://127.0.0.1:7423;
           proxy_http_version 1.1;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```
   Guarda el archivo en `/etc/nginx/sites-available/admin.granacoin.com.co` y crea el enlace simbólico:
   ```bash
   sudo ln -s /etc/nginx/sites-available/admin.granacoin.com.co /etc/nginx/sites-enabled/
   sudo nginx -t && sudo systemctl reload nginx
   ```

3. **Emitir el certificado SSL con Certbot**:
   ```bash
   sudo certbot --nginx -d admin.granacoin.com.co
   ```
   Certbot añadirá automáticamente los bloques `listen 443 ssl` y la redirección de HTTP a HTTPS. Para renovar de forma automática se instala un `systemd` timer por defecto, pero puedes probarlo con `sudo certbot renew --dry-run`.

4. **Ejemplo para otro subdominio y puerto** (por ejemplo `api.granacoin.com.co` en el puerto interno `8081`):
   ```nginx
   server {
       listen 80;
       listen [::]:80;
       server_name api.granacoin.com.co;

       location / {
           proxy_pass http://127.0.0.1:8081;
           proxy_http_version 1.1;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```
   Ejecuta Certbot del mismo modo para este subdominio: `sudo certbot --nginx -d api.granacoin.com.co`.

5. **Comprobar estado**: revisa los logs con `sudo journalctl -u nginx` o `sudo tail -f /var/log/nginx/error.log` si surge algún problema.

## Flujo para apps móviles
1. Ejecuta `npm install` para preparar el entorno.
2. Compila el frontend con `npm run build`.
3. Añade las plataformas nativas: `npx cap add android` y/o `npx cap add ios`.
4. Sincroniza cambios tras cada build con `npx cap sync`.
5. Abre el proyecto nativo en Android Studio o Xcode para emular, firmar y publicar.
