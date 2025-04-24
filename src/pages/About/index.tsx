import type React from "react";
import Navbar from "../../components/layouts/Navbar";
import Sidebar from "../../components/layouts/Sidebar";

// Props interface'i
interface AboutProps {
	navbarProps?: {
		onOpenSidebar: () => void;
	};
	sidebarProps?: {
		isOpen: boolean;
		onClose: () => void;
	};
}

const About: React.FC<AboutProps> = ({ navbarProps, sidebarProps }) => {
	return (
		<div className="flex flex-col min-h-screen bg-gray-50">
			{/* Navbar'ı props ile çağırma */}
			{navbarProps && <Navbar {...navbarProps} />}

			{/* Sidebar'ı props ile çağırma */}
			{sidebarProps && <Sidebar {...sidebarProps} />}

			{/* Main Content */}
			<main className="container mx-auto flex-grow p-6">
				<div className="max-w-7xl mx-auto">
					{/* Hero Section */}
					<div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
						<img
							src="/about-hero.jpg"
							alt="Başar Eğitim"
							className="w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
							<div className="text-white p-8 md:p-16 max-w-2xl">
								<h1 className="text-4xl md:text-5xl font-bold mb-4">
									Başar Eğitim ile Geleceğe Hazırlanın
								</h1>
								<p className="text-lg md:text-xl text-blue-100">
									2024'ten beri binlerce öğrenciye kaliteli eğitim hizmeti
									sunuyoruz.
								</p>
							</div>
						</div>
					</div>

					{/* Mission & Vision */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
						<div className="bg-white p-8 rounded-xl shadow-lg">
							<div className="flex items-center mb-6">
								<div className="bg-blue-100 p-3 rounded-full mr-4">
									{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
									<svg
										className="w-6 h-6 text-blue-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M13 10V3L4 14h7v7l9-11h-7z"
										/>
									</svg>
								</div>
								<h2 className="text-2xl font-bold text-gray-800">Misyonumuz</h2>
							</div>
							<p className="text-gray-600 leading-relaxed">
								Öğrencilerimize en güncel teknolojileri öğreterek, onları
								dijital çağın gereksinimlerine hazırlamak ve global iş
								dünyasında başarılı olmalarını sağlamak için gerekli becerileri
								kazandırmak.
							</p>
						</div>

						<div className="bg-white p-8 rounded-xl shadow-lg">
							<div className="flex items-center mb-6">
								<div className="bg-blue-100 p-3 rounded-full mr-4">
									{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
									<svg
										className="w-6 h-6 text-blue-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
										/>
									</svg>
								</div>
								<h2 className="text-2xl font-bold text-gray-800">Vizyonumuz</h2>
							</div>
							<p className="text-gray-600 leading-relaxed">
								Türkiye'nin lider teknoloji eğitim kurumu olmak ve
								öğrencilerimizin potansiyellerini en üst düzeyde
								gerçekleştirmelerine yardımcı olmak.
							</p>
						</div>
					</div>

					{/* Values */}
					<div className="mb-12">
						<h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
							Değerlerimiz
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="bg-white p-6 rounded-xl shadow-lg text-center">
								<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
									{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
									<svg
										className="w-8 h-8 text-blue-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
										/>
									</svg>
								</div>
								<h3 className="text-xl font-bold text-gray-800 mb-2">Kalite</h3>
								<p className="text-gray-600">
									En yüksek standartlarda eğitim ve öğretim hizmeti sunmak.
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-lg text-center">
								<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
									{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
									<svg
										className="w-8 h-8 text-blue-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
										/>
									</svg>
								</div>
								<h3 className="text-xl font-bold text-gray-800 mb-2">
									Yenilikçilik
								</h3>
								<p className="text-gray-600">
									Sürekli gelişim ve teknolojik yenilikleri takip etmek.
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-lg text-center">
								<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
									{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
									<svg
										className="w-8 h-8 text-blue-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
										/>
									</svg>
								</div>
								<h3 className="text-xl font-bold text-gray-800 mb-2">
									İş Birliği
								</h3>
								<p className="text-gray-600">
									Öğrencilerimiz ve sektör liderleriyle güçlü iş birlikleri
									kurmak.
								</p>
							</div>
						</div>
					</div>

					{/* Team Section */}
					<div>
						<h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
							Ekibimiz
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="bg-white rounded-xl shadow-lg overflow-hidden">
								<img
									src="/team-member-1.jpg"
									alt="Sevgi Başar"
									className="w-full h-64 object-cover"
								/>
								<div className="p-6">
									<h3 className="text-xl font-bold text-gray-800 mb-1">
										Sevgi Başar
									</h3>
									<p className="text-blue-600 mb-4">Kurucu & CEO</p>
									<p className="text-gray-600">
										Bilgisayar Mühendisi ve eğitim teknolojileri uzmanı. 10+ yıl
										sektör deneyimi.
									</p>
								</div>
							</div>

							<div className="bg-white rounded-xl shadow-lg overflow-hidden">
								<img
									src="/team-member-2.jpg"
									alt="Ahmet Yılmaz"
									className="w-full h-64 object-cover"
								/>
								<div className="p-6">
									<h3 className="text-xl font-bold text-gray-800 mb-1">
										Ahmet Yılmaz
									</h3>
									<p className="text-blue-600 mb-4">Eğitim Direktörü</p>
									<p className="text-gray-600">
										Yazılım geliştirme ve eğitim metodolojileri konusunda uzman.
										8+ yıl deneyim.
									</p>
								</div>
							</div>

							<div className="bg-white rounded-xl shadow-lg overflow-hidden">
								<img
									src="/team-member-3.jpg"
									alt="Ayşe Kaya"
									className="w-full h-64 object-cover"
								/>
								<div className="p-6">
									<h3 className="text-xl font-bold text-gray-800 mb-1">
										Ayşe Kaya
									</h3>
									<p className="text-blue-600 mb-4">Öğrenci Danışmanı</p>
									<p className="text-gray-600">
										Kariyer koçluğu ve öğrenci mentorluğu konusunda uzman. 5+
										yıl deneyim.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default About;
