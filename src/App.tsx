/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Menu, 
  X, 
  Fish, 
  Waves,
  Star,
  Quote
} from "lucide-react";
import { useState, useEffect } from "react";

const LOGO_URL = "https://i.ibb.co/q3smsmJ5/294873701-458203299643879-2337478800690213832-n.jpg";

const GALLERY_IMAGES = [
  "https://i.ibb.co/yFHPBDJq/481479185-1162148892582646-3206867321130219660-n.jpg",
  "https://i.ibb.co/mrNw4K7b/481920872-1161509439313258-5350513555492553308-n.jpg",
  "https://i.ibb.co/KzBBx2fR/481168374-1158534219610780-6164634370700762401-n.jpg",
  "https://i.ibb.co/y2YKYCZ/481958737-1162520569212145-3006615416157075860-n.jpg",
  "https://i.ibb.co/B2XQGTTP/481775536-1164619202335615-7146822258169619871-n.jpg",
  "https://i.ibb.co/Dfb6bvCk/487761959-1188410306623171-6936201465318899817-n.jpg",
  "https://i.ibb.co/Hf6R5RDx/488071828-1189300263200842-2497878437949702704-n.jpg",
  "https://i.ibb.co/P8hkqWG/489245666-1192178709579664-1746216756234435847-n.jpg",
  "https://i.ibb.co/J43MLdp/471256172-18029657594605982-6828340229477848227-n.jpg"
];

