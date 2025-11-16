import { Navbar } from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Get in touch with Moorkkanad Panchayat Waste Management
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6">Office Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    Moorkkanad Panchayat Office<br />
                    Malappuram District, Kerala
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-muted-foreground">+91 1234567890</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-muted-foreground">waste@moorkkanad.gov.in</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Office Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6">Emergency Contacts</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Waste Collection Issues</h3>
                <p className="text-muted-foreground">+91 9876543210</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Illegal Dumping Reports</h3>
                <p className="text-muted-foreground">+91 9876543211</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Recycling Center Support</h3>
                <p className="text-muted-foreground">+91 9876543212</p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Contact;
