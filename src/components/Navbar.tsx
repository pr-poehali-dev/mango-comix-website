
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-2 flex justify-between items-center">
        <div className="flex items-center">
          {/* Мобильное меню */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Icon name="Menu" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px] sm:w-[300px]">
              <div className="flex flex-col gap-6 mt-10">
                <Link to="/" className="flex items-center text-2xl font-bold">
                  <span className="text-primary">Mango</span>
                  <span className="text-secondary">Comix</span>
                </Link>
                <nav className="flex flex-col gap-2">
                  <Link to="/" className="py-2 hover:text-primary transition-colors">Главная</Link>
                  <Link to="/categories" className="py-2 hover:text-primary transition-colors">Категории</Link>
                  <Link to="/new" className="py-2 hover:text-primary transition-colors">Новинки</Link>
                  <Link to="/popular" className="py-2 hover:text-primary transition-colors">Популярное</Link>
                  <Link to="/about" className="py-2 hover:text-primary transition-colors">О сайте</Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          
          {/* Лого */}
          <Link to="/" className="flex items-center text-2xl font-bold ml-2 md:ml-0">
            <span className="text-primary">Mango</span>
            <span className="text-secondary">Comix</span>
          </Link>
          
          {/* Десктоп навигация */}
          <nav className="hidden md:flex ml-10 gap-6">
            <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
            <Link to="/categories" className="hover:text-primary transition-colors">Категории</Link>
            <Link to="/new" className="hover:text-primary transition-colors">Новинки</Link>
            <Link to="/popular" className="hover:text-primary transition-colors">Популярное</Link>
            <Link to="/about" className="hover:text-primary transition-colors">О сайте</Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-2">
          {isSearchOpen ? (
            <div className="flex items-center">
              <Input
                type="search"
                placeholder="Поиск комиксов..."
                className="w-[150px] md:w-[200px] lg:w-[300px] mr-2"
                autoFocus
              />
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                <Icon name="X" />
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Icon name="Search" />
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
