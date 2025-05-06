import { test, expect } from "@playwright/test";
import {
	expectNavbarVisible,
	expectPageTitle,
	expectElementVisible,
	expectElementContainsText,
} from "./utils/test-utils";

test.describe("Kurslar Sayfası Testleri", () => {
	test.beforeEach(async ({ page }) => {
		// Her test öncesi kurslar sayfasına git
		await page.goto("/courses");
	});

	test("Kurslar sayfası başlığı doğru görüntülenmeli", async ({ page }) => {
		// Sayfa başlığının görünür olduğunu doğrula
		const coursesTitle = page.locator('h1:has-text("Kurslarımız")');
		await expect(coursesTitle).toBeVisible();

		// Alt başlığın görünür olduğunu doğrula
		const subTitle = page.locator(
			'p:has-text("Kariyerinizi geliştirecek en iyi kursları keşfedin")',
		);
		await expect(subTitle).toBeVisible();
	});

	test("Arama kutusu doğru çalışmalı", async ({ page }) => {
		// Arama kutusunun görünür olduğunu doğrula
		const searchInput = page.locator(
			'input[type="text"][placeholder*="Kurs ara"]',
		);
		await expect(searchInput).toBeVisible();

		// Arama kutusuna metin gir
		await searchInput.fill("Python");

		// Arama sonuçlarının filtrelendiğini doğrula
		// Python içeren kursların görüntülendiğini kontrol et
		const pythonCourses = page
			.locator(".course-card")
			.filter({ hasText: "Python" });
		await expect(pythonCourses).toBeVisible();

		// Arama kutusunu temizle
		await searchInput.fill("");

		// Tüm kursların tekrar görüntülendiğini doğrula
		const allCourses = page.locator(".course-card");
		await expect(allCourses.first()).toBeVisible();
	});

	test("Kategori filtreleme doğru çalışmalı", async ({ page }) => {
		// Kategori butonlarının görünür olduğunu doğrula
		const allButton = page.locator('button:has-text("All")');
		await expect(allButton).toBeVisible();

		const webDevButton = page.locator('button:has-text("Web Geliştirme")');
		await expect(webDevButton).toBeVisible();

		const dataScienceButton = page.locator('button:has-text("Veri Bilimi")');
		await expect(dataScienceButton).toBeVisible();

		const programmingButton = page.locator('button:has-text("Programlama")');
		await expect(programmingButton).toBeVisible();

		// "Web Geliştirme" kategorisine tıkla
		await webDevButton.click();

		// Web Geliştirme kategorisindeki kursların görüntülendiğini doğrula
		const webDevCourses = page
			.locator(".course-card")
			.filter({ hasText: "Web Geliştirme" });
		await expect(webDevCourses).toBeVisible();

		// "Veri Bilimi" kategorisine tıkla
		await dataScienceButton.click();

		// Veri Bilimi kategorisindeki kursların görüntülendiğini doğrula
		const dataScienceCourses = page
			.locator(".course-card")
			.filter({ hasText: "Veri Bilimi" });
		await expect(dataScienceCourses).toBeVisible();

		// "Tümü" kategorisine tıkla
		await allButton.click();

		// Tüm kursların tekrar görüntülendiğini doğrula
		const allCourses = page.locator(".course-card");
		await expect(allCourses.first()).toBeVisible();
	});

	test("Kurs kartları doğru görüntülenmeli", async ({ page }) => {
		// Kurs kartlarının görünür olduğunu doğrula
		const courseCards = page.locator(".course-card");
		await expect(courseCards.first()).toBeVisible();

		// İlk kurs kartının detaylarını kontrol et
		const firstCourseCard = courseCards.first();
		await expect(firstCourseCard).toBeVisible();

		// Kurs başlığının görünür olduğunu doğrula
		await expect(
			firstCourseCard.locator(".text-xl.text-gray-800"),
		).toBeVisible();

		// Kurs açıklamasının görünür olduğunu doğrula
		await expect(firstCourseCard.locator(".course-description")).toBeVisible();

		// Kurs seviyesinin görünür olduğunu doğrula
		const levelDiv = firstCourseCard.locator(".level-badge").first();
		await expect(levelDiv).toBeVisible();

		// Kurs süresinin görünür olduğunu doğrula
		const durationDiv = firstCourseCard.locator(".course-duration");
		await expect(durationDiv).toBeVisible();

		// Kurs değerlendirmesinin görünür olduğunu doğrula
		const ratingDiv = firstCourseCard.locator(".course-rating");
		await expect(ratingDiv).toBeVisible();
	});

	test("Kurs seviyesi renkleri doğru görüntülenmeli", async ({ page }) => {
		// Başlangıç seviyesi kurslarının yeşil renkte olduğunu doğrula
		const beginnerCourses = page
			.locator(".course-card")
			.filter({ hasText: "Başlangıç Seviye" });
		if ((await beginnerCourses.count()) > 0) {
			const greenBadge = beginnerCourses
				.first()
				.locator(".level-badge.beginner");
			await expect(greenBadge).toBeVisible();
		}

		// Orta seviye kurslarının mavi renkte olduğunu doğrula
		const intermediateCourses = page
			.locator(".course-card")
			.filter({ hasText: "Orta Seviye" });
		if ((await intermediateCourses.count()) > 0) {
			const blueBadge = intermediateCourses
				.first()
				.locator(".level-badge.intermediate");
			await expect(blueBadge).toBeVisible();
		}

		// İleri seviye kurslarının kırmızı renkte olduğunu doğrula
		const advancedCourses = page
			.locator(".course-card")
			.filter({ hasText: "İleri Seviye" });
		if ((await advancedCourses.count()) > 0) {
			const redBadge = advancedCourses.first().locator(".level-badge.advanced");
			await expect(redBadge).toBeVisible();
		}
	});

	test("Arama ve kategori filtreleme birlikte çalışmalı", async ({ page }) => {
		// Arama kutusuna "Python" yaz
		const searchInput = page.locator(
			'input[type="text"][placeholder*="Kurs ara"]',
		);
		await searchInput.fill("Python");

		// "Veri Bilimi" kategorisine tıkla
		const dataScienceButton = page.locator('button:has-text("Veri Bilimi")');
		await dataScienceButton.click();

		// Hem Python içeren hem de Veri Bilimi kategorisinde olan kursların görüntülendiğini doğrula
		const filteredCourses = page
			.locator(".course-card")
			.filter({ hasText: "Python" })
			.filter({ hasText: "Veri Bilimi" });
		await expect(filteredCourses).toBeVisible();

		// Arama kutusunu temizle
		await searchInput.fill("");

		// Sadece Veri Bilimi kategorisindeki kursların görüntülendiğini doğrula
		const dataScienceCourses = page
			.locator(".course-card")
			.filter({ hasText: "Veri Bilimi" });
		await expect(dataScienceCourses).toBeVisible();
	});

	test("Responsive tasarım kontrol edilmeli", async ({ page }) => {
		// Mobil görünüm için ekran boyutunu ayarla
		await page.setViewportSize({ width: 375, height: 667 });

		// Sayfa başlığının hala görünür olduğunu doğrula
		const coursesTitle = page.locator('h1:has-text("Kurslarımız")');
		await expect(coursesTitle).toBeVisible();

		// Arama kutusunun hala görünür olduğunu doğrula
		const searchInput = page.locator(
			'input[type="text"][placeholder*="Kurs ara"]',
		);
		await expect(searchInput).toBeVisible();

		// Kategori butonlarının hala görünür olduğunu doğrula
		const allButton = page.locator('button:has-text("All")');
		await expect(allButton).toBeVisible();

		// Kurs kartlarının hala görünür olduğunu doğrula
		const courseCards = page.locator(".course-card");
		await expect(courseCards.first()).toBeVisible();

		// Tablet görünüm için ekran boyutunu ayarla
		await page.setViewportSize({ width: 768, height: 1024 });

		// Sayfa başlığının hala görünür olduğunu doğrula
		await expect(coursesTitle).toBeVisible();

		// Arama kutusunun hala görünür olduğunu doğrula
		await expect(searchInput).toBeVisible();

		// Kategori butonlarının hala görünür olduğunu doğrula
		await expect(allButton).toBeVisible();

		// Kurs kartlarının hala görünür olduğunu doğrula
		await expect(courseCards.first()).toBeVisible();

		// Masaüstü görünüm için ekran boyutunu ayarla
		await page.setViewportSize({ width: 1280, height: 800 });

		// Sayfa başlığının hala görünür olduğunu doğrula
		await expect(coursesTitle).toBeVisible();

		// Arama kutusunun hala görünür olduğunu doğrula
		await expect(searchInput).toBeVisible();

		// Kategori butonlarının hala görünür olduğunu doğrula
		await expect(allButton).toBeVisible();

		// Kurs kartlarının hala görünür olduğunu doğrula
		await expect(courseCards.first()).toBeVisible();
	});
});
