
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ComicCard from '@/components/ComicCard';
import { comicsData, categories } from '@/data/comics';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const filteredComics = selectedCategory 
    ? comicsData.filter(comic => comic.genres.includes(selectedCategory))
    : comicsData;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Категории комиксов</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Выберите жанр:</h2>
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className="mb-2"
            >
              Все жанры
            </Button>
            
            {categories.map(category => (
              <Button 
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            {selectedCategory 
              ? `Комиксы в категории "${selectedCategory}"`
              : "Все комиксы"}
            <Badge className="ml-2">{filteredComics.length}</Badge>
          </h2>
        </div>
        
        {filteredComics.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredComics.map(comic => (
              <ComicCard key={comic.id} comic={comic} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">Ой! Комиксы не найдены</h3>
            <p className="text-gray-500 mb-6">К сожалению, у нас пока нет комиксов в этой категории</p>
            <Button onClick={() => setSelectedCategory(null)}>
              Показать все комиксы
            </Button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
