import React from 'react'
import Header from './Header'
import image from './hdr-bg.jpg'
import ParaTiles from './ParaTiles'
import Table from './Table'
import CareerInfoTile from './CareerInfoTile'

function Bbm() {

    
     const data1 = [
        ["BBM Highlights"],
              [
        "Particular",
        "Values"
      ],
      [
        "Course Type",
        "BBM"
      ],
      [
        "Course Level",
        "Undergraduate"
      ],
      [
        "Duration",
        "3 years"
      ],
      [
        "Eligibility",
        "Completion of 10+2 from a recognised board"
      ],
      [
        "Admission Process",
        "10+2 merit/entrance examination"
      ],
      [
        "Semester Wise/ Year Wise",
        "Semester Wise"
      ],
      [
        "Entrance Examinations",
        "UGAT"
      ],
      [
        "Average Fee",
        "Rs. 50,000 - Rs. 1,00,000"
      ],
      [
        "Career Opportunities",
        "Business Development Executive, Operations Manager, Business Application Manager, Associate Manager, Relationship Manager, Business Analyst"
      ],
      [
        "Average Annual Salary",
        "Rs. 3,00,000 - Rs. 7,00,000"
      ]
    ];
     const data2 = [
        ["1. Analytical Ability - ","Any student seeking admission to BBM must have analytical skills i.e. he/she must be able to critically analyze the situations."],
        ["2. Logical Reasoning - ","One must have the ability to look through the circumstances and reason appropriately."],
        ["3. General Awareness - ","For any business, general awareness is crucial. Hence, it becomes a chief requirement for an aspiring BBM student to possess."],
        ["4. Language and Reading Skills - ","Language proficiency is important to crack the BBM entrance examinations."],
    ];
     const data3 = [
        [""],
        [
        "Institute of Business Management & Technology",
        "Bangalore"
      ],
      [
        "Saradamba Dasa Govindaiah Setty College, Hindupur",
        "Andhra Pradesh"
      ],
      [
        "Veerashaiva College",
        "Karnataka"
      ],
      [
        "Anugrah Memorial College, Gaya",
        "Bihar"
      ],
      [
        "Chinmaya College of Arts Commerce and Science, Ernakulam",
        "Kerala"
      ]
    ];
     const data4 = [
        [
        "Subject",
        "Subject"
      ],
      [
        "SEMESTER 1",
        "SEMESTER 2"
      ],
      [
        "Kannada",
        "Kannada"
      ],
      [
        "Hindi",
        "Hindi"
      ],
      [
        "English",
        "English"
      ],
      [
        "Quantitative Techniques-I",
        "Quantitative Techniques-II"
      ],
      [
        "Fundamentals of Accounting-I",
        "Financial Acctg-II"
      ],
      [
        "Principles practice of Management",
        "Managerial Economics"
      ],
      [
        "Marketing.Mgmt",
        "Organizational Behavior"
      ],
      [
        "SEMESTER 3",
        "SEMESTER 4"
      ],
      [
        "Indian Business Environment",
        "Fundamentals of Costing"
      ],
      [
        "Entrepreneurship Development-I",
        "Financial Mgmt"
      ],
      [
        "Human Resource Mgmt",
        "Business Research Methods"
      ],
      [
        "Corporate Accounts",
        "Mgmt Training & Development"
      ],
      [
        "Fun.of.Comp.Prog",
        "Computer Applications for Business"
      ],
      [
        "Advertising & Media Planning",
        "Indian Constitution"
      ],
      [
        "Environmental Studies"
      ],
      [
        "SEMESTER 5",
        "SEMESTER 6"
      ],
      [
        "Business Law",
        "Financial Services"
      ],
      [
        "Income Tax",
        "International Business Mgmt"
      ],
      [
        "Strategic Management",
        "Retailing"
      ],
      [
        "Management Accounts",
        "Financial Services & marketing"
      ],
      [
        "Investment Management",
        "Financial Derivatives"
      ],
      [
        "Project Management",
        "Management Info System"
      ],
      [
        "-",
        "Project Report & Viva-Voce"
      ]
    ];
     const data5 = [
        ["BBM in International Business - ","A BBM candidate can choose to specialize in International Business. The course is 3 years long and aims at providing knowledge of international business to the students."],
        ["BBM in Human Resource Management - ","The course aims at providing students with advanced learning for the management of human resources. Likewise to international business, this course is also 3 years long."],
        ["BBM in Marketing Management - "," It is a three years long UG course with an objective to provide students with deep learning in the marketing field. Marketing, being a vital part of any business organization, can be an appropriate pick for the students."],
        ["Read more: ","What is the Scope of an Online MBA?"],
        ["Also read: ","Some of the popular management courses are as follows"],
        ["","International Business"],
        ["","Family Business"],
        ["","Business Administration"]
    ];
     const data6 = [
        ["Business Development Executive: ","A Business Development Executive has to look after the customer services of a business and also has to lead the Development team. Their role also includes planning meetings and taking initiatives that result in business growth."],
        ["Business Application Manager: ","The role of a Business Applications Manager is to oversee the functioning of the business applications. They are additionally responsible for providing feedback to the team to ensure comprehensive business applications."],
        ["Operations Manager: ","The main aim of an operations manager is to look after the efficiency and productivity of the business. They are responsible for attracting talent and providing them with appropriate training and hiring procedures."],
        ["Business Analyst: ","A Business Analyst has to conduct thorough analyses and give feedback for the improvement of the business. They are expected to conduct research that can help them with their role."],
        ["Associate Manager: ","They are responsible for training staff for assisting customers in activities that include, answering phones, making documents and dealing with customers."],
        ["Top Recruiters","A candidate with a BBM degree can easily find job opportunities. Many reputed companies are looking for BBM graduates to work with them. Some of the top recruiters are listed below for you:"],
        ["1. Accenture"],
        ["2. Google"],
        ["3. Cognizant"],
        ["4. Infosys"],
        ["5. Goldman"],
        ["6. TCS"],
        ["7. Deloitte"],
        ["Salary Information","The salary of an employee differs depending on the qualification and experience. However, the average salary of a BBM graduate ranges from 3,00,000 to 7,00,000 per annum."],
        ["Employment Areas","A BBM student can find appropriate work opportunities in various sectors. The employment depends upon the qualifications and experience of an individual. Some of the employment areas include sales, finance, retail, marketing, production management, hospitality and leisure, management, banking, and distribution."]
    ];
     const data7 = [
        ["Don't procrastinate.","Like math, many business courses are cumulative. What you learn today builds on what you learned in previous classes. This is particularly true of business courses in accounting and corporate finance. If you fall behind, it takes a lot of additional work and time to get caught up."],
        ["Make a schedule. ","At the beginning of each business course make a realistic schedule and stick to it throughout the semester. This will ensure you're making necessary progress along the way and that at the end of the semester you're prepared for exams."],
        ["Pace yourself. ","While it is possible to cram for some business tests, you shouldn't have to, and it isn't a good long-term strategy. If you pace yourself, and begin your preparations far in advance, you will be ready for end-of-term exams without needing to cram at the last moment. If you're a business major, or pursuing an MBA, you'll be taking so many business classes that cramming at the end of the semester isn't an option."],
        ["Focus on what's important. ","As a former MBA student, I can attest that sometimes you just won't have time to get everything done. If you're taking a business class worth 4 credits and another worth 1.5 credits, and you're strapped for time, first focus your studies on the class worth 4 credits. Then come back and tackle the class worth 1.5 credits."]
    ];
    
    return (
        <div>
            <Header tittle={"Bachelor Of Business Management â€“ (BBM)"} subTittle={"Elegliblity | Course Fee | Course Duration | Entrance Exams"} BGimage={image} />
            <ParaTiles heading={"What is Bachelor of Business Management?"} para={"Bachelor of Business Management is the full form for BBM is an undergraduate degree programme to learn Business Management. It is a three years course offered by various universities and colleges both, private and public. The degree is quite similar to BBA. Students who have basic knowledge of business and want to make a career in business can opt for this course. To pursue the course, it is important for students to have successfully finished their 10+2 in any subjects from any recognised board. A student of BBM gets the chance to study different facets of business including theoretical and practical."} headingSize={"24px"} />
            <ParaTiles heading={"What is BBM full form?"} para={"Bachelor of Business Management is the full form for BBM. It is an undergraduate degree where students learn the principles of management."} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data1} />
            <ParaTiles  para={"Also read: Online MBA vs Distance MBA: Which is Right for You?"} headingSize={"15px"} />
            <ParaTiles heading={"Fee Structure of BBM"} para={"In order to pursue BBM, various colleges charge different amounts of fees. Public universities charge an amount lesser than the amount that private colleges/universities charge. However, the average fee for the course ranges from Rs. 50,000 - Rs. 1,00,000."} headingSize={"15px"} />
            <ParaTiles heading={"Skills Required for BBM"} para={"To get admission to BBM, students must acquire a set of skills that can help them to easily adapt to the course studies. These skills include:"} headingSize={"15px"} />
            <CareerInfoTile data={data2} />
            <ParaTiles heading={"Top BBM Colleges by Location"} para={"For the students who are looking forward to getting admission to BBM, below is a list of some of the top colleges offering the course by location. Please note that the list includes both public and private universities."} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data3} />
            <ParaTiles heading={"BBM Syllabus"} para={"Different universities and colleges might refer to different syllabi. Nevertheless, below is the syllabus commonly followed by the universities. The chief aim of the syllabus followed is to nurture the skills of the students and help them acquire exceptional problem solving and logical thinking skills. The syllabus includes subjects like law, financial markets, business ethics etc."} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data4} />
            <ParaTiles  para={"** Kindly visit the respective college websites to get appropriate details on syllabi"} headingSize={"15px"} />
            <ParaTiles  para={"Also read: 10 Most Affordable Online MBA Programs for Students in India"} headingSize={"15px"} />
            <ParaTiles heading={"Specialisation"} para={"There are a number of BBM specialization courses that a student can opt for. Some of these specializations are listed below for your reference:"} headingSize={"15px"} />
            <CareerInfoTile data={data5} />
            <ParaTiles heading={"What is an Online MBA Degree?"} para={"Online MBA courses are the most significant postgraduate course in a pandemic because we can easily receive a degree and get support from professionals all over the world. Online MBA programmes are a blessing in disguise for working professionals because online mba courses allow them to attend classes on a regular basis without sacrificing any major deadlines for their important office projects."} headingSize={"15px"} />
            <ParaTiles heading={"What after BBM?"} para={"A BBM graduate can take his/her career forward in different ways."} headingSize={"15px"} />
            <ParaTiles  para={"1. You can join the corporate industry as a fresher and attain the practical knowledge of the skills acquired in your graduation by joining any company."} headingSize={"15px"} />
            <ParaTiles  para={"2. Or, another option can be to pursue Masters's in courses like MBA, M.Sc. (Business Process Outsourcing), M.Com in Business Administration, PGD in Global Business Operation, PGD in Business Finance and Investment Studies, PGD in Supply Chain and Operations Management, PGD in Management for Executives, PGD in Agriculture Business Management or Executive PGD in Management."} headingSize={"15px"} />
            <ParaTiles heading={"Career Opportunities after BBM"} para={"The growing corporate sector is a sign that the BBM graduates can easily expect a bright future ahead. On successful completion of the graduation, a BBM student pursues his/her career in different fields. Some of the professions that one can take are listed below:"} headingSize={"15px"} />
            <CareerInfoTile data={data6} />
            <ParaTiles heading={"Admission process for Business Management?"} para={"The admission process for the Business Management course in india is carried out either from the college premises directly or can be done online. The admission process for the Business Management course is undertaken strictly based on the scores of secondary and higher secondary education criteria and entrance exam performance."} headingSize={"24px"} />
            <ParaTiles  para={"Therefore, the aspirants applying for the course must satisfy the Business Management eligibility criteria, a combination of marks scored in their secondary and higher secondary education and entrance exam. The Business Management admission process is entirely merit-based."} headingSize={"15px"} />
            <ParaTiles  para={"Listed below are the various procedures to get admission for the Business Management course:"} headingSize={"15px"} />
            <ParaTiles heading={"How to apply?"} para={"The aspirants eager to study Business Management can either apply online or offline for the course. The Business Management application is shortlisted for the course based on the marks scored in the bachelor's degree with mathematics as the core element and entrance exam."} headingSize={"15px"} />
            <ParaTiles  para={"The aspirants can apply for the Business Management course details by downloading an admission form available at the university or on the college website. After submitting the college or university application form, the aspirants will be invited to appear for a written test, personal interview, group discussion, and counselling."} headingSize={"15px"} />
            <ParaTiles heading={"Selection process"} para={"The bbm selection process for the course is based on the entrance exam scores and performance in secondary and higher secondary education of mathematical or commerce background. After completing the 10+2 exam, the college or university conducts an entrance exam, a written test, personal interview, counselling, and group discussion."} headingSize={"15px"} />
            <ParaTiles  para={"The aspirants are allocated seats based on the various bbm criteria fulfilled by the aspirants proposed by the college/university officials."} headingSize={"15px"} />
            <ParaTiles heading={"Eligibility Criteria For Business Management?"} para={"Admission For The Business Management Course In India Requires The Aspirants To Complete Their Higher Education 10+2 From Any Recognized Institution. All The Business Management Colleges Require Students To Have Scored A Minimum Of 50 % Aggregate Marks In Their Secondary And Higher Secondary Education To Be Eligible For A Business Management Degree Course. The Selection Is Based On One's Performance In The Entrance Test, Group Discussion, And Interviews Conducted By Private Universities."} headingSize={"24px"} />
            <ParaTiles heading={"Popular Entrance Exams For Business Management?"} para={"There Are Few Entrance Exams For The Business Management Course For Which The Students Can Attend And Have A Clear Idea Of The Course. Appearing For Entrance Exams Is Not An Essential Criterion, But A Good Merit Score From The 10+2 Education In Mathematics Is Also Essential. Some Of The Entrance Exams Are:"} headingSize={"24px"} />
            <ParaTiles heading={"SET"} headingSize={"15px"} />
            <ParaTiles heading={"IPU CET"} headingSize={"15px"} />
            <ParaTiles heading={"NPAT"} headingSize={"15px"} />
            <ParaTiles heading={"AIMA UGAT"} headingSize={"15px"} />
            <ParaTiles heading={"Quick Glance At The BBM Entrance Exams"} para={"Business Management Has Limited Entrance Exams From Different Universities Or Institutions. The Entrance Exams Conducted For The Business Management Degree Course Include Various Questions Related To Mathematics, Reasoning, Logic, Social Studies, Business, Etc. Class 11th And 12th Basic Questions Related To Mathematics, History, General Knowledge, And Sociology To Analyze The Aspirants' Knowledge Abilities Regarding The Course. The Entrance Test Includes:"} headingSize={"15px"} />
            <ParaTiles  para={"Multiple Choice Objective Type Questions."} headingSize={"15px"} />
            <ParaTiles  para={"The Entrance Exam Is Conducted In The English Language."} headingSize={"15px"} />
            <ParaTiles  para={"Most Of The Questions In The Entrance Exams Are Merely Related To Mathematics, Sociology, Reasoning, Logic, And General Knowledge."} headingSize={"15px"} />
            <ParaTiles heading={"How To Study Business Management?"} para={"Business typically isn't a required subject in high school or college – it's an elective. Consequently, most students who take business courses do so because they're interested in learning about business and developing business skills. In your business classes you can expect to find other students who are just as interested in studying business as you are. Business classes provide an excellent atmosphere for learning since business students are engaged in course topics, studying with one another, and contribute to the learning process. The downside is that competition among business students for top grades can be intense."} headingSize={"24px"} />
            <ParaTiles  para={"Below we'll explore proven strategies and tips for honing your business study skills and improving your academic performance in your business classes."} headingSize={"15px"} />
            <ParaTiles heading={"Find a Place to Study:-"} para={"Research has demonstrated that finding the right place to study has an impact on the effectiveness of time spent studying. This is especially true when studying business. The same research also showed that the best study locations are those which are (1) comfortable and (2) free from distractions. However, this does not mean that the best study locations are those without noise. Noise, in and of itself, is not distracting to everyone. Having the TV on, music playing in the background, or studying in a crowded library works for some people. The key to finding a good study location is finding an environment that works for you."} headingSize={"15px"} />
            <ParaTiles heading={"Manage Your Time:-"} para={"Studying business management effectively is not about studying longer, it's about studying smarter. This becomes especially true when taking college level business courses (e.g., MBA) that can pile on so much work there aren't enough hours in the day to complete it all. The following are proven time management tips for improving your performance in your business courses."} headingSize={"15px"} />
            <CareerInfoTile data={data7} headingColor={1} />
            <ParaTiles heading={"Why choose BBM?"} para={"BBM is a course that allows students to learn deep insights into businesses. It teaches students advanced skills like entrepreneurship, interpersonal skills, Leadership skills, etc. For any student who looks forward to acquiring better job opportunities in big reputable companies, BBM can help them achieve the required skills. The diverse availability of career opportunities ensures that a BBM graduate can easily find jobs after the successful completion of the degree. Through the course, students get a holistic view of the business world."} headingSize={"15px"} />
            



            {/*             
            <ParaTiles heading={""} para={""} headingSize={"15px"} />
            <ParaTiles  para={""} headingSize={"15px"} />
            <ParaTiles heading={""} para={""} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data} />
             */}

            
        </div>
    )
}

export default Bbm
