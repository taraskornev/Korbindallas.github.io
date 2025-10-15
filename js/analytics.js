// Real Website Analytics Tracker
// This script tracks visitors across your website

class WebsiteAnalytics {
  constructor() {
    this.init();
  }

  init() {
    // Check cookie consent before tracking
    const cookieConsent = localStorage.getItem('cookie-consent');
    const analyticsAllowed = localStorage.getItem('cookie-analytics');
    
    // Only track if user has given consent and analytics are allowed
    if (cookieConsent === 'accepted' && analyticsAllowed === 'true') {
      // Don't track admin page visits
      if (window.location.pathname.includes('admin-taras.html')) {
        return;
      }

      this.trackPageView();
      this.trackSession();
    } else {
      console.log('Analytics: Tracking disabled due to cookie consent');
    }
  }

  trackPageView() {
    const pageName = this.getPageName();
    const timestamp = Date.now();
    const today = new Date().toDateString();

    // Update page views (this can count multiple views per visitor)
    let pageViews = JSON.parse(localStorage.getItem('analytics_pageViews') || '{}');
    pageViews[pageName] = (pageViews[pageName] || 0) + 1;
    localStorage.setItem('analytics_pageViews', JSON.stringify(pageViews));

    // Update specific page counters
    if (pageName === 'Gallery') {
      const galleryViews = parseInt(localStorage.getItem('analytics_galleryViews') || '0') + 1;
      localStorage.setItem('analytics_galleryViews', galleryViews.toString());
    }

    // Only add activity for first page view in this session
    const sessionActivityKey = `session_activity_${pageName}_${today}`;
    if (!sessionStorage.getItem(sessionActivityKey)) {
      this.addActivity(`Visitor viewed ${pageName} page`);
      sessionStorage.setItem(sessionActivityKey, 'true');
    }

    console.log(`Analytics: Tracked view for ${pageName} page`);
  }

  trackSession() {
    const today = new Date().toDateString();
    const sessionKey = `visitor_session_${today}`;
    
    // Check if this visitor has already been counted today
    if (!sessionStorage.getItem(sessionKey)) {
      // This is a new session for today
      sessionStorage.setItem(sessionKey, 'true');
      
      // Update today's unique visitors
      const todayVisits = parseInt(localStorage.getItem('analytics_todayVisits') || '0') + 1;
      localStorage.setItem('analytics_todayVisits', todayVisits.toString());

      // Update daily visits (for chart)
      let dailyVisits = JSON.parse(localStorage.getItem('analytics_dailyVisits') || '{}');
      dailyVisits[today] = (dailyVisits[today] || 0) + 1;
      localStorage.setItem('analytics_dailyVisits', JSON.stringify(dailyVisits));

      // Check if this is a completely new visitor (ever)
      const visitorKey = 'analytics_unique_visitor';
      if (!localStorage.getItem(visitorKey)) {
        const totalVisitors = parseInt(localStorage.getItem('analytics_totalVisitors') || '0') + 1;
        localStorage.setItem('analytics_totalVisitors', totalVisitors.toString());
        localStorage.setItem(visitorKey, 'true');
        this.addActivity('New visitor discovered your website! 🎉');
      } else {
        this.addActivity('Returning visitor came back! 👋');
      }

      console.log('Analytics: New session tracked for today');
    } else {
      console.log('Analytics: Session already counted for today');
    }
  }

  trackContactForm() {
    const contactForms = parseInt(localStorage.getItem('analytics_contactForms') || '0') + 1;
    localStorage.setItem('analytics_contactForms', contactForms.toString());
    this.addActivity('Contact form submitted 📧');
    console.log('Analytics: Contact form submission tracked');
  }

  trackKofiClick() {
    this.addActivity('Ko-fi donation button clicked ☕');
    console.log('Analytics: Ko-fi click tracked');
  }

  addActivity(message) {
    let activities = JSON.parse(localStorage.getItem('analytics_recentActivity') || '[]');
    activities.push({
      message: message,
      timestamp: Date.now()
    });

    // Keep only last 20 activities
    if (activities.length > 20) {
      activities = activities.slice(-20);
    }

    localStorage.setItem('analytics_recentActivity', JSON.stringify(activities));
  }

  getPageName() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    
    switch (page) {
      case '':
      case 'index.html':
        return 'Home';
      case 'gallery.html':
        return 'Gallery';
      case 'about.html':
        return 'About';
      case 'contact.html':
        return 'Contact';
      default:
        return page.replace('.html', '').charAt(0).toUpperCase() + page.slice(1);
    }
  }
}

// Initialize analytics when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.websiteAnalytics = new WebsiteAnalytics();
  });
} else {
  window.websiteAnalytics = new WebsiteAnalytics();
}

// Global functions for manual tracking
window.trackContactForm = () => {
  if (window.websiteAnalytics) {
    window.websiteAnalytics.trackContactForm();
  }
};

window.trackKofiClick = () => {
  if (window.websiteAnalytics) {
    window.websiteAnalytics.trackKofiClick();
  }
};