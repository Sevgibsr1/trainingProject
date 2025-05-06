import { test, expect } from "@playwright/test";
import {
	expectNavbarVisible,
	expectPageTitle,
	expectElementVisible,
	expectElementContainsText,
} from "./utils/test-utils";

test.describe("Hakkımızda Sayfası Testleri", () => {
	test.beforeEach(async ({ page }) => {
		// Her test öncesi hakkımızda sayfasına git
		await page.goto("/about");
	});

	test("Hakkımızda sayfası başlığı doğru görüntülenmeli", async ({ page }) => {
		// Hero bölümünün görünür olduğunu doğrula
		await expectElementVisible(page, ".hero-section");

		// Hero başlığının görünür olduğunu doğrula
		await expectElementContainsText(
			page,
			"h1",
			"Başar Eğitim ile Geleceğe Hazırlanın",
		);

		// Alt başlığın görünür olduğunu doğrula
		await expectElementContainsText(
			page,
			"p.text-base, p.text-lg, p.text-xl",
			"2024'ten beri binlerce öğrenciye kaliteli eğitim hizmeti sunuyoruz",
		);
	});

	test("Misyon ve Vizyon bölümleri doğru görüntülenmeli", async ({ page }) => {
		// Misyon kartının görünür olduğunu doğrula
		const missionCard = page.locator('div:has-text("Misyonumuz")').first();
		await expect(missionCard).toBeVisible();

		// Misyon içeriğinin görünür olduğunu doğrula
		await expectElementContainsText(
			page,
			"p.text-gray-600",
			"Öğrencilerimize en güncel teknolojileri öğreterek",
		);

		// Vizyon kartının görünür olduğunu doğrula
		const visionCard = page.locator('div:has-text("Vizyonumuz")').first();
		await expect(visionCard).toBeVisible();

		// Vizyon içeriğinin görünür olduğunu doğrula
		await expectElementContainsText(
			page,
			"p.text-gray-600",
			"Türkiye'nin lider teknoloji eğitim kurumu olmak",
		);
	});

	test("Değerlerimiz bölümü doğru görüntülenmeli", async ({ page }) => {
		// Değerlerimiz başlığının görünür olduğunu doğrula
		await expectElementContainsText(page, "h2", "Değerlerimiz");

		// Değer kartlarının görünür olduğunu doğrula
		const valueCards = page.locator(".bg-white.p-6.rounded-xl");
		await expect(valueCards.first()).toBeVisible();

		// Değer başlıklarının görünür olduğunu doğrula
		await expectElementContainsText(page, "h3", "Kalite");
		await expectElementContainsText(page, "h3", "Yenilikçilik");
		await expectElementContainsText(page, "h3", "İş Birliği");

		// Değer açıklamalarının görünür olduğunu doğrula
		await expectElementContainsText(
			page,
			".text-gray-600",
			"En yüksek standartlarda eğitim ve öğretim hizmeti sunmak",
		);
		await expectElementContainsText(
			page,
			".text-gray-600",
			"Sürekli gelişim ve teknolojik yenilikleri takip etmek",
		);
		await expectElementContainsText(
			page,
			".text-gray-600",
			"Öğrencilerimiz ve sektör liderleriyle güçlü iş birlikleri kurmak",
		);
	});

	test("Ekibimiz bölümü doğru görüntülenmeli", async ({ page }) => {
		// Ekibimiz başlığının görünür olduğunu doğrula
		await expectElementContainsText(page, "h2", "Ekibimiz");

		// Ekip üyesi kartlarının görünür olduğunu doğrula
		const teamCards = page.locator(".team-card");
		await expect(teamCards.first()).toBeVisible();

		// Ekip üyesi isimlerinin görünür olduğunu doğrula
		await expectElementContainsText(page, "h3", "Sevgi Başar");
		await expectElementContainsText(page, "h3", "Ahmet Yılmaz");
		await expectElementContainsText(page, "h3", "Ayşe Kaya");

		// Ekip üyesi pozisyonlarının görünür olduğunu doğrula
		await expectElementContainsText(page, "p.text-blue-600", "Kurucu & CEO");
		await expectElementContainsText(
			page,
			"p.text-blue-600",
			"Eğitim Direktörü",
		);
		await expectElementContainsText(
			page,
			"p.text-blue-600",
			"Öğrenci Danışmanı",
		);
	});

	test("Responsive tasarım kontrol edilmeli", async ({ page }) => {
		// Mobil görünüm için ekran boyutunu ayarla
		await page.setViewportSize({ width: 375, height: 667 });

		// Sayfa başlığının hala görünür olduğunu doğrula
		await expectElementContainsText(
			page,
			"h1",
			"Başar Eğitim ile Geleceğe Hazırlanın",
		);

		// Misyon ve Vizyon kartlarının hala görünür olduğunu doğrula
		await expectElementContainsText(page, "h2", "Misyonumuz");
		await expectElementContainsText(page, "h2", "Vizyonumuz");

		// Tablet görünüm için ekran boyutunu ayarla
		await page.setViewportSize({ width: 768, height: 1024 });

		// Sayfa başlığının hala görünür olduğunu doğrula
		await expectElementContainsText(
			page,
			"h1",
			"Başar Eğitim ile Geleceğe Hazırlanın",
		);

		// Misyon ve Vizyon kartlarının hala görünür olduğunu doğrula
		await expectElementContainsText(page, "h2", "Misyonumuz");
		await expectElementContainsText(page, "h2", "Vizyonumuz");

		// Masaüstü görünüm için ekran boyutunu ayarla
		await page.setViewportSize({ width: 1280, height: 800 });

		// Sayfa başlığının hala görünür olduğunu doğrula
		await expectElementContainsText(
			page,
			"h1",
			"Başar Eğitim ile Geleceğe Hazırlanın",
		);

		// Misyon ve Vizyon kartlarının hala görünür olduğunu doğrula
		await expectElementContainsText(page, "h2", "Misyonumuz");
		await expectElementContainsText(page, "h2", "Vizyonumuz");
	});
});
