
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ComicCard from '@/components/ComicCard';
import { comicsData } from '@/data/comics';

const New = () => {
  // Фильтруем комиксы, помеченные как новые
  const newComics = comicsData.filter(comic => comic.new);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Новинки комиксов</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Самые свежие и интересные комиксы, которые только что появились на нашем сайте.
            Не пропустите новые истории и приключения!
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newComics.map(comic => (
            <ComicCard key={comic.id} comic={comic} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default New;
