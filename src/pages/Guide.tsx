import { Navbar } from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { Leaf, Trash2, Zap, Droplet } from 'lucide-react';

const Guide = () => {
  const categories = [
    {
      icon: Droplet,
      title: 'Wet Waste',
      color: 'from-green-500 to-emerald-500',
      items: ['Food scraps', 'Vegetable peels', 'Garden waste', 'Tea bags'],
    },
    {
      icon: Trash2,
      title: 'Dry Waste',
      color: 'from-blue-500 to-cyan-500',
      items: ['Paper', 'Cardboard', 'Plastic bottles', 'Metal cans'],
    },
    {
      icon: Zap,
      title: 'E-Waste',
      color: 'from-purple-500 to-pink-500',
      items: ['Old phones', 'Batteries', 'Electronics', 'Chargers'],
    },
    {
      icon: Leaf,
      title: 'Sanitary Waste',
      color: 'from-orange-500 to-red-500',
      items: ['Diapers', 'Sanitary pads', 'Tissues', 'Cotton'],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-4">Waste Segregation Guide</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Learn how to properly separate your waste for better recycling
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="p-6">
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${category.color} text-white mb-4`}>
                <category.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
              <ul className="space-y-2 text-muted-foreground">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Guide;
