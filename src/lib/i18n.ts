import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      home: 'Home',
      dashboard: 'Dashboard',
      pickups: 'Pickups',
      complaints: 'Complaints',
      centers: 'Recycling Centers',
      rewards: 'Rewards',
      announcements: 'Announcements',
      events: 'Events',
      login: 'Login',
      signup: 'Sign Up',
      logout: 'Logout',
      
      // Hero
      heroTitle: 'Clean Moorkkanad',
      heroSubtitle: 'Smart Waste Management for a Sustainable Future',
      heroDescription: 'Report issues, schedule pickups, and earn rewards for keeping our panchayat clean',
      getStarted: 'Get Started',
      learnMore: 'Learn More',
      
      // Features
      featuresTitle: 'How It Works',
      reportIssues: 'Report Issues',
      reportIssuesDesc: 'Spot overflowing bins or illegal dumping? Report it with photos and location',
      schedulePickups: 'Schedule Pickups',
      schedulePickupsDesc: 'Choose convenient times for wet, dry, and e-waste collection',
      earnRewards: 'Earn Rewards',
      earnRewardsDesc: 'Get points for proper segregation and community participation',
      findCenters: 'Find Centers',
      findCentersDesc: 'Locate nearby recycling centers for different waste types',
      
      // Auth
      emailLabel: 'Email',
      passwordLabel: 'Password',
      nameLabel: 'Full Name',
      phoneLabel: 'Phone Number',
      alreadyHaveAccount: 'Already have an account?',
      noAccount: "Don't have an account?",
      loginButton: 'Sign In',
      signupButton: 'Create Account',
      
      // Dashboard
      welcomeBack: 'Welcome back',
      myComplaints: 'My Complaints',
      upcomingPickups: 'Upcoming Pickups',
      myPoints: 'My Points',
      quickActions: 'Quick Actions',
      reportNewIssue: 'Report New Issue',
      schedulePickup: 'Schedule Pickup',
      viewCenters: 'View Centers',
      
      // Complaints
      complaintCategories: {
        overflow: 'Bin Overflow',
        dumping: 'Illegal Dumping',
        missed: 'Missed Pickup',
        litter: 'Litter',
      },
      complaintStatus: {
        new: 'New',
        acknowledged: 'Acknowledged',
        in_progress: 'In Progress',
        resolved: 'Resolved',
        rejected: 'Rejected',
      },
      
      // Pickups
      pickupTypes: {
        wet: 'Wet Waste',
        dry: 'Dry Waste',
        ewaste: 'E-Waste',
        sanitary: 'Sanitary Waste',
        bulk: 'Bulk Waste',
      },
      
      // Common
      submit: 'Submit',
      cancel: 'Cancel',
      save: 'Save',
      delete: 'Delete',
      edit: 'Edit',
      close: 'Close',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
    },
  },
  ml: {
    translation: {
      // Navigation
      home: 'ഹോം',
      dashboard: 'ഡാഷ്ബോർഡ്',
      pickups: 'പിക്കപ്പുകൾ',
      complaints: 'പരാതികൾ',
      centers: 'റീസൈക്ലിംഗ് സെന്ററുകൾ',
      rewards: 'പുരസ്കാരങ്ങൾ',
      announcements: 'അറിയിപ്പുകൾ',
      events: 'ഇവന്റുകൾ',
      login: 'ലോഗിൻ',
      signup: 'രജിസ്റ്റർ ചെയ്യുക',
      logout: 'ലോഗ് ഔട്ട്',
      
      // Hero
      heroTitle: 'ശുദ്ധ മൂര്‍ക്കനാട്',
      heroSubtitle: 'സുസ്ഥിര ഭാവിക്കായി സ്മാർട്ട് മാലിന്യ സംസ്കരണം',
      heroDescription: 'പ്രശ്നങ്ങൾ റിപ്പോർട്ട് ചെയ്യുക, പിക്കപ്പ് ഷെഡ്യൂൾ ചെയ്യുക, നമ്മുടെ പഞ്ചായത്ത് വൃത്തിയായി സൂക്ഷിക്കുന്നതിന് പുരസ്കാരങ്ങൾ നേടുക',
      getStarted: 'ആരംഭിക്കുക',
      learnMore: 'കൂടുതൽ അറിയുക',
      
      // Features
      featuresTitle: 'എങ്ങനെ പ്രവർത്തിക്കുന്നു',
      reportIssues: 'പ്രശ്നങ്ങൾ റിപ്പോർട്ട് ചെയ്യുക',
      reportIssuesDesc: 'നിറഞ്ഞ് കവിയുന്ന ബിന്നുകളോ നിയമവിരുദ്ധ മാലിന്യ സംസ്കരണമോ കണ്ടോ? ഫോട്ടോകളും ലൊക്കേഷനുമായി റിപ്പോർട്ട് ചെയ്യുക',
      schedulePickups: 'പിക്കപ്പ് ഷെഡ്യൂൾ ചെയ്യുക',
      schedulePickupsDesc: 'ആർദ്ര, ഉണങ്ങിയ, ഇ-മാലിന്യം ശേഖരണത്തിനുള്ള സൗകര്യപ്രദമായ സമയങ്ങൾ തിരഞ്ഞെടുക്കുക',
      earnRewards: 'പുരസ്കാരങ്ങൾ നേടുക',
      earnRewardsDesc: 'ശരിയായ വേർതിരിവിനും കമ്മ്യൂണിറ്റി പങ്കാളിത്തത്തിനും പോയിന്റുകൾ നേടുക',
      findCenters: 'സെന്ററുകൾ കണ്ടെത്തുക',
      findCentersDesc: 'വിവിധ മാലിന്യ തരങ്ങൾക്കായി അടുത്തുള്ള റീസൈക്ലിംഗ് സെന്ററുകൾ കണ്ടെത്തുക',
      
      // Auth
      emailLabel: 'ഇമെയിൽ',
      passwordLabel: 'പാസ്‌വേഡ്',
      nameLabel: 'പൂർണ്ണ നാമം',
      phoneLabel: 'ഫോൺ നമ്പർ',
      alreadyHaveAccount: 'ഇതിനകം ഒരു അക്കൗണ്ട് ഉണ്ടോ?',
      noAccount: 'ഒരു അക്കൗണ്ട് ഇല്ലേ?',
      loginButton: 'സൈൻ ഇൻ',
      signupButton: 'അക്കൗണ്ട് സൃഷ്ടിക്കുക',
      
      // Dashboard
      welcomeBack: 'സ്വാഗതം',
      myComplaints: 'എന്റെ പരാതികൾ',
      upcomingPickups: 'വരാനിരിക്കുന്ന പിക്കപ്പുകൾ',
      myPoints: 'എന്റെ പോയിന്റുകൾ',
      quickActions: 'ദ്രുത പ്രവർത്തനങ്ങൾ',
      reportNewIssue: 'പുതിയ പ്രശ്നം റിപ്പോർട്ട് ചെയ്യുക',
      schedulePickup: 'പിക്കപ്പ് ഷെഡ്യൂൾ ചെയ്യുക',
      viewCenters: 'സെന്ററുകൾ കാണുക',
      
      // Common
      submit: 'സമർപ്പിക്കുക',
      cancel: 'റദ്ദാക്കുക',
      save: 'സംരക്ഷിക്കുക',
      delete: 'ഇല്ലാതാക്കുക',
      edit: 'എഡിറ്റ് ചെയ്യുക',
      close: 'അടയ്ക്കുക',
      loading: 'ലോഡുചെയ്യുന്നു...',
      error: 'പിശക്',
      success: 'വിജയം',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
