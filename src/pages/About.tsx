
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">О проекте MangoComix</h1>
          
          <div className="bg-card rounded-xl p-6 shadow-lg mb-10">
            <h2 className="text-2xl font-bold mb-4">Наша миссия</h2>
            <p className="text-lg mb-6">
              MangoComix — это бесплатная онлайн-галерея комиксов и манги, созданная с любовью для всех поклонников 
              ярких историй и захватывающих приключений. Наша цель — сделать чтение комиксов доступным и приятным 
              для каждого, без необходимости регистрации и подписок.
            </p>
            <p className="text-lg mb-6">
              Мы собираем самые интересные, красочные и увлекательные комиксы всех жанров: от забавных комедий 
              до захватывающих приключений, от школьной романтики до эпических фэнтези-саг. У нас каждый найдет 
              историю по своему вкусу!
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 mb-12 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-64 h-64 bg-orange-400 rounded-full flex items-center justify-center">
                <div className="relative">
                  <div className="w-56 h-56 bg-orange-300 rounded-full flex items-center justify-center">
                    <div className="absolute">
                      <div className="w-8 h-12 bg-black rounded-full absolute -top-6 left-5"></div>
                      <div className="w-8 h-12 bg-black rounded-full absolute -top-6 right-5"></div>
                      <div className="w-20 h-12 bg-red-500 rounded-full mt-6 flex items-center justify-center">
                        <div className="w-16 h-8 bg-pink-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Манго — наш талисман</h2>
              <p className="text-lg mb-4">
                Познакомьтесь с Манго — нашим веселым талисманом! Этот жизнерадостный фрукт обожает комиксы 
                и поможет вам найти самые увлекательные истории на нашем сайте.
              </p>
              <p className="text-lg mb-4">
                Манго очень общительный и дружелюбный, он всегда готов посоветовать новую мангу или комикс, 
                исходя из ваших предпочтений. У него есть невероятная суперспособность — он может запомнить 
                все существующие комиксы и их содержание!
              </p>
              <p className="text-lg">
                Если вы видите Манго на странице — значит, вы нашли что-то действительно интересное!
              </p>
            </div>
          </div>
          
          <div className="bg-secondary/10 rounded-xl p-6 shadow-lg mb-10">
            <h2 className="text-2xl font-bold mb-4">Наши принципы</h2>
            <ul className="list-disc pl-6 space-y-3 text-lg">
              <li>Никакой регистрации — просто приходите и читайте</li>
              <li>Только качественный и интересный контент</li>
              <li>Удобный интерфейс для комфортного чтения</li>
              <li>Постоянное обновление коллекции новыми историями</li>
              <li>Широкий выбор жанров для любого вкуса</li>
            </ul>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Присоединяйтесь к нам в социальных сетях</h2>
            <div className="flex justify-center gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                ВКонтакте
              </Button>
              <Button className="bg-blue-400 hover:bg-blue-500">
                Телеграм
              </Button>
              <Button className="bg-red-600 hover:bg-red-700">
                YouTube
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
