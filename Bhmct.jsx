import React from 'react'
import styles from './Bhmct.module.css'
import Header from './Header'
import image from './hdr-bg.jpg'
import ParaTiles from './ParaTiles'
import Table from './Table'
import CareerInfoTile from './CareerInfoTile'
import TableWithMultiRow from './TableWithMultiRow'
import image1 from './image7.webp'  
import image2 from './image8.webp'  
import image3 from './image9.webp'  
import image4 from './image10.webp' 
import image11 from './image11.webp' 
import image12 from './image12.webp' 
import image13 from './image13.webp'  

function Bhmct() {


    const data1 = [
        [""],
        [
            "Course level",
            "Bachelors"
        ],
        [
            "Duration of the course",
            "4 years"
        ],
        [
            "Examination Type",
            "Semester-wise/Year-wise"
        ],
        [
            "Eligibility",
            "A candidate must have passed Class XII examinations from a recognized board"
        ],
        [
            "Admission Process",
            "Merit-based and Entrance exam based"
        ],
        [
            "Top entrance exams",
            "IPU CET, UPSEE, MAH BHMCT CET"
        ],
        [
            "Average course Fee",
            "INR 2.5-5 Lakhs"
        ],
        [
            "Average Starting Salary",
            "INR 2-5 Lakhs"
        ],
        [
            "Top job positions",
            "Steward, Front Office Manager, Bartender, Receptionist, Housekeeping Supervisor, Sous-Chef, etc."
        ]

    ];
    const data2 = [[""],
    [
        "Food Production",
        "Professional cookery, organization structure, commodities used, food pre-preparation",
        "Introduction to the basics of kitchen tool usages."
    ],
    [
        "Food and Beverage Service",
        "Various aspects related to the industry and equipment",
        "Technical skills required for the services."
    ],
    [
        "Housekeeping Operations",
        "Housekeeping departments, cleaning equipment, etc.",
        "Basic knowledge about housekeeping skills."
    ],
    [
        "Front Office Operations",
        "Room tariffs, telephone etiquettes, etc.",
        "Handling the front desk effectively."
    ],
    [
        "Catering Science",
        "Hygiene, food microbiology, protecting food, personal hygiene, etc.",
        "The understanding of the importance of hygiene and food handling."
    ],
    [
        "Communication Fundamentals",
        "The communication process, communication barriers, listening, etc.",
        "Improving the communication and oral skills of the students."
    ],
    [
        "Accommodation Operations",
        "Contract cleaning, controlling pests, textiles, laundry management, etc.",
        "Learning cost control and establishing profitability."
    ],
    [
        "Computer Fundamentals",
        "Computer fundamentals, WINDOWS, MS WORD, MS EXCEL, POWERPOINT presentation, etc.",
        "To enable the students to learn basic computer skills and incorporate it into their daily work."
    ],
    [
        "Basic Accounting",
        "Accounting, subsidiary books, cash books, accounting principles, etc.",
        "To understand the concepts of accounting and include it in hotel management."
    ],
    [
        "Principles of Management",
        "Management thought, planning and decision making, organizing and staffing, leadership, communication, etc.",
        "Learning the concepts of management."
    ],
    [
        "Hotel Accountancy",
        "Introduction to a joint-stock company, company final accounts, allowances and visitors paid out, guest billing, etc.",
        "Knowledge about the books maintained at the hotels, day-to-day final transactions, and record keeping."
    ],
    [
        "Human Resource Management",
        "Introduction, human resource planning, HR department, wage and salary administration, grievances and discipline and labor management, etc.",
        "Developing a positive behavior at work."
    ],
    [
        "Travel and Tourism",
        "Tourism phenomenon, constituents of the tourism industry, infrastructure and types of tourism, the impact of tourism, tourism organization, etc.",
        "Establish a link between the travel industry and tourism."
    ]
    ];
    const data3 = [
        ["College Name", "Location", "Entrance Exam Accepted"],
        [
            "Banarsidas Chandiwala Institute of Hotel Management and Catering Technology, New Delhi",
            "Delhi",
            "IPU CET"
        ],
        [
            "NSHM Knowledge Campus, Durgapur",
            "Durgapur",
            "JEHOM"
        ],
        [
            "Hotel and Catering Management Institute (HCMI) Chandigarh",
            "Chandigarh",
            "Merit-based"
        ],
        [
            "AISSMS College of Hotel Management and Catering Technology, Pune",
            "Pune",
            "CET"
        ],
        [
            "Dr. DY Patil Institute of Hotel Management and catering technology, Pune",
            "Pune",
            "MAH-CET"
        ],
        [
            "Amrapali Institute of Hotel Management, Haldwani",
            "Haldwani",
            "Merit-based"
        ],
        [
            "Shri Shakti College of Hotel Management",
            "Hyderabad",
            "CET"
        ],
        [
            "Guru Nanak Institute of Hotel Management, Kolkata",
            "Kolkata",
            "NCHMCT JEE and GNIHM JET"
        ],
        [
            "Punjab University",
            "Chandigarh",
            "PUTHAT"
        ],
        [
            "University School of Hotel Management and Catering Technology",
            "Mohali",
            "NCHMCT JEE"
        ],
        [
            "Pioneer Institute of Hotel Management, Hyderabad",
            "Hyderabad",
            "Merit-based"
        ],
        [
            "Institute of Hotel Management Catering Technology and Applied Nutrition",
            "Meerut",
            "UPSEE"
        ],
        [
            "IIMT College of Hotel Management and Catering Technology",
            "Meerut",
            "CET"
        ]
    ];
    const data4 = [
        [""],
        [
            "College name",
            "University School of Hotel Management and Catering Technology	",
            "Pioneer Institute of Hotel Management, Hyderabad	",
            "Institute of Hotel Management Catering Technology and Applied Nutrition"
        ],
        [
        "College overview",
        "University school of hotel management and catering technology, Mohali is a premier institute offering various courses in the fields of hospitality. The college offers courses like BHMCT, MHMCT, BHM, Ph.d. and other diploma courses.",
        "Pioneer institute of hotel management was established in 2000 by the CBM educational society. The college is affiliated to Osmania University, Hyderabad. The college offers BHMCT, BHM, postgraduate diploma in hotel management, and several other certificate courses.",
        "IHM, Meerut is a well-known hotel management institute in north India. It provides quality education to its students in the fields of hospitality."
        ],
        [
            "Admission Process",
            "Depends on merit + NCHMCT JEE scores.",
            "Based on marks of 10+2 examination.",
            "Depends on UPSEE scores and interview."
        ],
        [
            "Average Annual Fee",
            "INR 80,000",
            "INR 90,000",
            "INR 74,600"
        ],
        [
            "The average annual package offered",
            "INR 2,00,000",
            "INR 1,70,000",
            "INR 1,90,000"
        ],
        [
            "Top recruiters",
            "Taj group of hotels, Aditya Birla group, Oberoi hotels, and resorts, Aon Hewitt",
            "Taj, Hyatt, Oberoi hotels and resorts, Domino's, Fortune hotel, Oyo, Sheraton",
            "Pizza hut, Holiday inn, Swiggy, The park hotels, Green park hotels"
        ]
    ];
     const data5 = [
        [""],
        [
        "Qualification",
        "Bachelor of Hotel Management and Catering Technology",
        "Bachelor of Hotel Management"
      ],
      [
        "Course Overview",
        "BHMCT is a 4 years course. The course prepares students to pursue a career in the hospitality industry. The course efforts at imparting theoretical knowledge along with practical knowledge.",
        "BHM as a course teaches students about the various domains of the hospitality industry like hotel management and catering technologies. The course duration varies as per the college/university. Some colleges offer it as a 3 years course while others offer it as a 4 years course."
      ],
      [
        "Course Objective",
        "The course aims at imparting knowledge about the hotel and catering industry. The course focuses on broader aspects of the hospitality industry.",
        "The course aims at imparting knowledge about hotel management. The main idea is about the functioning and management of the hotel industry."
      ],
      [
        "Eligibility",
        "10+2 with minimum 50 % eligibility from a recognized board.",
        "10+2 with minimum 50% marks from a recognized board."
      ],
      [
        "Admission Process",
        "Based on the entrance exam",
        "Based on the entrance exam, followed by group discussion and interview."
      ],
      [
        "Specializations",
        "Hotel management, Catering technology and tourism, Diet and nutrition, etc",
        "Hotel and catering management, Food production management, Food and beverage management, Accommodation management"
      ],
      [
        "Average Annual Fees",
        "INR 2.5-5 lakh",
        "INR 3-8 lakh"
      ],
      [
        "Average salary offered",
        "INR 2 to 5 lakhs",
        "INR 2 to 5 lakhs"
      ],
      [
        "Job options available",
        "Steward, Front Office Manager, Bartender, Receptionist, Housekeeping Supervisor, Sous-Chef, etc.",
        "King chef, front desk officer, accounting manager, executive housekeepers, catering officer, cabin crew, etc."
      ],
      [
        "Colleges",
        "Shri Shakti College of hotel management, Hyderabad, Punjab University, Chandigarh, University school of hotel management and catering technology, Mohali, Pioneer institute of hotel management, Hyderabad, Institute of hotel management catering technology and applied nutrition, Meerut",
        "Army institute of hotel management and catering technology, Bangalore, Institute of hotel management and catering, Udaipur, Himalayan institute of technology, Dehradun, Assam downtown university, Guwahati"
      ]
    ];
     const data6 = [
        [""],
         [
        "Steward",
        "A steward is a person who looks after and is responsible for supplies of food to a college, club, or other institution. Such persons are also employed in ships, aircraft or trains",
        "INR 3,50,000"
      ],
      [
        "Front Office Manager",
        "Front Office Managers are generally found in hotels or event management companies. Their main responsibility is to arrange events, look after the needs of their clients, and deliver the best possible services.",
        "INR 5,60,000"
      ],
      [
        "Sales Manager",
        "A Sales Manager is responsible for organizing a team and directing the team's focus for more productive results. Such a person sets goals, analyses the sales data, motivates and helps improve the sales process of a company",
        "INR 4,70,000"
      ],
      [
        "Hotel Management Trainee",
        "A Hotel Management Trainee undergoes training in various departments so as to become capable of handling big and responsible positions in the future. The training includes kitchen, reception, restaurant, housekeeping, personnel, administration, banquet, and marketing.",
        "INR 3,50,000"
      ],
      [
        "Bartender",
        "A Bartender usually experiments with alcoholic and non-alcoholic drinks. He is responsible for interacting with customers and serving them with the best of his capacity",
        "INR 3,30,000"
      ]
    ];
     const data7 = [
        ["MBA Hospitality Management - ","This MBA program is focused on managing the hotels. Thus the students will learn to develop managerial skills, decision making, and problem-solving skills for the hospitality industry."],
        ["MBA in Hotel Management - ","This is one of the common choices for hotel management students."],
        ["MBA in Tourism and Hotel Management - ","his MBA will focus more on managing works in the tourism industry, which may also include airlines."]
    ];
     const data8 = [
        ["IPU CET: ","IPU CET is conducted by Guru Gobind Singh Indraprastha University for the selection process. The forms for IPU CET are available generally during February, while the test is conducted in the month of May. The forms are only available online."],
        ["UPSEE: ","UPSEE or Uttar Pradesh State Entrance Examination is conducted by Uttar Pradesh Technical University for admission to the BHMCT program. The forms are available in the month of February and an objective exam is held in the month of April."],
        ["MAH BHMCT CET: ","MAH BHMCT CET is conducted by the State Common Entrance Test Cell, Government of Maharashtra. The exam is conducted for admission to the Bachelor of Hotel Management and Catering Technology programs."],
        ["NCHMCT JEE: ","NCHMCT JEE is a national level entrance exam conducted by NTA (National Testing Agency). The exam is conducted for admission into BSc Course in Hospitality and Hotel Administration (BSc HHA) across the country.?"]
    ];
    
    return (
        <div>
            <Header tittle={"Bachelor In Hotel Management And Catering Technology (BHMCT)"} subTittle={"Elegliblity | Course Fee | Course Duration | Entrance Exams"} BGimage={image} />
            <ParaTiles heading={"About Bachelor of Hotel Management & Catering Technology (BHMCT)"} para={"Bachelor of Hotel Management and Catering Technology is a four-year undergraduate vocational program which provides professional training to students for the hospitality and new inventions in catering technology."} headingSize={"24px"} />
            <ParaTiles para={"The main aim of the four-year course is to make students familiar with management techniques, processes, and methods used in hotel and hospitality businesses. The key areas of BHMCT are accounts, desktop, administration, front office, housekeeping, catering, maintenance, security, and catering. With India being one of the major hubs in the hotel management industry, there’s no dearth of jobs and employment opportunities in this sector as it is the second biggest employer across the country after IT and software industry."} headingSize={"15px"} />
            <ParaTiles para={"BHMCT is divided into eight semesters which involves skill set and extensive knowledge necessary for jobs in the hospitality industry and train students who wish to open their own catering businesses. "} headingSize={"15px"} />
            <ParaTiles heading={"Highlights"} para={"The following table lists some of the key highlights of this course."} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data1} />
            <ParaTiles heading={"BHMCT Syllabus"} para={"Bachelor of Hotel Management and Catering Technology [BHMCT] is divided into eight semesters. Each year of study comprises two semesters. The course curriculum includes several theory exams, assignments, practical work. The weightage for theory papers and the weightage for practical papers is different for different universities."} headingSize={"15px"} />
            <ParaTiles para={"The course curriculum and syllabus are almost similar for all the colleges or universities offering BHMCT. Given below is a tabulated overview of the topics covered and their respective description."} headingSize={"15px"} />
            <TableWithMultiRow data={data2} col1={"20%"} col2={"40%"} col3={"40%"} />
            {/* <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data2} /> */}
            <ParaTiles heading={"BHMCT Colleges"} para={"A significant number of colleges across the country offer BHMCT courses to candidates who have passed their class 12 examinations from a recognized board. Some of the top BHMCT colleges in India are mentioned below:"} headingSize={"15px"} />
            <TableWithMultiRow data={data3} col1={"60%"} col2={"20%"} col3={"20%"} />
            <img className={styles.img2} src={image2} alt="" />

            <ParaTiles heading={"College Comparison"} para={"There are various top colleges that offer BHMCT courses, and therefore it becomes difficult to choose. So below is the comparison of the top 3 colleges that offer BHMCT, on the basis of college overview, average fees, average salary, and top recruiters."} headingSize={"15px"} />
            <TableWithMultiRow data={data4} col1={"10%"} col2={"30%"} col3={"30%"} col4={"30%"} />
            <img className={styles.img2} src={image11} alt="" />
            <ParaTiles heading={"BHMCT Distance Education"} para={"Sometimes, due to various reasons, one can not pursue the desired course through regular learning, here distance learning comes to rescue. BHMCT is also awarded through distance education mode by colleges like Indira Gandhi National Open University (IGNOU). The university is located in Delhi and offers various distance learning programs."} headingSize={"15px"} />
            <ParaTiles heading={"Course Comparison"} headingSize={"15px"} />
            <ParaTiles heading={"BHMCT vs BHM"} para={"Here is the basic course comparison between BHMCT and BHM, based on the course overview, objective, specializations, average fees, average salary, and top colleges offering the program. Check for top BHM Colleges in India."} headingSize={"15px"} />
            <TableWithMultiRow data={data5} col1={"20%"} col2={"40%"} col3={"40%"} />
            <img className={styles.img2} src={image12} alt="" />
            <ParaTiles heading={"BHMCT Jobs and Career Options"} para={"There is a wide scope for graduates in the hospitality industry. The average BHMCT salary earned by such graduates ranges between INR 2 to 5 Lakhs. Some of the major job profiles offered to such graduates are tabulated below:"} headingSize={"15px"} />
            <TableWithMultiRow data={data6} col1={"15%"} col2={"70%"} col3={"15%"} />
            <ParaTiles  para={"The graph given below shows the various job profiles available to BHMCT graduates and the respective salary associated with the job profile."} headingSize={"15px"} />
            <img className={styles.img2} src={image13} alt="" />
            <ParaTiles heading={"BHMCT Scope"} para={"Over the past years, Bachelor of Hotel Management and Catering Technology [BHMCT] as a course has gained immense popularity among students. It not only provides students with good-paying jobs but at the same time also opens up an opportunity to turn their hobby/passion into their career."} headingSize={"15px"} />
            <ParaTiles  para={"Students who enjoy cooking can be great chefs while students interested in management can be great hotel managers."} headingSize={"15px"} />
            <ParaTiles  para={"To dive into the field of management one can pursue an MBA in hospitality or hotel management. This helps students to increase their skill set."} headingSize={"15px"} />
            <ParaTiles  para={"One can even choose to pursue post-graduation in management. Those who want to go for higher studies can choose:"} headingSize={"15px"} />
            <CareerInfoTile data={data7} headingColor={1} />
            <ParaTiles heading={"BHMCT Admissions"} para={"Admission to the course is based either on the Common Entrance Test (CET) mechanism or the merit-based criteria adopted by certain colleges/universities. The top colleges usually select students based on entrance tests."} headingSize={"24px"} />
            <ParaTiles  para={"The dates for the BHMCT entrance exams have been postponed due to COVID-19. NCHMCT JEE was postponed to June 22, the other exams may also take place during that time. Track the latest updates for this exam by clicking here."} headingSize={"15px"} />
            <ParaTiles  para={"Given below is a brief description of the admission process."} headingSize={"15px"} />
            <ParaTiles  para={"Usually, the admission procedure commences as soon as the 12 board results are declared. Most of the colleges or universities depend on the marks obtained by the students in the 12 board examinations for the purpose of granting admissions."} headingSize={"15px"} />
            <ParaTiles  para={"In the case of entrance tests, students have to clear the minimum cut-off to qualify the respective exam of a college/university."} headingSize={"15px"} />
            <ParaTiles  para={"The colleges or universities will then declare the result and release a merit list of shortlisted candidates."} headingSize={"15px"} />
            <ParaTiles  para={"The shortlisted students will be called for group discussion and personal interview."} headingSize={"15px"} />
            <ParaTiles  para={"After the admission process, the final allotment of seats to the candidate takes place and the candidate is asked to deposit the fee for the course and register for the respective academic year."} headingSize={"15px"} />
             <img className={styles.img2} src={image4} alt="" />
            <ParaTiles heading={"BHMCT Eligibility"} para={"Generally, The BHMCT Eligibility Criteria Are Prescribed By Colleges Or Universities. For Admission To The Course, It Is Mandatory For The Candidates To Fulfil All The Eligibility Requirements For BHMCT. The Educational Qualification For BHMCT Remains The Same In Almost All Educational Institutions And Is Explained Below."} headingSize={"24px"} />
            <ParaTiles heading={"Educational Qualifications"} para={"The Candidate Must Have Completed The Class 12 With Any Subject, From A Recognized Board Or Institution. Some Universities Or Colleges Set 50% Per Cent Minimum Aggregate Marks In The Qualifying Exam As One Eligibility Criteria."} headingSize={"15px"} />
            <ParaTiles heading={"BHMCT Entrance Exams"} para={"Several colleges and universities rely on the scores of self-conducted entrance exams to shortlist students for admission into the course. Some of the top entrance exams for BHMCT are mentioned below:"} headingSize={"24px"} />
            <CareerInfoTile data={data8} headingColor={1} />
            <ParaTiles heading={"How to Prepare for BHMCT Entrance Exams?"} para={"Performing well in an entrance exam can be easy if one is well aware of the latest exam pattern. Hence one should do thorough research about it in order to develop a clear idea about the exam pattern."} headingSize={"15px"} />
            <ParaTiles  para={"Apart from this, one should know the full syllabus of the entrance exam. Mainly there are four sections in almost all the entrance exams conducted for admission into the BHMCT program."} headingSize={"15px"} />
            <ParaTiles  para={"One can refer to the tips given below preparing for the entrance exams:"} headingSize={"15px"} />
            <ParaTiles  para={"BHMCT exam paper consists of multiple-choice questions with no negative marks for wrong answers."} headingSize={"15px"} />
            <ParaTiles  para={"The questions asked in the exam generally test one's aptitude. Hence it is very important to do a proper revision of such questions. Concept clarification and practice is the key to crack the exam."} headingSize={"15px"} />
            <ParaTiles  para={"Solving previous year question papers can prove to be extremely helpful. These help to understand the exam pattern even more clearly. Apart from this, one should solve at least 10-15 mock test papers before appearing for the exam."} headingSize={"15px"} />
            <ParaTiles  para={"On the exam day, avoid reading any new topic. Just stay calm and composed and don’t think anything negative before entering the exam hall. Be confident about whatever you have learned."} headingSize={"15px"} />
            <img className={styles.img1} src={image1} alt="" />
            <ParaTiles heading={"Why study BHMCT?"} para={"Bachelor of Hotel Management and Catering Technology [BHMCT] is one of the most sought degrees in India in terms of personal growth and career growth opportunities. There are many benefits to pursuing BHMCT. Some of them are given below."} headingSize={"15px"} />
            <ParaTiles  para={"The course provides various career growth opportunities and promotes the growth of knowledge."} headingSize={"15px"} />
            <ParaTiles  para={"The course imparts an in-depth knowledge about the various aspects of hospitality as a subject."} headingSize={"15px"} />
            <ParaTiles  para={"The course offers handsome salary packages ranging from 2 lakhs per annum up to 5 lakhs per annum."} headingSize={"15px"} />
            <ParaTiles  para={"The course opens up various career opportunities in front of students. Students can either find themselves working in the respective field or pursuing higher education in the related fields. Either way, their knowledge of the subject builds up."} headingSize={"15px"} />



        </div>
    )
}

export default Bhmct
