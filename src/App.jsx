import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Server, 
  Cpu, 
  Shield, 
  BarChart3, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react'
import './App.css'

// Import images
import serverRoomHero from './assets/server-room-hero.jpg'
import iotSensors from './assets/iot-sensors.jpg'
import dashboardMockup from './assets/dashboard-mockup.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  // Navigation items
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Success Stories', href: '#success-stories' },
    { name: 'Partners', href: '#partners' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

  // Technology partners data
  const partners = [
    { name: 'Gallagher', category: 'Security' },
    { name: 'Schneider Electric', category: 'Automation' },
    { name: 'RAK Wireless', category: 'IoT' },
    { name: 'Hikvision', category: 'Surveillance' },
    { name: 'Suprema', category: 'Biometrics' },
    { name: 'SenseTime', category: 'AI' },
    { name: 'ABB', category: 'Industrial' },
    { name: 'STMicroelectronics', category: 'Semiconductors' },
    { name: 'Microchip', category: 'Microcontrollers' }
  ]

  // Success stories data
  const successStories = [
    {
      title: 'NACS Port Management',
      subtitle: '10th Busiest Port in the World',
      description: 'Web-based port gate pass management system serving 8,000-10,000 daily users with comprehensive access management and analytics.',
      metrics: ['8,000-10,000 daily users', 'Pass payment management', 'Admin analytics'],
      client: 'Northport'
    },
    {
      title: 'Healthcare IoT Deployment',
      subtitle: 'Real-Time Environmental Monitoring',
      description: 'Environmental and power monitoring system deployed across 29 hospitals for critical equipment and area monitoring.',
      metrics: ['29 hospitals deployed', 'Real-time alerts', 'Critical area monitoring'],
      client: 'KPJ Healthcare'
    },
    {
      title: 'Building Management System',
      subtitle: 'Integrated VMS Solution',
      description: 'Comprehensive visitor management with biometric integration, CCTV systems, and facial recognition capabilities.',
      metrics: ['Biometric integration', 'CCTV integration', 'Facial recognition'],
      client: 'UOA Group'
    },
    {
      title: 'Water Quality Monitoring',
      subtitle: 'IoT-Enabled Pool Management',
      description: 'Real-time swimming pool water quality monitoring with pH, temperature, TDS, and chlorine level tracking.',
      metrics: ['Real-time monitoring', 'Multi-parameter tracking', 'Automated alerts'],
      client: 'Sunway'
    }
  ]

  // Core solutions data
  const solutions = [
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Enterprise Asset Management (EAM)',
      description: 'Comprehensive asset registration, QR-based identification, warranty tracking, and lifecycle management for optimal asset utilization.',
      features: ['Asset Registration & Tracking', 'QR-Based Identification', 'Warranty Management', 'Lifecycle Optimization']
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Computerized Maintenance Management (CMMS)',
      description: 'Preventive maintenance scheduling, work order management, and breakdown response systems to minimize downtime.',
      features: ['Preventive Maintenance', 'Work Order Management', 'Breakdown Response', 'Service History Tracking']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'IoT Integration Platform',
      description: 'Real-time monitoring, environmental tracking, and automated alert systems for comprehensive facility oversight.',
      features: ['Real-Time Monitoring', 'Environmental Tracking', 'Automated Alerts', 'Data Analytics']
    }
  ]

  // Key features data
  const keyFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'End-to-End IoT Solution',
      description: 'Complete ecosystem from sensors to dashboards'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Data-Driven Insights',
      description: 'Real-time analytics for informed decision making'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Mobile & Cloud Ready',
      description: 'Access your systems anywhere, anytime'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Regulatory Compliance',
      description: 'Built-in compliance for industry standards'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="text-2xl font-bold text-blue-900">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    AMS
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(26, 35, 126, 0.8), rgba(26, 35, 126, 0.6)), url(${serverRoomHero})`
            }}
          />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Malaysian Digital Status Certified
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Asset Management
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Revolution
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Transforming facility operations with intelligent IoT solutions, real-time monitoring, 
              and automated asset management systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900 text-lg px-8 py-3">
                View Success Stories
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Company Overview Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Leading Innovation in Facility Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced Microelectronic Solutions (AMS) specializes in innovative engineering and IT solutions 
              focused on facility management operations. We develop integrated technologies and automated 
              solutions using the latest automation technologies available in the market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Server className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle>Remote Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Enabling remote monitoring and digitizing processes and flows are at the heart of our organization.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cpu className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle>Integrated Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We develop integrated technologies and automated solutions through utilizing the latest automation technologies.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle>Proven Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Trusted by industry leaders across Malaysia with deployments in ports, hospitals, and major facilities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Asset Management Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated approach combines intelligent hardware and software to deliver real-time visibility, 
              streamlined operations, and scalable deployment across your organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <div className="text-blue-600">
                        {solution.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                    <CardDescription className="text-base">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Sets Us Apart
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success-stories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From the world's busiest ports to critical healthcare facilities, our solutions deliver 
              measurable improvements in efficiency, safety, and operational excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="text-blue-600 border-blue-600">
                        {story.client}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{story.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600">
                      {story.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{story.description}</p>
                    <div className="space-y-2">
                      {story.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners Section */}
      <section id="partners" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Powered by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with the world's leading technology companies to deliver cutting-edge solutions 
              that meet the highest standards of reliability and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
              >
                <div className="h-16 flex items-center justify-center mb-3">
                  <div className="text-2xl font-bold text-gray-800">{partner.name}</div>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {partner.category}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with our experts to discover how AMS can revolutionize your asset management 
              and facility operations with our proven IoT solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-blue-100">+60 3-XXXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-blue-100">info@amsolutions.my</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-blue-100">Kuala Lumpur, Malaysia</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mr-4">
                    <ExternalLink className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Website</p>
                    <a href="https://www.amsolutions.my" className="text-blue-100 hover:text-white transition-colors">
                      www.amsolutions.my
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white text-gray-900">
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Send Message
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  AMS
                </span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Advanced Microelectronic Solutions - Leading the asset management revolution with 
                innovative IoT solutions and facility management technologies.
              </p>
              <Badge className="bg-blue-100 text-blue-800">
                Malaysian Digital Status Certified
              </Badge>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</a></li>
                <li><a href="#success-stories" className="text-gray-300 hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#partners" className="text-gray-300 hover:text-white transition-colors">Partners</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Kuala Lumpur, Malaysia</li>
                <li>info@amsolutions.my</li>
                <li>www.amsolutions.my</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Advanced Microelectronic Solutions (AMS). All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
