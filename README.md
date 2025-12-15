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

## Flujo para apps móviles
1. Ejecuta `npm install` para preparar el entorno.
2. Compila el frontend con `npm run build`.
3. Añade las plataformas nativas: `npx cap add android` y/o `npx cap add ios`.
4. Sincroniza cambios tras cada build con `npx cap sync`.
5. Abre el proyecto nativo en Android Studio o Xcode para emular, firmar y publicar.
