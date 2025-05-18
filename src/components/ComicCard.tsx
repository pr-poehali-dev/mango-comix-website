
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

interface Comic {
  id: number;
  title: string;
  image: string;
  genres: string[];
  description: string;
  popular?: boolean;
  new?: boolean;
}

interface ComicCardProps {
  comic: Comic;
}

const ComicCard = ({ comic }: ComicCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <Link to={`/comic/${comic.id}`}>
          <img 
            src={comic.image} 
            alt={comic.title} 
            className="w-full h-60 object-cover transition-transform hover:scale-105"
          />
        </Link>
        
        {comic.new && (
          <Badge className="absolute top-2 right-2 bg-green-500">
            Новинка
          </Badge>
        )}
        
        {comic.popular && (
          <Badge className="absolute top-2 right-16 bg-orange-500">
            Популярное
          </Badge>
        )}
      </div>
      
      <CardContent className="pt-4">
        <div className="flex gap-1 flex-wrap mb-2">
          {comic.genres.map((genre, index) => (
            <Link to={`/categories?genre=${genre}`} key={index}>
              <Badge variant="outline" className="text-xs">
                {genre}
              </Badge>
            </Link>
          ))}
        </div>
        
        <Link to={`/comic/${comic.id}`}>
          <h3 className="font-bold text-lg mb-2 hover:text-primary transition-colors">
            {comic.title}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-600 line-clamp-3">{comic.description}</p>
      </CardContent>
      
      <CardFooter className="flex justify-between pt-0">
        <Link to={`/comic/${comic.id}`}>
          <Button>Читать</Button>
        </Link>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Icon name="Share2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="cursor-pointer">
              <Icon name="Facebook" className="mr-2 h-4 w-4" />
              <span>Facebook</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Icon name="Twitter" className="mr-2 h-4 w-4" />
              <span>Twitter</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Icon name="Link" className="mr-2 h-4 w-4" />
              <span>Копировать ссылку</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardFooter>
    </Card>
  );
};

export default ComicCard;
