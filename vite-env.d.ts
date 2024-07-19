/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_USERNAME: string;
  readonly VITE_PASSWORD: string;
  readonly VITE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
