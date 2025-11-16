import { Navbar } from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

const Announcements = () => {
  const announcements = [
    {
      title: 'New Pickup Schedule',
      date: '2025-01-15',
      body: 'We have updated the waste pickup schedule for Ward 5. Please check your dashboard for the new timings.',
    },
    {
      title: 'Community Clean-Up Drive',
      date: '2025-01-10',
      body: 'Join us for a community clean-up event on January 20th. All volunteers are welcome!',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-8">Announcements</h1>
        <div className="space-y-6">
          {announcements.map((announcement, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {new Date(announcement.date).toLocaleDateString()}
                </div>
              </div>
              <h2 className="text-2xl font-semibold mt-2 mb-3">{announcement.title}</h2>
              <p className="text-muted-foreground">{announcement.body}</p>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Announcements;
