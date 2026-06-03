import React from 'react'
import Header from './Header'
import image from './hdr-bg.jpg'
import ParaTiles from './ParaTiles'
import Table from './Table'
import CareerInfoTile from './CareerInfoTile'

function Bba() {


    const data1 = [
        [
            "Particulars",
            "Details"
        ],
        [
            "Full-Form of BBA Course",
            "Bachelor of Business Administration"
        ],
        [
            "BBA Admission",
            "Merit and Entrance Based"
        ],
        [
            "Course Level",
            "Undergraduate"
        ],
        [
            "BBA Duration",
            "3 years Divided into Six Semesters"
        ],
        [
            "Types of BBA",
            "Online BBAFull-time BBAPart-time BBADistance/ Correspondence BBA"
        ],
        [
            "BBA Eligibility",
            "Passed 10+2 in any stream from a recognised university"
        ],
        [
            "BBA Admission Process",
            "Merit-based and Entrance-exam based"
        ],
        [
            "BBA Entrance Exams",
            "IPU CET exam, DU JAT exam, NPAT exam, UGAT exam, SET exam"
        ],
        [
            "Major Specialisations",
            "Sales and Marketing, Finance, HR, International Business, Entrepreneurship"
        ],
        [
            "BBA Course Average Fees",
            "INR 50,000 – INR 2,00,000"
        ],
        [
            "BBA in IGNOU Fees",
            "INR 60,000"
        ],
        [
            "BBA Average Salary",
            "INR 3 LPA - INR 5 LPA"
        ],
        [
            "BBA Specialisations",
            "BBA FinanceBBA MarketingBBA International Business"
        ],
        [
            "BBA Syllabus/Subjects",
            "Principles of ManagementBusiness EconomicsAccounting – Financial and Management AccountingBusiness MathematicsMarketing ManagementStatisticsOperations ResearchProduction and Material ManagementPersonnel Management and Industrial Relations"
        ],
        [
            "Top Recruiters",
            "DeloitteAccentureDeutsche BankHDFC Bank Pvt LtdEY (Ernst & Young)"
        ]
    ];
    const data2 = [
        [
            "Name of Institute",
            "Admission Procedure"
        ],
        [
            "Narsee Monjee Institute of Management Studies",
            "NPAT Admission"
        ],
        [
            "Symbiosis International Deemed University",
            "SET Admission"
        ],
        [
            "Bharati Vidyapeeth Deemed University",
            "BUMAT Admission"
        ],
        [
            "Christ University",
            "CUET Admission"
        ],
        [
            "Delhi University",
            "DU JAT Admission"
        ]
    ];
    const data3 = [
        [
            "Finance",
            "Foreign Trade"
        ],
        [
            "Banking and Insurance",
            "Hospitality and Hotel Management"
        ],
        [
            "Information Technology",
            "Hospital and Healthcare Management"
        ],
        [
            "Human Resource",
            "Logistics"
        ],
        [
            "Marketing Management",
            "Travel and Tourism Management"
        ],
        [
            "Communication and Media Management",
            "Sports Management"
        ]
    ];
    const data4 = [
        [
            "1st Year"
        ],
        [
            "Human Resource Management I",
            "Business Law I"
        ],
        [
            "Effective Communication I",
            "Quantitative Methods I"
        ],
        [
            "Principles of Management I",
            "Principles of Management II"
        ],
        [
            "Managerial Economics",
            "Computer Applications"
        ],
        [
            "Financial Accounting",
            "Management Accounting I"
        ],
        [
            "2nd Year"
        ],
        [
            "Business Environment",
            "Quantitative Methods II"
        ],
        [
            "Business Management",
            "Financial Management I"
        ],
        [
            "Project Work",
            "Managerial Economics II"
        ],
        [
            "Management Accounting II",
            "Human Resource Management II"
        ],
        [
            "Business Law",
            "Effective Communication II"
        ],
        [
            "3rd Year"
        ],
        [
            "Operations Management",
            "Taxation"
        ],
        [
            "Research Methodology in Management",
            "Marketing Management"
        ],
        [
            "International Marketing",
            "Export/Import Management"
        ],
        [
            "Public Relations Management",
            "Project Management"
        ]
    ];
    const data5 = [
        ["The BBA course provides quick opportunities to acquire skills important in a profession", "As one moves out of his school life, he will be exposed to the professional world. The lessons will help him acquire important professional and management skills. It will help him understand risk management skills and make decisions as a leader. It also sharpens one’s thinking on various strategies and stages of running a business or becoming an entrepreneur."],
        ["BBA course covers the entire phase of basic management", "Over the course of three years, the BBA Course helps an individual learn the most basic management skills. The programme covers a wide range of topics ranging from financial and advertising management, business economics, business law, accounting policies, IT and computer basics, and more. A Bachelor of Business Administration degree is not just a degree but is actually a complete approach to management."],
        ["BBA Course is a large management-focused programme", "The BBA course enables an individual to manage large corporations and qualifies for multidisciplinary management positions. If one has just completed a B.B.A. degree then he will be ready as an executive, operations manager, loss prevention manager, cost evaluator, procurement and sales manager."],
        ["Pursuing a B.B.A makes you financially independent with less investment than an M.B.A", "One of the benefits of having a B.B.A is that it gives you the bachelor of business administration job opportunity to be independent at a young age."],
        ["Also read: Online MBA vs Executive MBA: Choose the Better", ""]
    ];
    const data6 = [["Browse BBA Colleges by States"],
    [
        "BBA Colleges in Karnataka",
        "BBA Colleges in Tamil Nadu"
    ],
    [
        "BBA Colleges in Uttar Pradesh",
        "BBA Colleges in Maharashtra"
    ],
    [
        "BBA Colleges in Kerala",
        "BBA Colleges in Madhya Pradesh"
    ],
    [
        "BBA Colleges in Punjab",
        "BBA Colleges in Haryana"
    ],
    [
        "BBA Colleges in Delhi NCR",
        "BBA Colleges in Rajasthan"
    ]
    ];
    const data7 = [
        ["Browse BBA Colleges by Locations"],

        ["BBA Colleges in Delhi",
            "BBA Colleges in Delhi NCR"
        ],
        [
            "BBA Colleges in Bangalore",
            "BBA Colleges in Mumbai"
        ],
        [
            "BBA Colleges in Pune",
            "BBA Colleges in Hyderabad"
        ],
        [
            "BBA Colleges in Chennai",
            "BBA Colleges in Ahmedabad"
        ],
        [
            "BBA Colleges in Kolkata",
            "BBA Colleges in Jaipur"
        ]
    ];
     const data8 = [
        ["Popular Colleges in India offering MBA"],
        [
        "UPES Dehradun",
        "LPU Jalandhar"
      ],
      [
        "SRM University Chennai",
        "GD Goenka University, Gurgaon"
      ],
      [
        "Chandigarh University",
        "BML Munjal University, Gurgaon"
      ],
      [
        "Manipal University (MAHE)",
        "Jaipuria Institute of Management, Noida"
      ],
      [
        "IPE Hyderabad",
        "IFIM Business School"
      ]
    ];
     const data9 = [
        ["Getting a Private Job - ","Campus placement can help candidates get a good job in any reputed private firm with a good salary base to earn and have a better livelihood. There are some candidates who do not take up the campus placements but rather look for more opportunities by themselves in any private organisation."],
        ["Enrolling for Master’s degree - ","If candidates are unable to get a job as per their expectation after BBA degree or is willing to go for further studies to have a competitive advantage over other candidates then, the candidates can enrol themselves in any top B-School to pursue a master’s degree. Varied options like MBA, MMS, M.A., and PGDM are available to candidates nowadays."],
        ["Clearing Competitive Exams - ","Some candidates are inclined towards getting a government job. Such candidates can opt for preparing for a government exam. Clearing such exams will help them bag good positions if candidates possess BBA degrees. Initially, the salary package may be on the lower side, but an increasing number of experience in the government sector will be beneficial with a lower burden of work."],
        ["Initiating Startups - ","Candidates can start their own business firms after completing a BBA degree if they have a great idea and hence can become entrepreneurs. These days, a lot of government initiatives like Start-up India and Digital India, are there to help and support such entrepreneurs in starting their own businesses. It is, however, advisable to first work somewhere, gain knowledge on all aspects and then begin your own business."],
        ["Law - ","LLB /Bachelor of Law is another option available to candidates who wish to make a career in the law domain. LLB is a three-year graduation-level degree. Candidates need to clear the law entrance exam to take admission in top law colleges of India."],
        ["Teaching - ","If candidates wish to move ahead in the teaching domain, they can continue the same by sharing their knowledge with others as a career option after BBA. Initially, candidates can start giving private tuition to others, and with hands-on experience, they can apply to any good educational institute. Teaching is a good career option to make money."],
        ["CA - ","Another career option after BBA is pursuing a Chartered Accountancy course. It takes almost five years to complete the entire course after a BBA degree. If candidates are interested in accounts, tax, they can opt for a CA course."]
    ];
     const data10 = [
        ["Browse Management Colleges by Location"],
         [
        "Top Management Colleges in Bengaluru",
        "Top Management Colleges in New Delhi"
      ],
      [
        "Top Management Colleges in Hyderabad",
        "Top Management Colleges in Chennai"
      ],
      [
        "Top Management Colleges in Pune",
        "Top Management Colleges in Indore"
      ],
      [
        "Top Management Colleges in Mumbai",
        "Top Management Colleges in Lucknow"
      ],
      [
        "Top Management Colleges in Kolkata",
        "Top Management Colleges in Jaipur"
      ]
    ];
     const data11 = [
        ["GGSIPU CET"],
        ["DU JAT"],
        ["SET"],
        ["AIMA UGATNPAT"],
        ["NPAT"],
        ["UPSEE"],
        ["IPU CET"],
        ["BHU UET"]
    ];
     const data12 = [
        [
        "Type of BBA",
        "Eligibility",
      ],
      [
        "BBA Regular/Full-Time",
        "10+2 with 50% marks"
      ],
      [
        "BBA Part-Time",
        "10+2"
      ],
      [
        "BBA Online",
        "10+2"
      ]
    ];
     const data13 = [
        [
        "Admission",
        "Average Fee"
      ],
      [
        "Entrance Exam/Merit",
        "INR 60,000-1.9 LPA"
      ],
      [
        "Merit-Based",
        "INR 45,000 PA"
      ],
      [
        "Merit-Based",
        "INR 27,000 PA"
      ]
    ];


    return (
        <div>
            <Header tittle={"Bachelor Of Business Administration- (BBA)"} subTittle={"Elegliblity | Course Fee | Course Duration | Entrance Exams"} BGimage={image} />
            <ParaTiles heading={"About Bachelor of Business Administration (BBA)"} para={"BBachelor of Business Administration (BBA) is a 3-year undergraduate course pursued after class 12th. BBA helps in developing the entrepreneurship skills of the candidates. BBA combines business-related courses and generic courses. BBA can be pursued by students from all fields, i.e. Science, Commerce, and Arts. Popular BBA specializations include Marketing, Finance, and HR Management. BBA course offers numerous career opportunities in domains like Finance, Education Marketing, and Sales."} headingSize={"24px"} />
            <ParaTiles para={"Candidates can pursue BBA by taking entrance exams such as SET, DU JAT, IPMAT, CUET, and AIMA UGAT. The entire BBA syllabus is divided into six semesters, meaning two semesters each year are to be completed by the candidates. BBA subjects include Principles of Management, Macroeconomics, Human Behaviour & Ethics at Workplace, Management Accounting, Banking & Insurance."} headingSize={"15px"} />
            <ParaTiles para={"A candidate can choose one of the three courses BBA General, BBA Banking and Insurance, and BBA Computer-Aided Management. Students can also avail themselves of BBA dual degree courses like the BBA LLB course which is a 5-year long course where both the courses are independently taught. BBA course fee ranges from INR 50,000 to INR 6 lakh and above."} headingSize={"15px"} />
            <ParaTiles para={"The top BBA colleges in India are NMIMS Mumbai, IIM Rohtak, IIFT Delhi, IIM Ranchi, SSCBS Delhi, and ICFAI Foundation for Higher Education. Some of the top BBA job profiles include Business Development Executive, Marketing Associate, Travel and Tourism Manager, Event Manager, etc. "} headingSize={"15px"} />
            <ParaTiles heading={"BBA Course Highlights"} para={"Given below are the most significant highlights of the BBA programme:"} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data1} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data2} heading={" List of Institutes Offering BBA Courses:"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data3} heading={"Bachelor of Business Administration (BBA) Specialisations"} />
            <CareerInfoTile data={[["Also Read: ", "General Management Certification Courses"]]} />
            <ParaTiles heading={"Bachelor of Business Administration (BBA) Syllabus"} para={"Pursuing a Bachelor of Business Administration course provides a base for MBA/PGDM programmes. Bachelor of Business Administration or online BBA course is completed in a duration of three years which is further divided into six semesters. Given below is the BBA subjects list based on the yearly plan of the BBA course. Here, we have discussed all the BBA subjects list in the below tables."} headingSize={"15px"} />
            <ParaTiles para={"Also read: 7 Best Online MBA Specialisations with Eligibility, Fees, and Admission Process"} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data4} />
            <CareerInfoTile data={[["Also Read: ", "10 Most Affordable Online MBA Programs for Students in India"]]} />
            <ParaTiles para={"7 Reasons to Pursue an Online MBA Degree"} headingSize={"15px"} />
            <ParaTiles heading={"Types of Bachelor of Business Administration"} para={"BBA is an undergraduate degree offered by various educational institutes and has no type. However, there are many specialisations in BBA which are discussed later in this article."} headingSize={"15px"} />
            <CareerInfoTile data={[["Read more: ", "Advantages and Disadvantages of Online MBA Course"]]} />
            <ParaTiles para={"Is Online MBA Recognized by UGC?"} headingSize={"15px"} />
            <ParaTiles heading={"Advantages of doing Bachelor of Business Administration"} headingSize={"15px"} />
            <CareerInfoTile data={data5} headingColor={1} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data6} />
            <CareerInfoTile data={[["Read more: Top Business Schools for Online MBA Programs in India"]]} headingColor={1}/>
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data7} />
            <CareerInfoTile data={[["Also Read: Is an Online MBA Valid in India?"]]} headingColor={1} />
            <ParaTiles heading={"Scope of BBA"} para={"A BBA graduate has a varied bachelor of business administration job options at the forefront. BBA graduates can either prefer to work in India or can apply internationally. The scope of the BBA online course is wide as an individual can work in domains like sales/marketing, business development, administration and management, BBA degree has greater value if compared with B.Com or other undergraduate degrees."} headingSize={"15px"} />
            <ParaTiles  para={"Top leadership positions can be gained with a BBA degree in hand along with some years of experience. Business is growing and so is the desire amongst youngsters to pursue a degree in business administration. BBA degree can be possessed by candidates after completing class 12. Hence the BBA degree is on the increasing trend as managerial positions are filled by only those candidates who possess the calibre of taking good decisions, qualities of several kinds, Moreover, with upliftment in career, the salary of BBA graduates also keeps increasing."} headingSize={"15px"} />
            <CareerInfoTile data={[["Also Read: How Can an Online MBA Degree Benefit Your Career?"]]} headingColor={1} />
            <ParaTiles heading={"Scope: Top courses to pursue after BBA Degree"} para={"Candidates who do not wish to take up a job immediately after pursuing a BBA degree are unable to find a suitable job that matches their expectations and are usually get inclined toward pursuing a Master’s degree. After completion of the BBA online course, a candidate has varied options if he/she wishes to pursue any further course/degree. Major courses are mentioned below:"} headingSize={"15px"} />
            <ParaTiles heading={"MBA"} para={"Master of Business Administration is the most sought-after BBA degree by fresh graduates and experienced holders as well. To take admission into IIMs and various top B-Schools other than IIMs cut-throat competition amongst candidates is visible. Master of Business Administration commonly known as MBA is a two years degree programme whereby candidates learn about business administration tactics. MBA can opt for a full-time degree or part-time MBA or distance MBA. Some of the institutes also provide executive MBA degrees nowadays. An MBA degree is more theoretical knowledge."} headingSize={"15px"} />
            <CareerInfoTile data={[["Quick Links -MBA Admission Process"]]} headingColor={1} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data8} />
            <ParaTiles heading={"MMS"} para={"If due to financial issues candidates are unable to get into a good college offering an MBA degree, then a Master of Management Studies is another alternative that can be pursued by candidates. The eligibility criteria to apply, duration of completing the MMS degree, and the structure of the course, are similar to the MBA degree to a great extent. Candidates pursuing MMS courses are given complete knowledge about management studies and entrepreneurial skills."} headingSize={"15px"} />
            <ParaTiles heading={"PGDM"} para={"Just in case candidates wish to have practical exposure to the actual/ on-the-job profile, then they have the option to pursue a PGDM course. There are many differences between MBA & PGDMcourses. MBA is a degree course that is offered by Universities whereas a PGDM is a just diploma course that is offered by institutes that are autonomous. Before opting for any PGDM college/institute, candidates are advised to check the authenticity of that particular institute. PGDM course also has a well-structured and updated curriculum. Companies nowadays are also hiring candidates who have completed PGDM courses on good packages."} headingSize={"15px"} />
            <ParaTiles heading={"Career Opportunities After BBA"} para={"What after BBA? This is the most common question that candidates find answers to before applying or after completing. For candidates who have completed a Bachelor of Business Administration, ample opportunities are available in the market. Extensive options are available to explore and choose from according to the candidate's interest. The most common and widely selected career options after Bachelor of Business Administration or BBA course are listed below and have great benefits in the long run."} headingSize={"15px"} />
            <CareerInfoTile data={data9} headingColor={1} />
            <CareerInfoTile data={[["Quick Links - NMIMS BBA Fee"]]} headingColor={1} />
            <ParaTiles heading={"BBA Salary in India"} para={"An increasing number of candidates are getting allured to pursue a Bachelor of Business Administration or BBA course owing to the attractive salary package that is offered by the private and public sector to BBA graduates. Apart from that lucrative positions are also offered and chances of career advancement are there. BBA course allows candidates to earn well and have a better life as compared to other graduate courses like BBM, B.Com, In India, major recruiters hiring BBA graduates are Tata Consultancy Services Limited, Accenture, Ernst & Young and Deloitte. Such big companies pay a high scale salary to the BBA graduates."} headingSize={"15px"} />
            <ParaTiles  para={"The initial salary offered to any candidate holding a BBA degree is somewhere between Rs. 15000 to Rs. 20000 in hand. However, there are certain factors that usually determine the salary of a BBA graduate like the reputation/ranking of the company, skills possessed by the candidate, and graduating institute, however, it is seen that salary is not an issue when a candidate possesses managerial skills, leadership qualities, decision-making abilities and perseverance."} headingSize={"15px"} />
            <ParaTiles  para={"Candidates having a BBA degree are hired by companies like Tata Consultancy Services Limited, Ernst & Young, Infosys, and Accenture, for various positions. The average salary package offered by big brands to candidates having a BBA degree is between Rs. 30,000 to Rs. 1 lakh per month. Experience holders might bag a better package yearly after having a BBA degree."} headingSize={"15px"} />
            <ParaTiles  para={"Read more: What is the Scope of an Online MBA?"} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data10} />
            <ParaTiles heading={"How To Get Admission for BBA?"} para={"Admission procedure for BBA course is on an aspirant's merit basis, or most colleges in India grant admission to an aspirant based on their performance and score in the entrance exam. Aspirants must satisfy the minimum eligibility criteria, a combination of class 12th score and entrance exam score."} headingSize={"24px"} />
            <ParaTiles heading={"How to Apply?"} para={"The full form of BBA is Bachelor of Business Administration. Aspirants can either apply online or offline for the BBA admission. For the admission process online, aspirants need to visit the official college website of their interest and choice and start filling out the application process like their name, phone number, email address, course they are interested in, etc. On the other hand, during offline registration, students should visit the respective college campus to fill out the application form by attaching the necessary documents."} headingSize={"15px"} />
            <ParaTiles heading={"Selection Process"} para={"Once the student's application is accepted, based on the college, there might be a final round of group discussion or personal interview before confirmation of admission. BBA course information can be accessed by students by visiting the official site of the college they are interested in."} headingSize={"15px"} />
            <ParaTiles heading={"Eligibility Criteria for BBA"} para={"Admission for the BBA course requires the aspirant to qualify the essential eligibility criteria of attaining 50% of aggregate marks and above in Class XII in any stream from a recognized educational board or university. There is no age limit for pursuing this course as it is open to students who meet the necessary BBA eligibility criteria. Along with essential criteria, students must have cleared the standard entrance exams with good scores."} headingSize={"24px"} />
            <ParaTiles heading={"Entrance Exams for BBA"} para={"While many colleges offer BBA courses based on an aspirant's merit, most colleges in India give admission to an aspirant based on their performance and entrance test score. Some of the popular BBA entrance exams include the following:"} headingSize={"15px"} />
            <ParaTiles heading={"A Quick Glance at the BBA Entrance Exams:-"} para={"The BBA entrance exam is a fundamental management and aptitude test, which means that the test would examine an aspirant's general aptitude and knowledge of management principles. The entrance tests conducted are objective and contain multiple-choice type questions. The entrance exam assesses a student's knowledge in quantitative (mathematics) and verbal ability (English), general knowledge, and analytical/logical reasoning."} headingSize={"15px"} />
            <CareerInfoTile data={data11} headingColor={1} />
            <ParaTiles heading={"Types of BBA"} para={"There are a variety of BBA programs offered by colleges and universities across the country due to the growing demand for the course. Students have the opportunity to pursue BBA as a regular course, part-time and also online. The below table mentions in nutshell three types of BBA offered: "} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data12} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data13} />
            <ParaTiles heading={"BBA Full Time/Regular"} para={"Given below is the general information regarding the BBA Full-Time course"} headingSize={"15px"} />
            <ParaTiles  para={"The full-time or regular BBA course is a three-year undergraduate course that thousands of students choose each year. "} headingSize={"15px"} />
            <ParaTiles  para={"Admission to this course is based on merit or, more commonly, an entrance exam. DU JAT, IPU CAT, and NPAT are some of the most popular entrance exams. "} headingSize={"15px"} />
            <ParaTiles  para={"Regular BBA courses include specialisations in banking, insurance, human resources, law, and many other fields. "} headingSize={"15px"} />
            <ParaTiles heading={"BBA Part-Time"} para={"Given below is the general information regarding the BBA Part-Time course:"} headingSize={"15px"} />
            <ParaTiles  para={"The part-time BBA programme, like the full-time programme, is a three-year undergraduate programme. The course structure is identical to that of its counterpart. The course is designed for working professionals who want to pursue a BBA while continuing to work. Part-time classes are typically held in the evenings or on weekends. There are approximately 30 colleges in the country that offer BBA as a part-time course. The average course fee is between INR 45,000 and 60,000 per year."} headingSize={"15px"} />
            <ParaTiles heading={"Online BBA"} para={"Since the integration of education via internet services, the online BBA programme has begun to gain traction. Given below is the general information regarding the BBA online course:"} headingSize={"15px"} />
            <ParaTiles  para={"The course is specifically designed for students who are unable to pursue a regular or part-time course due to unforeseen circumstances. "} headingSize={"15px"} />
            <ParaTiles  para={"The classes and lectures are delivered via an online meeting room. The online BBA has an integrated system in which study materials and notes are already shared with students via an online drive and mailing system. "} headingSize={"15px"} />
            <ParaTiles  para={"Exams are also given online. Even popular specialisations are available online. The average fee is INR 27,000 per month. 50 colleges are offering such BBA Programs."} headingSize={"15px"} />
            <ParaTiles heading={"Distance BBA"} para={"Given below is the general information regarding the Distance BBA course:"} headingSize={"15px"} />
            <ParaTiles  para={"The program is designed for students who are unable to attend or pursue BBA regular courses or through part-time study. "} headingSize={"15px"} />
            <ParaTiles  para={"The course is designed to be delivered remotely for the students' convenience. Students are given study materials at the time of admission. "} headingSize={"15px"} />
            <ParaTiles  para={"This course is inexpensive and convenient for working professionals and students who cannot afford a traditional course. 250 colleges provide such a program. The average annual fee ranges between INR 30,000 - 50,000 PA"} headingSize={"15px"} />
            <ParaTiles heading={"Bachelor of Business Administration Distance Education"} para={"Distance learning allows students to work and take classes at their own pace while earning a BBA. IGNOU, TNOU, University of Madras, etc. are one of the best distance learning options for a Bachelor of Business Administration. Admission is usually based on performance. Therefore, more than 50% of students are eligible to apply for this degree."} headingSize={"15px"} />

        </div>
    )
}

export default Bba
