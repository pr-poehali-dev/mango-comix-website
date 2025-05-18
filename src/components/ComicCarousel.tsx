
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ComicCarouselProps {
  pages: string[];
}

const ComicCarousel: React.FC<ComicCarouselProps> = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? pages.length - 1 : prev - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev === pages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-lg border">
        <img 
          src={pages[currentPage]} 
          alt={`Страница ${currentPage + 1}`} 
          className="w-full object-contain"
        />
      </div>
      
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full flex justify-between px-4">
        <Button 
          variant="secondary" 
          size="icon" 
          className="rounded-full opacity-70 hover:opacity-100"
          onClick={goToPrevPage}
        >
          <Icon name="ChevronLeft" size={24} />
        </Button>
        
        <Button 
          variant="secondary" 
          size="icon" 
          className="rounded-full opacity-70 hover:opacity-100"
          onClick={goToNextPage}
        >
          <Icon name="ChevronRight" size={24} />
        </Button>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground">
          Страница {currentPage + 1} из {pages.length}
        </p>
      </div>
    </div>
  );
};

export default ComicCarousel;
