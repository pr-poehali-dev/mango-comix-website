
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-secondary/30 to-transparent py-12 md:py-20">
      {/* Декоративные элементы */}
      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-primary/20 blur-3xl"></div>
      <div className="absolute top-1/2 -right-10 w-32 h-32 rounded-full bg-secondary/30 blur-2xl"></div>
      <div className="absolute -bottom-10 left-1/4 w-24 h-24 rounded-full bg-accent/20 blur-xl"></div>
      
      <div className="container px-4 mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-float text-foreground">
          Добро пожаловать в <span className="text-primary">Mango<span className="text-secondary">Comix</span>!</span>
        </h1>
        
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-muted-foreground">
          Открой для себя мир ярких историй и захватывающих приключений без регистрации
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button asChild size="lg" className="nav-button bg-primary shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
            <Link to="/new">Смотреть новые</Link>
          </Button>
          
          <Button asChild size="lg" className="nav-button bg-secondary text-white shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
            <Link to="/random">Случайный комикс</Link>
          </Button>
          
          <Button asChild size="lg" className="nav-button bg-accent text-white shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
            <Link to="/popular">Топ за неделю</Link>
          </Button>
        </div>
        
        <div className="flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?q=80&w=300&auto=format&fit=crop" 
            alt="Декоративная иллюстрация" 
            className="h-24 object-contain opacity-80 animate-float"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
