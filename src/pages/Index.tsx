import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const trafficSigns = [
  { id: 1, name: 'Пешеходный переход', emoji: '🚸', description: 'Знак указывает место для безопасного перехода дороги', color: 'bg-secondary' },
  { id: 2, name: 'Светофор', emoji: '🚦', description: 'Регулирует движение транспорта и пешеходов', color: 'bg-accent' },
  { id: 3, name: 'Стоп', emoji: '🛑', description: 'Обязательная остановка перед перекрёстком', color: 'bg-destructive' },
  { id: 4, name: 'Осторожно, дети', emoji: '👶', description: 'Зона повышенного внимания около школ и садиков', color: 'bg-primary' },
  { id: 5, name: 'Велосипедная дорожка', emoji: '🚴', description: 'Специальная дорожка для велосипедистов', color: 'bg-secondary' },
  { id: 6, name: 'Автобусная остановка', emoji: '🚌', description: 'Место остановки общественного транспорта', color: 'bg-accent' },
];

const characters = [
  { id: 1, name: 'Капитан Светофор', emoji: '👮', role: 'Главный наставник' },
  { id: 2, name: 'Зебра Зоя', emoji: '🦓', role: 'Эксперт по переходам' },
  { id: 3, name: 'Велик Вася', emoji: '🚴', role: 'Велосипедный гид' },
  { id: 4, name: 'Автобус Боря', emoji: '🚌', role: 'Транспортный мастер' },
];

const Index = () => {
  const [selectedSign, setSelectedSign] = useState<typeof trafficSigns[0] | null>(null);
  const [activeTab, setActiveTab] = useState<'characters' | 'signs' | 'rules'>('signs');

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted font-body">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-12 animate-fade-in">
          <div className="relative mb-6">
            <img 
              src="https://cdn.poehali.dev/projects/647a3cc3-239a-4918-9be3-8fb4129e7e97/files/6ffbde4a-cb13-4424-baf7-a41804370cf7.jpg" 
              alt="Тайны ПДД" 
              className="w-full max-w-2xl mx-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-primary mb-4">
            Тайны ПДД 🚦
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Увлекательная игра для изучения правил дорожного движения
          </p>
        </header>

        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <Button 
            onClick={() => setActiveTab('characters')}
            variant={activeTab === 'characters' ? 'default' : 'outline'}
            size="lg"
            className="font-heading text-lg hover:scale-105 transition-transform"
          >
            <Icon name="Users" className="mr-2" size={24} />
            Персонажи
          </Button>
          <Button 
            onClick={() => setActiveTab('signs')}
            variant={activeTab === 'signs' ? 'default' : 'outline'}
            size="lg"
            className="font-heading text-lg hover:scale-105 transition-transform"
          >
            <Icon name="Hexagon" className="mr-2" size={24} />
            Дорожные знаки
          </Button>
          <Button 
            onClick={() => setActiveTab('rules')}
            variant={activeTab === 'rules' ? 'default' : 'outline'}
            size="lg"
            className="font-heading text-lg hover:scale-105 transition-transform"
          >
            <Icon name="Book" className="mr-2" size={24} />
            Правила игры
          </Button>
        </div>

        {activeTab === 'characters' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            {characters.map((character) => (
              <Card 
                key={character.id} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-7xl mb-4">{character.emoji}</div>
                  <h3 className="text-2xl font-heading font-bold mb-2 text-foreground">
                    {character.name}
                  </h3>
                  <Badge variant="secondary" className="text-base px-4 py-1">
                    {character.role}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'signs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {trafficSigns.map((sign) => (
              <Card 
                key={sign.id} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2"
                onClick={() => setSelectedSign(sign)}
              >
                <CardContent className="p-6">
                  <div className={`${sign.color} rounded-2xl p-6 mb-4 flex items-center justify-center`}>
                    <span className="text-7xl">{sign.emoji}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-center text-foreground">
                    {sign.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'rules' && (
          <Card className="animate-fade-in border-2">
            <CardContent className="p-8">
              <h2 className="text-3xl font-heading font-bold mb-6 text-primary">
                📖 Как играть в "Тайны ПДД"
              </h2>
              <div className="space-y-6 text-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-heading font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-2 text-xl">Изучай персонажей</h3>
                    <p className="text-muted-foreground">
                      Познакомься с четырьмя друзьями, которые помогут тебе освоить правила дорожного движения
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary text-secondary-foreground rounded-full w-10 h-10 flex items-center justify-center font-heading font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-2 text-xl">Запоминай знаки</h3>
                    <p className="text-muted-foreground">
                      Изучай дорожные знаки и их значения. Кликай на карточки, чтобы узнать больше
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-heading font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-2 text-xl">Проходи уровни</h3>
                    <p className="text-muted-foreground">
                      От простого к сложному: начни с основ и стань настоящим экспертом ПДД
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-heading font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-2 text-xl">Будь в безопасности</h3>
                    <p className="text-muted-foreground">
                      Применяй полученные знания на улице и всегда соблюдай правила дорожного движения!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <Dialog open={!!selectedSign} onOpenChange={() => setSelectedSign(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className={`${selectedSign?.color} rounded-2xl p-6 mb-4 flex items-center justify-center`}>
              <span className="text-8xl">{selectedSign?.emoji}</span>
            </div>
            <DialogTitle className="text-3xl font-heading text-center">
              {selectedSign?.name}
            </DialogTitle>
            <DialogDescription className="text-lg text-center pt-4">
              {selectedSign?.description}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
