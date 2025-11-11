import { useTranslation } from 'react-i18next';
import { useAuth } from '@/contexts/AuthContext';
import { Navbar } from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  AlertCircle, 
  Calendar, 
  Trophy, 
  MapPin,
} from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  const quickActions = [
    {
      icon: AlertCircle,
      title: t('reportNewIssue'),
      description: 'Report a civic issue',
      link: '/complaints/new',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Calendar,
      title: t('schedulePickup'),
      description: 'Schedule waste pickup',
      link: '/pickups/new',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MapPin,
      title: t('viewCenters'),
      description: 'Find recycling centers',
      link: '/centers',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {t('welcomeBack')}, {user?.email}!
            </h1>
            <p className="text-muted-foreground">
              Track your activities and manage your waste responsibly
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-2">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {t('myComplaints')}
                </CardTitle>
                <AlertCircle className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">0</div>
                <p className="text-xs text-muted-foreground mt-1">No complaints yet</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {t('upcomingPickups')}
                </CardTitle>
                <Calendar className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">0</div>
                <p className="text-xs text-muted-foreground mt-1">No pickups scheduled</p>
              </CardContent>
            </Card>

            <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {t('myPoints')}
                </CardTitle>
                <Trophy className="h-5 w-5 text-accent" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent">0</div>
                <p className="text-xs text-muted-foreground mt-1">Start earning rewards!</p>
              </CardContent>
            </Card>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4">{t('quickActions')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quickActions.map((action, index) => (
                <Link key={index} to={action.link}>
                  <Card className="h-full hover:shadow-lg transition-all hover:scale-105 cursor-pointer border-2 hover:border-primary/20">
                    <CardHeader>
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${action.color} text-white mb-2`}>
                        <action.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg">{action.title}</CardTitle>
                      <CardDescription>{action.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
