import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Navbar } from '@/components/Navbar';
import { 
  AlertCircle, 
  Calendar, 
  Gift, 
  MapPin, 
  Leaf,
  Recycle,
  Users,
  TrendingUp
} from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: AlertCircle,
      title: t('reportIssues'),
      description: t('reportIssuesDesc'),
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Calendar,
      title: t('schedulePickups'),
      description: t('schedulePickupsDesc'),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Gift,
      title: t('earnRewards'),
      description: t('earnRewardsDesc'),
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: MapPin,
      title: t('findCenters'),
      description: t('findCentersDesc'),
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const stats = [
    { icon: Recycle, value: '5,000+', label: 'Tons Recycled' },
    { icon: Users, value: '10,000+', label: 'Active Citizens' },
    { icon: TrendingUp, value: '85%', label: 'Segregation Rate' },
    { icon: Leaf, value: '20', label: 'Wards Covered' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto text-center relative z-10"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-medium mb-6 animate-fade-in">
            <Leaf className="h-4 w-4 mr-2" />
            Sustainable Waste Management
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in-up">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {t('heroSubtitle')}
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t('heroDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button asChild size="lg" className="rounded-lg shadow-primary text-lg px-8">
              <Link to="/auth?mode=signup">{t('getStarted')}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-lg text-lg px-8">
              <Link to="#features">{t('learnMore')}</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">{t('featuresTitle')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, efficient, and rewarding waste management for everyone
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${feature.color} text-white mb-4`}>
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary to-accent text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Join Our Community Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Be part of the change. Together, we can build a cleaner, greener Moorkkanad.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-lg text-lg px-8 shadow-lg">
            <Link to="/auth?mode=signup">{t('getStarted')}</Link>
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 Moorkkanad Panchayat. All rights reserved.</p>
          <p className="mt-2 text-sm">Building a sustainable future together</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
