'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Calendar, MapPin, DollarSign, MessageSquare, Star, Sparkles, Camera, Crown, Heart, Menu, X } from 'lucide-react';

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: '',
    location: '',
    serviceType: '',
    eventDate: '',
    budget: '',
    details: ''
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSources = ['/SC hero.mp4', '/SC 1.mp4', '/SC 2.mp4', '/SC 3.mp4'];

  // Handle video end to play next
  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videoSources.length);
  };

  // Reset video when index changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        // Handle autoplay restrictions gracefully
      });
    }
  }, [currentVideoIndex]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `
🌺 *Styled By Cellas Consultation Request* 🌺

👑 Name: ${formData.fullName}
📍 Location: ${formData.location}
✨ Service Type: ${formData.serviceType}
📅 Event Date: ${formData.eventDate}
💰 Budget: ${formData.budget}
💭 Design Inspiration/Details:
${formData.details}
    `.trim();
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=2347057266756&text=${encodedMessage}`, '_blank');
  };

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const services = [
    {
      title: 'Bridal Gowns',
      description: 'Exquisite handcrafted gowns tailored to your unique vision, blending traditional elegance with contemporary sophistication.',
      icon: <Crown className="w-12 h-12 text-royal-champagne" />
    },
    {
      title: 'Statement Asoebi',
      description: 'Show-stopping pieces designed to make you stand out, featuring intricate details and luxurious fabrics.',
      icon: <Sparkles className="w-12 h-12 text-royal-champagne" />
    },
    {
      title: 'Reception Dresses',
      description: 'Elegant and comfortable designs perfect for celebrating your special day in style.',
      icon: <Heart className="w-12 h-12 text-royal-champagne" />
    },
    {
      title: 'Prom Dresses',
      description: 'Glamorous and unforgettable prom dresses designed to make you shine on your big night.',
      icon: <Star className="w-12 h-12 text-royal-champagne" />
    },
    {
      title: 'Custom Bespoke',
      description: 'Completely custom creations designed from scratch to bring your dream look to life.',
      icon: <Sparkles className="w-12 h-12 text-royal-champagne" />
    }
  ];

  const testimonials = [
    {
      name: 'Queen Amara',
      text: 'Styled By Cellas made me feel like royalty on my wedding day. The attention to detail was impeccable!',
      rating: 5
    },
    {
      name: 'Princess Zara',
      text: 'My asoebi was absolutely stunning. I received compliments all night!',
      rating: 5
    },
    {
      name: 'Duchess Nneka',
      text: 'The bespoke experience was worth every penny. Emmanuel and his team are true artists.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-onyx-black text-rich-ivory">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-onyx-black/80 backdrop-blur-md border-b border-royal-champagne/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <img 
                src="/SC Logo.jpeg" 
                alt="Styled By Cellas Logo" 
                className="h-14 w-14 object-contain rounded-full" 
              />
              <h1 className="font-serif text-2xl text-royal-champagne font-bold">Styled By Cellas</h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-rich-ivory hover:text-royal-champagne transition-colors">Home</a>
              <a href="#services" className="text-rich-ivory hover:text-royal-champagne transition-colors">Services</a>
              <a href="#booking" className="text-rich-ivory hover:text-royal-champagne transition-colors">Consultation</a>
              <a href="#gallery" className="text-rich-ivory hover:text-royal-champagne transition-colors">The Vault</a>
              <a href="#testimonials" className="text-rich-ivory hover:text-royal-champagne transition-colors">Testimonials</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-rich-ivory"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-onyx-black/95 border-t border-royal-champagne/20"
            >
              <div className="px-4 py-6 space-y-4">
                <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block text-lg text-rich-ivory hover:text-royal-champagne transition-colors">Home</a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-lg text-rich-ivory hover:text-royal-champagne transition-colors">Services</a>
                <a href="#booking" onClick={() => setMobileMenuOpen(false)} className="block text-lg text-rich-ivory hover:text-royal-champagne transition-colors">Consultation</a>
                <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block text-lg text-rich-ivory hover:text-royal-champagne transition-colors">The Vault</a>
                <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block text-lg text-rich-ivory hover:text-royal-champagne transition-colors">Testimonials</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full overflow-hidden">
        {/* Single sequential video hero */}
        <video
          ref={videoRef}
          key={currentVideoIndex}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSources[currentVideoIndex]} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl mb-6 text-royal-champagne leading-tight">
              Handcrafted<br />Luxury for Queens.
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-2xl lg:text-3xl mb-10 max-w-3xl"
          >
            Exquisite Bridal & Statement Asoebi. Serving royalty worldwide from our atelier in Nigeria.
          </motion.p>
          <motion.button
            onClick={scrollToBooking}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="bg-royal-champagne text-onyx-black px-12 py-5 font-bold text-lg md:text-xl hover:bg-rich-ivory transition-all duration-300 flex items-center gap-3"
            aria-label="Book Your Consultation - scrolls to booking form"
          >
            Book Your Consultation
            <ChevronDown className="w-6 h-6" />
          </motion.button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-rich-ivory/5">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl text-center mb-6 text-royal-champagne"
          >
            Our Royal Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-lg md:text-xl mb-16 max-w-2xl mx-auto"
          >
            Every piece is meticulously handcrafted with passion, precision, and the finest materials to make you feel like the royalty you are.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-onyx-black/50 border border-royal-champagne/30 p-8 hover:border-royal-champagne transition-all duration-300"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="font-serif text-2xl mb-4 text-royal-champagne">{service.title}</h3>
                <p className="text-rich-ivory/80">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl text-center mb-6 text-royal-champagne"
          >
            Begin Your Bespoke Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-lg md:text-xl mb-16 max-w-2xl mx-auto"
          >
            Ready to transform your vision into reality? Fill out the form below and we'll reach out via WhatsApp to discuss your dream look.
          </motion.p>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <label htmlFor="fullName" className="block mb-3 text-sm font-medium">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full bg-rich-ivory/10 border-2 border-royal-champagne/30 p-4 text-rich-ivory focus:outline-none focus:border-royal-champagne transition-colors"
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="location" className="block mb-3 text-sm font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Location (City/Country)
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full bg-rich-ivory/10 border-2 border-royal-champagne/30 p-4 text-rich-ivory focus:outline-none focus:border-royal-champagne transition-colors"
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="serviceType" className="block mb-3 text-sm font-medium">Service Type</label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                className="w-full bg-onyx-black border-2 border-royal-champagne/30 p-4 text-rich-ivory focus:outline-none focus:border-royal-champagne transition-colors"
                aria-required="true"
                style={{ color: 'white' }}
              >
                <option value="" style={{ color: 'white', backgroundColor: '#000' }}>Select a service</option>
                <option value="Bridal Gown" style={{ color: 'white', backgroundColor: '#000' }}>Bridal Gown</option>
                <option value="Statement Asoebi" style={{ color: 'white', backgroundColor: '#000' }}>Statement Asoebi</option>
                <option value="Reception Dress" style={{ color: 'white', backgroundColor: '#000' }}>Reception Dress</option>
                <option value="Prom Dress" style={{ color: 'white', backgroundColor: '#000' }}>Prom Dress</option>
                <option value="Custom Bespoke" style={{ color: 'white', backgroundColor: '#000' }}>Custom Bespoke</option>
              </select>
            </div>
            <div>
              <label htmlFor="eventDate" className="block mb-3 text-sm font-medium flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Event Date
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
                className="w-full bg-rich-ivory/10 border-2 border-royal-champagne/30 p-4 text-rich-ivory focus:outline-none focus:border-royal-champagne transition-colors"
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="budget" className="block mb-3 text-sm font-medium flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Estimated Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full bg-onyx-black border-2 border-royal-champagne/30 p-4 text-rich-ivory focus:outline-none focus:border-royal-champagne transition-colors"
                aria-required="true"
                style={{ color: 'white' }}
              >
                <option value="" style={{ color: 'white', backgroundColor: '#000' }}>Select budget range</option>
                <option value="₦150k-300k" style={{ color: 'white', backgroundColor: '#000' }}>₦150k-300k</option>
                <option value="₦300k-600k" style={{ color: 'white', backgroundColor: '#000' }}>₦300k-600k</option>
                <option value="₦600k+" style={{ color: 'white', backgroundColor: '#000' }}>₦600k+</option>
              </select>
            </div>
            <div>
              <label htmlFor="details" className="block mb-3 text-sm font-medium flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Design Inspiration/Details
              </label>
              <textarea
                id="details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                rows={6}
                required
                className="w-full bg-rich-ivory/10 border-2 border-royal-champagne/30 p-4 text-rich-ivory focus:outline-none focus:border-royal-champagne transition-colors"
                aria-required="true"
                placeholder="Tell us about your dream look, any inspiration images you have, and any special details you'd like to include..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-royal-champagne text-onyx-black py-5 font-bold text-xl hover:bg-rich-ivory transition-all duration-300"
            >
              Submit to Atelier WhatsApp
            </button>
          </motion.form>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 bg-rich-ivory/5">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl text-center mb-6 text-royal-champagne"
          >
            Words From Our Queens
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-lg md:text-xl mb-16 max-w-2xl mx-auto"
          >
            Don't just take our word for it. Hear from the queens who have walked our journey.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-onyx-black/50 border border-royal-champagne/30 p-8"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-royal-champagne fill-royal-champagne" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic text-rich-ivory/90">"{testimonial.text}"</p>
                <p className="font-serif text-xl text-royal-champagne">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl text-center mb-6 text-royal-champagne"
          >
            The Vault
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-lg md:text-xl mb-16 max-w-2xl mx-auto flex items-center justify-center gap-2"
          >
            <Camera className="w-6 h-6 text-royal-champagne" />
            A curated collection of our most stunning creations. Hover to inquire about any look.
          </motion.p>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {['/SC 4.jpg', '/SC 5.jpg', '/SC 6.jpg', '/SC 3.mp4', '/SC 1.mp4', '/SC 2.mp4'].map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="break-inside-avoid mb-6"
              >
                <div className="relative group">
                  {src.endsWith('.mp4') ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full object-cover"
                    >
                      <source src={src} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={src}
                      alt={`Styled By Cellas look ${idx + 1}`}
                      className="w-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href="https://api.whatsapp.com/send?phone=2347057266756"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-royal-champagne text-onyx-black px-8 py-4 font-bold text-lg hover:bg-rich-ivory transition-all duration-300"
                    >
                      Inquire About This Look
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-royal-champagne/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="font-serif text-3xl text-royal-champagne mb-6">Styled By Cellas</h3>
              <p className="text-lg text-rich-ivory/80 mb-6">
                Handcrafted luxury bridal and statement asoebi, designed to make every woman feel like the queen she is.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-xl text-royal-champagne mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-rich-ivory hover:text-royal-champagne transition-colors">Home</a></li>
                <li><a href="#services" className="text-rich-ivory hover:text-royal-champagne transition-colors">Services</a></li>
                <li><a href="#booking" className="text-rich-ivory hover:text-royal-champagne transition-colors">Consultation</a></li>
                <li><a href="#gallery" className="text-rich-ivory hover:text-royal-champagne transition-colors">The Vault</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-xl text-royal-champagne mb-6">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span>WhatsApp:</span>
                  <a href="https://api.whatsapp.com/send?phone=2347057266756" target="_blank" rel="noopener noreferrer" className="text-royal-champagne hover:underline">+234 705 726 6756</a>
                </li>
                <li className="flex items-center gap-2">
                  <span>Location:</span>
                  <span>Lagos, Nigeria 🇳🇬</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-royal-champagne/20 pt-8 text-center space-y-4">
            <p className="font-serif text-xl text-royal-champagne">Styled By Cellas | Handcrafted in Nigeria 🇳🇬</p>
            <p className="text-lg">Serving Queens Worldwide 🌍</p>
            <p className="text-sm text-rich-ivory/60">Engineered by Emmanuel Ogezi</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
