import React from 'react'
import Header from './Header'
import image from './hdr-bg.jpg'
import ParaTiles from './ParaTiles'
import Table from './Table'
import CareerInfoTile from './CareerInfoTile'

function Bms() {

    
     const data1 = [['Highlights'],
        [
        "Course Name",
        "B.H.M. (Bachelor of Hotel Management)"
      ],
      [
        "Type of Course",
        "Bachelor Degree"
      ],
      [
        "Eligibility",
        "10+2 with any relevant stream"
      ],
      [
        "Admission Process",
        "Entrance test/ Merit list/ Direct Admission"
      ],
      [
        "Duration",
        "3 years"
      ],
      [
        "Examination Type",
        "Semester System"
      ],
      [
        "Fee",
        "Rs. 3.5 lakhs - Rs. 6 lakhs in Public InstitutesRs. 5 lakhs - Rs. 12 lakhs in Private Institutes"
      ]
    ];
     const data2 = [
        ["Types of BHM"],
         [
        "Course Name",
        "BHM (Bachelor of Hotel Management)"
      ],
      [
        "Type of Course",
        "Bachelor Degree"
      ],
      [
        "Eligibility",
        "10+2 with any relevant stream"
      ],
      [
        "Admission Process",
        "Entrance test/ Merit list/ Direct Admission"
      ],
      [
        "Duration",
        "3 years"
      ],
      [
        "Examination Type",
        "Semester System"
      ],
      [
        "Fee",
        "INR 3.5 - 6 lakhs in Public Institutes INR 5 - 12 lakhs in Private Institutes"
      ]
    ];
     const data3 = [
        ["Entrance exams: ","All major colleges within India adhere to the entrance tests system to shortlist applicants for admission. NCHMCT JEE, AIMA UGAT, UPSEE BHMCT, MAH HM CET, WBJEE HM, are top entrance exams conducted in India. Top 2 entrance exams of India: NCHMCT JEE and AIMA UGAT are the only examinations that are conducted on a national level, while remaining entrance tests are regulated on a state level. These exams are a gateway to the best colleges of India which are offering Bachelor of Hotel Management."],
        ["Merit based (class 12 result): ","Not every college conducts the entrance exams to select candidates for the bachelor’s degree course offered by them in Hotel. There are colleges/institutions that grant admissions to students in courses on the basis of the marks obtained by them in class 12th. The colleges evaluate candidates on the basis of the merit achieved in class 12th and other various eligibility criteria. So candidates must do a thorough research on the colleges, they are planning to apply for admission to avoid any confusion in the future."],
        ["Direct Admission: ","There are also colleges which offer direct admission in courses, however, the eligibility criteria for direct admission alter for every college. So, a candidate should always analyze criteria before starting the admission process."]
    ];
     const data4 = [
        [
        "Peculiars",
        "Details"
      ],
      [
        "Application mode",
        "Online"
      ],
      [
        "Exam mechanism",
        "Online (Computer based)"
      ],
      [
        "Exam level",
        "National level"
      ],
      [
        "Sections",
        "There are total 5 sections in NCHMCT JEE:Numerical Ability and Analytical AptitudeReasoning and Logical DeductionGeneral Knowledge and Current AffairsEnglish LanguageAptitude for Service Sector"
      ],
      [
        "Duration of Time",
        "3 Hours"
      ],
      [
        "Number of questions",
        "200 Questions"
      ],
      [
        "Types of question",
        "Multiple choice questions (MCQs)"
      ],
      [
        "Eligibility",
        "12th with any stream (45% aggregate)"
      ],
      [
        "Languages",
        "English"
      ],
      [
        "Total marks",
        "800 Marks"
      ],
      [
        "Marking scheme",
        "For 1 correct answer: +4 marksFor 1 incorrect answer: -1 mark"
      ]
    ];
     const data5 = [
        [
        "Peculiars",
        "Details"
      ],
      [
        "Application mode",
        "Online"
      ],
      [
        "Exam mechanism",
        "Online (Computer based) and Offline"
      ],
      [
        "Exam level",
        "National level"
      ],
      [
        "Sections",
        "There are total 6 sections in AIMA UGAT:Numerical Data and AnalysisReasoning & General IntelligenceGeneral KnowledgeEnglish LanguageService AptitudeScientific Aptitude"
      ],
      [
        "Duration of Time",
        "3 Hours"
      ],
      [
        "Number of questions",
        "190 Questions"
      ],
      [
        "Types of question",
        "Multiple choice questions (MCQs)"
      ],
      [
        "Eligibility",
        "12th with any stream (45% aggregate)"
      ],
      [
        "Languages",
        "English"
      ]
    
    ];
     const data6 = [
        [
        "Peculiars",
        "Details"
      ],
      [
        "Application mode",
        "Online"
      ],
      [
        "Exam mechanism",
        "Offline (Pen-Paper)"
      ],
      [
        "Exam level",
        "State level"
      ],
      [
        "Sections",
        "There are total 4 sections in UPSEE BHMCT:Reasoning and Logical DeductionNumerical Ability & Scientific AptitudeGeneral KnowledgeEnglish Language"
      ],
      [
        "Duration of Time",
        "2 Hours"
      ],
      [
        "Number of questions",
        "100 Questions"
      ],
      [
        "Types of question",
        "Multiple choice questions (MCQs)"
      ],
      [
        "Eligibility",
        "12th with any stream (45% aggregate)"
      ],
      [
        "Languages",
        "English and Hindi"
      ],
      [
        "Total marks",
        "400 Marks"
      ],
      [
        "Marking scheme",
        "For 1 correct answer: +4 marksThere is no negative marking for incorrect answer"
      ]
    ];
     const data7 = [
        [
        "Peculiars",
        "Details"
      ],
      [
        "Application mode",
        "Online"
      ],
      [
        "Exam mechanism",
        "Online (Computer based)"
      ],
      [
        "Exam level",
        "State level"
      ],
      [
        "Sections",
        "There are total 3 sections in MAH HM CET:General KnowledgeEnglish LanguageReasoning"
      ],
      [
        "Duration of Time",
        "1 Hour 30 minutes"
      ],
      [
        "Number of questions",
        "100 Questions"
      ],
      [
        "Types of question",
        "Multiple choice questions (MCQs)"
      ],
      [
        "Eligibility",
        "12th with any stream (45% aggregate)"
      ],
      [
        "Languages",
        "English"
      ],
      [
        "Total marks",
        "100 Marks"
      ],
      [
        "Marking scheme",
        "For 1 correct answer: +1 marksThere is no negative marking for incorrect answer"
      ]
    ];
     const data8 = [
         [
        "Peculiars",
        "Details"
      ],
      [
        "Application mode",
        "Online"
      ],
      [
        "Exam mechanism",
        "Offline (Pen-Paper)"
      ],
      [
        "Exam level",
        "State level"
      ],
      [
        "Sections",
        "There are total 4 sections in WBJEE HM:English LanguageGeneral KnowledgeLogical ReasoningElementary Mathematics"
      ],
      [
        "Duration of Time",
        "1 Hour 30 minutes"
      ],
      [
        "Number of questions",
        "50 Questions"
      ],
      [
        "Types of question",
        "Multiple choice questions (MCQs)"
      ],
      [
        "Eligibility",
        "12th with any stream (45% aggregate)"
      ],
      [
        "Languages",
        "English"
      ],
      [
        "Total marks",
        "100 Marks"
      ],
      [
        "Marking scheme",
        "For 1 correct answer: +2 marksFor 1 incorrect answer: -1/2 marks"
      ]
    ];
     const data9 = [
        [
        "Specializations"
      ],
      [
        "Tourism Management",
        "Customer and Personal Service"
      ],
      [
        "Meetings and Events Management",
        "Management Consultant"
      ],
      [
        "Customer Service Representative",
        "Operations Manager"
      ]
    ];
     const data10 = [["BHM Syllabus for 1st Year"],
        [
        "Semester 1",
        "Semester 2"
      ],
      [
        "Food Production Foundation – I",
        "Food Production Foundation – II"
      ],
      [
        "Food & Beverage Service Foundation – I",
        "Food & Beverage Service Foundation – II"
      ],
      [
        "Accommodation Foundation I",
        "Accommodation Foundation II"
      ],
      [
        "Front Office Foundation I",
        "Front Office Foundation II"
      ],
      [
        "English / MIL Communication",
        "English / MIL Communication"
      ],
      [
        "Application of Computers",
        "Environmental Science"
      ]
    ];
     const data11 = [
        ["BHM Syllabus for 2nd Year"],
        [
        "Semester 3",
        "Semester 4"
      ],
      [
        "Industrial Exposure",
        "Introduction to Indian Cooking"
      ],
      ["",
        "Food & Beverage Service Operations -II"
      ],
      ["",
        "Accommodation & Front Office Foundation -II"
      ],
      ["",
        "Accounting Skills for Hospitality"
      ]
    ];
     const data12 = [
        ["BHM Syllabus for 3rd Year"],
        [
        "Semester 5",
        "Semester 6"
      ],
      [
        "Foreign Language Skills –I (French/ Spanish/ German)",
        "Foreign Language Skills – II (French/ Spanish/ German)"
      ],
      [
        "Regional Cuisines of India -I",
        "Regional Cuisines of India -II"
      ],
      [
        "Food & Beverage Service Management -I",
        "Food & Beverage Service Management -II"
      ],
      [
        "Accommodation Management-I",
        "Accommodation Management"
      ],
      [
        "Researching for Hospitality & Tourism Management",
        "Hospitality Marketing"
      ],
      [
        "Hospitality Laws"
      ]
    ];
     const data13 = [
        ["BHM Syllabus for 4th Year"],
        [
        "Semester 7",
        "Semester 8"
      ],
      [
        "Human Resource Management",
        "Industrial Exposure – II (On the Job Training)"
      ],
      [
        "Retail Management"
      ],
      [
        "Event Management"
      ],
      [
        "Laundry Management"
      ],
      [
        "Food Service Management"
      ],
      [
        "Accommodations Management"
      ],
      [
        "Culinary Management"
      ],
      [
        "Bakery Management"
      ],
      [
        "Front Office Management"
      ],
      [
        "Foreign Cuisines (Chinese & Italian)"
      ],
      [
        "Skill Enhancement for Media & Journalism in Hospitality & Tourism"
      ],
      [
        "Application of Computers in Hospitality & Tourism"
      ]
    ];
     const data14 = [
        [
        "Job Profiles",
        "Salary (Annually)"
      ],
      [
        "Director of Housekeeping",
        "INR 4.3 lakh p.a. (approx)"
      ],
      [
        "Executive Casino Host",
        "INR 22 lakh p.a. (approx)"
      ],
      [
        "Flight Attendant",
        "INR 5.2 lakh p.a. (approx)"
      ],
      [
        "Food & Beverage Director",
        "INR 13 lakh p.a. (approx)"
      ],
      [
        "Hotel Manager",
        "INR 5 lakh p.a. (approx)"
      ],
      [
        "Meeting/ Event Manager",
        "INR 5.4 lakh p.a. (approx)"
      ],
      [
        "Restaurant General Manager",
        "INR 6 lakh p.a. (approx)"
      ],
      [
        "Sommelier",
        "INR 5 lakh p.a. (approx)"
      ],
      [
        "Front Office Manager",
        "INR 8.1 lakh p.a. (approx)"
      ]
    ];
     const data15 = [
        [
        "Job Profile",
        "Job Description"
      ],
      [
        "Director of Housekeeping",
        "Housekeeping directors supervise a team of room attendants, cleaners, & other housekeeping staff. Their job is to make sure that housekeeping keeping standards are met, as well as to manage the department budget."
      ],
      [
        "Executive Casino Host",
        "The job of executive casino host is to develop relationships, meet and greet guests on the casino floor & attract high-value players so that they become regular players of the casino. In retrospect, their job is to ensure the casino’s profit and financial growth."
      ],
      [
        "Flight Attendant",
        "Flight attendants enforce safety protocols and provide Hotel which is also a very important part of their job. They serve drinks, snacks & also answers passenger’s questions. They ensure that each flight is as comfortable and safe as possible for passengers."
      ],
      [
        "Food & Beverage Director",
        "Food and beverage directors work in a range of environments; sporting venues, hotels, airports, etc. They manage the cost of products & inventory, also working along with other departments."
      ],
      [
        "Hotel Manager",
        "Hotel managers basically run the whole hotel. From ensuring that guests are provided best service. From managing available rooms, dining areas, to checking guests in and out are responsibilities of a hotel manager."
      ],
      [
        "Meeting/ Event Manager",
        "Event managers play an supervisory role in a big-scale event. They handle every detail regarding the event from booking venue to planning menu to control the budget."
      ],
      [
        "Restaurant General Manager",
        "Restaurant general manager plays the role of a supervisor in a restaurant. Their work includes from hiring and training employees to managing food-handling processes and other operational procedures in the restaurant."
      ],
      [
        "Sommelier",
        "Sommeliers work as wine experts in affluent hotels & restaurants. They provide advice to gustes on which wine will go along with their diner’ meal choice."
      ],
      [
        "Front Office Manager",
        "Front office managers are responsible for maintaining the work and office environment. They assign work and manage the purchasing of goods and products."
      ]
    ];
    //  const data = [
    //     [
    // ];
    return (
        <div>
            <Header tittle={"Bachelor Of Management Studies(BMS)"} subTittle={"Elegliblity | Course Fee | Course Duration | Entrance Exams"} BGimage={image} />
            <ParaTiles heading={"About Bachelor of Management Studies (BMS)?"} para={"Bachelor of Management Studies (BMS) is a three-year undergraduate program that offers advanced studies in the field of management that are necessary to run an organization efficiently. It also provides in-depth knowledge of human resource management, economics, and business studies."} headingSize={"24px"} />
            <ParaTiles para={"The BMS course provides students with vast knowledge of changing world of management, new business techniques, entrepreneurship, trading, finance, stock and risk analysis. It includes various training sessions and extra and co-curricular activities that are essential for the overall development of the students to help them understand the real-world challenges. BMS also teaches budding entrepreneurs how to expand their businesses with least number of risks."} headingSize={"15px"} />
            <ParaTiles para={"Students planning to undertake BMS must have team-building qualities and should be able to communicate effectively. They should also have knowledge about the current affairs and the stock market. Students learn to critically analyse situations and to solve the complexities of management."} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data1} />
            <ParaTiles heading={"Advantages of Bachelor of Hotel Management"} para={"Bachelor of Hotel Management is an undergraduate programme designed for individuals who want to opt for a career in the hospitality sector. It provides numerous opportunities for individuals who want to become chef, receptionist, hotel manager and various other roles."} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data2} />             
            <ParaTiles heading={"BHM (Bachelor of Hotel Management) Admissions"} headingSize={"24px"} />
            <ParaTiles heading={"Candidates will need to complete some procedures to pursue B.H.M. in any college within India. There are two kinds of admission processes: entrance exam, merit admission and direct admission. First one is an entrance exam, where aspirants are required to qualify the entrance test of the respective colleges they are planning to take admission. Top colleges within India conduct entrance examinations for admission. A few institutes also conduct admission on the basis of the marks obtained in class 12th. The direct admission process is primarily regulated by private institutions. They grant admission based on an individual’s academic qualification."} headingSize={"20px"} />
            <CareerInfoTile data={data3} />
            <ParaTiles heading={"Applicants must submit stated documents after passing the entrance exam."} para={"Passing certificates for 10th & 12th standard"} headingSize={"15px"} />
            <ParaTiles  para={"Mark sheets for 10th & 12th standard"} headingSize={"15px"} />
            <ParaTiles  para={"Passport size photographs"} headingSize={"15px"} />
            <ParaTiles  para={"Transfer certificate (in case of going outside hometown to study)"} headingSize={"15px"} />
            <ParaTiles  para={"Character certificate"} headingSize={"15px"} />
            <ParaTiles heading={"Eligibility Criteria for BMS Course?"} para={"Admission to BMS course eligibility is dependent on the requirements set by the particular universities/colleges. Eligibility criteria for BMS course are students who opt for this course must have passed his/her 10+2 examination with a minimum of 50% in the former subject from the recognized board and students who are interested in this course should be between 17-23 years of age limit. "} headingSize={"24px"} />
            <ParaTiles  para={"The BMS course is best suitable for students with a commerce subject base who can apply for this undergraduate program or with the equivalent qualification can also opt for this course. BMS is an undergraduate program that has entrance exams conducted for the students who are applying for this course. "} headingSize={"15px"} />
            <ParaTiles heading={"BMS Course DU Eligibility?"} para={"1. The candidates should have qualified for the Senior Secondary School Examination of CBSE or any other examination considered equivalent by the University of Delhi"} headingSize={"15px"} />
            <ParaTiles  para={"2. The General Category candidates should secure an aggregate of at least 60% marks in their XII class examination in four papers including English, Mathematics and other two subjects from the list of elective subjects as approved by the University of Delhi"} headingSize={"15px"} />
            <ParaTiles  para={"3. The minimum percentage of marks for OBC is 54%, for SC & ST pass marks in qualifying examination, for PwD 55%, for CW 55%. Other conditions are the same as for the General Category"} headingSize={"15px"} />
            <ParaTiles heading={"Top BHM (Bachelor of Hotel Management) Exams"} headingSize={"24px"} />
            <ParaTiles heading={"Top entrance exams for colleges which offer BHM are mentioned below:"} headingSize={"15px"} />
            <ParaTiles heading={"1. NCHMCT JEE (National Council of Hotel Management & Catering Technology Joint Entrance Exam)"} para={"NCHMCT is a national level entrance exam which starting from 2019 will be conducted by NTA (National Test Agency). Candidates who qualify this exam are offered admission in Hotel and hotel administration courses. Till 2018, this entrance examination was conducted by an autonomous body National Council of Hotel Management and Catering Technology, which falls under the Ministry of Tourism."} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data4} />   
            <ParaTiles heading={"2. AIMA UGAT (All India Management Association Undergraduate Aptitude Test)"} para={"AIMA Undergraduate Aptitude Test (UGAT) is an entrance examination conducted at national level by the All India Management Association (AIMA). This exam is regulated for admission in numerous courses such as B.B.A., B.B.C., Integrated M.B.A. , B.H.M., B.Com etc."} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data5} />   
            <ParaTiles heading={"3. UPSEE BHMCT (Uttar Pradesh State Entrance Examination for Bachelor of Hotel Management and Catering Technology)"} para={"This exam is a state level entrance examination conducted by Dr. A.P.J. Abdul Kalam Technical University (AKTU), Uttar Pradesh. UPSEE BHMCT is regulated for admission to many undergraduate and postgraduate programmes in all the colleges and institutes affiliated to Dr. Abdul Kalam Technical University (AKTU)."} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data6} />   
            <ParaTiles heading={"4. MAH HM CET (Maharashtra Common Entrance Test for Hotel Management)"} para={"Conducted by Directorate of Technical Education (DTE), Maharashtra, MAH HM CET is a state level entrance test regulated to provide admission to aspirants in courses such as Hotel Management, Hotel Management and Catering Technology (HMCT) offered at undergraduate level and postgraduate level."} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data7} />   
            <ParaTiles heading={"5. WBJEE HM(West Bengal Joint Entrance Examination for Hotel Management)"} para={"This state level entrance exam is conducted to select top students for the course such as Hotel Management. WBJEE HM is conducted by an institutional body known as West Bengal Joint Entrance Examination (WBJEE). It is regulated every one time in a year, mostly during the month of July."} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data8} />  
            <ParaTiles heading={"BHM (Bachelor of Hotel Management) Specializations"} para={"Candidates can pursue numerous specializations in B.H.M. (Bachelor of Hotel Management). Written below are a few specializations from which graduates can choose any specialization as per their preference."} headingSize={"15px"} />           
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data9} />
            <ParaTiles heading={"BHM (Bachelor of Hotel Management) Syllabus"} para={"We have mentioned below the syllabus of Bachelor of Hotel Management course offered in SGT University."} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data10} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data11} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data12} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data13} />
            <ParaTiles heading={"BHM (Bachelor of Hotel Management) Salary"} para={"Given salary depends upon the capabilities and skills of an individual. The remuneration also depends on a few more factors such as tenure and achievement of an employee in a company or organization. It also differs for each job profile. Stated below are a few job profiles with a salary reference."} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data14} />
            <ParaTiles heading={"Scope of BHM (Bachelor of Hotel Management)"} para={"The Hotels and Hotel sector are one of the most rapidly growing sectors in India and the growth is just going to be more exponential over time. It has seen a spike in the number of graduates in courses like Bachelor of Hotel Management (BHM) and Bachelor of Hotel Management. After finishing their BHM (Bachelor of Hotel Management) course, candidates are offered different job opportunities. Some popular job profiles that candidates can pursue after securing a B.H.M. degree are as mentioned below:"} headingSize={"15px"} />
            <Table LeftcellWidth={'20%'} RightcellWidth={'75%'} tableData={data15} />  
            <ParaTiles heading={"Careers Opportunities after B.H.M. (Bachelor of Hotel Management)"} para={"As eating out & partying has become a second nature to people, hotel business - big or small - booming. Demand for skilled and trained professionals has been exponentially increasing in this industry. It has become of the most lucrative industries in the world. It can be seen as the increasing salary and improving nature of the job, career in hotel industry is a respected option. Students can have a bright future after completing their B.H.M. (Bachelor of Hotel Management) or they pursue higher education."} headingSize={"15px"} />
            <ParaTiles  para={"Graduates can branch out to study many different specializations in this industry. They can seek a masters degree in Tourism, Hospitality Management or a MBA in Hotel Management. A master degree in Tourism can open many opportunities in tourism industry as well as service sector which firmly coexisted with tourism as these both rely on each other. Masters in Hospitality Management provides an opportunity in many sectors such as hospitality, hotel and in other event organizing companies. General MBA opens up opportunities in business sector, however, with specialization in Hotel Management, it is easy to secure placements in service industry. Although, student still have to appear for MBA entrance exam such as CAT, MAT, and other tests."} headingSize={"15px"} />
            <ParaTiles heading={"How To Prepare?"} para={"In the last year of the BMS course, students are provided with some options to choose elective subjects. Here we have provided some common specialisations of Bachelor of Management Studies:"} headingSize={"15px"} />
            <ParaTiles  para={"1. Human Resource Management: In this specialisation, students are taught about new recruiting policies, and procedures, and how to maintain relations with company employees. Developing negotiation skills is the base of this specialization."} headingSize={"15px"} />
            <ParaTiles  para={"2. Retail and Sales Management: This specialisation deals with the sale of goods and services along with customer satisfaction. Students are taught about the relationship and marketing skills in this specialization."} headingSize={"15px"} />
            <ParaTiles  para={"3. Resource Allocation: This specialisation teaches how to assign and manage a company’s resources efficiently and effectively so that each resource can provide a maximum input which helps to achieve the goal."} headingSize={"15px"} />
            <ParaTiles  para={"4. Investment Analysis and Portfolio Management: The main objective of this specialization is to enable students to analyze a company’s investment and market trends. So that they can manage portfolios and prepare reports which will help in good decision making for investment."} headingSize={"15px"} />
            <ParaTiles  para={"5. Marketing: Various aspects of marketing like principles of marketing, new marketing policies, marketing research, promotion of a product and many more are taught in this specialization."} headingSize={"15px"} />
            <ParaTiles heading={"Why Study Bachelor of Management Studies?"} para={"Business management includes studying the planning, organizing, directing, staffing, controlling, and other strategic aspects of management. "} headingSize={"15px"} />
            <ParaTiles  para={"Studying Bachelor of Management Studies course helps in developing managerial skills such as communication, organizing, leadership, reporting, and teamwork prior to real working scenarios"} headingSize={"15px"} />
            <ParaTiles  para={"Bachelor of Management Studies also helps in getting some insight into the business world and help budding entrepreneurs to boost their career and can act as a gateway for someone who wants to start their own business early after their college"} headingSize={"15px"} />
            <ParaTiles  para={"Bachelor of Management Studies can help in building business connections and students are offered numerous kinds of managerial level jobs once they graduate the course."} headingSize={"15px"} />
            

        </div>
    )
}

export default Bms
