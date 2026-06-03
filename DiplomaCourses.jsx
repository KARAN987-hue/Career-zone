import React from 'react'
import image from './hdr-bg.jpg'
import Header from './Header'
import ParaTiles from './ParaTiles'
import Table from './Table'
import CareerInfoTile from './CareerInfoTile'

function DiplomaCourses() {


    const data1 = [
        ["Highlights", ""],
        [
            "Degree Name",
            "Information Technology"
        ],
        [
            "Degree Type",
            "Diploma"
        ],
        [
            "Degree Duration",
            "2 years"
        ],
        [
            "Entrance Exams",
            "AP POLYCET, HP PAT, APJEE, TS POLYCET"
        ],
        [
            "Eligibility Criteria",
            "Class 10th or 12th"
        ],
        [
            "Admission process",
            "Entrance Exam/ Merit-based"
        ],
        [
            "Fees for the entire duration",
            "Rs. 20,000 to Rs. 2,00,000"
        ],
        [
            "Average Salary",
            "Rs. 6 lakhs per year"
        ],
        [
            "Job profiles",
            "IT program, IT specialist, IT programmer, technical consultant, web developer, ICT system administrator, a computer network professional"
        ],
        [
            "Top recruiters",
            "TCS, Wipro, Tech Mahindra, Vodafone, TATA, Infotech, Infosys ASUS, Cisco Systems, National Instruments, BEL, Dell, Accenture, HCL Infotech, Google, Microsoft, Intel, Amazon"
        ]
    ]

    const data2 = [
        ["", ""],
        [
            "Tech Savvy",
            "Analytical Skills"
        ],
        [
            "Communication Skills",
            "Creativity"
        ],
        [
            "Computer Skills",
            "Accuracy"
        ],
        [
            "Ability to focus",
            "Problem Solving"
        ]
    ]
    const data3 = [
        ["", ""],
        [
            "English and communication skills",
            "Basics of information technology"
        ],
        [
            "Applied Physics",
            "Digital Electronics"
        ],
        [
            "Applied Mathematics",
            "System analysis and design"
        ],
        [
            "Applied Chemistry",
            "Computer programming using C"
        ],
        [
            "Engineering Drawing I",
            "RDBMS"
        ],
        [
            "Multimedia and applications",
            "Ecology and environmental awareness"
        ]
    ]
    const data4 = [
        ["Online Data Science Courses", ""],
        ["Online Cyber Security Courses", ""],
        ["Online Cloud Computing Courses", ""],
        ["Online Digital Marketing Courses", ""],
        ["View All Online IT Courses & Certifications", ""]
    ]
    const data5 = [
        ["", ""],
        ["Online Degree and Diploma Courses", ""],
        ["Online Free Courses and Certifications", ""],
        ["Online Short Term Courses and Certifications", ""],
        ["Online Certification Courses", ""],
        ["View List of all Online Courses and Certifications", ""],
        ["Top Certification Course Providers", ""]
    ]
    const data6 = [
        ["IT Programmer: ", "IT Programmers are those professionals who are tasked with designing and creating software programs, analyzing algorithms, and maintaining operating systems, amongst others."],
        ["IT Engineer: ", "IT engineers are responsible for testing, and configuring, hardware, software, and networking systems to meet the needs of the companies."],
        ["Technical Engineer: ", "They maintain the computer hardware and software of the employers. He or She supports computer software by diagnosing, troubleshooting common problems, and maintaining and monitoring all aspects of computer networks."],
        ["Software Developer: ", "Software developers are responsible for designing, researching, managing, and implementing software programs. They produce efficient code based on specifications, testing, improving, and grading existing software."],
        ["Computer Network Professional: ", "CNPs are those who design, and install computer networks, testing their security. They are also responsible for deploying new software and hardware to meet the needs of services required by the companies."],
    ]
    const data7 = [
        ["List of Top Comp", ""],
        [
            "TCS",
            "Infosys"
        ],
        [
            "Wipro",
            "ASUS"
        ],
        [
            "Tech Mahindra",
            "Cisco Systems"
        ],
        [
            "Vodafone",
            "BEL"
        ],
        [
            "TATA",
            "Dell"
        ],
        [
            "Infotech",
            "Accenture"
        ],
        [
            "HCL Infotech",
            "Microsoft"
        ],
        [
            "Google",
            "Intel"
        ]
    ]
    const data8 = [

        [
            "Level of Experience",
            "Average Salary (per annum)"
        ],
        [
            "0 - 1 year",
            "Rs. 3,70,000 - Rs. 4,60,000"
        ],
        [
            "1 - 3 years",
            "Rs. 4,70,000 - Rs. 5,60,000"
        ],
        [
            "Above 5 years",
            "Rs. 6,00,000 - Rs. 7,15,000"
        ]
    ]
    const data9 = [
        ["", ""],
        [
            "Top Diploma in IT Colleges in Bangalore",
            "Top Diploma in IT Colleges in Pune"
        ],
        [
            "Top Diploma in IT Colleges in Nashik",
            "Top Diploma in IT Colleges in Mumbai"
        ],
        [
            "Top Diploma in IT Colleges in Ahmedabad",
            "Top Diploma in IT Colleges in Thane"
        ],
        [
            "Top Diploma in IT Colleges in Bhopal",
            "Top Diploma in IT Colleges in Lucknow"
        ],
        [
            "Top Diploma in IT Colleges in Coimbatore",
            "Top Diploma in IT Colleges in New Delhi"
        ]
    ]
    const data10 = [
        [
            "Name of the Institute",
            "Fee for the entire duration"
        ],
        [
            "MSU Baroda",
            "Rs. 20,880"
        ],
        [
            "AMU, Aligarh",
            "-"
        ],
        [
            "LJ Polytechnic, Ahmedabad",
            "Rs. 1,44,000"
        ],
        [
            "NIMS University, Jaipur",
            "Rs. 60,000"
        ],
        [
            "PSG Polytechnic College, Coimbatore",
            "-"
        ],
        [
            "Ambedkar Institute of Technology, Delhi",
            "Rs. 18,000"
        ],
        [
            "Singhania University, Jhunjhunu",
            "Rs. 60,000"
        ],
        [
            "Thapar Polytechnic College, Patiala",
            "-"
        ],
        [
            "Government Polytechnic, Aurangabad",
            "Rs. 22,650"
        ],
        [
            "YBN University, Ranchi",
            "Rs. 1,71,000"
        ]
    ]
    const data11 = [
        [
            "Name of the Institute",
            "Fee for the entire duration"
        ],
        [
            "MH Saboo Siddik Polytechnic, Mumbai",
            "Rs. 35,742"
        ],
        [
            "Bhagwan Mahavir Polytechnic, Surat",
            "Rs. 1,29,000"
        ],
        [
            "LJ Polytechnic, Ahmedabad",
            "Rs. 1,44,000"
        ],
        [
            "Vidya Prasarak Mandal's Polytechnic, Thane",
            "Rs. 1,29,500"
        ],
        [
            "NIMS University, Jaipur",
            "Rs. 60,000"
        ],
        [
            "Thakur Polytechnic, Mumbai",
            "Rs. 2,58,230"
        ],
        [
            "Singhania University, Jhunjhunu",
            "Rs. 60,000"
        ],
        [
            "Thapar Polytechnic College, Patiala",
            "-"
        ],
        [
            "MAEER's MIT Polytechnic, Pune",
            "Rs. 1,71,650"
        ],
        [
            "YBN University, Ranchi",
            "Rs. 1,71,000"
        ]
    ]
    const data12 = [
        [
            "Name of the Institute",
            "Fee for the entire duration"
        ],
        [
            "MSU Baroda",
            "Rs. 20,880"
        ],
        [
            "Lukhdhirji Engineering College, Morbi",
            "Rs. 3,000"
        ],
        [
            "Government Polytechnic, Gandhinagar",
            "-"
        ],
        [
            "AMU, Aligarh",
            "-"
        ],
        [
            "PSG Polytechnic College, Coimbatore",
            "-"
        ],
        [
            "MANNU Hyderabad",
            "Rs. 15,500"
        ],
        [
            "Government Polytechnic, Aurangabad",
            "Rs. 22,650"
        ],
        [
            "Shri Ramdevi Ramdayal Tripathi Mahila Polytechnic, Kanpur",
            "Rs. 72,210"
        ],
        [
            "Government Polytechnic, Dehradun",
            "Rs. 38,700"
        ],
        [
            "Ambedkar Institute of Technology, Delhi",
            "Rs. 18,000"
        ]
    ]
    const data13 = [
        ["", ""],
        [
            "Top Diploma in IT Colleges in Maharashtra",
            "Top Diploma in IT colleges in Karnataka"
        ],
        [
            "Top Diploma in IT Colleges in Uttar Pradesh",
            "Top Diploma in IT Colleges in Uttarakhand"
        ],
        [
            "Top Diploma in IT Colleges in Gujarat",
            "Top Diploma in IT Colleges in Madhya Pradesh"
        ],
        [
            "Top Diploma in IT Colleges in Punjab",
            "Top Diploma in IT Colleges in Rajasthan"
        ],
        [
            "Top Diploma in IT Colleges in Tamil Nadu",
            "Top Diploma in IT Colleges in West Bengal"
        ]
    ]
    const data14 = [
        ["AP POLYCET: ","AP Polycet Exam Is Conducted By The State Board Of Technical Education And Training For Admission To Diploma Courses. Students Who Clear The Ap Ploycet Will Be Offered Admission To Top Colleges In The State. The Relevant Information About The Test Is Mentioned Below:"],
        ["HP PAT: ","HP PAT Exam Is Conducted By The HP Takniki Shiksha Board For Polytechnic Courses. Students Who Qualify For The Test Will Be Offered Admission To Top Colleges Associated With The HP Takniki Shiksha Board. All The Information Necessary For The Test Is Listed Below:"],
        ["APJEE:  ","APJEE Stands For Arunachal Pradesh Joint Entrance Examination. The Arunachal Pradesh State Council For Technical Education (APSCTE) Is Conducting APJEE Entrance Exam For Admission Into Various Diploma Courses In The State."]
    ]
    
    const data15 = [       
        ["Know The Syllabus And Exam Pattern: ","To Prepare Well For The Entrance Exams The Students Should Be Aware Of The Exam Pattern, Syllabus, Type Of Questions, And The Books To Get The Knowledge That Is Required."],
        ["Practice Question Papers: ","Practice By Solving All Previous Years’ Papers To Understand The Type And The Patterns Of Questions Asked. It Also Helps To Improve And Prepare For The Day Of The Exam."],
        ["Take Mock Tests: ","Solving A Lot Of Mock Tests Can Help Graduates Gain Accuracy And Speed."],
        ["Prepare Time Table: ","In Advance, Finish Preparation. This Will Ensure That The Students Will Have Enough Time For Revision Of The Content."]
    ]
    // const data = [
    //     [
    // ]

    return (
        <div>
            <Header tittle={"Diploma In Information Technology"} subTittle={"Elegliblity | Course Fee | Course Duration | Entrance Exams"} BGimage={image} />
            <ParaTiles heading={"What is Diploma in IT?"} para={`Diploma in IT or Diploma in Information Technology is a one to three-year course. The course programme focuses on IT technologies, its applications, computer, IT engineering, amongst others. Information technology involves study, including computer systems, which can store, recover, manipulate data, and share communication. The diploma course encompasses concepts such as applied mathematics, physics, chemistry, C programming, system analysis, digital electronics, and many more.`} headingSize={"24px"} />
            <ParaTiles para={`Colleges offering Diploma in IT require certain eligibility criteria that students have to meet to get eligible for the program. Admissions to top colleges are done through merit-based or through entrance examinations. Students must have completed Class 10th or 12th for pursuing a Diploma in IT. The program opens ample opportunities in various fields depending on the interest and choice of students for popular roles such as IT program, Software developer, IT specialist, IT programmer, technical consultant, web developer, ICT system administrator, and others.`} />
            <ParaTiles para={`Diploma in Information Technology duration is 3 years. This course covers the need for solutions to real-world electrical problems and solves them. Job opportunities for this course are in abundance.`} />
            <ParaTiles para={`According to Wikipedia “ Information technology (IT) is the use of computers to create, process, store, retrieve, and exchange all kinds of electronic data and information. IT is typically used within the context of business operations as opposed to personal or entertainment technologies. IT is considered to be a subset of information and communications technology”.`} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data1} />
            <ParaTiles heading={"Cutoff"} para={`The cutoff for the diploma courses is determined on parameters that include number of seats available, the number of applications received for admission, the category of the candidate, institute's reputation. Candidates are required to score the number between the minimum and highest marks. Those who qualify will be able to pursue the course in their preferred institute.`} headingSize={"15px"} />
            <ParaTiles heading={"Diploma in IT Skills Required"} para={`To Pursue a Diploma in IT, a student must possess skills that may encourage them to study and understand the course better. They must be tech-savvy, creative, accurate, and flexible in adopting new technologies. Students must also possess essential skills which help them to work in a stressful environment. Some of the important skills are:.`} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data2} />
            <ParaTiles heading={"Diploma in IT Syllabus"} para={`A diploma in IT could be one year to three-year depending on the college and the duration of the course. The subjects in information technology include complications of IT, applications, computing technologies, and electronic engineering. It is designed to ensure the student can study to focus on elective papers of IT. The detailed subjects offered in almost all the colleges and universities are listed below:`} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data3} />
            <ParaTiles heading={"Popular Online IT Courses and Certifications"} headingSize={"15px"} />
            <CareerInfoTile data={data4} headingColor={1} />
            <ParaTiles heading={"Diploma in IT- Fee Structure"} para={`The fee varies from college to college. The private colleges offering Diploma in IT charge tuition fees higher as compared to state-run colleges and universities. The average fee for the diploma in IT is around Rs. 20,000 to Rs. 2 Lakhs depending on the college location, popularity, and ranking, amongst others.`} headingSize={"15px"} />
            <ParaTiles heading={"Scope of Diploma in IT"} para={`Diverse job opportunities in information technology are available for students who pursue a diploma in IT. Students who complete the course can go for higher studies such as a bachelor’s degree to broaden their career horizons. Students who complete Class 10th or 12th are eligible for the course. The demand for IT professionals has grown rapidly. They can start their own business or can take up jobs in private or government companies. Those who are interested in further studies can pursue B.Tech. Information Technology and M.Tech. in the same field.`} headingSize={"15px"} />
            <ParaTiles heading={"Students also liked"} headingSize={"15px"} />
            <CareerInfoTile data={data5} headingColor={1} />
            <ParaTiles heading={"Benefits of Studying Diploma in IT"} para={`The course program highlights the achievements and trains students to assist businesses by providing technical support. The course is generally about storing, transmitting, and retrieving data. To pursue this course, students can attain exposure and establish their careers in the IT Industry. If they pursue a diploma abroad, they can get international exposure and help them to obtain high salary packages in the industry. Students can also opt for higher studies after completing a diploma in IT such as B.Sc, MBA, and other degrees and gain better experience in the field.`} headingSize={"15px"} />
            <ParaTiles heading={"Career Options after Diploma in IT"} para={`The course gives a plethora of career options for the students who complete the Diploma course. Students can find job opportunities in private as well as in government companies. The information technology sector is vast. They can take up roles that include Diploma Engineer, Mainframe Developer, Information Systems Developer, Solution Architect, and others. The average salary for IT professionals is around Rs. six lakhs.`} headingSize={"15px"} />
            <ParaTiles heading={"List of Career Options after Diploma in IT"} headingSize={"15px"} />
            <CareerInfoTile data={data6} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data7} />
            <ParaTiles heading={"Expected Salary after Diploma in IT"} para={`Students wishing to pursue a diploma in IT opt for a wide range of job options across the globe. The demand for developers and programmers has grown in the last decade. The annual remunerations depend on experience, skills, expertise and education. The average salary for an IT professional is around Rs. six lakhs.`} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data8} />
            <ParaTiles heading={"Diploma in IT Colleges in Top Locations"} para={`Diploma in IT is a three-year course program. The course is offered by several colleges in India. It has become one of the most popular fields in education and career options for students. Some of the top colleges in India are:`} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data9} />
            <ParaTiles heading={"List of Top Diploma in IT Colleges in India"} para={`The concept of information technology is everywhere. A career in IT is most relevant for students. In India, there are colleges offering a diploma in IT. It includes both government-run colleges and private colleges. Some of the top colleges for diploma in IT are as under:`} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data10} />
            <ParaTiles heading={"Top Private Diploma in IT Colleges in India"} para={`Various private colleges offer Diploma in IT courses. These colleges are highly recommended for their excellent academic performance. Some of the top colleges offering Diploma in IT are:`} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data11} />
            <ParaTiles heading={"Top Government Diploma in IT Colleges in India"} para={`Government colleges that offer Diploma in IT courses in India have their own eligibility criteria. They charge less money as compared to private colleges. Some of the top government colleges for Diploma in IT are listed below:`} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data12} />
            <ParaTiles heading={"Top Diploma in IT Colleges in States"} para={`There are both government and private colleges in states offering Diploma in IT course. The course includes physics, chemistry, C Programming, System Analysis, and other topics. Some of the colleges in states are:`} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data13} />
            <ParaTiles heading={"Diploma In IT Admissions"} para={`Admissions To Diploma In IT Are Also Done Through Both Merit And Entrance Exams. Some Colleges Offer Admission Through The Direct Process Or Entrance Exam-based. Below Are Some Of The Foremost Admission Processes That Students Have To Meet To Be Eligible For A Diploma Course.`} headingSize={"24px"} />
            <ParaTiles para={`Various Entrance Exams Are Conducted By The Colleges To Get Admissions In The Particular Course. Students Need To Appear For The Entrance Exam For Which They Wish To Enter.`} />
            <ParaTiles para={`Students Who Qualify For The Entrance Exam Will Be Offered Admission To The Course In Their Preferred College.`} />
            <ParaTiles heading={"Diploma In IT Eligibility Criteria"} para={`The Eligibility Criteria For The Diploma In IT Are Set By Colleges And Universities Of Their Own. Most Of The Colleges Have A Direct Admission Process. Some Colleges Have Their Own Criteria For The Course Program. To Pursue A Diploma Course, Students Must Have Completed Their 10th Or 12th Board Exam Or Must Fulfill The Required Criteria:`} headingSize={"24px"} />
            <ParaTiles para={`Students Should Have Passed Class 10th From A Recognized Board Or Institute.`} />
            <ParaTiles para={`It Can Also Be Pursued After 10+2 In Any Stream With The Required Percentage.`} />
            <ParaTiles para={`Colleges Conduct Their Own Entrance Tests For Admissions To The IT Courses.`} />
            <ParaTiles heading={"Top Entrance Exams For Diploma In IT"}  headingSize={"24px"} />
            <CareerInfoTile data={data14} />
            <ParaTiles heading={"Preparation Tips For Diploma In Information Technology"} para={`Some Of The Course Preparation Tips For The Diploma In Information Technology Course Are Listed Below:`} headingSize={"24px"} />
            <CareerInfoTile data={data15} />
            <ParaTiles heading={"Why Study?"} para={`The reasons why you should go for the Diploma in IT are-`} headingSize={"15px"} />
            <ParaTiles para={`To gain specialization in an area of interest that is if the student has a slight interest in computers and their application`} />
            <ParaTiles para={`It will pimp your CV as the Diploma in IT is like a basic skill which would act as a boon in the computer science field.`} />
            <ParaTiles para={`The diploma course is cheaper and makes you ready for the job and increases your knowledge in the field of information technology.`} />
            <ParaTiles para={`The diploma course takes a really short time to complete and if you wish to work early then it is a good option for you as it showers you with all the basic skills for work.`} />
            <ParaTiles para={`At last, ask yourself and analyze whether this course would either help you in your career or will just be a degree on paper.`} />
            {/* <ParaTiles para={``} /> */}


        </div>
    )
}

export default DiplomaCourses
