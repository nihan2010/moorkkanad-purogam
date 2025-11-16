import { Navbar } from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Centers = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-8">{t('findCenters')}</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Sample Recycling Center</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                <span>Moorkkanad, Malappuram</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-5 w-5 mt-0.5 text-primary" />
                <span>Mon-Sat: 9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-5 w-5 mt-0.5 text-primary" />
                <span>+91 1234567890</span>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Centers;