const REVIEWS = [
  { text: "Bardzo dobra smażalnia! Świeże ryby, pyszne surówki, szybka obsługa. Porcje duże! Polecam !!!!", author: "Opinia z Facebooka" },
  { text: "Świeże wspaniałe ryby, doskonały smak. Lubię tam wracać", author: "Opinia z Facebooka" },
  { text: "tak powinna smakować rybka nad morzem 😊 pychota 😊", author: "Opinia z Facebooka" },
];

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "O nas", href: "#o-nas" },
    { name: "Galeria", href: "#galeria" },
    { name: "Opinie", href: "#opinie" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-2" : "bg-white/90 backdrop-blur-sm py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src={LOGO_URL} 
              alt="Smażalnia RYBA" 
              className="w-12 h-12 rounded-full border-2 border-sunshine group-hover:rotate-12 transition-transform shadow-sm"
              referrerPolicy="no-referrer"
            />
            <span className="text-2xl font-display text-ocean uppercase tracking-wider hidden sm:block">
              Smażalnia <span className="text-sunshine brightness-90">RYBA</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="font-bold text-ocean hover:text-sunshine transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-sunshine transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <div className="flex items-center gap-4 ml-4">
              <a href="https://www.facebook.com/smazalnia.ryba" target="_blank" rel="noopener noreferrer" className="text-ocean hover:text-sunshine transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/smazalnia_ryba" target="_blank" rel="noopener noreferrer" className="text-ocean hover:text-sunshine transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-ocean p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 top-[64px] bg-white z-40 md:hidden flex flex-col items-center justify-center gap-8"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-display text-ocean hover:text-sunshine transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-6 mt-4">
                <a href="https://www.facebook.com/smazalnia.ryba" className="text-ocean hover:text-sunshine"><Facebook size={32} /></a>
                <a href="https://www.instagram.com/smazalnia_ryba" className="text-ocean hover:text-sunshine"><Instagram size={32} /></a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center pt-20 overflow-hidden grain">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={GALLERY_IMAGES[2]} 
            alt="Pyszna ryba" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-ocean/40 backdrop-blur-[2px]"></div>
        </div>

        {/* Floating Bubbles */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-white/20 rounded-full animate-bubble"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 40 + 10}px`,
                height: `${Math.random() * 40 + 10}px`,
                animationDelay: `${Math.random() * 5}s`,
                bottom: "-50px"
              }}
            ></div>
          ))}
        </div>

        {/* Swimming Fish */}
        <div className="absolute top-1/4 left-0 w-full pointer-events-none z-20">
          <div className="animate-swim flex items-center gap-2">
             <Fish size={60} className="text-sunshine drop-shadow-xl" />
             <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                <div className="w-1 h-1 rounded-full bg-white/50"></div>
             </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 z-30 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl mb-4 drop-shadow-2xl font-display">
              Smażalnia <span className="text-sunshine">RYBA</span>
            </h1>
            <p className="text-xl md:text-3xl font-bold mb-8 max-w-2xl mx-auto drop-shadow-lg leading-relaxed">
              Miejsce dla każdego, kto lubi dobrze zjeść. 
              <br />
              <span className="bg-sunshine text-ocean px-3 py-1 mt-2 inline-block rounded-lg transform -rotate-1">
                Ryby z patelni i z pieca.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#kontakt" className="btn-primary text-xl px-10 py-4 flex items-center gap-2">
                Zarezerwuj stolik <Phone size={24} />
              </a>
              <a href="#galeria" className="bg-white/20 backdrop-blur-md border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-ocean transition-all duration-300">
                Zobacz galerię
              </a>
            </div>
          </motion.div>
        </div>

        {/* Wavy Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-30">
          <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.19,102.66,112,115.9,176.5,123.31,241.13,130.69,306.49,129.58,370,121.28c61.64-8.06,122.31-23.75,185.34-31.54C626.85,81.42,709.67,76.5,780.21,81c70.52,4.48,141.67,18.48,211.83,32.32,71,14,142.27,24.3,207.24,1.75V120H0V0Z" fill="#FFFFFF"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="o-nas" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-sunshine rounded-2xl -z-10 animate-float"></div>
              <img 
                src={GALLERY_IMAGES[4]} 
                alt="Wnętrze smażalni" 
                className="rounded-3xl border-8 border-white shadow-2xl skew-y-1 transform hover:skew-y-0 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-ocean">
                <Fish className="animate-bounce" />
                <span className="uppercase font-bold tracking-widest text-sm">Witamy w RYBIE</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-ocean">
                Smażalnia <br /> z <br />
                <span className="text-sunshine underline decoration-ocean/20">tradycjami.</span>
              </h2>
              <p className="text-xl text-ocean/80 leading-relaxed">
                Jesteśmy miejscem stworzonym z pasji do dobrego jedzenia i nadmorskiego klimatu. 
                Nasze ryby przygotowujemy według sprawdzonych przepisów, oferując zarówno klasyki 
                z patelni, jak i zdrowsze alternatywy prosto z pieca.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-6 bg-sunshine/10 rounded-2xl border-b-4 border-sunshine">
                  <h3 className="text-2xl mb-2">Świeżość</h3>
                  <p className="text-sm">Codzienne dostawy najlepszych ryb prosto z kutra.</p>
                </div>
                <div className="p-6 bg-ocean/5 rounded-2xl border-b-4 border-ocean">
                  <h3 className="text-2xl mb-2">Smak</h3>
                  <p className="text-sm">Domowe surówki i autorskie panierki.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-24 bg-sunshine relative skew-y-2">
        <div className="skew-y-[-2deg] container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl text-ocean mb-4">Galeria Smaku</h2>
            <p className="text-ocean/70 text-lg font-bold">Popatrz jak pysznie u nas jest!</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {GALLERY_IMAGES.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10, rotate: idx % 2 === 0 ? 1 : -1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative aspect-square overflow-hidden rounded-2xl border-4 border-white shadow-xl cursor-pointer group"
              >
                <img 
                  src={img} 
                  alt={`Potrawa ${idx}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-ocean/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Fish size={40} className="text-white drop-shadow-lg" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="opinie" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center gap-1 mb-4 text-sunshine">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
            </div>
            <h2 className="text-5xl text-ocean mb-4">Mówią o nas dobrze</h2>
            <p className="text-ocean/60">Opinie naszych wspaniałych gości</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-xl border-4 border-ocean/5 relative"
              >
                <Quote className="absolute -top-4 -left-4 text-sunshine/40" size={48} />
                <p className="text-lg italic mb-6 leading-relaxed relative z-10 text-ocean/80">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sunshine rounded-full flex items-center justify-center font-bold text-ocean">
                    {review.author[0]}
                  </div>
                  <span className="font-bold text-sm uppercase tracking-wider text-ocean/60">{review.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <a 
               href="https://www.facebook.com/smazalnia.ryba/reviews" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 text-ocean font-bold hover:text-sunshine transition-colors border-b-2 border-sunshine pb-1"
             >
               Zobacz więcej opinii na Facebooku <Facebook size={20} />
             </a>
          </div>
        </div>
      </section>

      {/* Contact & Hours Section */}
      <section id="kontakt" className="py-24 bg-ocean text-white relative overflow-hidden grain">
        {/* Background Waves */}
        <div className="absolute top-0 left-0 w-full rotate-180 leading-[0]">
          <svg className="relative block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.19,102.66,112,115.9,176.5,123.31,241.13,130.69,306.49,129.58,370,121.28c61.64-8.06,122.31-23.75,185.34-31.54C626.85,81.42,709.67,76.5,780.21,81c70.52,4.48,141.67,18.48,211.83,32.32,71,14,142.27,24.3,207.24,1.75V120H0V0Z" fill="#FFFFFF"></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 mt-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl mb-8 flex items-center gap-3">
                  Zapraszamy <Clock className="text-sunshine" />
                </h2>
                <div className="glass-card !bg-white/10 !border-white/20 text-white space-y-4">
                  {[
                    "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"
                  ].map((day) => (
                    <div key={day} className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="font-bold">{day}</span>
                      <span className="bg-sunshine text-ocean px-3 py-1 rounded-full font-bold text-sm">12:00 - 19:00</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <h3 className="text-3xl mb-4">Informacje Kontaktowe</h3>
                <div className="flex flex-col gap-6">
                  <a href="tel:508246477" className="flex items-center gap-4 group">
                    <div className="w-14 h-14 bg-sunshine rounded-full flex items-center justify-center text-ocean group-hover:scale-110 transition-transform">
                      <Phone size={28} />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-white/60">Zadzwoń do nas</p>
                      <p className="text-2xl font-bold">508 246 477</p>
                    </div>
                  </a>
                  <a href="mailto:elipsa.kol@gmail.com" className="flex items-center gap-4 group">
                    <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-sunshine group-hover:scale-110 transition-transform">
                      <Mail size={28} />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-white/60">Email</p>
                      <p className="text-xl">elipsa.kol@gmail.com</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 group">
                    <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-sunshine group-hover:scale-110 transition-transform">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-white/60">Lokalizacja</p>
                      <p className="text-xl">ul. Bolesława Chrobrego 47A, <br /> Ustronie Morskie 78-111</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col h-full">
              <h2 className="text-5xl mb-8 flex items-center gap-3">
                Znajdź nas <MapPin className="text-sunshine" />
              </h2>
              <div className="flex-grow rounded-3xl overflow-hidden border-8 border-white/20 shadow-2xl min-h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2332.916599457288!2d15.756669177194457!3d54.21696470922631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47003b8b91c383b5%3A0xffc712edba4e84bc!2sChrobrego%2047A%2C%2078-111%20Ustronie%20Morskie!5e0!3m2!1spl!2spl!4v1779189528810!5m2!1spl!2spl" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa lokalizacji"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t-8 border-sunshine">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 text-ocean">
          <div className="flex items-center gap-4">
            <img src={LOGO_URL} alt="RYBA" className="w-16 h-16 rounded-full border-2 border-sunshine" />
            <div>
              <h3 className="text-2xl font-display leading-none">Smażalnia RYBA</h3>
              <p className="text-sm font-bold opacity-60">Ustronie Morskie</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://www.facebook.com/smazalnia.ryba" 
              className="w-14 h-14 rounded-full bg-ocean text-white flex items-center justify-center hover:bg-sunshine hover:text-ocean transition-all duration-300 shadow-lg"
              title="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://www.instagram.com/smazalnia_ryba" 
              className="w-14 h-14 rounded-full bg-ocean text-white flex items-center justify-center hover:bg-sunshine hover:text-ocean transition-all duration-300 shadow-lg"
              title="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="font-bold">© {new Date().getFullYear()} Smażalnia RYBA</p>
            <p className="text-xs opacity-60">Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
        
        {/* Animated wave footer decoration */}
        <div className="mt-8 flex justify-center gap-1 overflow-hidden opacity-10">
          {[...Array(50)].map((_, i) => (
             <Waves key={i} className="animate-float" style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      </footer>
    </div>
  );
}
