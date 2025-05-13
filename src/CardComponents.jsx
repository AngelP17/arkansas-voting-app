import React, { useState } from 'react';
import { ChevronRight, ArrowRight, Award, Users, CheckCircle, AlertTriangle, HelpCircle, Calendar, MapPin, Clock, FileText, Info, ExternalLink, Phone } from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

// 1. Basic Info Card
export const BasicInfoCard = ({ title, description, icon, bgColor = "bg-white", borderColor = "border-blue-500" }) => (
  <div className={`${bgColor} p-6 rounded-lg shadow-md border-l-4 ${borderColor} hover:shadow-lg transition-shadow duration-300`}>
    <div className="flex items-start">
      <div className="mr-4 text-blue-600">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  </div>
);

// 2. Call to Action Card
export const CTACard = ({ title, description, buttonText, icon, primary = true }) => (
  <div className={`${primary ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 border border-gray-200'} p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
    <div className="flex items-center mb-4">
      <div className={`p-3 rounded-full ${primary ? 'bg-blue-500' : 'bg-blue-100'} mr-4`}>
        {React.cloneElement(icon, { color: primary ? "white" : "#3B82F6", size: 24 })}
      </div>
      <h3 className="font-bold text-xl">{title}</h3>
    </div>
    <p className={`mb-6 ${primary ? 'text-blue-100' : 'text-gray-600'}`}>{description}</p>
    <button className={`w-full py-3 rounded-lg font-medium flex justify-center items-center ${
      primary
        ? 'bg-white text-blue-600 hover:bg-blue-50'
        : 'bg-blue-600 text-white hover:bg-blue-700'
    } transition duration-300`}>
      {buttonText} <ArrowRight className="ml-2" size={18} />
    </button>
  </div>
);

// 3. Stat Card
export const StatCard = ({ number, label, icon, color = "bg-blue-600" }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className={`${color} h-2`}></div>
    <div className="p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-3xl font-bold mb-1">{number}</h3>
          <p className="text-gray-600">{label}</p>
        </div>
        <div className={`p-3 rounded-full ${color.replace('bg-', 'bg-').replace('600', '100')}`}> {/* color for icon bg */}
          {React.cloneElement(icon, { color: color.replace('bg-', 'text-'), size: 24 })}
        </div>
      </div>
    </div>
  </div>
);

// 4. Feature Card with Border Accent
export const FeatureCard = ({ icon, title, description, accentColor = "border-blue-500" }) => (
  <div className={`bg-white p-6 rounded-lg shadow-md border-t-4 ${accentColor} hover:shadow-lg transition duration-300`}>
    <div className="flex items-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// 5. Resource Card
export const ResourceCard = ({ icon, title, description, linkText, linkUrl }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <div className="flex items-center mb-4">
      <div className="p-2 bg-blue-100 rounded-full mr-3">
        {React.cloneElement(icon, { color: "#3B82F6", size: 20 })}
      </div>
      <h3 className="font-bold text-lg">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <a href={linkUrl} className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
      {linkText} <ExternalLink size={16} className="ml-1" />
    </a>
  </div>
);

// 6. Challenge/Solution Card
export const IssueSolutionCard = ({ title, challenge, solution }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <h3 className="text-xl font-bold mb-4 text-blue-700">{title}</h3>
    <div className="mb-4 bg-red-50 p-4 rounded-lg">
      <div className="flex items-start">
        <AlertTriangle className="text-red-600 mr-2 mt-1 flex-shrink-0" size={18} />
        <div>
          <p className="font-semibold text-red-700 mb-1">Challenge:</p>
          <p className="text-gray-700">{challenge}</p>
        </div>
      </div>
    </div>
    <div className="bg-green-50 p-4 rounded-lg">
      <div className="flex items-start">
        <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
        <div>
          <p className="font-semibold text-green-700 mb-1">Solution:</p>
          <p className="text-gray-700">{solution}</p>
        </div>
      </div>
    </div>
  </div>
);

// 7. Voting Timeline Card
export const TimelineCard = ({ date, event, status, description }) => {
  let statusColor;
  let statusIcon;
  
  switch (status) {
    case 'completed':
      statusColor = 'bg-green-100 text-green-700';
      statusIcon = <CheckCircle size={14} />;
      break;
    case 'upcoming':
      statusColor = 'bg-blue-100 text-blue-700';
      statusIcon = <Calendar size={14} />;
      break;
    case 'urgent':
      statusColor = 'bg-red-100 text-red-700';
      statusIcon = <AlertTriangle size={14} />;
      break;
    default:
      statusColor = 'bg-gray-100 text-gray-700';
      statusIcon = <Info size={14} />;
  }
  
  return (
    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-lg">{event}</h3>
        <div className={`${statusColor} px-3 py-1 rounded-full text-xs font-medium flex items-center`}>
          {statusIcon}
          <span className="ml-1">{status.charAt(0).toUpperCase() + status.slice(1)}</span>
        </div>
      </div>
      <p className="text-blue-600 font-medium mb-3">{date}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// 8. FAQ Card
export const FAQCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button 
        className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-bold text-lg">{question}</h3>
        <ChevronRight 
          className={`transition-transform duration-300 ${isOpen ? 'transform rotate-90' : ''}`} 
          size={20} 
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

// 9. Testimonial Card
export const TestimonialCard = ({ quote, name, role, location }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <div className="mb-4 text-blue-600">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="36" 
        height="36" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
        <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
      </svg>
    </div>
    <p className="text-gray-700 mb-6 italic">{quote}</p>
    <div>
      <p className="font-bold">{name}</p>
      <p className="text-gray-600 text-sm">{role}, {location}</p>
    </div>
  </div>
);

// 10. Team Member Card
export const TeamMemberCard = ({ name, role, bio, imageUrl = null }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
    {imageUrl ? (
      <img src={imageUrl} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
    ) : (
      <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
        <Users size={32} className="text-blue-600" />
      </div>
    )}
    <h3 className="font-bold text-xl mb-1">{name}</h3>
    <p className="text-blue-600 mb-3">{role}</p>
    <p className="text-gray-600">{bio}</p>
  </div>
);

// 11. Progress Card
export const ProgressCard = ({ title, description, progress, color = "bg-blue-600" }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="font-bold text-lg mb-1">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
      <div className={`${color} h-2.5 rounded-full`} style={{ width: `${progress}%` }}></div>
    </div>
    <p className="text-right text-sm text-gray-600">{progress}% Complete</p>
  </div>
);

// 12. County Voting Info Card
export const CountyInfoCard = ({ county, registrationDeadline, earlyVotingStarts, pollingLocations, contactPhone }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-gray-200">
    <h3 className="font-bold text-xl text-blue-700 mb-4">{county} County</h3>
    <ul className="space-y-3">
      <li className="flex items-start">
        <Calendar className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={18} />
        <div>
          <p className="font-semibold">Registration Deadline</p>
          <p className="text-gray-600">{registrationDeadline}</p>
        </div>
      </li>
      <li className="flex items-start">
        <Clock className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={18} />
        <div>
          <p className="font-semibold">Early Voting Starts</p>
          <p className="text-gray-600">{earlyVotingStarts}</p>
        </div>
      </li>
      <li className="flex items-start">
        <MapPin className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={18} />
        <div>
          <p className="font-semibold">Polling Locations</p>
          <p className="text-gray-600">{pollingLocations}</p>
        </div>
      </li>
      <li className="flex items-start">
        <Phone className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={18} />
        <div>
          <p className="font-semibold">County Clerk</p>
          <p className="text-gray-600">{contactPhone}</p>
        </div>
      </li>
    </ul>
  </div>
);

// Animated Stat Card
export const AnimatedStatCard = ({ number, label, icon, color = "bg-blue-600" }) => (
  <motion.div
    className="bg-white rounded-lg shadow-md overflow-hidden"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    <div className={`${color} h-2`}></div>
    <div className="p-6">
      <div className="flex justify-between items-start">
        <div>
          <motion.h3 className="text-3xl font-bold mb-1" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.7 }}>{number}</motion.h3>
          <p className="text-gray-600">{label}</p>
        </div>
        <div className={`p-3 rounded-full ${color.replace('bg-', 'bg-').replace('600', '100')}`}>{React.cloneElement(icon, { color: color.replace('bg-', 'text-'), size: 24 })}</div>
      </div>
    </div>
  </motion.div>
);

// Animated Pie Chart
export const AnimatedPieChart = ({ data, colors, label }) => (
  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} label>
          {data.map((entry, idx) => (
            <Cell key={`cell-${idx}`} fill={colors[idx % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
    <span className="mt-2 text-sm text-gray-600">{label}</span>
  </motion.div>
);

// Animated Bar Chart
export const AnimatedBarChart = ({ data, xKey, barKey, colors, label }) => (
  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data}>
        <XAxis dataKey={xKey} stroke="#3B82F6" />
        <YAxis stroke="#3B82F6" />
        <Tooltip />
        <Bar dataKey={barKey} fill={colors[0]} radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
    <span className="mt-2 text-sm text-gray-600">{label}</span>
  </motion.div>
); 