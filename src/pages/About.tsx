import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Heart, Users, Lightbulb, Rocket } from 'lucide-react';
import ceo from '../assets/ceo.jpg';
import cto from '../assets/cto.jpg';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://static.videezy.com/system/resources/previews/000/041/172/original/tech-1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text"
          >
            Elevating Education with Innovation
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed"
          >
            At <span className="font-bold text-blue-400">Stalight Technology</span>, we are redefining learning with AI-driven solutions, immersive experiences, and smart automation. Join us in shaping the future of education.
          </motion.p>
        </div>

      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Team Meeting"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div {...fadeIn} className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-xl text-gray-600">
                To empower educational institutions with cutting-edge technology solutions that enhance learning experiences and streamline administrative processes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Drive innovation in education</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Foster student success</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Build stronger communities</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotate: [0, 5, -5, 5, 0] }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the people driving innovation at Stalight</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)" }}
                className="text-center bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="relative mb-6 inline-block">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const values = [
  {
    title: "Innovation",
    description: "We continuously push boundaries to create cutting-edge solutions that transform education.",
    icon: <Lightbulb className="h-8 w-8 text-blue-600" />
  },
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do, from product development to customer support.",
    icon: <Award className="h-8 w-8 text-blue-600" />
  },
  {
    title: "Impact",
    description: "We measure our success by the positive impact we create in educational institutions.",
    icon: <Rocket className="h-8 w-8 text-blue-600" />
  }
];

const team = [
  {
    name: "Ritesh N",
    role: "Chief Executive Officer",
    bio: "Former educator turned tech innovator with 2+ years of experience in EdTech.",
    image: ceo
  },
  {
    name: "Pannaga J A",
    role: "Chief Technology Officer",
    bio: "Tech visionary with a passion for creating scalable education solutions.",
    image: cto  
  },
];

export default About;
