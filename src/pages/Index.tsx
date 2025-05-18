
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ComicCard from '@/components/ComicCard';
import { comicsData } from '@/data/comics';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  // Фильтрация комиксов в зависимости от активной вкладки
  const filteredComics = activeTab === 'all' 
    ? comicsData 
    : activeTab === 'new' 
      ? comicsData.filter(comic => comic.new) 
      : comicsData.filter(comic => comic.popular);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        
        <section className="container px-4 py-12">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl font-bold mb-6">Наша коллекция комиксов</h2>
            
            <Tabs defaultValue="all" className="w-full max-w-md" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="all">Все комиксы</TabsTrigger>
                <TabsTrigger value="new">Новинки</TabsTrigger>
                <TabsTrigger value="popular">Популярные</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredComics.map(comic => (
              <ComicCard key={comic.id} comic={comic} />
            ))}
          </div>
        </section>
        
        <section className="bg-secondary/10 py-16">
          <div className="container px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Присоединяйтесь к нам!</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              MangoComix — это место, где вы найдёте лучшие манги и комиксы разных жанров.
              Читайте бесплатно и без регистрации!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/80 transition-colors"
              >
                Телеграм-канал
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent text-white font-semibold hover:bg-accent/80 transition-colors"
              >
                Мы ВКонтакте
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
