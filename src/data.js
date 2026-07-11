import {
  FaTools,
  FaLightbulb,
  FaHandsHelping,
  FaCheckCircle,
  FaClock,
  FaDraftingCompass,
  FaUserFriends,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaHome,
  FaBuilding,
} from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import {
  blog1,
  blog2,
  blog3,
  member1,
  member2,
  member3,
  member4,
  member5,
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
  user1,
  user2,
  user3,
  user4,
} from "./assets";

export const navigations = [
  { label: "About Us", to: "about" },
  { label: "Services", to: "services" },
  { label: "Portfolio", to: "portfolio" },
  { label: "Team", to: "team" },
  { label: "Testimonials", to: "testimonials" },
  { label: "Contact Us", to: "contact" },
];

export const keypoints = [
  {
    icon: <FaTools />,
    title: "Expert Technical Execution",
  },
  {
    icon: <FaRegClock />,
    title: "On-Time Project Delivery",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovative Automation Solutions",
  },
  {
    icon: <FaHandsHelping />,
    title: "Client-Focused Engineering",
  },
];

export const whyChooseUs = [
  {
    title: "Unmatched Quality",
    icon: <FaCheckCircle />,
    description: "Premium electrical and automation workmanship",
  },
  {
    title: "Timely Delivery",
    icon: <FaClock />,
    description: "Projects completed on schedule and within budget",
  },
  {
    title: "Innovative Solutions",
    icon: <FaDraftingCompass />,
    description: "Advanced automation and power engineering",
  },
  {
    title: "Focused Service",
    icon: <FaUserFriends />,
    description: "Dedicated to client satisfaction and safety",
  },
];

export const services = [
  {
    title: "Electrical Installations",
    icon: <FaHome />,
    description: `HV & LV electrical systems, switchboards, distribution boards, cable tray containment, and complete project installations.`,
  },
  {
    title: "Industrial Automation",
    icon: <FaBuilding />,
    description: `Automation & control systems, PLC integration, process control, and smart industrial solutions.`,
  },
  {
    title: "Power Systems & Maintenance",
    icon: <FaTools />,
    description: `Power infrastructure, electrical maintenance, emergency lighting, and reliable technical support.`,
  },
];

export const portfolio = [
  {
    title: "Industrial Power Distribution Project",
    image: portfolio1,
    date: "March 2025",
    category: "Power Systems",
    description: `Complete HV/LV power distribution system installation for a major manufacturing facility in Lagos, including main switchboards and distribution boards.`,
  },
  {
    title: "Factory Automation Upgrade",
    image: portfolio2,
    date: "October 2024",
    category: "Automation",
    description: `Full automation and control system implementation for a food processing plant, improving efficiency and operational reliability.`,
  },
  {
    title: "Commercial Electrical Infrastructure",
    image: portfolio3,
    date: "June 2025",
    category: "Commercial",
    description: `Comprehensive electrical installation and cable tray containment for a large office complex in Ikeja.`,
  },
  {
    title: "Emergency Lighting & Safety Systems",
    image: portfolio4,
    date: "January 2025",
    category: "Safety Systems",
    description: `Design and installation of exit emergency lighting and safety systems across multiple industrial facilities.`,
  },
  {
    title: "High-Capacity Power Project",
    image: portfolio5,
    date: "August 2024",
    category: "Power Systems",
    description: `Large-scale electrical power infrastructure project delivering reliable power solutions for an industrial client.`,
  },
  {
    title: "Process Control Automation",
    image: portfolio6,
    date: "April 2025",
    category: "Automation",
    description: `Advanced automation systems for process control, including integration and technical support for smooth operations.`,
  },
];

