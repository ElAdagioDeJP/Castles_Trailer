"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Shield, Calendar, Wrench, CheckCircle, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

export default function CastleTrailerRepairLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    trailerType: "",
    message: "",
  })

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for contacting Castle's Trailer Repair Services! We'll get back to you soon.")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }

  const trailerServices = [
    {
      name: "RV Trailers",
      image: "https://www.forestriverinc.com/images/category-rv-toyhauler.jpg",
      services: [
        "Winterization / Dewinterization",
        "Complete electrical diagnostics",
        "AUTOTRANSFER SWITCH repair",
        "120v system maintenance",
        "Furnace, A/C, fridge, generator repair",
      ],
    },
    {
      name: "Boat Trailers",
      image: "https://w0.peakpx.com/wallpaper/436/689/HD-wallpaper-chevy-truck-boat-speed-boat-red-custom-truck.jpg",
      services: [
        "Cosmetic damage repair",
        "Fiberglass repair",
        "Wax and buff services",
        "Gel coat cleaning",
        "Structural repairs",
      ],
    },
    {
      name: "Cargo Trailers",
      image:
        "https://c4.wallpaperflare.com/wallpaper/939/651/740/transport-optimus-prime-vehicle-truck-wallpaper-preview.jpg",
      services: [
        "Brake repair (Electric & Hydraulic)",
        "Suspension and axle repair",
        "Custom welding & fabrication",
        "Electrical & lighting systems",
        "Floor and roof repairs",
      ],
    },
    {
      name: "Horse Trailers",
      image: "/images/horse-trailer.webp",
      services: [
        "Interior flooring replacement",
        "Ventilation system repair",
        "Safety equipment installation",
        "Custom modifications",
        "Structural reinforcement",
      ],
    },
    {
      name: "Utility Trailers",
      image: "/images/utility-trailer.jpg",
      services: [
        "Tire changes & maintenance",
        "Brake system repair",
        "Lighting system repair",
        "Hitch and coupling repair",
        "Custom modifications",
      ],
    },
    {
      name: "Dump Trailers",
      image: "/images/dump-trailer.jpg",
      services: [
        "Hydraulic system repair",
        "Dump bed maintenance",
        "Heavy-duty brake repair",
        "Structural welding",
        "DOT inspections",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-blue-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/castle-logo.png"
                  alt="Castle Auto Transport Logo"
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
                <div>
                  <h1 className="text-lg font-bold text-white">Castle's Trailer Repair Services</h1>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white hover:text-blue-400 transition-colors font-medium px-3 py-2"
              >
                Home
              </button>

              <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center text-white hover:text-blue-400 transition-colors font-medium px-3 py-2"
                >
                  Trailer Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-blue-500/30 rounded-lg shadow-xl">
                    <div className="py-2">
                      {trailerServices.map((service, index) => (
                        <button
                          key={index}
                          onClick={() => scrollToSection("trailer-services")}
                          className="block w-full text-left px-4 py-2 text-white hover:bg-blue-600/20 transition-colors"
                        >
                          {service.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-blue-400 transition-colors font-medium px-3 py-2"
              >
                About Us
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-blue-400 transition-colors font-medium px-3 py-2"
              >
                Contact
              </button>

              <div className="flex items-center space-x-2 px-3">
                <span className="text-sm">🇺🇸</span>
                <span className="text-sm">🇪🇸</span>
              </div>

              <a
                href="tel:7037222065"
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors font-semibold px-3 py-2"
              >
                <Phone className="w-4 h-4 mr-2" />
                (703) 722-2065
              </a>

              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule Appointment
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-blue-400">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-gray-900 border-t border-blue-500/30">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => scrollToSection("home")}
                  className="block w-full text-left px-3 py-2 text-white hover:bg-blue-600/20"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("trailer-services")}
                  className="block w-full text-left px-3 py-2 text-white hover:bg-blue-600/20"
                >
                  Trailer Services
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left px-3 py-2 text-white hover:bg-blue-600/20"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block w-full text-left px-3 py-2 text-white hover:bg-blue-600/20"
                >
                  Contact
                </button>
                <a href="tel:7037222065" className="flex items-center px-3 py-2 text-blue-400 font-semibold">
                  <Phone className="w-4 h-4 mr-2" />
                  (703) 722-2065
                </a>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                >
                  Schedule Appointment
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-black via-blue-900 to-black">
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="relative min-h-[700px] flex items-center bg-cover bg-center"
          style={{
            backgroundImage: `url('https://i.pinimg.com/1200x/14/63/47/1463470509def6951a07dc4050d70185.jpg')`,
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                Castle's Trailer Repair Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-blue-100">
                Expert trailer repair services in Leesburg, VA. Over 5 years of experience keeping your trailers, RVs,
                and boats safe and on the road.
              </p>
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-10 py-5 mb-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                Get Free Quote
              </Button>
              <div className="flex flex-wrap items-center gap-6 text-sm md:text-base">
                <span className="flex items-center bg-blue-900/50 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="mr-2">🇺🇸🇪🇸</span>
                  We Speak English & Spanish
                </span>
                <span className="flex items-center bg-blue-900/50 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Weekend Appointments Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-4 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl">
                <Calendar className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Weekend Appointments</h3>
              <p className="text-gray-300">Flexible scheduling for your convenience</p>
            </div>
            <div className="flex flex-col items-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-4 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">5+ Years Experience</h3>
              <p className="text-gray-300">Proven expertise in the industry</p>
            </div>
            <div className="flex flex-col items-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-4 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl">
                <Wrench className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Certified Technicians</h3>
              <p className="text-gray-300">Highly qualified professional staff</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trailer Services Section */}
      <section id="trailer-services" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Trailer Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 mt-6">Specialized repair services for all types of trailers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trailerServices.map((service, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={`${service.name} repair services`}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      priority={index < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <div className="w-12 h-0.5 bg-blue-400"></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {service.services.map((item, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-start group">
                          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-1 rounded-full mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-200">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">About Castle's Trailer Repair Services</h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  With over 5 years of dedicated experience in the trailer repair industry, Castle's Trailer Repair
                  Services has established itself as Leesburg, VA's premier destination for professional trailer
                  maintenance and repair.
                </p>
                <p className="text-lg leading-relaxed">
                  Our team of certified technicians specializes in all types of trailers, from RVs and boats to cargo
                  and utility trailers. We understand that your trailer is an investment, and we're committed to keeping
                  it safe, reliable, and road-ready.
                </p>
                <p className="text-lg leading-relaxed">
                  What sets us apart is our bilingual service (English and Spanish), weekend appointment availability,
                  and our commitment to delivering quality work safely and on time. Every repair is backed by our
                  expertise and dedication to customer satisfaction.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                    <div className="text-sm text-gray-400">Customer Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/team-workshop.jpg"
                alt="Castle's Trailer Repair Services professional team working in our modern workshop facility"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Ready for Expert Trailer Service?</h2>
          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-blue-100">
            Don't let a small problem become a costly repair. Contact Castle's Trailer Repair Services today for
            professional service you can trust.
          </p>
          <Button
            onClick={() => scrollToSection("contact")}
            size="lg"
            className="bg-white text-blue-900 hover:bg-gray-100 font-bold text-xl px-16 py-8 mb-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          >
            Schedule My Repair Now
          </Button>
          <p className="text-lg text-blue-100">
            Or call us directly at{" "}
            <a href="tel:7037222065" className="text-white hover:underline font-bold text-xl">
              (703) 722-2065
            </a>
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Contact Castle's Trailer Repair Services</h2>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full h-12 bg-gray-900 border-2 border-blue-500/30 focus:border-blue-400 rounded-xl text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full h-12 bg-gray-900 border-2 border-blue-500/30 focus:border-blue-400 rounded-xl text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full h-12 bg-gray-900 border-2 border-blue-500/30 focus:border-blue-400 rounded-xl text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <select
                    name="trailerType"
                    value={formData.trailerType}
                    onChange={handleInputChange}
                    required
                    className="w-full h-12 p-3 bg-gray-900 border-2 border-blue-500/30 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white"
                  >
                    <option value="">Trailer Type</option>
                    <option value="rv">RV Trailer</option>
                    <option value="boat">Boat Trailer</option>
                    <option value="cargo">Cargo Trailer</option>
                    <option value="horse">Horse Trailer</option>
                    <option value="utility">Utility Trailer</option>
                    <option value="dump">Dump Trailer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Describe the problem or service you need"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-gray-900 border-2 border-blue-500/30 focus:border-blue-400 rounded-xl text-white placeholder-gray-400"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send Message to Castle's Trailer Repair Services
                </Button>
              </form>
            </div>

            {/* Location Info */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Find Castle's Trailer Repair Services</h2>
              <div className="space-y-8">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-blue-500/30">
                  <iframe
                    title="Castle's Trailer Repair Services Location"
                    width="100%"
                    height="280"
                    style={{ border: 0, borderRadius: "12px" }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=22772%20Evergreen%20Mills%20Rd%2C%20Leesburg%2C%20VA%2020175&output=embed"
                  />
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-3 rounded-xl mr-4 mt-1">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg">Address</p>
                      <p className="text-gray-300">
                        22772 Evergreen Mills Rd
                        <br />
                        Leesburg, VA 20175
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-3 rounded-xl mr-4 mt-1">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg">Phone</p>
                      <a href="tel:7037222065" className="text-gray-300 hover:text-blue-400 font-semibold text-lg">
                        (703) 722-2065
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-3 rounded-xl mr-4 mt-1">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg">Email</p>
                      <a
                        href="mailto:castleautotransport1@gmail.com"
                        className="text-gray-300 hover:text-blue-400 font-semibold"
                      >
                        castleautotransport1@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-3 rounded-xl mr-4 mt-1">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg">Hours</p>
                      <p className="text-gray-300">
                        Monday - Sunday: 8am - 4pm
                        <br />
                        Weekends: By appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-blue-500/30 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/images/castle-logo.png"
                  alt="Castle Auto Transport"
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-bold">Castle's Trailer Repair Services</h3>
                  <p className="text-sm text-blue-300">Delivering Safely On Time!</p>
                </div>
              </div>
              <p className="text-gray-300">
                Expert trailer repair services with over 5 years of experience in Leesburg, VA.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection("trailer-services")}
                    className="text-gray-300 hover:text-white transition-colors font-medium"
                  >
                    Trailer Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-gray-300 hover:text-white transition-colors font-medium"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-300 hover:text-white transition-colors font-medium"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Castle's Trailer Repair Services</h4>
              <div className="space-y-3 text-gray-300">
                <p>22772 Evergreen Mills Rd</p>
                <p>Leesburg, VA 20175</p>
                <a href="tel:7037222065" className="hover:text-white transition-colors font-semibold text-lg">
                  (703) 722-2065
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-500/30 mt-12 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Castle's Trailer Repair Services LLC. All rights reserved. | Delivering Safely On Time!</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
