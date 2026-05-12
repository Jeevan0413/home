import React from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import Counter from '../components/Counter';

const Services = () => {
  useReveal();

  const services = [
    { id: 'seo-optimization', icon: 'fa-brands fa-google', title: 'SEO Optimization', desc: 'Dominating search engine results to drive organic, high-intent traffic to your site.', features: ['Comprehensive Keyword Research', 'Technical SEO & Core Web Vitals', 'Backlink Building Strategies', 'Local SEO & Google Maps'] },
    { id: 'social-media-marketing', icon: 'fa-solid fa-bullhorn', title: 'Social Media Marketing', desc: 'Building vibrant communities and driving engagement across all platforms.', features: ['Content Strategy & Calendars', 'Community Management', 'Influencer Partnerships', 'Paid Social Campaigns'] },
    { id: 'ppc-advertising', icon: 'fa-solid fa-mouse-pointer', title: 'PPC Advertising', desc: 'Instant visibility and measurable ROI through targeted ad campaigns.', features: ['Google Ads & Search Marketing', 'Retargeting & Remarketing', 'Conversion Rate Optimization', 'Detailed Performance Audits'] },
    { id: 'content-marketing', icon: 'fa-solid fa-pen-nib', title: 'Content Marketing', desc: 'Strategic storytelling that educates, inspires, and converts your audience.', features: ['Blog Posts & Article Writing', 'Whitepapers & E-books', 'Video Scripting & Production', 'Content Distribution Plans'] },
    { id: 'email-marketing', icon: 'fa-solid fa-envelope', title: 'Email Marketing', desc: 'Nurturing leads and driving retention through personalized automation.', features: ['Automated Drip Campaigns', 'List Segmentation & Tagging', 'Custom Newsletter Design', 'A/B Testing & Analysis'] },
    { id: 'web-design', icon: 'fa-solid fa-code', title: 'Web Design & Dev', desc: 'High-converting, mobile-first websites designed for modern user experiences.', features: ['Custom UI/UX Design', 'Responsive Web Applications', 'E-commerce Solutions', 'Speed & Performance Tuning'] }
  ];

  const [activeIndex, setActiveIndex] = React.useState(3);
  const [isPaused, setIsPaused] = React.useState(false);

  const caseStudies = [
    { name: "TechFlow", type: "SaaS PPC Campaign", stats: [{ label: "Leads", value: 150, prefix: "+" }, { label: "CPA", value: 30, prefix: "-" }], img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "UrbanMarket", type: "Local Search Strategy", stats: [{ label: "Ranking", value: 3, prefix: "Top " }, { label: "Visits", value: 200, prefix: "+" }], img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "GreenSpace", type: "Marketing Advertiser", stats: [{ label: "ROAS", value: 4.5, prefix: "" }, { label: "Sales", value: 50, prefix: "$" }], img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "NexusAI", type: "Growth Marketing", stats: [{ label: "Growth", value: 250, prefix: "+" }, { label: "Users", value: 500, prefix: "+" }], img: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "FoodDash", type: "App Performance", stats: [{ label: "Load Time", value: 2, prefix: "" }, { label: "Orders", value: 1000, prefix: "+" }], img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "FitCore", type: "Social Engagement", stats: [{ label: "Followers", value: 300, prefix: "+" }, { label: "Engagement", value: 15, prefix: "" }], img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
  ];

  const displayStudies = [...caseStudies, ...caseStudies, ...caseStudies];

  const nextSlide = React.useCallback(() => {
    setActiveIndex((prev) => prev + 1);
  }, []);

  const prevSlide = () => {
    setActiveIndex((prev) => prev - 1);
  };

  React.useEffect(() => {
    if (activeIndex === caseStudies.length * 2) {
      setTimeout(() => {
        setActiveIndex(caseStudies.length);
      }, 600); // Wait for transition to finish
    } else if (activeIndex === caseStudies.length - 1) {
      setTimeout(() => {
        setActiveIndex(caseStudies.length * 2 - 1);
      }, 600);
    }
  }, [activeIndex, caseStudies.length]);

  React.useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <main>
      <section id="services" className="services reveal fade-in-up bg-soft-2" style={{padding: '120px 0'}}>
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive solutions for every stage of your growth.</p>
          
          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', width: '100%' }}>
            {services.map((service) => (
              <div key={service.id} className="service-card" id={service.id} style={{ opacity: 1, transform: 'none' }}>
                <div className="service-icon"><i className={service.icon}></i></div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ul className="service-features">
                  {service.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                <Link to={`/services/${service.id}`} className="btn btn-outline" style={{ marginTop: 'auto' }}>Read More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="case-studies bg-soft-1" style={{padding: '100px 0', overflow: 'hidden'}} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <div className="container">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">Real results for real businesses.</p>
          
          <div className="story-carousel-container" style={{ position: 'relative' }}>
            <div className="carousel-viewport" style={{ overflow: 'visible', width: '100%', position: 'relative', height: '500px', display: 'flex', alignItems: 'center' }}>
              <div className="portfolio-grid" style={{ 
                position: 'absolute',
                left: '50%',
                transform: `translateX(calc(-175px - ${activeIndex * 390}px))`,
                transition: (activeIndex === caseStudies.length || activeIndex === caseStudies.length * 2 - 1) && (activeIndex === caseStudies.length || activeIndex === caseStudies.length * 2 - 1) ? 'none' : 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                display: 'flex',
                width: 'max-content'
              }}>
                {displayStudies.map((study, idx) => (
                  <div key={idx} className={`project-card ${idx % caseStudies.length === activeIndex % caseStudies.length ? 'active' : ''}`} onClick={() => setActiveIndex(idx)} style={{ filter: 'none', opacity: idx % caseStudies.length === activeIndex % caseStudies.length ? 1 : 0.6 }}>
                    <img src={study.img} alt={study.name} className="project-bg" />
                    <div className="project-overlay">
                      <h3>{study.name}</h3>
                      <p>{study.type}</p>
                      <div className="project-stats">
                        {study.stats.map((s, i) => (
                          <span key={i} className="proj-stat">
                            {s.prefix}<Counter target={s.value} />{s.label === 'Sales' || s.label === 'Orders' || s.label === 'Followers' ? 'k' : ''} {s.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="carousel-nav prev" onClick={prevSlide}><i className="fa-solid fa-chevron-left"></i></button>
            <button className="carousel-nav next" onClick={nextSlide}><i className="fa-solid fa-chevron-right"></i></button>
          </div>
        </div>
      </section>

      <section className="team-section bg-soft-1" style={{ padding: '100px 0' }}>
        <div className="container">
          <h2 className="section-title">The Minds Behind LearnSpace</h2>
          <div className="team-grid">
            {[
              { name: "Raghu Vamshi", role: "Founder & CEO", img: "https://www.shutterstock.com/image-illustration/ceo-icon-manager-illustartion-600nw-1857126589.jpg" },
              { name: "Varalaxmi", role: "Head of Strategy & COO", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvXea5d-MNkRufdRao2cItjnxVtTn9xkP1j1yocFmPgQ&s" },
              { name: "Shridhar Kulkarni", role: "Creative Director", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRlxzr_XTrP3GHTNMhvQcfIbSfBLrq0A5XBw&s" }
            ].map((member, idx) => (
              <div key={idx} className="team-card">
                <div className="team-img"><img src={member.img} alt={member.name} /></div>
                <div className="team-info">
                  <h4>{member.name}</h4>
                  <span className="team-role">{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
