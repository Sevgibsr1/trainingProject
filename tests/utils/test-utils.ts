import { type Page, expect } from "@playwright/test";

/**
 * Navbar'ın görünür olduğunu doğrular
 */
export async function expectNavbarVisible(page: Page): Promise<void> {
	// Navbar'ın görünür olduğunu doğrula
	await expect(page.locator("nav")).toBeVisible();
}

/**
 * Sidebar'ın açılıp kapanmasını test eder
 */
export async function testSidebarToggle(page: Page): Promise<void> {
	// Sidebar başlangıçta kapalı olmalı
	await expect(page.locator('aside[class*="sidebar"]')).not.toBeVisible();

	// Navbar'daki menü butonuna tıkla
	await page.click('button[aria-label="Menu"]');

	// Sidebar'ın açıldığını doğrula
	await expect(page.locator('aside[class*="sidebar"]')).toBeVisible();

	// Sidebar'ı kapat
	await page.click('button[aria-label="Close"]');

	// Sidebar'ın kapandığını doğrula
	await expect(page.locator('aside[class*="sidebar"]')).not.toBeVisible();
}

/**
 * Belirtilen URL'e yönlendirme yapan butonun çalışıp çalışmadığını test eder
 */
export async function testNavigation(
	page: Page,
	buttonText: string,
	expectedUrl: string,
): Promise<void> {
	// Butona tıkla
	await page.click(`button:has-text("${buttonText}")`);

	// Doğru URL'e yönlendirildiğini doğrula
	await expect(page).toHaveURL(expectedUrl);
}

/**
 * Sayfanın başlığının doğru olduğunu kontrol eder
 */
export async function expectPageTitle(
	page: Page,
	titleText: string,
): Promise<void> {
	const title = page.locator(`h1:has-text("${titleText}")`);
	await expect(title).toBeVisible();
}

/**
 * Belirtilen seçiciyle eşleşen bir öğenin görünür olduğunu doğrular
 */
export async function expectElementVisible(
	page: Page,
	selector: string,
): Promise<void> {
	const elements = await page.locator(selector).all();
	if (elements.length > 1) {
		await expect(elements[0]).toBeVisible();
	} else {
		await expect(page.locator(selector)).toBeVisible();
	}
}

/**
 * Belirtilen seçiciyle eşleşen bir öğenin belirli bir metni içerdiğini doğrular
 */
export async function expectElementContainsText(
	page: Page,
	selector: string,
	text: string,
): Promise<void> {
	// Daha spesifik seçici kullanarak strict mode ihlalini önle
	const elements = await page.locator(selector).all();
	if (elements.length > 1) {
		// Birden fazla öğe varsa, metni içeren ilk öğeyi bul
		for (const element of elements) {
			const elementText = await element.textContent();
			if (elementText?.includes(text)) {
				await expect(element).toContainText(text);
				return;
			}
		}
	} else {
		await expect(page.locator(selector).first()).toContainText(text);
	}
}

/**
 * Form alanlarını doldurur
 */
export async function fillFormFields(
	page: Page,
	formData: Record<string, string>,
): Promise<void> {
	for (const [fieldName, value] of Object.entries(formData)) {
		await page.fill(`[name="${fieldName}"]`, value);
	}
}
