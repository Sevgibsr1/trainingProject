import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../src/components/ui/card"
import { Button } from '../../src/components/ui/button';


const Home: React.FC = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null); // Sidebar için referans tutuyorum burda 


  const handleNavigation = (path: string) => {
    navigate(path);
    setSidebarOpen(false);
  };

  // Sayfanın herhangi bir yerine tıklanınca sidebarı kapatılmasını sağlıcam burda 
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setSidebarOpen(false);
      }
    }

    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <div className='flex flex-col min-h-screen'>
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-5 left-4 z-50 p-2 rounded-md bg-[#062e51] text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>


      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 w-96 bg-white shadow-xl h-full overflow-y-auto`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#062e51]">Başar Eğitim</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menü */}
          <nav className="space-y-4">
            <a onClick={() => setSidebarOpen(false)} className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-100 hover:text-[#062e51] cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Profil
            </a>
            <a onClick={() => setSidebarOpen(false)} className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-100 hover:text-[#062e51] cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Kurslarım
            </a>
            <a onClick={() => setSidebarOpen(false)} className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-100 hover:text-[#062e51] cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              Gece Modu
            </a>
            <a onClick={() => setSidebarOpen(false)} className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-100 hover:text-[#062e51] cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Ayarlar
            </a>
          </nav>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <Button

              className="w-full bg-[#062e51] text-white py-2 rounded hover:bg-blue-700 transition-colors duration-200"
              onClick={() => handleNavigation('/login')}
            >
              Giriş Yap
            </Button>
          </div>


        </div>
      </div>



      {/* <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Kategoriler</h3>
            <div className="space-y-2">
              <a className="block text-gray-600 hover:text-[#062e51] transition duration-200 cursor-pointer">
                Frontend Geliştirme
              </a>
              <a className="block text-gray-600 hover:text-[#062e51] transition duration-200 cursor-pointer">
                Backend Geliştirme
              </a>
              <a className="block text-gray-600 hover:text-[#062e51] transition duration-200 cursor-pointer">
                Veri Bilimi
              </a>
              <a className="block text-gray-600 hover:text-[#062e51] transition duration-200 cursor-pointer">
                Mobil Uygulama
              </a>
            </div>
          </div> */}



      {/* Main Content */}
      <div className="flex-1">
        <header className='fixed top-0 left-0 right-0 bg-[#062e51] text-white shadow-lg z-30'>
          <div className='container mx-auto px-4'>
            <div className='flex justify-between items-center h-16'>
              <h1 className='text-2xl font-bold cursor-pointer'>
                Başar Eğitim
              </h1>
              <div className='flex items-center'>
              </div>

            // navbar pc mobil ekle ve çek ayrı ayrı unutma
              <nav className='hidden md:flex space-x-8'>
                <Button
                  onClick={() => handleNavigation('/home')}
                  className='text-white hover:border-b-2 border-blue-200 transition-all duration-200 font-medium cursor-pointer bg-transparent'
                >
                  Ana Sayfa
                </Button>
                <Button
                  onClick={() => handleNavigation('/hakkimizda')}
                  className='text-white hover:border-b-2 border-blue-200 transition-all duration-200 font-medium cursor-pointer bg-transparent'
                >
                  Hakkımızda
                </Button>
                <Button
                  onClick={() => handleNavigation('/kurslar')}
                  className='text-white hover:border-b-2 border-blue-200 transition-all duration-200 font-medium cursor-pointer bg-transparent'
                >
                  Kurslar
                </Button>
                <Button
                  onClick={() => handleNavigation('/iletisim')}
                  className='text-white hover:border-b-2 border-blue-200 transition-all duration-200 font-medium cursor-pointer bg-transparent'
                >
                  İletişim
                </Button>
                <Button
                  onClick={() => handleNavigation('/login')}
                  className='text-white border-2 border-white hover:bg-white hover:text-[#062e51] transition-all duration-200 font-medium cursor-pointer bg-transparent'
                >
                  Giriş Yap
                </Button>
              </nav>
            </div>
          </div>
        </header>


        <main className="flex-grow">
          <section className="relative bg-[#062e51] text-white pt-24 pb-32">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Geleceğin Teknolojilerini<br />
                    <span className="text-blue-400">Bugün</span> Öğrenin
                  </h1>
                  <p className="text-xl text-gray-300">
                    Başar Eğitim ile profesyonel yazılım dünyasına adım atın.
                    Endüstri standardında kurslar ve gerçek projelerle kariyerinizi şekillendirin.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      onClick={() => handleNavigation('/kurslar')}
                      className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors duration-200"
                    >
                      Kurslara Göz At
                    </Button>
                    <Button
                      onClick={() => handleNavigation('/iletisim')}
                      className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-[#062e51] rounded-lg font-semibold transition-all duration-200"
                    >
                      Bize Ulaşın
                    </Button>
                  </div>
                </div>
              </div>
            </div>


            {/* Stats Section */}
            <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">


                  <Card className="shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl font-bold text-[#062e51] mb-2">5000+</div>
                      <div className="text-gray-600">Mezun Öğrenci</div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl font-bold text-[#062e51] mb-2">50+</div>
                      <div className="text-gray-600">Aktif Kurs</div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl font-bold text-[#062e51] mb-2">30+</div>
                      <div className="text-gray-600">Uzman Eğitmen</div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl font-bold text-[#062e51] mb-2">%95</div>
                      <div className="text-gray-600">Memnuniyet Oranı</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>




          </section>

          {/* Popular Courses Section */}
          <section className="pt-48 pb-24 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popüler Kurslarımız</h2>
                <p className="text-gray-600 text-lg">En çok tercih edilen kurslarımızla kariyerinizi başlatın</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">



                <Card className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="h-64 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center p-8 rounded-t-2xl">
                    <CardTitle className="text-3xl font-bold text-white">full Stack</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Python ile Veri Bilimi</h3>
                    <CardDescription className="text-gray-600 mb-4">
                      Veri analizi, makine öğrenmesi ve yapay zeka temelleri.
                    </CardDescription>
                    <div className="flex items-center mb-4">
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Süre:</span> 4 Ay
                      </div>
                      <div className="mx-2 text-gray-300">|</div>
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Seviye:</span> Orta
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6">
                    <Button className="w-full bg-blue-600 text-white py-7 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      Detayları Gör
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="h-64 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center p-8 rounded-t-2xl">
                    <CardTitle className="text-3xl font-bold text-white">Python</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Python ile Veri Bilimi</h3>
                    <CardDescription className="text-gray-600 mb-4">
                      Veri analizi, makine öğrenmesi ve yapay zeka temelleri.
                    </CardDescription>
                    <div className="flex items-center mb-4">
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Süre:</span> 4 Ay
                      </div>
                      <div className="mx-2 text-gray-300">|</div>
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Seviye:</span> Orta
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6">
                    <Button className="w-full bg-purple-600 text-white py-7 rounded-lg hover:bg-purple-700 transition-colors duration-200">
                      Detayları Gör
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="h-64 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center p-8 rounded-t-2xl">
                    <CardTitle className="text-3xl font-bold text-white">Python</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Python ile Veri Bilimi</h3>
                    <CardDescription className="text-gray-600 mb-4">
                      Veri analizi, makine öğrenmesi ve yapay zeka temelleri.
                    </CardDescription>
                    <div className="flex items-center mb-4">
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Süre:</span> 4 Ay
                      </div>
                      <div className="mx-2 text-gray-300">|</div>
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Seviye:</span> Orta
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6">
                    <Button className="w-full bg-green-600 text-white py-7 rounded-lg hover:bg-green-700 transition-colors duration-300">
                      Detayları Gör
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            <div className='text-center mt-12'>
              <Button
                onClick={() => handleNavigation('/kurslar')}
                className='px-16 py-8 bg-[#062e51] text-white rounded-lg hover:bg-blue-colors duration-200'
              >
                Tüm Kursları Gör
              </Button>
            </div>
          </section>



          <section className='py-20 bg-white'>
            <div className='container mx-auto px-4'>
              <div className='text-center mb-16'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Neden Biz?</h2>
                <p className='text-gray-600 text-lg'>Başar Eğitim farkıyla kariyerinizi şekillendirin</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">Güncel Müfredat</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Endüstri standardında ve sürekli güncellenen içeriklerle eğitim alın. En son teknolojileri ve best practice'leri öğrenin.</p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">Uzman Eğitmenler</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Sektör deneyimli, alanında uzman eğitmenlerle birebir öğrenme fırsatı yakalayın. Gerçek dünya tecrübelerinden faydalanın.</p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">Proje Odaklı Eğitim</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Gerçek dünya projelerinde pratik yapma imkanı ile öğrendiklerinizi pekiştirin. Portfolyonuzu güçlendirin.</p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">Esnek Çalışma Saatleri</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Size uygun zamanlarda eğitim alın. Online ve yüz yüze eğitim seçenekleriyle programınıza uygun şekilde ilerleyin.</p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">Sertifika</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Eğitimlerinizi başarıyla tamamladığınızda uluslararası geçerliliğe sahip sertifikalarınızı alın.</p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">Kariyer Desteği</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Mezuniyet sonrası iş bulma sürecinizde yanınızdayız. Partnerlerimiz ile kariyer fırsatlarından yararlanın.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>



          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Öğrenci Başarıları</h2>
                <p className="text-gray-600 text-lg">Mezunlarımızın başarı hikayeleri</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center">
                      <img
                        src="/testimonial-1.jpg"
                        alt="Student"
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <CardTitle className="text-lg">Ahmet Yılmaz</CardTitle>
                        <CardDescription>Full-Stack Developer @ Tech Co.</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 italic">
                      "Başar Eğitim'in Full-Stack Development kursu sayesinde hayalini kurduğum yazılım kariyerine başladım.
                      Pratik odaklı eğitim yaklaşımları gerçekten çok faydalı."
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center">
                      <img
                        src="C:\Users\Sevgi\Desktop\ofis proje\login_resim.jpg"
                        alt="Student"
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <CardTitle className="text-lg">Ayşe Kaya</CardTitle>
                        <CardDescription>Data Scientist @ Analytics Inc.</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 italic">
                      "Veri Bilimi kursunda öğrendiklerim sayesinde kariyerimde büyük bir sıçrama yapabildim.
                      Eğitmenler gerçekten alanında uzman kişiler."
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center">
                      <img
                        src="login_resim.jpg"
                        alt="Student"
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <CardTitle className="text-lg">Mehmet Demir</CardTitle>
                        <CardDescription>Mobile Developer @ App Studio</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 italic">
                      "Mobil uygulama geliştirme kursundan sonra kendi uygulamalarımı geliştirmeye başladım.
                      Şimdi büyük bir şirkette çalışıyorum."
                    </p>
                  </CardContent>
                </Card>

              </div>
            </div>
          </section>



          <section className="py-20 bg-[#062e51] text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Kariyerinizi Dönüştürmeye Hazır mısınız?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Yazılım dünyasında yerinizi alın, geleceğin teknolojilerini bugünden öğrenin.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button
                  onClick={() => handleNavigation('/kurslar')}
                  className="px-8 py-8 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors duration-200"
                >
                  Hemen Başlayın
                </Button>
                <Button
                  onClick={() => handleNavigation('/iletisim')}
                  className="px-8 py-8 bg-transparent border-2 border-white hover:bg-white hover:text-[#062e51] rounded-lg font-semibold transition-all duration-200"
                >
                  Bizimle İletişime Geçin
                </Button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}


export default Home;