export const teamMembers = [
  {
    fullName: "Stephen Ogbonna",
    image: member1,
    title: "Operations Director",
    whatsapp: "+2348012345678",   // ← Change to real number
    socialMedias: [
      { name: "Facebook", icon: <FaFacebook />, href: "https://facebook.com" },
      { name: "LinkedIn", icon: <FaLinkedin />, href: "https://linkedin.com" },
      { name: "Youtube", icon: <FaYoutube />, href: "https://youtube.com" },
      { name: "Instagram", icon: <FaInstagram />, href: "https://instagram.com" },
    ]
  },
  {
    fullName: "Esther Ibang",
    image: member2,
    title: "Admin Manager",
    whatsapp: "+2348098765432",   // ← Change to real number
    socialMedias: [
      { name: "Facebook", icon: <FaFacebook />, href: "https://facebook.com" },
      { name: "LinkedIn", icon: <FaLinkedin />, href: "https://linkedin.com" },
      { name: "Youtube", icon: <FaYoutube />, href: "https://youtube.com" },
      { name: "Instagram", icon: <FaInstagram />, href: "https://instagram.com" },
    ]
  },
  {
    fullName: "Yaya Usman",
    image: member3,
    title: "Project Director",
    whatsapp: "+2348034567890",   // ← Change to real number
    socialMedias: [
      { name: "Facebook", icon: <FaFacebook />, href: "https://facebook.com" },
      { name: "LinkedIn", icon: <FaLinkedin />, href: "https://linkedin.com" },
      { name: "Youtube", icon: <FaYoutube />, href: "https://youtube.com" },
      { name: "Instagram", icon: <FaInstagram />, href: "https://instagram.com" },
    ]
  },
  {
    fullName: "Donald Egwuagu",
    image: member4,
    title: "Project Site Manager",
    whatsapp: "+2348056789012",   // ← Change to real number
    socialMedias: [
      { name: "Facebook", icon: <FaFacebook />, href: "https://facebook.com" },
      { name: "LinkedIn", icon: <FaLinkedin />, href: "https://linkedin.com" },
      { name: "Youtube", icon: <FaYoutube />, href: "https://youtube.com" },
      { name: "Instagram", icon: <FaInstagram />, href: "https://instagram.com" },
    ]
  },
  {
    fullName: "Kennedy James",
    image: member5,
    title: "Technical Director",
    whatsapp: "+2348078901234",   // ← Change to real number
    socialMedias: [
      { name: "Facebook", icon: <FaFacebook />, href: "https://facebook.com" },
      { name: "LinkedIn", icon: <FaLinkedin />, href: "https://linkedin.com" },
      { name: "Youtube", icon: <FaYoutube />, href: "https://youtube.com" },
      { name: "Instagram", icon: <FaInstagram />, href: "https://instagram.com" },
    ]
  },
];

export const testimonials = [
  {
    name: "Folake Adekunle",
    image: user1,
    review: `Dynamic Technique delivered exceptional electrical and automation work. Their professionalism and technical expertise made our project a huge success.`,
  },
  {
    name: "Jide Akinwale",
    image: user2,
    review: `Reliable, timely, and high-quality service. They handled our industrial power installation flawlessly. Highly recommended.`,
  },
  {
    name: "Chiamaka Nwachukwu",
    image: user3,
    review: `Professional team with deep knowledge in automation and power systems. They exceeded our expectations in every aspect.`,
  },
  {
    name: "Tunde Balogun",
    image: user4,
    review: `Outstanding electrical engineering and maintenance services. A true partner for industrial projects in Nigeria.`,
  },
];

export const blogs = [
  {
    title: "Latest Trends in Industrial Automation 2026",
    content: `Explore the newest advancements in automation, control systems, and smart power solutions transforming industries across Nigeria.`,
    image: blog1,
  },
  {
    title: "Importance of Proper Electrical Maintenance",
    content: `Why regular electrical maintenance and power system audits are critical for safety, efficiency, and minimizing downtime.`,
    image: blog2,
  },
  {
    title: "Best Practices for HV/LV Power Installations",
    content: `Essential tips and industry standards for successful high and low voltage electrical installations.`,
    image: blog3,
  },
];

export const footer = [
  {
    title: "Company",
    routes: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Careers", href: "#" },
      { name: "Contact Us", href: "#contact" },
    ],
  },
  {
    title: "Services",
    routes: [
      { name: "Electrical Installations", href: "#services" },
      { name: "Industrial Automation", href: "#services" },
      { name: "Power Systems", href: "#services" },
      { name: "Maintenance & Support", href: "#services" },
    ],
  },
  {
    title: "Resources",
    routes: [
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  },
];

export const socialHandles = [
  { name: "Facebook", icon: <FaFacebook />, link: "https://www.facebook.com/wegivethebestindustrialquality" },
  { name: "Instagram", icon: <FaInstagram />, link: "https://www.instagram.com" },
  { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com" },
  { name: "Youtube", icon: <FaYoutube />, link: "https://www.youtube.com" },
];