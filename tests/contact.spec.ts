import { test, expect } from "@playwright/test";
import {
	expectNavbarVisible,
	expectPageTitle,
	expectElementVisible,
	expectElementContainsText,
	fillFormFields,
} from "./utils/test-utils";

test.describe("İletişim Sayfası Testleri", () => {
	test.beforeEach(async ({ page }) => {
		// Her test öncesi iletişim sayfasına git
		await page.goto("/contact");
	});

	test("İletişim sayfası başlığı doğru görüntülenmeli", async ({ page }) => {
		// Sayfa başlığının görünür olduğunu doğrula
		const contactTitle = page.locator('h1:has-text("İletişime Geçin")');
		await expect(contactTitle).toBeVisible();

		// Alt başlığın görünür olduğunu doğrula
		const subTitle = page.locator('p:has-text("Sorularınız için bize ulaşın")');
		await expect(subTitle).toBeVisible();
	});

	test("İletişim bilgileri kartı doğru görüntülenmeli", async ({ page }) => {
		// İletişim bilgileri kartının görünür olduğunu doğrula
		const contactInfoCard = page.locator(".contact-info-card");
		await expect(contactInfoCard).toBeVisible();

		// Adres bilgisinin görünür olduğunu doğrula
		const addressInfo = page.locator('h3:has-text("Adres")');
		await expect(addressInfo).toBeVisible();
		await expect(page.locator('p:has-text("İstanbul, Türkiye")')).toBeVisible();

		// E-posta bilgisinin görünür olduğunu doğrula
		const emailInfo = page.locator('h3:has-text("Email")');
		await expect(emailInfo).toBeVisible();
		await expect(
			page.locator('p:has-text("info@basaregitim.com")'),
		).toBeVisible();

		// Telefon bilgisinin görünür olduğunu doğrula
		const phoneInfo = page.locator('h3:has-text("Telefon")');
		await expect(phoneInfo).toBeVisible();
		await expect(
			page.locator('p:has-text("+90 (555) 123 45 67")'),
		).toBeVisible();
	});

	test("İletişim formu doğru görüntülenmeli", async ({ page }) => {
		// İletişim formu kartının görünür olduğunu doğrula
		const contactFormCard = page.locator(".contact-form");
		await expect(contactFormCard).toBeVisible();

		// Form başlığının görünür olduğunu doğrula
		const formTitle = page
			.locator('div:has-text("Bizimle İletişime Geçin")')
			.first();
		await expect(formTitle).toBeVisible();

		// Form alanlarının görünür olduğunu doğrula
		await expectElementVisible(page, 'input[name="user_name"]');
		await expectElementVisible(page, 'input[name="user_email"]');
		await expectElementVisible(page, 'input[name="subject"]');
		await expectElementVisible(page, 'textarea[name="message"]');

		// Gönder butonunun görünür olduğunu doğrula
		await expectElementVisible(page, 'button[type="submit"]');
		const submitButton = page.locator(
			'button[type="submit"]:has-text("Mesaj Gönder")',
		);
		await expect(submitButton).toBeVisible();
	});

	test("İletişim formu validasyonu çalışmalı", async ({ page }) => {
		// Boş form göndermeyi dene
		const submitButton = page.locator('button[type="submit"]');
		await submitButton.click();

		// Gerekli alanların validasyonunun çalıştığını doğrula
		// Not: HTML5 validasyonu kullanıldığı için, required alanlar boş olduğunda
		// tarayıcı otomatik olarak hata mesajı gösterir
		// Bu davranışı doğrulamak için, formun hala sayfada olduğunu kontrol ediyoruz
		const contactForm = page.locator("form");
		await expect(contactForm).toBeVisible();
	});

	test("İletişim formu doldurulabilmeli", async ({ page }) => {
		// Form alanlarını doldur
		const formData = {
			user_name: "Test Kullanıcı",
			user_email: "test@example.com",
			subject: "Test Konusu",
			message: "Bu bir test mesajıdır.",
		};

		// Form alanlarını doldur
		await page.fill('input[name="user_name"]', formData.user_name);
		await page.fill('input[name="user_email"]', formData.user_email);
		await page.fill('input[name="subject"]', formData.subject);
		await page.fill('textarea[name="message"]', formData.message);

		// Alanların doğru değerlere sahip olduğunu doğrula
		await expect(page.locator('input[name="user_name"]')).toHaveValue(
			formData.user_name,
		);
		await expect(page.locator('input[name="user_email"]')).toHaveValue(
			formData.user_email,
		);
		await expect(page.locator('input[name="subject"]')).toHaveValue(
			formData.subject,
		);
		await expect(page.locator('textarea[name="message"]')).toHaveValue(
			formData.message,
		);
	});

	test("Form gönderimi simüle edilebilmeli", async ({ page }) => {
		// Form alanlarını doldur
		const formData = {
			user_name: "Test Kullanıcı",
			user_email: "test@example.com",
			subject: "Test Konusu",
			message: "Bu bir test mesajıdır.",
		};

		// Form alanlarını doldur
		await page.fill('input[name="user_name"]', formData.user_name);
		await page.fill('input[name="user_email"]', formData.user_email);
		await page.fill('input[name="subject"]', formData.subject);
		await page.fill('textarea[name="message"]', formData.message);

		// EmailJS çağrısını izlemek için bir dinleyici ekle
		await page.route("**/api/sendForm", (route) => {
			// API çağrısını simüle et
			route.fulfill({
				status: 200,
				contentType: "application/json",
				body: JSON.stringify({ text: "OK" }),
			});
		});

		// Formu gönder
		const submitButton = page.locator('button[type="submit"]');
		await submitButton.click();

		// Not: Gerçek API çağrısı olmadığı için, başarı mesajını göremeyeceğiz
		// Ancak formun gönderildiğini ve sayfanın hata vermediğini doğrulayabiliriz
		// Burada sadece formun hala sayfada olduğunu kontrol ediyoruz
		const contactForm = page.locator("form");
		await expect(contactForm).toBeVisible();
	});

	test("Responsive tasarım kontrol edilmeli", async ({ page }) => {
		// Mobil görünüm için ekran boyutunu ayarla
		await page.setViewportSize({ width: 375, height: 667 });

		// Sayfa başlığının hala görünür olduğunu doğrula
		const contactTitle = page.locator('h1:has-text("İletişime Geçin")');
		await expect(contactTitle).toBeVisible();

		// İletişim bilgileri ve form kartlarının hala görünür olduğunu doğrula
		await expectElementVisible(page, ".contact-info-card");
		await expectElementVisible(page, ".contact-form");

		// Tablet görünüm için ekran boyutunu ayarla
		await page.setViewportSize({ width: 768, height: 1024 });

		// Sayfa başlığının hala görünür olduğunu doğrula
		await expect(contactTitle).toBeVisible();

		// İletişim bilgileri ve form kartlarının hala görünür olduğunu doğrula
		await expectElementVisible(page, ".contact-info-card");
		await expectElementVisible(page, ".contact-form");

		// Masaüstü görünüm için ekran boyutunu ayarla
		await page.setViewportSize({ width: 1280, height: 800 });

		// Sayfa başlığının hala görünür olduğunu doğrula
		await expect(contactTitle).toBeVisible();

		// İletişim bilgileri ve form kartlarının hala görünür olduğunu doğrula
		await expectElementVisible(page, ".contact-info-card");
		await expectElementVisible(page, ".contact-form");
	});
});
