import React from 'react'
import Header from './Header'
import image from './hdr-bg.jpg'
import ParaTiles from './ParaTiles'
import Table from './Table'
import CareerInfoTile from './CareerInfoTile'
import TableWithMultiRow from './TableWithMultiRow'

function Mhm() {


    const data1 = [
        [""],
        [
            "Name of the Course",
            "Master of Hotel Management"
        ],
        [
            "Course Level",
            "Postgraduate"
        ],
        [
            "Course Duration",
            "Two years"
        ],
        [
            "Eligibility Criteria",
            "Bachelor’s degree in any stream from a recognised university"
        ],
        [
            "Admission Process",
            "Entrance Examination/Direct Admission"
        ]
    ];
    const data2 = [
        [""],
        [
            "Excellent Communication Skills",
            "Skill in performing tasks"
        ],
        [
            "Organizational Skills",
            "Thorough knowledge of the hotel industry"
        ],
        [
            "Attention to detail",
            "Warm and open personality"
        ],
        [
            "Interpersonal Skills",
            "Creativity with precision"
        ]
    ];
    const data3 = [
        [
            "Institute",
            "City"
        ],
        [
            "University of Technology",
            "Jaipur"
        ],
        [
            "Shikhsa O Anusandhan University",
            "Bhubaneshwar"
        ],
        [
            "Imperial Institute of Management and Technology",
            "Nainital"
        ],
        [
            "Subhas Bose Institute of Hotel Management",
            "Kolkata"
        ],
        [
            "NIMS University",
            "Jaipur"
        ],
        [
            "Uttarakhand Open University",
            "Nainital"
        ],
        [
            "Bhagat Phool Singh Mahila Vishwavidyalaya",
            "Sonepat"
        ],
        [
            "Mahatma Gandhi University",
            "Ri-Bhoi"
        ],
        [
            "Bundelkhand University",
            "Jhansi"
        ],
        [
            "Oriental School of Hotel Management",
            "Calicut"
        ],
        [
            "Pratap University",
            "Jaipur"
        ],
        [
            "Graphic Era University",
            "Dehradun"
        ]
    ];
    const data4 = [
        [""],
        [
            "Year 1"
        ],
        [
            "Principles and Practices of Management",
            "Nutrition and Dietetics Management"
        ],
        [
            "Organizational Behaviour",
            "Communication and Soft Skills"
        ],
        [
            "Accommodation Management",
            "Human resource Management"
        ],
        [
            "Food and Beverage Management",
            "Marketing Management"
        ],
        [
            "Food Science",
            "Applied Operations Research"
        ],
        [
            "French for Hotel Management",
            "Practical"
        ],
        [
            "Year 2"
        ],
        [
            "Financial Management Facilities",
            "Marketing and Sales"
        ],
        [
            "Design and Management",
            "Fundamentals of Tourism and Tourism Products"
        ],
        [
            "Hospitality Management",
            "Strategic Management"
        ],
        [
            "Workshop on Executive Communication",
            "Management Institute System MIS"
        ],
        [
            "Food and Beverage Management",
            "Practical in MIS"
        ],
        [
            "Accommodation Management",
            "Project and Viva"
        ],
        [
            "Practical",
            "Final Research"
        ]
    ];
    const data5 = [
        ["Catering Supervisor: ", "The job of a Cooking Administrator is to plan and facilitate all parts of providing food. They mastermind gatherings with customers to talk about what all they need on the occasion. They oversee and manage administration exercises, sanitation, and money related duties. They are devotedly associated with the board & staff and help in making financially sound decisions which can create positive outcomes and profit for the respective organization."],
        ["Hospitality Executive: ", "Accommodation Officials have aptitudes in administration, cooperation, correspondence, dynamic and critical thinking so as to complete their errands. They are accountable for administering activities related to lodgings, resorts, hotels or eateries. These positions request some industry experience and furthermore some administration experience."],
        ["Hotel Manager: ", "Hotel Managers are the ones who hold the responsibility to oversee representatives, staff, and administrations. They plan, market, organize and direct different lodging tasks, for example, providing food and convenience and emergencies to name a few."],
        ["Chef: ", "This is one of the most fascinating job profiles in the hotel industry. People who are passionate about cooking always opt for this job profile. One of the major responsibilities of a chef is to serve the flavoursome cuisines to the guests. They always try to innovate new dishes and cuisines and presentation skills. Chefs also play an important role in deciding the menu of the hotels. There are different grades of chefs in a hotel such as Head Chef, Executive Chefs, Pastry Chef and many more."],
        ["Event Manager: ", "In most occasions, they assume a supervisory job on a major scale. They handle everything about the occasion like booking a venue, arranging a food menu and controlling the spending limit."],
        ["Marketing Executive: ", "They are otherwise called Advertising Officials or Promoting Facilitators. They take an interest in creating advertising efforts so the administration, item, occasion or crusade can be advanced or promoted among the majority."],
        ["Cabin Crew: ", "The prime obligation of an air lodge group staff is to give brilliant client assistance to travellers. They need to guarantee a traveller’s solace and wellbeing over the span of the flight. They experience thorough preparing and client managing classes before they go locally available. They are educated to manage security and crisis circumstances that may emerge during the flight and can regulate emergency treatment to travellers."]
    ];
    const data6 = [
        [""],
        [
            "Ambassador Group of Hotels",
            "Best Western Group of Hotels"
        ],
        [
            "Mansingh Group of Hotels",
            "Casino Group of Hotels"
        ],
        [
            "Oberoi Group of Hotels",
            "Clarks Group of Hotels"
        ],
        [
            "Peerless Group of Hotels",
            "Fortune Park Group of Hotels"
        ],
        [
            "Sarovar Park Group of Hotels",
            "ITDC Group of Hotels"
        ],
        [
            "Sinclairs Group of Hotels",
            "Jaypee Group of Hotels"
        ]
    ];
    const data7 = [
        [
            "Job Profile",
            "Salary Trends (per annum)"
        ],
        [
            "Hotel Manager",
            "INR 1.5 lakhs to 15 lakhs"
        ],
        [
            "Marketing Executive",
            "INR 1.5 lakhs to 5.5 lakhs"
        ],
        [
            "Cabin crew",
            "INR 2.5 lakhs to 10 lakhs"
        ],
        [
            "Catering Supervisor",
            "INR 3 lakhs to 9 lakhs"
        ],
        [
            "Executive Chef",
            "INR 2.5 lakhs to 30 lakhs"
        ],
        [
            "Head Chef",
            "INR 2.5 lakhs to 20 lakhs"
        ],
        [
            "Event Managers",
            "INR 2.5 lakhs to 10 lakhs"
        ]
    ];
    const data8 = [
        ["NHMCT Overview:"],
        [
            "Name of Examination",
            "NCHMCT JEE"
        ],
        [
            "Conducting Body",
            "National Testing Agency"
        ],
        [
            "Mode of Examination",
            "Online"
        ],
        [
            "Exam Level",
            "National"
        ],
        [
            "Exam Duration",
            "Three hours"
        ],
        [
            "Total number of questions",
            "200"
        ],
        [
            "Type of question",
            "Multiple Choice Questions"
        ],
        [
            "Marking Scheme",
            "+4 (for every correct answer)-1 (for every wrong answer)"
        ],
        [
            "Language",
            "English and Hindi"
        ]
    ];
     const data9 = [
        ["JMI Exam Overview:"],
        [
        "Name of the Examination",
        "Jamia Millia Islamia Entrance Examination"
      ],
      [
        "Conducting Body",
        "Jamia Millia Islamia"
      ],
      [
        "Examination Frequency",
        "Once a year"
      ],
      [
        "Application Mode",
        "Online"
      ],
      [
        "Eligibility Criteria",
        "Bachelor of Hotel Management with at least 45 per cent marks. At least two years of experience in the hospitality industry.ORGraduate with at least 45 per cent marks and UGC/AICTE recognised one year diploma in Hotel management. At least two years of experience in the hospitality industry.ORGraduate with at least 45 per cent marks and a three year Diploma in Hotel Management from NCHMCT. At least two years of experience in the hospitality industry."
      ],
      [
        "Examination Mode",
        "Offline"
      ],
      [
        "Language",
        "English"
      ]
    ];
     const data10 = [
        [""],
        [
        "Marksheet of Class 10th and 12th",
        "Transfer Certificate"
      ],
      [
        "Category Certificate [if candidates belong to reserved categories]",
        "Passport size photographs"
      ],
      [
        "Character Certificate",
        "Address Proof (such as PAN Card, Aadhar Card, Voter Id)"
      ]
    ];

    return (
        <div>
            <Header tittle={"Master Of Hotel Management (MHM)"} subTittle={"Elegliblity | Course Fee | Course Duration | Entrance Exams"} BGimage={image} />
            <ParaTiles heading={"What is Master of Hotel Management?"} para={"Master of Hotel Management which is also known as M.H.M is the postgraduate course for the students who completed their bachelor of hotel management or any other course of hospitality. This is the 2 years course which is structured in a way to give students in-depth knowledge about all the aspects of hospitality management techniques. Students will get the privilege to work in the hotel industry and different sectors of hospitality such as hotel administration, food and beverages, catering, accounts, marketing etc. so that they can focus on the specialisations they want to work in further."} headingSize={"24px"} />
            <ParaTiles para={"Hotel industry being the service industry, it is highly competitive as well as one of the most job providing sectors. Students are taught to work on skills like interpersonal skills which includes communication skills, negotiation and team management. During the course, students are bestowed upon by special skills so that they can gain managerial positions after its successful passing. After successful completion of the course, one can have ample higher education programs options."} headingSize={"15px"} />
            <ParaTiles heading={"Master of Hotel Management: Course Overview"} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data1} />
            <ParaTiles heading={"MHM: Skills Required"} para={"Hotel Industry provides ample job opportunities for freshers as well as experienced candidates too. This industry requires some essential skill sets that will funnel growth for organizations and freshers alike."} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data2} />
            <ParaTiles heading={"Advantages of Master of Hotel Management"} para={"Master of Hotel Management is a postgraduate degree program in the field of hospitality. Individuals who want to establish a hospitality-based career should opt for this course. As it provides them with in-depth knowledge and skills to function in the hospitality industry."} headingSize={"15px"} />
            <ParaTiles heading={"Type of Master of Hotel Management"} para={"MHM is a master-level degree program. Aspirants are being taught different concepts namely - design and management, marketing and sales, applied operations research, etc. In this very PG program, one has to communicate with an ample of different kinds of clients. In order to pursue this course applicants need to pass their graduation."} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data3} />

            <ParaTiles heading={"Master of Hotel Management Course"} para={"This course is designed to employ aspirants in various sectors in the field of hotel management. In this field, candidates get to work in the front office or one could be working as a professional chef. Candidates have to take training and after that selection is done on the basis of their performance. There are various fine institutes like the University of Technology, NIMS University, Imperial Institute of Management and Technology, etc. that offer admission to the course Under this study course he/she gets knowledge regarding catering, management office, housekeeping, etc. As per the requirements, candidates must have passed their graduation with at least percentage ranging between 50 per cent to 55 per cent."} headingSize={"15px"} />
            <ParaTiles heading={"Master of Hotel Management Specializations"} para={"Candidates can do specialization in any field of their choice namely - catering officer, resort manager, sales executive, etc. Given below are the domains in which one could specialise."} headingSize={"15px"} />
            <ParaTiles heading={"MHM Syllabus"} para={"The syllabus of this course is including with various concepts that a candidate will acknowledge some of them are as Nutrition and Dietetics Management, Food Science, Hospitality management, etc. There are various practical subjects too in the course study. The whole syllabus is divided into 4 semesters. Given below is a detailed overview of the syllabus one could have. The syllabus for the Master of Hotel Management is structured in a way so that students can cover every aspect related to the hotel industry in the four semesters. Mentioned below is a brief list of the syllabus:"} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data4} heading={"Master of Hotel Management Syllabus for 1st Year"} />
            <ParaTiles heading={"Scope of Master of Hotel Management"} para={"There is huge scope for students after the completion of the Master of Hotel Management as this industry provides job opportunities on various job profiles. After completion of postgraduate, candidates can work in the hotel industry along with different airlines as well as in different colleges and universities."} headingSize={"15px"} />
            <ParaTiles para={"Some of the job profiles students can work on after completion of Masters of Hotel Management are mentioned below for reference."} headingSize={"15px"} />
            <CareerInfoTile data={data5} />
            <ParaTiles para={"The top companies that hire MHM (Masters of Hotel Management) graduates on a regular basis are mentioned below. These names are only for reference as there are several companies who hire MHM postgraduates."} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data6} />
            <ParaTiles heading={"Careers Opportunities after MHM"} para={"The hotel industry is one of the booming industries which raises the demand for skilled people in this industry. The rise in this demand shows ample career opportunities for freshers as well as for those who have a few years of experience. Students can work as an entrepreneur with their work experience in the hotel industry. Students who completed their Master of Hotel management get hired by top hotel groups in India. Some students seek their career opportunities in foreign after getting work experience in the hotel industry. To grow in the career of the hotel industry, students are advised to have excellent interpersonal skills and a warm welcoming attitude so that clients are bound to be with your firm."} headingSize={"15px"} />
            <ParaTiles para={"Nowadays, youngsters are way too passionate about becoming pastry chefs. This makes huge growth of career opportunities in the baking industry. Young minds are taking this industry to a higher level with their innovation and creativity."} headingSize={"15px"} />
            <ParaTiles heading={"Master of Hotel Management: Salary Trends"} para={"Candidates who pursued the M.H.M course are placed in top hotel groups with different job profiles according to their specialisation. The salary of the employees depends on the job profile they are placed on. As a fresher, candidates will get a starting salary of INR 3 lakhs per annum that get hike along with the work experience in the industry. As we know, a master of hotel management is the most job fetching course along with the highest paying job profiles. After having experience of 5-6 years in this industry, employees can get up to INR 30 lakhs per annum."} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data7} />
            <ParaTiles heading={"Master Of Hotel Management Admissions"} para={"The admission process in the Master of Hotel Management course is through two procedures: merit-based selection or entrance exam."} headingSize={"24px"} />
            <ParaTiles para={"Some colleges have the procedure of merit-based selection. It means students can enroll themselves on the basis of their marks. The procedure to enroll is:"} headingSize={"15px"} />
            <ParaTiles para={"The registration forms date releases by respective colleges or universities on their official website. The student has to fill the form online and submit the registration fees before the last date."} headingSize={"15px"} />
            <ParaTiles para={"Cutoff list release by colleges and universities. Students have to choose college according to their eligibility."} headingSize={"15px"} />
            <ParaTiles para={"The date to submit documents will be released by the college. Students have to submit the correct documents as proof. Documents required are class X Marksheet, Class XII Marksheet, recent character certificate, migration certificate, photographs, signature, bachelor’s degree."} headingSize={"15px"} />
            <ParaTiles heading={"Master Of Hotel Management Eligibility"} para={"Different colleges and universities have their own eligibility criteria for the Master of Hotel Management in order to shortlist potential candidates. Candidates are advised to check the eligibility criteria for the Masters of Hotel Management before applying for the course."} headingSize={"24px"} />
            <ParaTiles para={"Students must have passed a bachelor's degree or equivalent from the recognised university with a minimum aggregate of 50 per cent."} headingSize={"15px"} />
            <ParaTiles para={"Candidates must be 21 years old at the time of admission."} headingSize={"15px"} />
            <ParaTiles para={"Candidates from reserved categories will get a relaxation of 5 per cent or according to the government norms."} headingSize={"15px"} />
            <ParaTiles para={"Students from any stream can apply to this course however hotel management graduates will get priority first."} headingSize={"15px"} />
            <ParaTiles para={"Note: Candidates are advised to check the official portal of the college or university in which they are applying for the eligibility criteria and admission procedures."} headingSize={"15px"} />
            <ParaTiles heading={"Masters In Hotel Management Entrance Exams"} para={"To Get Admission In MHM Courses In India Candidates Need To Appear For The Entrance Exams Mentioned Below. The Tentatively Scheduled For The Year Of MHM Admission 2022 as Follows:"} headingSize={"15px"} />
            <ParaTiles heading={"Top MHM Exams"} headingSize={"15px"} />
            <ParaTiles heading={"NCHMCT"} para={"This is the national-level examination conducted by the National Testing Agency in order to select candidates for the master of hotel management. Generally, this examination is conducted in the month of April- May. Students can read the guidelines to know their eligibility criteria for this examination."} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data8} />
            <ParaTiles heading={"Jamia Millia Islamia Admission Test:"} para={"JMI also offers Masters of Hotel Management Course for those students who want to pursue post-graduation. Students need to visit the official portal and check the eligibility criteria before applying for this course. Jamia Millia Islamia conducts an admission test with a weightage of 80% in the selection process. Candidates qualified written examination required to appear in the further round of group discussion and interview."} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data9} />
            <ParaTiles heading={"Direct Admission:"} para={"There are some colleges that offer direct admission to students. Candidates need to visit the official website of the colleges and follow the application procedure provided on the official website. Candidates have to pay a little higher than government colleges when they opt for direct admission for pursuing a Master of Hotel Management."} headingSize={"15px"} />
            <ParaTiles  para={"Mentioned below is the list of essential documents that will be submitted by the students to complete their admission process:"} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data10} />
            <ParaTiles heading={"How To Prepare?"} para={"Some Preparation Tips To Clear Entrance Exams Of Respective College And Universities:"} headingSize={"15px"} />
            <ParaTiles  para={"Be Aware Of The Subject And Entrance Exam Held In That Course."} headingSize={"15px"} />
            <ParaTiles  para={"Score Good Marks In Bachelor’s Degrees."} headingSize={"15px"} />
            <ParaTiles  para={"Choose The Subject According To Your Interest."} headingSize={"15px"} />
            <ParaTiles  para={"Find The Best Top Institutes For Your Preparation For The Entrance Exam. The Conditions Depend On Choosing Institutes Are Fees, Location, Faculty, Institute Services, Weekly Test, Study Material, Transportation, Etc."} headingSize={"15px"} />
            <ParaTiles  para={"Know The Syllabus Of The Entrance Exam Before Preparation."} headingSize={"15px"} />
            <ParaTiles  para={"You Should Have Knowledge About The Exam Pattern, Sections Contained."} headingSize={"15px"} />
            <ParaTiles  para={"You Should Be Aware Of The Exam Marks, Section Marks, Per Question Marks, Negative Marking, Etc."} headingSize={"15px"} />
            <ParaTiles  para={"You Should Give A Weekly Test Through Online Mode To Save And Utilize The Time In Study."} headingSize={"15px"} />
            <ParaTiles  para={"One Should Have Strong General Awareness And English Communication And Writing Skills."} headingSize={"15px"} />
            <ParaTiles  para={"Learn From Help Books With The Study Material Provided By The Institute."} headingSize={"15px"} />
            <ParaTiles heading={"Why Study Masters in Hotel Management?"} para={"Below mentioned are the benefits, skills, and reasons for pursuing the Master of Hotel Management course:"} headingSize={"15px"} />
            <ParaTiles  para={"Choose your environment: The hospitality industry is different from any other industry in that the skills and education you acquire will allow you to work anywhere in the world."} headingSize={"15px"} />
            <ParaTiles  para={"Job benefits are exceptional: A significant component of this is offering excellent benefits and competitive salaries in order to attract and retain exceptional employees and management staff."} headingSize={"15px"} />
            <ParaTiles  para={"Plenty of opportunities: If you work within the hotel industry, there will be multiple opportunities to advance your career, particularly with larger hotel chains."} headingSize={"15px"} />
            <ParaTiles  para={"You will learn leardership, communication skills and quantitative reasearch skills."} headingSize={"15px"} />

        </div>
    )
}

export default Mhm
