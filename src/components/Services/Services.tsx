import React from 'react';
import './Services.scss';
import emergencyRepairsIcon from '../../assets/emergency-repairs.png';
import drainCleaningIcon from '../../assets/drain-cleaning.png';
import waterHeatersIcon from '../../assets/water-heaters .png';
import leakDetectionIcon from '../../assets/leak-detection.png';

const Services: React.FC = () => {
  const handleServiceClick = (serviceTitle: string): void => {
    console.log(`Service clicked: ${serviceTitle}`);
    // Можно добавить навигацию или другую логику
  };

  const services = [
    {
      icon: emergencyRepairsIcon,
      title: 'Emergency Repairs',
      description: '24/7 emergency plumbing services'
    },
    {
      icon: drainCleaningIcon,
      title: 'Drain Cleaning',
      description: 'Professional drain cleaning solutions'
    },
    {
      icon: waterHeatersIcon,
      title: 'Water Heaters',
      description: 'Installation and repair services'
    },
    {
      icon: leakDetectionIcon,
      title: 'Leak Detection & More',
      description: 'Advanced leak detection technology'
    }
  ];

  return (
    <section className="services">
      <div className="services-container">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`service-card service-card-${index + 1}`}
            onClick={() => handleServiceClick(service.title)}
            role="button"
            tabIndex={0}
            onKeyDown={(e: React.KeyboardEvent) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleServiceClick(service.title);
              }
            }}
            aria-label={`Learn more about ${service.title}`}
          >
            <div className="service-icon">
              <img src={service.icon} alt={service.title} />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

