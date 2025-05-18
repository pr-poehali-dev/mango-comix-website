
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-bold">
              <span className="text-primary">Mango</span>
              <span className="text-secondary">Comix</span>
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Коллекция качественных манг и комиксов в свободном доступе. Читайте онлайн бесплатно и без ограничений!
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Категории</h3>
            <ul className="space-y-2">
              <li><Link to="/categories?genre=приключения" className="text-sm hover:text-primary transition-colors">Приключения</Link></li>
              <li><Link to="/categories?genre=фэнтези" className="text-sm hover:text-primary transition-colors">Фэнтези</Link></li>
              <li><Link to="/categories?genre=боевик" className="text-sm hover:text-primary transition-colors">Боевик</Link></li>
              <li><Link to="/categories?genre=романтика" className="text-sm hover:text-primary transition-colors">Романтика</Link></li>
              <li><Link to="/categories?genre=комедия" className="text-sm hover:text-primary transition-colors">Комедия</Link></li>
              <li><Link to="/categories" className="text-sm font-medium hover:text-primary transition-colors">Все категории →</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-primary transition-colors">Главная</Link></li>
              <li><Link to="/new" className="text-sm hover:text-primary transition-colors">Новинки</Link></li>
              <li><Link to="/popular" className="text-sm hover:text-primary transition-colors">Популярное</Link></li>
              <li><Link to="/random" className="text-sm hover:text-primary transition-colors">Случайный комикс</Link></li>
              <li><Link to="/about" className="text-sm hover:text-primary transition-colors">О сайте</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Связаться с нами</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Facebook" size={18} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Twitter" size={18} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Instagram" size={18} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Youtube" size={18} />
              </a>
            </div>
            <p className="text-sm text-gray-500">
              Есть вопросы или предложения? <br/>
              <a href="mailto:info@mangocomix.com" className="text-primary hover:underline">info@mangocomix.com</a>
            </p>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © 2024 MangoComix. Все права защищены.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Условия использования</a>
            <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
