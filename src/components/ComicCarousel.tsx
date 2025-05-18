
import { useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ComicCarouselProps {
  pages: string[];
  title: string;
}

const ComicCarousel = ({ pages, title }: ComicCarouselProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  
  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };
  
  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < pages.length - 1 ? prev + 1 : prev));
  };
  
  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };
  
  return (
    <div className={`comic-reader ${fullscreen ? 'fixed inset-0 z-50 bg-background p-4' : 'relative'}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={toggleFullscreen}>
            <Icon name={fullscreen ? "Minimize" : "Maximize"} className="mr-2 h-4 w-4" />
            {fullscreen ? "Выйти из полного экрана" : "Полный экран"}
          </Button>
        </div>
      </div>
      
      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {pages.map((page, index) => (
              <CarouselItem key={index}>
                <div className="flex justify-center p-1">
                  <img 
                    src={page} 
                    alt={`Страница ${index + 1}`} 
                    className="max-h-[70vh] object-contain rounded-md" 
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <Button 
          variant="outline" 
          onClick={handlePrevPage}
          disabled={currentPage === 0}
        >
          <Icon name="ChevronLeft" className="mr-2 h-4 w-4" />
          Предыдущая
        </Button>
        
        <span className="text-sm">
          Страница {currentPage + 1} из {pages.length}
        </span>
        
        <Button 
          variant="outline" 
          onClick={handleNextPage}
          disabled={currentPage === pages.length - 1}
        >
          Следующая
          <Icon name="ChevronRight" className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ComicCarousel;
