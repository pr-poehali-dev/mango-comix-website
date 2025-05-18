
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getRandomComic } from '@/data/comics';

const Random = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Имитация загрузки для более плавного перехода
    const timer = setTimeout(() => {
      const randomComic = getRandomComic();
      navigate(`/comic/${randomComic.id}`);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center py-12">
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h1 className="text-2xl font-bold mb-2">Подбираем случайный комикс</h1>
          <p className="text-gray-500">Пожалуйста, подождите...</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Random;
