import React from 'react';
import CopyableContent from '@/app/components/CopyableContent';

const applicationInfo = {
  personalInfo: {
    firstName: "Mohith Sarma",
    lastName: "Koratamaddi Lakshmi Koundinya",
    fullName: "Koratamaddi Lakshmi Koundinya Mohith Sarma",
    address: "123 bangalore",
    city: "Bangalore",
    email: "klkmohith00@gmail.com",
    phone: "1231231234",
    pincode: "560066",
    linkedin: "https://www.linkedin.com/in/mohith-sarma-k-l-k-445bb2160/"
  },
  education: {
    college: "International Institute of Information Technology Bangalore (IIITB)"
  },
  workExperience: [
    {
      company: "Mediatek",
      jobTitle: "Senior Engineer",
      jobDetails: "- Worked as a Senior Engineer in Mobility Management module in 2G and GPRS Mobility Management module in 3G . - Having understanding of MM/GMM Module with respect to NAS in the Modem Architecture. - Solving issues in the Mobility Management module of Modem device."
    },
    {
      company: "American Express",
      jobTitle: "Analyst Intern",
      jobDetails: "Data analytics intern in Credit & Fraud Risk Department with experience developing Python scripts to automate data import tasks. Created a script in Jupyter Notebook that uses SQL to get the required data from a database and then creates a new SQL query for importing the database, depending on the date, time, and other requirements of the required data. Script used for team analysis and improving issue response time."
    }
  ]
};

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">ClipCV - Your Application Information</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Personal Information</h2>
        {Object.entries(applicationInfo.personalInfo).map(([key, value]) => (
          <CopyableContent 
            key={key} 
            content={value} 
            label={key.charAt(0).toUpperCase() + key.slice(1)} 
          />
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <CopyableContent 
          content={applicationInfo.education.college} 
          label="College" 
        />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>
        {applicationInfo.workExperience.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-medium">{exp.company} - {exp.jobTitle}</h3>
            <CopyableContent 
              content={`${exp.company} - ${exp.jobTitle}\n\n${exp.jobDetails}`} 
              label="Details" 
            />
          </div>
        ))}
      </section>
    </div>
  );
}