import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../src/components/ui/card";
import { Button } from '../../src/components/ui/button';
import { Input } from "../../src/components/ui/input";
import { Textarea } from "../../src/components/ui/textarea";
import { toast, Toaster } from 'sonner';
import emailjs from '@emailjs/browser';

const Iletisim: React.FC = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current!,
        'YOUR_PUBLIC_KEY'
      );

      if (result.text === 'OK') {
        toast.success('Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.');
        formRef.current?.reset();
      }
    } catch (error) {
      toast.error('Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-right" />
      //navbar
      <header className='fixed top-0 left-0 right-0 bg-[#062e51] text-white shadow-lg z-50'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-between items-center h-16'>
            <h1 className='text-2xl font-bold cursor-pointer'>
              BAŞAR YAZILIM KURDU
            </h1>
            <div className='flex items-center'>
            </div>

          // navbar pc mobil ekle
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
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {/* Contact Header */}
        <div className="text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4 text-black">İletişime Geçin</h1>
            <p className="text-xl text-gray-700">Sorularınız için bize ulaşın, en kısa sürede dönüş yapacağız.</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle></CardTitle>
                  <CardDescription>Bize aşağıdaki kanallardan ulaşabilirsiniz</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Adres</h3>
                      <p className="text-gray-600">İstanbul, Türkiye</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">info@basaregitim.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Telefon</h3>
                      <p className="text-gray-600">+90 (555) 123 45 67</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-center text-gray-900">
                    Bizimle İletişime Geçin
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">
                          Adınız Soyadınız
                        </label>
                        <Input
                          type="text"
                          name="user_name"
                          id="user_name"
                          required
                          className="mt-1"
                          placeholder="Adınız Soyadınız"
                        />
                      </div>
                      <div>
                        <label htmlFor="user_email" className="block text-sm font-medium text-gray-700">
                          E-posta Adresiniz
                        </label>
                        <Input
                          type="email"
                          name="user_email"
                          id="user_email"
                          required
                          className="mt-1"
                          placeholder="ornek@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                        Konu
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        id="subject"
                        required
                        className="mt-1"
                        placeholder="Mesajınızın konusu"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Mesajınız
                      </label>
                      <Textarea
                        name="message"
                        id="message"
                        required
                        className="mt-1"
                        placeholder="Mesajınızı buraya yazın..."
                        rows={6}
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full md:w-auto"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Gönderiliyor...
                          </span>
                        ) : (
                          "Mesaj Gönder"
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Iletisim;
