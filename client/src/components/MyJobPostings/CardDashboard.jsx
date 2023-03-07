/* eslint-disable react/no-array-index-key */
// LIBRARY IMPORTS
import React from 'react';
import {
  SimpleGrid, Tabs, TabList, Tab, TabPanels, TabPanel,
} from '@chakra-ui/react';
import JobCard from './JobCard.jsx';

// LOCAL IMPORTS

// COMPONENT
export default function CardDashboard() {
  const InterestedJobs = [
    {
      id: 1,
      title: 'software engineer',
      location: 'seattle',
      employment: 'remote',
      experience: 'entry level',
      date: '3/1/2023',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
      company: 'google',
      description: `Full Job Description
      The security organization at Uber is dedicated to enabling safe and secure innovation while protecting the communities we serve both online and in the physical world. Our teams are responsible for protecting both people and their data across intersections of the digital and physical world. The primary objective for Uber Engineering Security team is to enable the technical ambitions of the company while maintaining the highest standards of security and privacy for our customers and partners. As cybersecurity threats evolve, so do we.
      About the Role
      Uber is seeking a Senior Software Engineer to join our Application Security team. As a team member, you will help us scale the traditional AppSec model of finding vulnerabilities manually to a fully automated and autonomous system. In this role, you will be tasked with designing, implementing and deploying security automation capable of identifying security vulnerabilities such as XSS, SQLi, CSRF, SSRF, etc. across Uber’s entire organization. You’ll use your SWE skills to raise the security bar across all mobile and web apps at Uber. This is a unique opportunity to work with both senior and new-grad engineers, make a real impact on Uber’s security posture, and continue to up-level your own software engineering skill while building your security knowledge.
      What You'll Do
      Design end to end features and systems for Secret Discovery, Code Scanning, and Vulnerability Remediation applications
      Collaborate and consult with multiple engineering teams and other functional stakeholders from Privacy, Security, Compliance, Infrastructure, and Product for integration into our platform
      Design and develop new systems to empower fast data-driven decisions
      Build distributed backend systems serving real-time analytics features at Uber scale
      Mentor junior engineers
      Basic Qualifications
      BS/BE degree in Computer Science or related fields.
      5+ years of experience in software engineering
      Hands-on experience with Go/Java/C/Python (we use Go!)
      A depth of knowledge in datastore technologies including RDBMS & NoSQL
      Experience implementing REST APIs
      Distributed Messaging / Kafka
      Strong problem solving, service architecture, and coding skills
      Preferred Qualifications
      Master’s (or Ph.D) in Computer Science, Engineering or a related field.
      Experience with building real time data pipelines
      Experience designing, implementing, and deploying production-quality systems
      Experience building out integrations with open source and vendor products
      At Uber, we ignite opportunity by setting the world in motion. We take on big problems to help drivers, riders, delivery partners, and eaters get moving in more than 600 cities around the world.
      We welcome people from all backgrounds who seek the opportunity to help build a future where everyone and everything can move independently. If you have a curiosity, passion and collaborative spirit, work with us, and let’s move the world forward, together.
      Uber is proud to be an Equal Opportunity/Affirmative Action employer. All qualified applicants will receive consideration for employment without regard to sex, gender identity, sexual orientation, race, color, religion, national origin, disability, protected Veteran status, age, or any other characteristic protected by law. We also consider qualified applicants regardless of criminal histories, consistent with legal requirements.
      If you have a disability or special need that requires accommodation, please let us know by completing this form.

      For San Francisco, CA-based roles: The base salary range for this role is $174,000 per year - $193,500 per year. For Seattle, WA-based roles: The base salary range for this role is $174,000 per year - $193,500 per year. For Sunnyvale, CA-based roles: The base salary range for this role is $174,000 per year - $193,500 per year. For all US locations, you will be eligible to participate in Uber's bonus program, and may be offered an equity award & other types of comp. You will also be eligible for various benefits. More details can be found at the following link https://www.uber.com/careers/benefits.`,
    },
    {
      id: 2,
      title: 'Quality assurence',
      location: 'seattle',
      employment: 'remote',
      experience: 'entry level',
      date: '3/2/2023',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg',
      company: 'twitter',
      description: `Full Job Description
      The security organization at Uber is dedicated to enabling safe and secure innovation while protecting the communities we serve both online and in the physical world. Our teams are responsible for protecting both people and their data across intersections of the digital and physical world. The primary objective for Uber Engineering Security team is to enable the technical ambitions of the company while maintaining the highest standards of security and privacy for our customers and partners. As cybersecurity threats evolve, so do we.
      About the Role
      Uber is seeking a Senior Software Engineer to join our Application Security team. As a team member, you will help us scale the traditional AppSec model of finding vulnerabilities manually to a fully automated and autonomous system. In this role, you will be tasked with designing, implementing and deploying security automation capable of identifying security vulnerabilities such as XSS, SQLi, CSRF, SSRF, etc. across Uber’s entire organization. You’ll use your SWE skills to raise the security bar across all mobile and web apps at Uber. This is a unique opportunity to work with both senior and new-grad engineers, make a real impact on Uber’s security posture, and continue to up-level your own software engineering skill while building your security knowledge.
      What You'll Do
      Design end to end features and systems for Secret Discovery, Code Scanning, and Vulnerability Remediation applications
      Collaborate and consult with multiple engineering teams and other functional stakeholders from Privacy, Security, Compliance, Infrastructure, and Product for integration into our platform
      Design and develop new systems to empower fast data-driven decisions
      Build distributed backend systems serving real-time analytics features at Uber scale
      Mentor junior engineers
      `,
    },
    {
      id: 3,
      title: 'Product Manager',
      location: 'seattle',
      employment: 'remote',
      experience: 'entry level',
      date: '3/2/2023',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg',
      company: 'twitter',
      description: `Full Job Description
      The security organization at Uber is dedicated to enabling safe and secure innovation while protecting the communities we serve both online and in the physical world. Our teams are responsible for protecting both people and their data across intersections of the digital and physical world. The primary objective for Uber Engineering Security team is to enable the technical ambitions of the company while maintaining the highest standards of security and privacy for our customers and partners. As cybersecurity threats evolve, so do we.
      About the Role
      Uber is seeking a Senior Software Engineer to join our Application Security team. As a team member, you will help us scale the traditional AppSec model of finding vulnerabilities manually to a fully automated and autonomous system. In this role, you will be tasked with designing, implementing and deploying security automation capable of identifying security vulnerabilities such as XSS, SQLi, CSRF, SSRF, etc. across Uber’s entire organization. You’ll use your SWE skills to raise the security bar across all mobile and web apps at Uber. This is a unique opportunity to work with both senior and new-grad engineers, make a real impact on Uber’s security posture, and continue to up-level your own software engineering skill while building your security knowledge.
      What You'll Do
      Design end to end features and systems for Secret Discovery, Code Scanning, and Vulnerability Remediation applications
      Collaborate and consult with multiple engineering teams and other functional stakeholders from Privacy, Security, Compliance, Infrastructure, and Product for integration into our platform
      Design and develop new systems to empower fast data-driven decisions
      Build distributed backend systems serving real-time analytics features at Uber scale
      Mentor junior engineers
      Basic Qualifications
      BS/BE degree in Computer Science or related fields.
      5+ years of experience in software engineering
      Hands-on experience with Go/Java/C/Python (we use Go!)
      A depth of knowledge in datastore technologies including RDBMS & NoSQL
      Experience implementing REST APIs
      Distributed Messaging / Kafka
      Strong problem solving, service architecture, and coding skills
      Preferred Qualifications
      Master’s (or Ph.D) in Computer Science, Engineering or a related field.
      Experience with building real time data pipelines
      Experience designing, implementing, and deploying production-quality systems
      Experience building out integrations with open source and vendor products
      `,
    },
    {
      id: 4,
      title: 'Project Manager',
      location: 'seattle',
      employment: 'remote',
      experience: 'entry level',
      date: '3/2/2023',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg',
      company: 'twitter',
      description: `Full Job Description
      The security organization at Uber is dedicated to enabling safe and secure innovation while protecting the communities we serve both online and in the physical world. Our teams are responsible for protecting both people and their data across intersections of the digital and physical world. The primary objective for Uber Engineering Security team is to enable the technical ambitions of the company while maintaining the highest standards of security and privacy for our customers and partners. As cybersecurity threats evolve, so do we.
      About the Role
      Uber is seeking a Senior Software Engineer to join our Application Security team. As a team member, you will help us scale the traditional AppSec model of finding vulnerabilities manually to a fully automated and autonomous system. In this role, you will be tasked with designing, implementing and deploying security automation capable of identifying security vulnerabilities such as XSS, SQLi, CSRF, SSRF, etc. across Uber’s entire organization. You’ll use your SWE skills to raise the security bar across all mobile and web apps at Uber. This is a unique opportunity to work with both senior and new-grad engineers, make a real impact on Uber’s security posture, and continue to up-level your own software engineering skill while building your security knowledge.
      What You'll Do
      Design end to end features and systems for Secret Discovery, Code Scanning, and Vulnerability Remediation applications
      Collaborate and consult with multiple engineering teams and other functional stakeholders from Privacy, Security, Compliance, Infrastructure, and Product for integration into our platform
      Design and develop new systems to empower fast data-driven decisions
      Build distributed backend systems serving real-time analytics features at Uber scale
      Mentor junior engineers
      `,
    },
  ];

  return (

    <Tabs isFitted variant="unstyled">
      <TabList>
        <Tab _selected={{ color: 'white', bg: 'brand.green' }}>Interested</Tab>
        <Tab _selected={{ color: 'white', bg: 'brand.green' }}>Very Interested</Tab>
        <Tab _selected={{ color: 'white', bg: 'brand.green' }}>Extremely Interested</Tab>
        <Tab _selected={{ color: 'white', bg: 'brand.green' }}>Applied To</Tab>
        <Tab _selected={{ color: 'white', bg: 'brand.green' }}>Interviewed At</Tab>
      </TabList>
      <TabPanels p="2rem">
        <TabPanel>
          <SimpleGrid spacing={6} templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
            {
              InterestedJobs.map(((Job, index) => {
                return <JobCard Job={Job} key={index} />;
              }
              ))
            }
          </SimpleGrid>
        </TabPanel>
        <TabPanel>Are 1, 2, 3</TabPanel>
        <TabPanel>Red, yellow and blue.</TabPanel>
        <TabPanel>Are 1, 2, 3</TabPanel>
        <TabPanel>Red, yellow and blue.</TabPanel>
      </TabPanels>
    </Tabs>
  );
}

// note on purpose: page to render sets of cards (Interested, Very Interested, Applied to, etc)
