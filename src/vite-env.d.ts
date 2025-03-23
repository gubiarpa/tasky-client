/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_BASE_URL: string;
	readonly VITE_TIMEOUT: number;
	readonly VITE_ACCOUNT_STALETIME: number;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
