import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright yapılandırması
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
	testDir: "./tests",
	/* Test çalıştırma zaman aşımı */
	timeout: 30 * 1000,
	/* Testler arasında bekleme süresi */
	expect: {
		timeout: 5000,
	},
	/* Testlerin çalıştırılacağı tarayıcılar */
	projects: [
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},
		{
			name: "firefox",
			use: { ...devices["Desktop Firefox"] },
		},
		{
			name: "webkit",
			use: { ...devices["Desktop Safari"] },
		},
	],
	/* Testlerin çalıştırılacağı web sunucusu */
	webServer: {
		command: "npm run dev",
		port: 5173,
		reuseExistingServer: !process.env.CI,
	},
	/* Raporlama seçenekleri */
	reporter: "html",
});
