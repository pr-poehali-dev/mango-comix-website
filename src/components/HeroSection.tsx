
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
      <div className="container px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Добро пожаловать в мир <span className="text-primary">манги</span> и <span className="text-primary">комиксов</span>
            </h1>
            <p className="text-lg mb-8">
              MangoComix — это бесплатная онлайн-коллекция популярных и новых комиксов. 
              Читайте в удобном формате без регистрации и подписок!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/new" className="px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/80 transition-colors">
                Смотреть новые
              </Link>
              <Link to="/random" className="px-6 py-3 bg-secondary text-white rounded-full font-semibold hover:bg-secondary/80 transition-colors">
                Случайный комикс
              </Link>
              <Link to="/popular" className="px-6 py-3 bg-accent text-white rounded-full font-semibold hover:bg-accent/80 transition-colors">
                Топ за неделю
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://m.media-amazon.com/images/I/81Ta0OSlPZL._AC_UF1000,1000_QL80_.jpg" 
                alt="Comics preview" 
                className="rounded-lg shadow-lg h-60 w-full object-cover"
              />
              <img 
                src="https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg" 
                alt="Comics preview" 
                className="rounded-lg shadow-lg h-40 w-full object-cover"
              />
            </div>
            <div className="space-y-4 pt-10">
              <img 
                src="https://m.media-amazon.com/images/M/MV5BMGY3Mzg3M2UtNzYxNi00ZDYzLTlhMTQtMjkzZTA2MWQ2NTMzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg" 
                alt="Comics preview" 
                className="rounded-lg shadow-lg h-40 w-full object-cover"
              />
              <img 
                src="https://m.media-amazon.com/images/M/MV5BNTZiODQ0N2QtZWY0Zi00Y2VkLWI0N2MtMTc0YzYwM2NlZWQ0XkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_.jpg" 
                alt="Comics preview" 
                className="rounded-lg shadow-lg h-60 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
