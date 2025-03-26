import React, { useState } from 'react';
import { Button } from '../../src/components/ui/button'
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../src/components/ui/card'



interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  rating: number;
  reviews: number;
  image: string;
  category: string;
}


const courses: Course[] = [
  {
    id: 1,
    title: "Java ile Programlama",
    description: "Sıfırdan ileri seviye Java programlama ve nesne yönelimli programlama.",
    duration: "40+ Saat",
    level: "Başlangıç Seviye",
    rating: 4.6,
    reviews: 19990,
    image: "/java-logo.png",
    category: "Programlamaefsef"
  },
  {
    id: 2,
    title: "Python ve Veri Bilimi",
    description: "Python programlama, veri analizi ve makine öğrenmesi temelleri.",
    duration: "50+ Saat",
    level: "Orta Seviye",
    rating: 4.8,
    reviews: 15678,
    image: "/python-logo.png",
    category: "Veri Bilimi"
  },
  {
    id: 3,
    title: "Web Geliştirme",
    description: "Modern web teknolojileri ile full-stack web geliştirme.",
    duration: "60+ Saat",
    level: "Başlangıç Seviye",
    rating: 4.7,
    reviews: 12345,
    image: "/web-logo.png",
    category: "Web Geliştirme"
  },
  {
    id: 4,
    title: "React & TypeScript",
    description: "Modern frontend geliştirme ve TypeScript ile güvenli kod yazımı.",
    duration: "45+ Saat",
    level: "Orta Seviye",
    rating: 4.9,
    reviews: 8765,
    image: "/react-logo.png",
    category: "Web Geliştirme"
  },
  {
    id: 5,
    title: "React & TypeScript",
    description: "Modern frontend geliştirme ve TypeScript ile güvenli kod yazımı.",
    duration: "45+ Saat",
    level: "İleri Seviye",
    rating: 4.9,
    reviews: 8765,
    image: "/react-logo.png",
    category: "Web Geliştirme"
  },
  {
    id: 6,
    title: "React & TypeScript",
    description: "Modern frontend geliştirme ve TypeScript ile güvenli kod yazımı.",
    duration: "45+ Saat",
    level: "İleri Seviye",
    rating: 4.9,
    reviews: 8765,
    image: "/react-logo.png",
    category: "Web Geliştirme"
  }
];

const getLevelColor = (level: string) => {
 // const normalizedLevel = level.toLowerCase();
 if (level.includes('Başlangıç')) return 'bg-green-500';
  if (level.includes('Orta')) return 'bg-blue-500';
  if (level.includes('İleri Seviye')) return 'bg-red-600';
  
  return 'bg-gray-500';
};

const getLevelTextColor = (level: string) => {
//  const normalizedLevel = level.toLowerCase();
  if (level.includes('Başlangıç')) return 'bg-green-100 text-green-800';
  if (level.includes('Orta')) return 'bg-blue-100 text-blue-800';
  if (level.includes('İleri')) return 'bg-red-100 text-red-800';
  return 'bg-gray-100 text-gray-800';
};

const Kurslar: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleNavigation = (path: string) => {
    navigate(path)
  };

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const categories = ['all', ...new Set(courses.map(courses => courses.category))];


  return (
    <div className='flex flex-col min-h-screen'>
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
      <main className="container mx-auto flex-grow p-6 mt-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Kurslarımız</h1>
            <p className="text-gray-600">Kariyerinizi geliştirecek en iyi kursları keşfedin</p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-1/3">
              <input
                type="text"
                placeholder="Kurs ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg ${selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-800 hover:bg-blue-300'
                    } transition-colors duration-200`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              ))}
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map(course => (
              <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`h-48 ${getLevelColor(course.level)} flex items-center justify-center p-8`}>
                  <span className="text-3xl font-bold text-white">{course.title.split(' ')[0]}</span>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">{course.title}</CardTitle>
                  <CardDescription className="text-gray-600">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-4">
                    <div className={`${getLevelTextColor(course.level)} text-sm font-medium px-2.5 py-0.5 rounded-full`}>
                      {course.level}
                    
                    </div>
                    <div className="mx-2 text-gray-300">|</div>
                    <div className="text-gray-600 text-sm">
                      {course.duration}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-yellow-400">*</span>
                      <span className="ml-1 text-gray-600">{course.rating}</span>
                      <span className="ml-1 text-gray-400">({course.reviews.toLocaleString()})</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${getLevelColor(course.level)} text-white py-2 px-4 rounded-lg hover:opacity-90 transition-colors duration-200`}
                  >
                    Kursa Katıl
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};


export default Kurslar;