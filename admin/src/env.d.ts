interface ImportMetaEnv {
  readonly VITE_BASE_API_URL: string;
  // yaha aur bhi variables declare kar sakte ho agar ho
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}