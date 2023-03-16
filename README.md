<div align="center">
  <h1>HireMeow</h1>
  <p>A site for job seekers to find jobs and employers to find job seekers</p>
</div>

# Tech Stack
## Front-End
<div>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white" />
  <img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white" />
  <img src="https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white" />
</div>

## Back-End
<div>
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
</div>

## Miscellaneous
<div>
  <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" />
  <img src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white" />
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
  <img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=for-the-badge&logo=Canva&logoColor=white" />
</div>

# Primary Features

## Authentication
Upon entering the page, users will be greeted with an authentication page, where they will have the opportunity to login as either a job seeker or employer.

As a guest, users will only have access to the main page and blog.

## Calendar & Notifications
Both job seekers and employers have the opportunity to schedule and display upcoming interviews and phone calls in an interactive calendar.

## Main Page
  ### Job Seekers
  Job seekers can search based on keyword search with job titles and filter job listings based on type of employment, experience level, environment, salary, and date posted.
  
  Job seekers can mark a job based on their interest levels. This will save the job listing in their "My Jobs" page.
  
  ### Employers
  Employers can do a keyword search based on job seeker's title.
  
  Employers can mark a job seeker based on their interest levels. This will save the job seeker in their "My Seekers" page.
  
## My Jobs & My Seekers
  ### Job Seekers
  Job seekers will have access to a "My Jobs" page, which will display all their saved jobs that they marked as interested, very interested, and extremely interested. Among these jobs, job seekers will have the ability to apply to multiple jobs at once. This will move the interested jobs to applied jobs. Applied jobs will automatically move to Interviewed jobs once the time has passed.
  
  ### Employers
  Employers will have access to a "My Seekers" page, which will display all their saved seekers that they marked as interested, very interested, and extremely interested.
  
## Notes
Both job seekers and employers have the opportunity to add notes about jobs, companies, interviews, people, etc.

## Resume
Job seekers have the ability to upload their resume that can be sent to various job listings.

## Blog
All users can read informative and inspirational blog posts.

# Getting Started
1. Clone the repository
```
git clone https://github.com/HR-Smoochum/JobSite.git
```
2. Install all the dependencies
```
npm install
```
3. Starting Webpack and the Server
```
npm run client-dev
npm run server-dev
```
4. Seed the database
```
npm run seed
```
5. Open Live Server
```
npm run start
```
