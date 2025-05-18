
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { comicsData } from '@/data/comics';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ComicReader = () => {
  const { id } = useParams<{ id: string }>();
  const [currentPage, setCurrentPage] = useState(0);
  
  const comic = comicsData.find(comic => comic.id === Number(id));
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  
  if (!comic) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Комикс не найден</h1>
            <p className="mb-6">К сожалению, запрашиваемый комикс не существует или был удален.</p>
            <Link to="/">
              <Button>Вернуться на главную</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const totalPages = comic.pages.length;
  
  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-6 px-4">
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">{comic.title}</h1>
            <div className="flex gap-2 mt-2">
              {comic.genres.map((genre, index) => (
                <Link to={`/categories?genre=${genre}`} key={index}>
                  <Badge variant="outline">{genre}</Badge>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" onClick={() => window.history.back()}>
              <Icon name="ArrowLeft" className="mr-2 h-4 w-4" />
              Назад
            </Button>
            <Link to="/">
              <Button variant="outline" size="sm">
                <Icon name="Home" className="mr-2 h-4 w-4" />
                На главную
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="bg-black/5 p-4 rounded-lg mb-6">
          <p>{comic.description}</p>
        </div>
        
        <div className="mb-6 flex justify-between items-center">
          <div className="text-sm">
            Страница {currentPage + 1} из {totalPages}
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={prevPage}
              disabled={currentPage === 0}
            >
              <Icon name="ChevronLeft" className="h-4 w-4" />
              Предыдущая
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
            >
              Следующая
              <Icon name="ChevronRight" className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center mb-8">
          <img 
            src={comic.pages[currentPage]} 
            alt={`${comic.title} - страница ${currentPage + 1}`} 
            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
          />
        </div>
        
        <div className="flex justify-center space-x-4 mb-8">
          <Button
            variant="default"
            onClick={prevPage}
            disabled={currentPage === 0}
          >
            <Icon name="ChevronLeft" className="mr-2 h-4 w-4" />
            Предыдущая страница
          </Button>
          <Button
            variant="default"
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
          >
            Следующая страница
            <Icon name="ChevronRight" className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex justify-center mb-4">
          <div className="flex gap-1">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  currentPage === index 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ComicReader;
