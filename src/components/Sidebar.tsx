import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar({ otherLinks }: { otherLinks?: React.ReactNode }) {
  // State to track if sidebar is expanded (true) or retracted (false)
  const [isOpen, setIsOpen] = useState(true);

  // The toggle function
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      className="bg-dark text-white p-3 shadow-sm d-flex flex-column" 
      style={{ 
        width: isOpen ? '250px' : '80px', 
        transition: 'width 0.3s ease' 
      }}
    >
      <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4 mt-2">

        {isOpen && <h5 className="m-0 text-truncate">SuperCourses</h5>}
        
        <button 
          onClick={toggleSidebar} 
          className="btn btn-sm btn-outline-light"
          style={{ width: '40px' }}
        >
          {isOpen ? '◄' : '='}
        </button>
      </div>
      
      {/* Navigation Area */}
      <nav className="nav flex-column gap-2">
        {isOpen ? <Link to="/" className="btn btn-secondary text-start text-truncate"> Home </Link> : ''}
        {isOpen && otherLinks}
      </nav>
    </div>
  );
}