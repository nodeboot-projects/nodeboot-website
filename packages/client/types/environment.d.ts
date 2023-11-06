/* eslint-disable @typescript-eslint/consistent-type-imports */
/// <reference types="vite/client" />
/// <reference types="vitest/globals" />

interface ImportMetaEnv {
  NODEBOOT_API_BASEURL: string;
}

interface ImportMeta {
  env: ImportMetaEnv;
  vitest: (typeof import("vitest"))["vitest"];
}
