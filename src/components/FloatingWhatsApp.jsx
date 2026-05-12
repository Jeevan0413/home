import React from 'react';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/yournumber" 
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '60px',
        height: '60px',
        backgroundColor: '#25d366',
        color: '#fff',
        borderRadius: '50px',
        textAlign: 'center',
        fontSize: '30px',
        boxShadow: '2px 2px 3px #999',
        zIndex: '1000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.3s ease'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
};

export default FloatingWhatsApp;
