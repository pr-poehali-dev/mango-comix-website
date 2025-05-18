
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ComicCarousel from '@/components/ComicCarousel';
import { comicsData } from '@/data/comics';
import { Comic } from '@/types';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { genreColors } from '@/types';

const ComicReader = () => {
  const { id } = useParams<{ id: string }>();
  const [comic, setComic] = useState<Comic | null>(null);
  
  useEffect(() => {
    if (id) {
      const foundComic = comicsData.find(c => c.id === parseInt(id));
      if (foundComic) {
        setComic(foundComic);
      }
    }
  }, [id]);
  
  if (!comic) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Комикс не найден</h2>
          <p className="mb-6">К сожалению, запрашиваемый комикс не существует или был удален.</p>
          <Button asChild>
            <Link to="/">Вернуться на главную</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <div className="mb-6">
          <Link to="/" className="flex items-center text-primary hover:underline">
            <Icon name="ChevronLeft" className="mr-1 h-4 w-4" />
            Вернуться на главную
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <img 
                src={comic.image} 
                alt={comic.title} 
                className="w-full h-auto rounded-lg shadow-lg mb-4 max-h-96 object-cover"
              />
              
              <h1 className="text-2xl font-bold mb-3">{comic.title}</h1>
              
              <div className="mb-4">
                {comic.genres.map((genre) => (
                  <span 
                    key={genre} 
                    className={`comic-card-tag ${genreColors[genre as keyof typeof genreColors]}`}
                  >
                    {genre}
                  </span>
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6">{comic.description}</p>
              
              <div className="flex flex-wrap gap-2">
                <Button className="w-full bg-primary hover:bg-primary/80">
                  <Icon name="Heart" className="mr-2 h-4 w-4" />
                  Добавить в избранное
                </Button>
                
                <Button variant="outline" className="w-full">
                  <Icon name="Share2" className="mr-2 h-4 w-4" />
                  Поделиться
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <ComicCarousel pages={comic.pages} title={comic.title} />
          </div>
        </div>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Похожие комиксы</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {comicsData
              .filter(c => c.id !== comic.id && c.genres.some(g => comic.genres.includes(g)))
              .slice(0, 3)
              .map(relatedComic => (
                <div key={relatedComic.id} className="comic-card overflow-hidden rounded-lg border bg-card shadow-sm">
                  <Link to={`/comic/${relatedComic.id}`} className="block">
                    <img 
                      src={relatedComic.thumbnailImage} 
                      alt={relatedComic.title}
                      className="h-48 w-full object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold mb-2">{relatedComic.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{relatedComic.description}</p>
                    </div>
                  </Link>
                </div>
              ))
            }
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ComicReader;
