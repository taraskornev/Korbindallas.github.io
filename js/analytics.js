// Real Website Analytics Tracker
// This script tracks visitors across your website

class WebsiteAnalytics {
  constructor() {
    this.init();
  }

  init() {
    // Don't track admin page visits
    if (window.location.pathname.includes('admin-taras.html')) {
      return;
    }

    this.trackPageView();
    this.trackSession();
  }

  trackPageView() {
    const pageName = this.getPageName();
    const timestamp = Date.now();
    const today = new Date().toDateString();

    // Update page views
    let pageViews = JSON.parse(localStorage.getItem('analytics_pageViews') || '{}');
    pageViews[pageName] = (pageViews[pageName] || 0) + 1;
    localStorage.setItem('analytics_pageViews', JSON.stringify(pageViews));

    // Update daily visits
    let dailyVisits = JSON.parse(localStorage.getItem('analytics_dailyVisits') || '{}');
    dailyVisits[today] = (dailyVisits[today] || 0) + 1;
    localStorage.setItem('analytics_dailyVisits', JSON.stringify(dailyVisits));

    // Update specific page counters
    if (pageName === 'Gallery') {
      const galleryViews = parseInt(localStorage.getItem('analytics_galleryViews') || '0') + 1;
      localStorage.setItem('analytics_galleryViews', galleryViews.toString());
    }

    // Add to recent activity
    this.addActivity(`Visitor viewed ${pageName} page`);

    console.log(`Analytics: Tracked view for ${pageName} page`);
  }

  trackSession() {
    const sessionKey = 'analytics_session_' + Date.now();
    const lastSessionDate = localStorage.getItem('analytics_lastSessionDate');
    const today = new Date().toDateString();

    // Check if this is a new session (new day or first visit)
    if (lastSessionDate !== today) {
      // New visitor for today
      const todayVisits = parseInt(localStorage.getItem('analytics_todayVisits') || '0') + 1;
      localStorage.setItem('analytics_todayVisits', todayVisits.toString());

      // Check if completely new visitor
      const hasVisitedBefore = localStorage.getItem('analytics_hasVisited');
      if (!hasVisitedBefore) {
        const totalVisitors = parseInt(localStorage.getItem('analytics_totalVisitors') || '0') + 1;
        localStorage.setItem('analytics_totalVisitors', totalVisitors.toString());
        localStorage.setItem('analytics_hasVisited', 'true');
        this.addActivity('New visitor discovered your website! 🎉');
      }

      localStorage.setItem('analytics_lastSessionDate', today);
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