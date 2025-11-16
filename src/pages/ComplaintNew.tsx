import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const ComplaintNew = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    category: '',
    description: '',
    location: '',
  });

  const categories = [
    { value: 'overflow', label: 'Waste Overflow' },
    { value: 'illegal_dumping', label: 'Illegal Dumping' },
    { value: 'missed_pickup', label: 'Missed Pickup' },
    { value: 'litter', label: 'Public Littering' },
    { value: 'other', label: 'Other' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast.error('Please sign in to report a complaint');
      navigate('/auth');
      return;
    }

    if (!formData.category || !formData.description) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase
        .from('complaints')
        .insert({
          user_id: user.id,
          category: formData.category,
          description: formData.description,
          status: 'new',
        });

      if (error) throw error;

      toast.success('Complaint submitted successfully!');
      navigate('/dashboard');
    } catch (error: any) {
      console.error('Error submitting complaint:', error);
      toast.error(error.message || 'Failed to submit complaint');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Report New Issue</h1>
          <p className="text-muted-foreground mb-8">
            Help us keep Moorkkanad clean by reporting waste management issues
          </p>

          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="category">Issue Category *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData({ ...formData, category: value })
                  }
                >
                  <SelectTrigger id="category" className="mt-2">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="location">Location (Optional)</Label>
                <Input
                  id="location"
                  type="text"
                  placeholder="e.g., Near Main Market, Ward 5"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Please describe the issue in detail..."
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="mt-2 min-h-[120px]"
                  required
                />
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/dashboard')}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={loading} className="flex-1">
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Report'
                  )}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ComplaintNew;
