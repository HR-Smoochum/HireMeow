<div align="center">
  <h1>HireMeow</h1>
  <p>A site for job seekers to find jobs and employers to find job seekers</p>
</div>

# Tech Stack
## Front-End
<div>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/static/v1?style=for-the-badge&message=React+Router&color=CA4245&logo=React+Router&logoColor=FFFFFF&label=">
  <img src='https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' />
  <img src="https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white" />
  <img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white" />
  <img src="https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white" />
</div>

## Back-End
<div>
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
</div>

## Miscellaneous
<div>
  <img src='https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' />
  <img src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' />
  <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" />
  <img src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white" />
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
  <img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=for-the-badge&logo=Canva&logoColor=white" />
</div>

# Primary Features

## Authentication
Upon entering the page, users will be greeted with an authentication page, where they will have the opportunity to login as either a job seeker or employer.

As a guest, users will only have access to the main page and blog.

![loginAuth](https://user-images.githubusercontent.com/115492619/224514549-843be203-4ab6-4e38-bc58-b79b9da01e55.gif)

## Calendar & Notifications
Both job seekers and employers have the opportunity to schedule and display upcoming interviews and phone calls in an interactive calendar.

## Main Search Page
Created By: [Archaa Shrivastav](https://github.com/avinashi10)

  ### Job Seekers
  Job seekers can search based on keyword search with job titles and filter job listings based on type of employment, experience level, environment, salary, and date posted.
  ![searchPage](https://user-images.githubusercontent.com/115492619/225764005-bafc4efa-5935-4f1c-843a-359eac419329.gif)

  
  Job seekers can mark a job based on their interest levels. This will save the job listing in their "My Jobs" page.
  
  ### Employers
  Employers can do a keyword search based on job seeker's title.
  
  Employers can mark a job seeker based on their interest levels. This will save the job seeker in their "My Seekers" page.
  
## My Jobs & My Seekers
Created By: [Demi Gao](https://github.com/demiko55)

  ### Job Seekers
  Job seekers will have access to a "My Jobs" page, which will display all their saved jobs that they marked as interested, very interested, and extremely interested. Among these jobs, job seekers will have the ability to apply to multiple jobs at once. This will move the interested jobs to applied jobs. Applied jobs will automatically move to Interviewed jobs once the time has passed.

![mySavedJobs](https://user-images.githubusercontent.com/116925220/224516671-f820293c-fa7f-4e4c-ba20-fa3602de978e.gif)
  
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

# Our Team
| Member | Role | Lead Component |
| --- | --- | --- |
| [Donna Wong](https://github.com/donnatopia) | Project Owner | Header |
| [Archaa Shrivastav](https://github.com/avinashi10) | Project Owner | Main Page |
| [Patrick Kelly](https://github.com/Patrick-Kelly-1330) | Architect | Resume, Blog, Notes |
| [Daniel Greaves](https://github.com/dgreaves18) | Architect | Authentication
| [Kathy Ye](https://github.com/kathyye15)| UI Designer | Calendar |
| [Demi Gao](https://github.com/demiko55) | UI Designer | My Jobs/My Seekers |
