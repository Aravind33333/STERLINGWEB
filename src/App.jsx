import React, { useState, useEffect } from 'react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CorporateProfile from './components/CorporateProfile';
import ProductCatalog from './components/ProductCatalog';
import Infrastructure from './components/Infrastructure';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PlaceholderPage from './components/PlaceholderPage';
import AboutPage from './components/AboutPage';
import PrinciplesPage from './components/PrinciplesPage';
import BlogPage from './components/BlogPage';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import initialData from './data/db.json';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(sessionStorage.getItem('currentPage') || 'HOME');
  const [productsList, setProductsList] = useState(initialData.products);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('adminUser')));

  useEffect(() => {
    sessionStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('adminUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('adminUser');
    }
  }, [user]);

  const navLinks = [
    { name: 'HOME', hasDropdown: false },
    { name: 'ABOUT US', hasDropdown: false },
    { name: 'PRINCIPLES', hasDropdown: false },
    { name: 'PRODUCT', hasDropdown: false },
    { name: 'BLOG', hasDropdown: false },
    { name: 'CONTACT US', hasDropdown: false },
  ];

  // Hero Slider Data
  const slides = [
    {
      title: "Pioneering the Future of Color",
      subtitle: "Manufacturing world-class Dyestuffs and Specialty Chemicals for the global textile and ink industries.",
      cta: "Explore Our Range",
      image: "images/hero_1.png"
    },
    {
      title: "State-of-the-Art Infrastructure",
      subtitle: "Advanced manufacturing units and R&D labs ensuring precision in every molecular batch.",
      cta: "Technical Labs",
      image: "images/hero_2.png"
    },
    {
      title: "ZDHC & ISO Certified Quality",
      subtitle: "Committed to sustainable chemical management and international safety standards.",
      cta: "Quality Control",
      image: "images/hero_3.png"
    }
  ];

  const categories = ['All', 'Reactive Dyes', 'Acid Dyes', 'Pigments', 'Auxiliaries', 'Direct Dyes'];
  const filteredProducts = activeCategory === 'All' ? productsList : productsList.filter(p => p.category === activeCategory);

  useEffect(() => {
    // Global error logger to help debug white screen on GitHub Pages
    window.onerror = function (msg, url, line, col, error) {
      console.log('UNCAUGHT ERROR:', msg, 'at', url, ':', line, ':', col);
    };

    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      fetchProducts();
    }

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(slideInterval);
    };
  }, [slides.length]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/products');
      const data = await response.json();
      setProductsList(data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  const handleAddProduct = async (product) => {
    try {
      const response = await fetch('http://localhost:5000/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...product, id: Date.now().toString() })
      });
      if (response.ok) fetchProducts();
    } catch (err) {
      console.error("Failed to add product:", err);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/products/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) fetchProducts();
    } catch (err) {
      console.error("Failed to delete product:", err);
    }
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const navigateTo = (pageName) => {
    setCurrentPage(pageName);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#050769aa] font-sans selection:bg-[#050769aa] selection:text-[#ffffff]">

      {/* Hide navbar on Login page for clean UI */}
      {currentPage !== 'LOGIN' && (
        <Navbar
          isScrolled={isScrolled}
          currentPage={currentPage}
          navLinks={navLinks}
          navigateTo={navigateTo}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      )}

      {/* --- PAGE CONTENT ROUTER --- */}
      {currentPage === 'HOME' && (
        <>
          <Hero
            slides={slides}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
          />
          <CorporateProfile />
          <ProductCatalog
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            filteredProducts={filteredProducts}
          />
          <Infrastructure />
          <Contact />
        </>
      )}

      {currentPage === 'ABOUT US' && <AboutPage />}

      {currentPage === 'PRINCIPLES' && <PrinciplesPage />}

      {currentPage === 'PRODUCT' && (
        <div className="pt-24 min-h-screen">
          <ProductCatalog
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            filteredProducts={filteredProducts}
          />
        </div>
      )}

      {currentPage === 'BLOG' && <BlogPage />}

      {currentPage === 'CONTACT US' && (
        <div className="pt-24 min-h-screen">
          <Contact />
        </div>
      )}

      {currentPage === 'LOGIN' && (
        <Login onLogin={(user) => {
          setUser(user);
          navigateTo('ADMIN');
        }} />
      )}

      {currentPage === 'ADMIN' && (
        user ? (
          <AdminPanel
            products={productsList}
            onAdd={handleAddProduct}
            onDelete={handleDeleteProduct}
            onLogout={() => {
              setUser(null);
              navigateTo('HOME');
            }}
          />
        ) : (
          <Login onLogin={(user) => {
            setUser(user);
            navigateTo('ADMIN');
          }} />
        )
      )}

      {/* --- RENDER FALLBACK FOR UNHANDLED ROUTES --- */}
      {!['HOME', 'ABOUT US', 'PRINCIPLES', 'PRODUCT', 'BLOG', 'CONTACT US', 'LOGIN', 'ADMIN'].includes(currentPage) && (
        <PlaceholderPage title={currentPage} />
      )}

      {currentPage !== 'LOGIN' && <Footer navigateTo={navigateTo} />}
    </div>
  );
};

export default App;