import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { Plus, AlertCircle } from 'lucide-react';

interface Complaint {
  id: string;
  category: string;
  description: string;
  status: string;
  created_at: string;
}

const Complaints = () => {
  const { user } = useAuth();
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchComplaints();
    }
  }, [user]);

  const fetchComplaints = async () => {
    try {
      const { data, error } = await supabase
        .from('complaints')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setComplaints(data || []);
    } catch (error) {
      console.error('Error fetching complaints:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-500';
      case 'acknowledged':
        return 'bg-yellow-500';
      case 'in_progress':
        return 'bg-orange-500';
      case 'resolved':
        return 'bg-green-500';
      case 'rejected':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">My Complaints</h1>
            <p className="text-muted-foreground">Track your reported issues</p>
          </div>
          <Button asChild>
            <Link to="/complaints/new">
              <Plus className="mr-2 h-4 w-4" />
              Report New Issue
            </Link>
          </Button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading complaints...</p>
          </div>
        ) : complaints.length === 0 ? (
          <Card className="p-12 text-center">
            <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No complaints yet</h3>
            <p className="text-muted-foreground mb-6">
              You haven't reported any issues yet
            </p>
            <Button asChild>
              <Link to="/complaints/new">Report Your First Issue</Link>
            </Button>
          </Card>
        ) : (
          <div className="space-y-4">
            {complaints.map((complaint) => (
              <Card key={complaint.id} className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold capitalize">
                        {complaint.category.replace('_', ' ')}
                      </h3>
                      <Badge className={getStatusColor(complaint.status)}>
                        {complaint.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      {complaint.description}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Reported on{' '}
                      {new Date(complaint.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Complaints;
