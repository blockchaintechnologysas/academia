import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.blockchaintechnologysas.academia',
  appName: 'Academia Blockchain',
  webDir: 'dist',
  server: {
    url: 'https://academia.blockchaintechnologysas.com',
    cleartext: true
  }
};

export default config;
