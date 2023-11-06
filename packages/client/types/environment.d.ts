/* eslint-disable @typescript-eslint/consistent-type-imports */
/// <reference types="vite/client" />
/// <reference types="vitest/importMeta" />

interface ImportMetaEnv {
  NODEBOOT_API_BASEURL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  readonly vitest?: typeof import("vitest");
}
