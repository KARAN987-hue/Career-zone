import React from 'react'
import image from './hdr-bg.jpg'
import Header from './Header'
import ParaTiles from './ParaTiles'
import Table from './Table'
import CareerInfoTile from './CareerInfoTile'

export function MTech() {

    const data1 = [
        ["Highlights", ""],
        [
            "Course Name",
            "M.Tech."
        ],
        [
            "Full Form",
            "Master of Technology"
        ],
        [
            "Eligibility",
            "Bachelor of Technology"
        ],
        [
            "Duration",
            "Two years"
        ],
        [
            "Fee",
            "45,000 to 1 lakh per semester"
        ],
        [
            "Course Type",
            "Regular and Part time"
        ],
        [
            "Starting Salary",
            "50,000 per month"
        ],
        [
            "Job Opportunities",
            "Academics, Corporate, Research and Development"
        ]
    ];
    const data2 = [
        ["Browse Top M.Tech Colleges By States", ""],
        [
            "M.Tech. Colleges in Tamil Nadu",
            "	M.Tech. Colleges in Maharashtra"
        ],
        [
            "M.Tech. Colleges in Andhra Pradesh",
            "M.Tech. Colleges in Telangana"
        ]
    ]
    const data3 = [
        ["Popular Engineering Colleges in India", ""],
        [
            "UPES Dehradun",
            "LPU Jalandhar"
        ],
        [
            "Jain University, Bangalore",
            "KL University Guntur"
        ],
        [
            "SRM University Chennai",
            "NIIT University, Neemrana"
        ],
        [
            "GD Goenka University, Gurgaon",
            "GNA University, Phagwara"
        ],
        [
            "Chandigarh University",
            "BML Munjal University, Gurgaon"
        ]
    ]
    const data4 = [
        ["IITs Offering M.Tech Programme", ""],
        ["IIT Guwahati", "IIT Ropar"],
        ["IIT Kanpur", "IIT Patna"],
        ["IIT Dhanbad", "IIT Hyderabad"],
        ["IIT Madras", "IIT Bhubaneshwar"],
        ["IIT Roorkee", "IIT Delhi"],
        ["IIT Gandhinagar", "IIT Bombay"],
        ["IIT Mandi", "IIT Indore"],
        ["IIT Kharagpur", "IIT Jodhpur"],
        ["IIT BHU", "IISc Bangalore"]
    ];
    const data5 = [
        ["Computer Science and Engineering", "Aerospace Engineering"],
        ["Embedded Control and Software", "Transportation Engineering"],
        ["Alternate Hydro Energy systems", "Biotechnology"],
        ["Power System Engineering", "Computer Science"],
        ["Biomedical Engineering", "Polymer Engineering"],
        ["Electrical Engineering", "Machine Design"],
        ["CAD/CAM", "Electronics and Telecommunication Engineering"],
        ["Structural Engineering", "Signal Processing"],
        ["Mechanical Engineering", "Automobile Engineering"],
        ["Transportation Engineering and Management", "Digital Communication"],
        ["Structural Engineering Design", "Automotive Technology"],
        ["Engineering Analysis and Design", "Information Technology"],
        ["Mechatronics Engineering", "Civil Engineering"]
    ];

    const data6 = [
        ["Browse Top M.E./M.Tech Colleges by Location", ""],
        ["M.Tech. Colleges in Hyderabad", "M.Tech. Colleges in Bangalore"],
        ["M.Tech. Colleges in Bhopal", "M.Tech. Colleges in Pune"]
    ]
    const data7 = [
        ["Semester 1", "	Semester 2"],
        ["Computer Organization & Architecture", "Theoretical Foundations of Computer Science"],
        ["Data Structure & Algorithms", "Advanced Data Base Management System"],
        ["Systems Programming & Operating Systems", "Distributed Computer Systems"]
    ]
    const data8 = [
        ["Elective 1", "Elective 3"],
        ["(Web Technology & E-Commerce, Internet Technology, Advanced Windows Programming)", "(VLSI System Design, Real Time & Embedded System, Cellular Automata & Its Applications, AI & Neural Network)"],
    ]
    const data9 = [
        ["Elective 2", "Elective 4"],
        ["(Elements of Robotics, Mobile Computing, Software Engineering & Project Management)", "(Object Oriented Information System Design, Enterprise Computing Methodologies, Multimedia Technology, Digital Signal Processing)"],
        ["Data Structure & Algorithms Laboratory", "-"],
        ["Networks & System Programming Laboratory", "-"],
    ]
    const data10 = [
        ["Semester 3", "Semester 4"]
    ]
    const data11 = [
        ["Elective 5", ""],
        ["(Image Processing & Pattern Recognition, Bioinformatics, Soft Computing, Courseware Engineering)", "Project Work"]
    ]
    const data12 = [
        ["Elective 6", ""],
        ["Microprocessors, Parallel Computing, Compiler Construction, Programming Laboratory II (for Elective V chosen)", "-"],
        ["Cryptography and Computer Security)", ""],
        ["Project Work (Phase-I)", "-"]
    ]
    const data13 = [
        ["Online Software Engineering Courses", ""],
        ["Online Civil Engineering Courses", ""],
        ["Online Mechanical Engineering Courses", ""],
        ["Online Electrical Engineering Courses", ""],
        ["View All Online Engineering & Architecture Courses", ""]
    ]
    const data14 = [
        ["Students also liked", ""],
        ["Online Degree and Diploma Courses", ""],
        ["Online Free Courses and Certifications", ""],
        ["Online Short Term Courses and Certifications", ""],
        ["Online Certification Courses", ""],
        ["View List of all Online Courses and Certifications", ""],
        ["Top Certification Course Providers", ""]
    ]
    const data15 = [
        ["", ""],
        ["Engineering Technologist", "Executive Engineer"],
        ["Mechanical Design Engineer", "Product Development Engineer"],
        ["Teacher", "Test Engineer"]
    ]
    const data16 = [
        ["", ""],
        ["HCL Technologies", ""],
        ["Google", "Morgan Stanley"],
        ["Apple", "	Schlumberger"],
        ["Microsoft", "Lenovo"],
        ["Infosys Technologies", "Flipkart"],
        ["IBM", "Reliance Jio"],
        ["Accenture", "HSBC"],
        ["Intel", "Amazon"]
    ]

    const data17 = [
        ["Browse Engineering Colleges by States", ""],
        [
            "Engineering Colleges in Tamil Nadu",
            "Engineering Colleges in Maharashtra"
        ],
        [
            "Engineering Colleges in UP",
            "Engineering Colleges in Karnataka"
        ],
        [
            "Engineering Colleges in Andhra Pradesh",
            "Engineering Colleges in MP"
        ],
        [
            "Engineering Colleges in Telangana",
            "Engineering Colleges in Haryana"
        ],
        [
            "Engineering Colleges in Kerala",
            "Engineering Colleges in Rajasthan"
        ]
    ]
    const data18 = [
        ["Browse Engineering Colleges by Cities", ""],
        [
            "Engineering Colleges in Hyderabad",
            "Engineering Colleges in Bangalore"
        ],
        [
            "Engineering Colleges in Pune",
            "Engineering Colleges in Chennai"
        ],
        [
            "Engineering Colleges in Bhopal",
            "Engineering Colleges in Coimbatore"
        ],
        [
            "Engineering Colleges in Kolkata",
            "Engineering Colleges in Jaipur"
        ],
        [
            "Engineering Colleges in New Delhi",
            "Engineering Colleges in Mumbai"
        ]
    ]


    const data19 = [
        ["Filling The Application Form - ", "In Order To Appear For The Entrance Examination, Candidates Are Required To Fill Out The Application Form By Providing Basic Personal, Contact, And Academic Details. It Should Be Noted That A Separate Application Form Has To Be Submitted For Each Entrance Examination. Also, Candidates Must Check The Eligibility Criteria Prescribed By The Authorities Before Filling Out The Application Form. If Any Candidate Fails To Meet Any Criterion Are Not Eligible For Admission."],
        ["Appear For The Examination - ", "All The Registered Candidates Can Appear For The Respective Examination. Concerned Authorities Issue The Admit Card Without Which No Candidates Are Not Allowed To Appear For The Exam. The Admit Card Contains All The Important Information Related To The Exam Day Such As Date And Time Of Examination, Duration, And Allotted Examination Centre."],
        ["Appear For The Examination -", "All The Registered Candidates Can Appear For The Respective Examination. Concerned Authorities Issue The Admit Card Without Which No Candidates Are Not Allowed To Appear For The Exam. The Admit Card Contains All The Important Information Related To The Exam Day Such As Date And Time Of Examination, Duration, And Allotted Examination Centre."],
        ["Declaration Of Result And Preparation Of The Merit List - ", "The Authorities Declare The Results. On The Basis Of Marks Secured By The Candidates, The Merit List Is Prepared. Shortlisted Candidates Are Then Called To Participate In The Counselling Process."],
        ["Counselling & Seat Allocation - ", "Qualified Candidates Are Required To Participate In The Counselling Process. On The Basis Of Merit, Availability Of Seats, And Preferred Choices, The Authorities Offer Admission Into The M.Tech Programme By Allotting The Seats."]
    ]

    const data20 = [
        ["GATE ", "Is One Of The Most Important Entrance Examinations For Admission Into The M.Tech Programme. This Is A Joint Examination Held By Indian Institute Of Science And Seven Indian Institute Of Technologies (Roorkee, Delhi, Guwahati, Kanpur, Kharagpur, Chennai (Madras) And Mumbai(Bombay). It Is Conducted In A Computer-Based Mode For The Duration Of 3 Hours."],
        ["TANCET ", "Or Tamil Nadu Common Entrance Test Is A State Level Entrance Examination Conducted By The Anna University For Admission Into The Postgraduate Engineering Programme In The Participating Institutes Of The State. The Authorities Conduct The Exam And Release The Cutoff To Offer Admission. The Exam Is Conducted In Offline Mode Having Three Parts - I, II And III Wherein Part I & II Was Compulsory For All While Part III Was Based On The Discipline Selected By The Candidates"],
        ["TS PGECET ", "(Telangana State Post Graduate Engineering Common Entrance Test) Is A State Level Examination Conducted By The Osmania University, Hyderabad On Behalf Of Telangana State Council Of Higher Education (TSCHE). It Is A Computer Based Test Conducted For Admission Into The Participating Institutes In Telangana."],
        ["AP PGECET ", "or Andhra Pradesh Post Graduate Engineering Common Entrance Test Is Conducted By The Andhra University For Admission Into The Participating Institutes In Andhra Pradesh."],
        ["VITMEE ", "Or VIT Master's Entrance Examination Is A University Level Entrance Examination Conducted By The VIT University For Admission To The Various M.Tech Programmes Offered At Its Vellore And Chennai Campuses."]
    ]
    const data21 = [
        ["Gujarat PGCET", ""],
        ["SRMJEEE", ""],
        ["BITS HD Admission Test", ""],
        ["Karnataka PGCET", ""]
    ]
    const data22 = [
        ["A Clear Understanding Of The Exam Pattern: ", "Before One Begins With The Planning, He/she Must Have Proper Knowledge Of A Particular Entrance Exam Pattern. Like Even Though Most Of The Entrance Exams Have Core Engineering Subjects, The Percentage Of Questions Taken From These Four Years Differs From Exam To Exam. "],
        ["Problem-solving: ", " Implementing Theoretical Knowledge Mathematically Or Logically Is Essential To Crack Most Of The Entrance Exams. So To Get These Skills, One Must Not Just Rely Upon The Syllabus Books. Instead, He/she Must Refer To Problem-related Books And Grasp The Concept In A Problematic Way."],
        ["Time Management: ", " With One Wrong Answer, There Will Be A Huge Variation In The Ranking Score. So, It Is Essential To Attempt All The Questions With The Highest Probability Of The Right Option Given, Which Can Only Be Possible With Regular Practice And Hard Work."],
        ["Strong Fundamentals: ", "Students Must Have Strong Core Subjects Fundamentals Required To Get A Better Understanding Of Subjects Pursued In M.tech."]
    ]
    const data23 = [
        ["There is a huge demand in the market and it is growing. India is adding more capacity in every field that is pushing jobs in infrastructure, power, mining, oil and gas, refinery, steel, automotive, and consumer durables.The electrical equipment market will grow to USD 72 Billion in 2025 from USD 50 Billion in 2021. India is growing the international electronic equipment market. The value of exports for electrical equipment from India will rise to USD 13 Billion in 2025 from USD 8.6 Billion in 2021.", ""],
        ["Chemical engineers are in high demand due to the growth of the chemical industry in India. The size o the chemical sector was USD 178 Billion in 2019. Chemical manufacturers are registering high revenue growth which stood at 11% during 2015-2021.", ""],
        ["Defense manufacturing has increased in India in the last few years. The Ministry of Defence has set a target of 70% self-reliance in weaponry by 2027, creating huge scope for defense manufacturers.", ""],
        ["With 100% FDI in the engineering sector companies have started setting up shops in India. This is adding to India's export numbers which stood at USD 111.63 in FY22, 45% higher than FY21.", ""]
    ]

    return (
        <div>
            <Header tittle={"M.Tech (Master Of Technology)"} subTittle={"Elegliblity | Course Fee | Course Duration | Entrance Exams"} BGimage={image} />
            <ParaTiles heading={"About M.Tech"} para={`M.Tech full form is Master of Technology. According to Wikipedia, "In India, a Master of Engineering (M.E.) or a Master of Technology (M.Tech.) or a Master of Science in Engineering (MSc. Engg.) degree is a postgraduate program in the engineering field. It is generally a 2-year program (2 or more years in MSc. Engg.) after completing a 4-year undergraduate degree in engineering (Bachelor of Engineering – B.E. or Bachelor of Technology – B.Tech.). Integrated M.E./M.Tech. many institutions also offer degree (B.E./B.Tech. + M.E./M.Tech.) program of 5-year duration." Students' popular specializations are Artificial Intelligence, Machine Learning, Data Science, Mechatronics, Software Engineering, etc.`} headingSize={"24px"} />
            <ParaTiles para={`M.Tech is a two-year-long postgraduate program that deals with existing technologies and gives a gateway toward technical research. The M.Tech course has tremendous specialization according to one's undergraduate degree in engineering. There is a lot of job scope and opportunities for graduates of this course. Some of the popular job roles students start with include Senior Software Engineer, Software Engineer, Design Engineer, Assistant Professor, Post secondary / Higher Education, Software Developer, Sr. Software Engineer / Developer / Programmer, etc.`} />
            <ParaTiles para={`Many times, candidates are found to be confused between the M.Tech and M.E programme. One of the major differences between the two is the M.E is basically a theory-based programme, whereas M.Tech is an application-based programme. In this article, candidates will not only find information on M. Tech. course, but detailed information on various aspects of pursuing a Master of Technology programme such as specialisations, various entrance examinations that have to be cleared in order to pursue Master of Technology course and the eligibility criteria.`} />
            <ParaTiles heading={"What is the M Tech full form?"} para={`M Tech full form is Master of Technology. M.Tech is a two year professional technical degree course. M.Tech degree is awarded to candidates in the field of engineering technology. In this article, we will discuss M Tech qualification, M Tech subjects, syllabus, eligibility criteria, admission process.`} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data1} />
            <ParaTiles heading={"Types of M.Tech"} para={`Master of Technology is a postgraduate degree which can be pursued after completion of the B.Tech . Candidates can opt for Regular M.Tech or Part time M.Tech.`} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data2} />
            <ParaTiles heading={"Check here list of M.Tech Colleges in India"} headingSize={"15px"} />
            <ParaTiles heading={"Advantages of M.Tech"} para={`Pursuing an M.Tech degree after B.Tech provides ample time to gain in-depth technical knowledge on the subject and have more control over it.`} headingSize={"15px"} />
            <ParaTiles para={`The M.Tech degree enhances an individual’s professional qualifications and builds a strong social as well as professional network in which one could get top jobs.`} />
            <ParaTiles para={`There are opportunities to switch to management roles as one gains higher knowledge in the field of technology.`} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data3} />
            <ParaTiles heading={"Top Institutes for M.Tech Programme"} para={`Pursuing M.Tech from the top institute is a dream of many students. In the below table, candidates can find the list of some of the top institutes offering M.Tech programmes.`} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data4} />
            <ParaTiles heading={"M.Tech Specializations"} para={`M.Tech is offered in various different fields. Candidates have to choose a field of their choice and during the duration of two years, he or she is specialized in that particular field. Below are some of the most popular specializations of the M Tech subjects.`} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data5} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data6} />
            <ParaTiles heading={"M.Tech Syllabus"} para={`M.Tech is done in various different specializations and the syllabus for each specialization is different. Candidates can find the syllabus for some M.Tech specializations in the tables below.`} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data7} heading={"M.Tech Syllabus for Computer Science and Engineering"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data8} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data9} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data10} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data11} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data12} />
            <ParaTiles heading={"M.Tech Salary"} para={`Candidates who have completed Master of Technology can easily get a starting salary of Rs. 50,000. However, with an increase in experience, the total salary package will also increase.`} headingSize={"15px"} />
            <ParaTiles para={`Popular Online Engineering Courses and Certifications`} headingSize={"15px"} />
            <CareerInfoTile data={data13} headingColor={1} />
            <ParaTiles heading={"Scope of M.Tech"} para={`M.Tech is a gateway to grab job opportunities at some of the best companies. Candidates who have obtained a Master degree in Technology have a good hold on technical knowledge. This opens up the way to many good job opportunities. Students will be able to work in various fields depending on their specialisation. Career opportunities are ample in the private sector, government sector and teaching to name a few.`} headingSize={"15px"} />
            <ParaTiles para={`If students are interested in specialising further, they can also plan for Ph.D. This provides an edge over others at a later stage. It broadens the career opportunities for students.`} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data14} />
            <ParaTiles heading={"Careers Opportunities after M.Tech"} para={`Obtaining an M.Tech degree opens up a wide range of job opportunities. Engineering is one of the fields whose students are always in demand. Engineers are required everywhere. Below is the list of some of the job positions available for M.Tech students:`} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data15} />
            <ParaTiles heading={"Top recruiters for M. Tech. Students"} para={`The top recruiters of the candidates with a master’s degree in any specialised fields(Regular/Part-Time) are mentioned below:`} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data16} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data17} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data18} />
            <ParaTiles heading={"M.Tech Admissions"} para={`Most Of The Institutes Offer Admission On The Basis Of Candidates Performance In GATE Examination, But There Are Many Institutes That Conduct Their Own Entrance Exam. Candidates Looking For Admission Into The M.Tech Programme Must Know The Entrance Examination Accepted By The Institute. The Admission Process Generally Include The Following Steps:`} headingSize={"24px"} />
            <CareerInfoTile data={data19} />
            <ParaTiles heading={"M.Tech Eligibility"} para={`As There Is A Mad Competition For The Few Seats Available In The Top Institutes Of The Country, The Institutes Specify Some Conditions And Requirements To Eliminate Those Who Are Not Fit Enough To Become Engineers Or Do Not Have The Right Aptitude. To Ensure That Only The Best And The Deserving Students Get Admission Into The Engineering Institutions To Pursue Their Master Of Technology, It Is Mandatory For Each Applicant To Meet The Eligibility Criteria Prescribed By The Authorities. Ineligible Candidates Are Not Offered Admission. Candidates Must Note That The Eligibility Criteria May Vary From Institute To Institute.`} headingSize={"24px"} />
            <ParaTiles heading={"Eligibility Criteria For M.Tech Part Time Programme"} para={`Candidates Must Have Obtained A Bachelor Degree From The Recognised University.`} headingSize={"24px"} />
            <ParaTiles para={`Should Have Qualified The Entrance Examination.`} />
            <ParaTiles para={`Candidates Who Have Completed A Five-year Programme And Received The Master Of Science Degree Are Also Eligible To Undertake The Master Of Technology Programme.`} />
            <ParaTiles para={`Candidates Should Have Completed The B.Tech/B.E Programme With A Minimum Of 55 Percent.`} />
            <ParaTiles para={`A Minimum Work Experience Of Two Years From A Recognised Firm/company/industry Or Research/governmental Organisation In The Respective Field.`} />
            <ParaTiles heading={"Top M.Tech Entrance Exams"} para={`It Is Very Important To Know The Right Way To Enroll For Any Of The Top Institutions For A Master Programme. There Are Certain Entrance Examinations That Are The Gateway To Get Admission Into The M.Tech Programme. Below Are Some Of The Most Popular Entrance Examinations.`} headingSize={"24px"} />
            <CareerInfoTile data={data20} />
            <ParaTiles heading={"Some Other Common Entrance Exams For M.Tech"} headingSize={"24px"} />
            <CareerInfoTile data={data21} headingColor={1} />
            <ParaTiles heading={"Preparation Tips For M.Tech"} para={`To Get Into The Top Engineering Colleges, Candidates Should Start Their Preparation As Early As Possible. Most Of The M.Tech Entrance Exams Will Have Core Engineering Subjects That Depend Upon The Master's Course They're Willing To Apply For. Some Of The University Entrance Exams Will Also Have A Section For The English Language To Check The Verbal Knowledge Of The Candidates.:`} headingSize={"24px"} />
            <CareerInfoTile data={data22} />
            <ParaTiles heading={"Why Study MTech Courses?"} para={`MTech courses provide knowledge about core engineering at the highest level. India is a growing country and highly skilled engineers are in high demand. Some industry facts show how especially skilled engineers will have high opportunities.`} headingSize={"15px"} />
            <CareerInfoTile data={data23} headingColor={1} />
            <ParaTiles heading={"When to Study MTech Courses?"} para={`MTech can be pursued right after graduation to move into higher studies and get detailed knowledge and experience about the field of specialization. Students can also pursue it while working as a professional in part-time or distance learning mode.`} headingSize={"15px"} />
            <ParaTiles para={`The course should be pursued immediately after the completion of Graduation, for those who are pursuing a regular course.`} />
            <ParaTiles para={`Candidates who are working can do their MTech via distance or part time mode due to financial and time constraints.
            The candidates should pursue this course when they have decided that they want to pursue a career that is mainly based on research.`} />

        </div>
    )
}

// export default MTech
