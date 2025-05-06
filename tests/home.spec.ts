import { test, expect } from "@playwright/test";
import {
	expectNavbarVisible,
	expectPageTitle,
	expectElementVisible,
	expectElementContainsText,
	testNavigation,
} from "./utils/test-utils";

test.describe("Ana Sayfa Testleri", () => {
	test.beforeEach(async ({ page }) => {
		// Her test öncesi ana sayfaya git
		await page.goto("/");
	});

	test("Hero bölümü doğru görüntülenmeli", async ({ page }) => {
		// Hero başlığının görünür olduğunu doğrula
		const heroTitle = page.locator('h1:has-text("Geleceğin Teknolojilerini")');
		await expect(heroTitle).toBeVisible();

		// Alt başlığın görünür olduğunu doğrula
		const subTitle = page.locator(
			'p:has-text("Başar Eğitim ile profesyonel yazılım dünyasına adım atın")',
		);
		await expect(subTitle).toBeVisible();

		// CTA butonlarının görünür olduğunu doğrula
		await expectElementVisible(page, 'button:has-text("Kurslara Göz At")');
		await expectElementVisible(page, 'button:has-text("Bize Ulaşın")');
	});

	test("İstatistik kartları doğru görüntülenmeli", async ({ page }) => {
		// İstatistik kartlarının görünür olduğunu doğrula
		await expect(page.locator('div:has-text("5000+")').first()).toBeVisible();
		await expect(page.locator('div:has-text("50+")').first()).toBeVisible();
		await expect(page.locator('div:has-text("30+")').first()).toBeVisible();
		await expect(page.locator('div:has-text("%95")').first()).toBeVisible();

		// İstatistik açıklamalarının görünür olduğunu doğrula
		await expect(
			page.locator('div:has-text("Mezun Öğrenci")').first(),
		).toBeVisible();
		await expect(
			page.locator('div:has-text("Aktif Kurs")').first(),
		).toBeVisible();
		await expect(
			page.locator('div:has-text("Uzman Eğitmen")').first(),
		).toBeVisible();
		await expect(
			page.locator('div:has-text("Memnuniyet Oranı")').first(),
		).toBeVisible();
	});

	test("Popüler kurslar bölümü doğru görüntülenmeli", async ({ page }) => {
		// Popüler kurslar başlığının görünür olduğunu doğrula
		const popularCoursesTitle = page.locator(
			'h2:has-text("Popüler Kurslarımız")',
		);
		await expect(popularCoursesTitle).toBeVisible();

		// Kurs kartlarının görünür olduğunu doğrula
		const courseCards = page
			.locator('div[data-slot="card"]')
			.filter({ hasText: "Python" });
		await expect(courseCards.first()).toBeVisible();

		// Kurs detaylarının görünür olduğunu doğrula
		await expect(page.locator(".text-gray-600.mb-4").first()).toBeVisible();

		await expect(
			page.locator('span.font-medium:has-text("Süre:")').first(),
		).toBeVisible();
		await expect(
			page.locator('span.font-medium:has-text("Seviye:")').first(),
		).toBeVisible();

		// "Tüm Kursları Gör" butonunun görünür olduğunu doğrula
		await expectElementVisible(page, 'button:has-text("Tüm Kursları Gör")');
	});

	test("Neden Biz bölümü doğru görüntülenmeli", async ({ page }) => {
		// "Neden Biz" başlığının görünür olduğunu doğrula
		const whyUsTitle = page.locator('h2:has-text("Neden Biz?")');
		await expect(whyUsTitle).toBeVisible();

		// Avantaj kartlarının görünür olduğunu doğrula
		await expect(
			page
				.locator('.text-xl.font-bold.text-gray-800:has-text("Güncel Müfredat")')
				.first(),
		).toBeVisible();
		await expect(
			page
				.locator(
					'.text-xl.font-bold.text-gray-800:has-text("Uzman Eğitmenler")',
				)
				.first(),
		).toBeVisible();
		await expect(
			page
				.locator(
					'.text-xl.font-bold.text-gray-800:has-text("Proje Odaklı Eğitim")',
				)
				.first(),
		).toBeVisible();
		await expect(
			page
				.locator(
					'.text-xl.font-bold.text-gray-800:has-text("Esnek Çalışma Saatleri")',
				)
				.first(),
		).toBeVisible();
		await expect(
			page
				.locator('.text-xl.font-bold.text-gray-800:has-text("Sertifika")')
				.first(),
		).toBeVisible();
		await expect(
			page
				.locator('.text-xl.font-bold.text-gray-800:has-text("Kariyer Desteği")')
				.first(),
		).toBeVisible();
	});

	test("Öğrenci başarıları bölümü doğru görüntülenmeli", async ({ page }) => {
		// "Öğrenci Başarıları" başlığının görünür olduğunu doğrula
		const successTitle = page.locator('h2:has-text("Öğrenci Başarıları")');
		await expect(successTitle).toBeVisible();

		// Başarı hikayelerinin görünür olduğunu doğrula
		await expect(
			page.locator('.text-lg:has-text("Ahmet Yılmaz")').first(),
		).toBeVisible();
		await expect(
			page.locator('.text-lg:has-text("Ayşe Kaya")').first(),
		).toBeVisible();
		await expect(
			page.locator('.text-lg:has-text("Mehmet Demir")').first(),
		).toBeVisible();
	});

	test("CTA bölümü doğru görüntülenmeli", async ({ page }) => {
		// CTA başlığının görünür olduğunu doğrula
		const ctaTitle = page.locator(
			'h2:has-text("Kariyerinizi Dönüştürmeye Hazır mısınız?")',
		);
		await expect(ctaTitle).toBeVisible();

		// CTA butonlarının görünür olduğunu doğrula
		await expectElementVisible(page, 'button:has-text("Hemen Başlayın")');
		await expectElementVisible(
			page,
			'button:has-text("Bizimle İletişime Geçin")',
		);
	});

	test("Responsive tasarım kontrol edilmeli", async ({ page }) => {
		// Mobil görünüm için ekran boyutunu ayarla
		await page.setViewportSize({ width: 375, height: 667 });

		// Hero başlığının hala görünür olduğunu doğrula
		const heroTitle = page.locator('h1:has-text("Geleceğin Teknolojilerini")');
		await expect(heroTitle).toBeVisible();

		// İstatistik kartlarının hala görünür olduğunu doğrula
		await expect(page.locator('div:has-text("5000+")').first()).toBeVisible();

		// Popüler kurslar başlığının hala görünür olduğunu doğrula
		const popularCoursesTitle = page.locator(
			'h2:has-text("Popüler Kurslarımız")',
		);
		await expect(popularCoursesTitle).toBeVisible();

		// Tablet görünüm için ekran boyutunu ayarla
		await page.setViewportSize({ width: 768, height: 1024 });

		// Hero başlığının hala görünür olduğunu doğrula
		await expect(heroTitle).toBeVisible();

		// İstatistik kartlarının hala görünür olduğunu doğrula
		await expect(page.locator('div:has-text("5000+")').first()).toBeVisible();

		// Popüler kurslar başlığının hala görünür olduğunu doğrula
		await expect(popularCoursesTitle).toBeVisible();

		// Masaüstü görünüm için ekran boyutunu ayarla
		await page.setViewportSize({ width: 1280, height: 800 });

		// Hero başlığının hala görünür olduğunu doğrula
		await expect(heroTitle).toBeVisible();

		// İstatistik kartlarının hala görünür olduğunu doğrula
		await expect(page.locator('div:has-text("5000+")').first()).toBeVisible();

		// Popüler kurslar başlığının hala görünür olduğunu doğrula
		await expect(popularCoursesTitle).toBeVisible();
	});

	test("Kurslara Göz At butonu doğru sayfaya yönlendirmeli", async ({
		page,
	}) => {
		// "Kurslara Göz At" butonuna tıkla ve doğru sayfaya yönlendirildiğini doğrula
		await page.click('button:has-text("Kurslara Göz At")');
		await expect(page).toHaveURL("/courses");

		// Kurslar sayfasının başlığının görünür olduğunu doğrula
		const coursesTitle = page.locator('h1:has-text("Kurslarımız")');
		await expect(coursesTitle).toBeVisible();
	});

	test("Bize Ulaşın butonu doğru sayfaya yönlendirmeli", async ({ page }) => {
		// "Bize Ulaşın" butonuna tıkla ve doğru sayfaya yönlendirildiğini doğrula
		await page.click('button:has-text("Bize Ulaşın")');
		await expect(page).toHaveURL("/contact");

		// İletişim sayfasının başlığının görünür olduğunu doğrula
		const contactTitle = page.locator('h1:has-text("İletişime Geçin")');
		await expect(contactTitle).toBeVisible();
	});
});
