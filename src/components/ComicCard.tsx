
import { Comic, genreColors } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

interface ComicCardProps {
  comic: Comic;
}

const ComicCard = ({ comic }: ComicCardProps) => {
  return (
    <Card className="comic-card group">
      <div className="relative overflow-hidden">
        <img 
          src={comic.thumbnailImage} 
          alt={comic.title}
          className="comic-card-img group-hover:scale-105 transition-transform duration-300"
        />
        
        {comic.new && (
          <div className="absolute top-2 right-2 bg-highlight text-black font-semibold text-xs px-2 py-1 rounded-full animate-pulse-light">
            Новинка
          </div>
        )}
        
        {comic.popular && !comic.new && (
          <div className="absolute top-2 right-2 bg-primary text-white font-semibold text-xs px-2 py-1 rounded-full">
            Популярное
          </div>
        )}
      </div>
      
      <CardHeader className="p-4 pb-0">
        <CardTitle className="text-lg line-clamp-1">{comic.title}</CardTitle>
      </CardHeader>
      
      <CardContent className="p-4 pt-2">
        <div className="mb-2">
          {comic.genres.map((genre) => (
            <span 
              key={genre} 
              className={`comic-card-tag ${genreColors[genre as keyof typeof genreColors]}`}
            >
              {genre}
            </span>
          ))}
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{comic.description}</p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex gap-2 justify-between">
        <Button asChild className="flex-1 bg-primary hover:bg-primary/80">
          <Link to={`/comic/${comic.id}`}>Читать</Link>
        </Button>
        <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary/10">
          <Icon name="Share" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ComicCard;
