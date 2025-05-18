
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-secondary/10 border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center text-3xl font-bold mb-4">
              <span className="text-primary">Mango</span>
              <span className="text-secondary">Comix</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Лучшие манга и комиксы без регистрации
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitch" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Жанры</h3>
            <ul className="space-y-2">
              <li><Link to="/categories/romance" className="text-sm text-muted-foreground hover:text-primary transition-colors">Романтика</Link></li>
              <li><Link to="/categories/action" className="text-sm text-muted-foreground hover:text-primary transition-colors">Экшен</Link></li>
              <li><Link to="/categories/comedy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Комедия</Link></li>
              <li><Link to="/categories/school" className="text-sm text-muted-foreground hover:text-primary transition-colors">Школа</Link></li>
              <li><Link to="/categories/adventure" className="text-sm text-muted-foreground hover:text-primary transition-colors">Приключения</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Главная</Link></li>
              <li><Link to="/categories" className="text-sm text-muted-foreground hover:text-primary transition-colors">Категории</Link></li>
              <li><Link to="/new" className="text-sm text-muted-foreground hover:text-primary transition-colors">Новинки</Link></li>
              <li><Link to="/popular" className="text-sm text-muted-foreground hover:text-primary transition-colors">Популярное</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">О сайте</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-muted-foreground">
                <Icon name="Mail" className="mr-2 h-4 w-4" />
                info@mangocomix.ru
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Icon name="MapPin" className="mr-2 h-4 w-4" />
                г. Москва, ул. Комиксов, д. 42
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Icon name="Phone" className="mr-2 h-4 w-4" />
                +7 (123) 456-78-90
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MangoComix. Все права защищены.
          </p>
          <div className="flex gap-4">
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Условия использования</Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Политика конфиденциальности</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
