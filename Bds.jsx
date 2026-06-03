import React from 'react'
import Header from './Header'
import image from './hdr-bg.jpg'
import ParaTiles from './ParaTiles'
import Table from './Table'
import CareerInfoTile from './CareerInfoTile'

function Bds() {

    const data1 = [
        [
            "Particulars",
            "Description"
        ],
        [
            "Full-Form",
            "Bachelor of Dental Surgery"
        ],
        [
            "Duration",
            "5 years ( 4 years + 1 year of compulsory paid internship)."
        ],
        [
            "Eligibility",
            "10+2 with a minimum of 50%. Compulsory subjects include Physics, Chemistry, Biology"
        ],
        [
            "Examination Type",
            "Semester Based"
        ],
        [
            "Average Course Fee",
            "INR 1-6 lacs per annum"
        ],
        [
            "Admission Process",
            "Entrance Exam (NEET)"
        ],
        [
            "Average Initial Salary",
            "INR 4-10 lacs (approx.)"
        ]
    ];
    const data2 = [
        [
            "Semester",
            "Subject Covered"
        ],
        [
            "One Year",
            "General Anatomy, including Embryology and Histology"
        ],
        ["",
            "General Human Physiology and Biochemistry"
        ],
        ["",
            "Dental Anatomy, Embryology and Oral Histology"
        ],
        [
            "Two years",
            "General Pathology and Microbiology"
        ],
        ["",
            "General and Dental Pharmacology and Therapeutics"
        ],
        ["",
            "Dental Materials"
        ],
        ["",
            "Pre-Clinical Conservative Dentistry"
        ],
        ["",
            "Pre-Clinical Prosthodontics & Crown & Bridge"
        ],
        [
            "Three years",
            "General Medicine"
        ],
        ["",
            "General Surgery"
        ],
        ["",
            "Oral Pathology and Oral Microbiology"
        ],
        [
            "Four years",
            "Oral Medicine and Radiology"
        ],
        ["",
            "Paediatric and Preventive Dentistry"
        ],
        ["",
            "Orthodontics and Dentofacial Orthopaedics"
        ],
        ["",
            "Periodontology"
        ],
        ["",
            "Prosthodontics and Crown and Bridge"
        ],
        ["",
            "Conservative Dentistry and Endodontics"
        ],
        ["",
            "Oral and Maxillofacial Surgery"
        ], "",
        ["",
            "Public Health Dentistry"
        ]
    ];
    const data3 = [
        ["", ""],
        [
            "Communication Skills",
            "Physical Strength"
        ],
        [
            "Patience",
            "Empathy"
        ],
        [
            "Critical Thinking",
            "Attention to Detail"
        ]
    ];
    const data4 = [
        [
            "1st year",
            "2nd year"
        ],
        [
            "General Human Anatomy including Embryology and Histology",
            "General Pathology and Microbiology"
        ],
        [
            "General Human Physiology and Biochemistry, Nutrition and Dietetics",
            "General and Dental Pharmacology and Therapeutics"
        ],
        [
            "Dental Anatomy Embryology and Oral Histology",
            "Dental Materials"
        ],
        [
            "Dental Materials",
            "Preclinical Conservative Dentistry"
        ],
        [
            "Pre-clinical Prosthodontics and Crown & Bridge",
            "Pre-clinical Prosthodontics and Crown & Bridge"
        ],
        [
            "-",
            "Oral Pathology & Oral Microbiology"
        ],
        [
            "3rd year",
            "4th year"
        ],
        [
            "General Medicine",
            "Orthodontics & Dentofacial Orthopaedics"
        ],
        [
            "General Surgery",
            "Oral Medicine & Radiology"
        ],
        [
            "Oral Pathology and Oral Microbiology",
            "Paediatric & Preventive Dentistry"
        ],
        [
            "Conservative dentistry and Endodontics",
            "Periodontology"
        ],
        [
            "Oral & Maxillofacial Surgery",
            "Oral & Maxillofacial Surgery"
        ],
        [
            "Oral Medicine and Radiology",
            "Prosthodontics and Crown & Bridge"
        ],
        [
            "Orthodontics & Dentofacial Orthopaedics",
            "Conservative Dentistry and Endodontics"
        ],
        [
            "Paediatric & Preventive Dentistry\n\t\t\tPeriodontology",
            "Conservative Dentistry and Endodontics"
        ],
        [
            "Prosthodontics and Crown & Bridge",
            "Public Health Dentistry"
        ]
    ];
    const data5 = [
        [
            "Department",
            "Period of Posting"
        ],
        [
            "Oral Medicine & Radiology",
            "1 month"
        ],
        [
            "Oral & Maxillofacial Surgery",
            "1 and a half month"
        ],
        [
            "Prosthodontics",
            "1 and a half month"
        ],
        [
            "Periodontics",
            "1 month"
        ],
        [
            "Conservative Dentist",
            "1 month"
        ],
        [
            "Pedodontics",
            "1 month"
        ],
        [
            "Oral Pathology & Microbiology",
            "15 days"
        ],
        [
            "Orthodontics",
            "1 month"
        ],
        [
            "Community Dentist/Rural Service",
            "3 months"
        ],
        [
            "Elective",
            "15 days"
        ],
        [
            "Total",
            "12 months"
        ]
    ];
    const data6 = [
        ["Also Read:"],
        ["BAMS (Bachelor of Ayurvedic Medicine and Surgery)"],
        ["BHMS (Bachelor of Homeopathic Medicine and Surgery)"],
        ["BUMS (Bachelor of Unani Medicine and Surgery)"],
    ];
    const data7 = [["", ""],
    [
        "Oral Medicine, Diagnosis, and Radiology",
        "Prosthodontics"
    ],
    [
        "Oral and Maxillofacial Surgery",
        "Periodontal Surgery and Oral Implantology"
    ],
    [
        "Oral Pathology and Microbiology",
        "Pedodontics"
    ],
    [
        "Conservative Dentistry and Endodontics",
        "Public Health Dentistry"
    ]
    ];
     const data8 = [
        ["Dental Clinics"],
        ["Government hospitals"],
        ["Dental Institutions"],
        ["Pharmaceutical Companies"],
        ["Dental Products Manufactures"],
        ["Private Practice"]
    ];
     const data9 = [
        [
        "Colleges",
        "Fees"
      ],
      [
        "ABSMIDS Mangalore",
        "Rs. 20.07 Lakhs"
      ],
      [
        "ACDS Secunderabad",
        "-"
      ],
      [
        "ADC Ahmedabad",
        "Rs. 12.56 Lakhs"
      ],
      [
        "BDCH Davangere",
        "-"
      ],
      [
        "BIDSH Patna",
        "-"
      ],
      [
        "CDCRI Rajnandgaon",
        "Rs. 9.30 Lakhs"
      ],
      [
        "CDSRC Ahmedabad",
        "-"
      ],
      [
        "CIDS Coorg",
        "Rs. 3.83 Lakhs"
      ],
      [
        "HCDSH Hazaribagh",
        "-"
      ],
      [
        "IDS Jammu",
        "Rs. 13.80 Lakhs"
      ]
    ];
     const data10 = [
        [
        "Colleges",
        "Fees"
      ],
      [
        "AKU Patna",
        "-"
      ],
      [
        "GDC Raipur",
        "Rs. 1.04 Lakhs"
      ],
      [
        "GDCH Ahmedabad",
        "Rs. 1.00 Lakhs"
      ],
      [
        "GDCH Jamnagar",
        "Rs. 1.02 Lakhs"
      ],
      [
        "GDCH Nagpur",
        "Rs. 3.70 Lakhs"
      ],
      [
        "Government Dental College Kozhikode",
        "Rs. 1.65 Lakhs"
      ],
      [
        "HNGU Patan",
        "-"
      ],
      [
        "IMS BHU",
        "Rs. 1.49 Lakhs"
      ],
      [
        "JMI New Delhi",
        "Rs. 1.55 Lakhs"
      ],
      [
        "KGMU Lucknow",
        "Rs. 3.00 Lakhs"
      ]
    ];
     const data11 = [["Browse Medical Colleges by Cities",""],
        [
        "Medical Colleges in Bangalore",
        "Medical Colleges in Jaipur"
      ],
      [
        "Medical Colleges in Chennai",
        "Medical Colleges in Delhi"
      ],
      [
        "Medical Colleges in Kolkata",
        "Medical Colleges in Mumbai"
      ],
      [
        "Medical Colleges in Bhopal",
        "Medical Colleges in Coimbatore"
      ],
      [
        "Medical Colleges in Pune",
        "Medical Colleges in Hyderabad"
      ]
    ];
     const data12 = [["Browse Medical Colleges by States",""],
         [
        "Medical Colleges in Uttar Pradesh",
        "Medical Colleges in Kerala"
      ],
      [
        "Medical Colleges in Tamil Nadu",
        "Medical Colleges in Madhya Pradesh"
      ],
      [
        "Medical Colleges in Maharashtra",
        "Medical Colleges in Gujarat"
      ],
      [
        "Medical Colleges in Delhi",
        "Medical Colleges in Punjab"
      ],
      [
        "Medical Colleges in Karnataka",
        "Medical Colleges in Andhra Pradesh"
      ]
    ];


    return (
        <div>
            <Header tittle={"Bachelor Of Dental Surgery,(BDS)"} subTittle={"Elegliblity | Course Fee | Course Duration | Entrance Exams"} BGimage={image} />
            <ParaTiles heading={"About Bachelor of Dental Surgery (BDS)"} para={"BDS is one of the most popular and designated degree of dentists (doctors). The BDS (Bachelor of Dental Surgery) is the only educational and professional programme of dental surgery in India. It is equivalent to the MBBS and owes the “Dr” domain. In the medical educational field, it is the second choice of the students after the MBBS course."} headingSize={"24px"} />
            <ParaTiles para={"In this course, the students are taught about the denture, dental problems and surgery. It is also a good job oriented degree programmes and various opportunities are available in the hospital, pharmaceutical and medical device manufacturing industries."} headingSize={"15px"} />
            <ParaTiles para={"The BDS degree is awarded on the successful completion of the four-year academic education and the one year mandatory internship programme in dentistry education leading to the Bachelor of Dental Surgery degree programme. After completing your BDS, you are qualified to practice as a dentist."} headingSize={"15px"} />
            <ParaTiles para={"The BDS is the degree given to a person who plays the vital role in the treatment of problems related to teeth . The dentist prevents, diagnoses and cures to all dental and related diseases."} headingSize={"15px"} />
            <ParaTiles para={"It is very challenging to pursue the BDS course and you should have the enthusiasm, hard-working attitude in the study and have a focused mind for doing the BDS course."} headingSize={"15px"} />
            <ParaTiles para={"The Dental Council of India is the only accredited body for the dental programmes. This course is now in heavy demand by the students after 12th in medical field."} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data1} />
            <ParaTiles heading={"BDS Syllabus"} para={"This selection will let you know about the Syllabus of the BDS Course. Let’s have a look."} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data2} />
            <ParaTiles heading={"BDS Fees Structure"} para={"BDS fees vary depending on the medical college or university in which students take admission. Before enrolling in any particular BDS college, students should check the Bachelor of Dental Surgery (BDS) fees structure. BDS fee in both the private and government colleges is Rs. 50,000 to Rs. 1,200,000 lakhs."} headingSize={"15px"} />
            <ParaTiles heading={" Skills Required for BDS Degree"} para={"Candidates who want to pursue a BDS degree programme must possess certain skills. After earning BDS degree programme, student need the following skill sets to advance in the career:"} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data3} />
            <ParaTiles heading={"BDS Cut off"} para={"Bachelor of Dental Surgery or BDS cut-off is required to determine the student's merit for admission in the BDS degree programme in various medical colleges in India. For BDS degree programmes, NEET cut off is the main criteria that every medical college accepts for the BDS admission process. BDS cutoff is based on the number of students appearing for the NEET examination, previous year’s cutoff, NEET question paper."} headingSize={"15px"} />
            <ParaTiles heading={"BDS (Bachelor of Dental Surgery) Syllabus/Subjects"} para={"Candidates can go through the below-mentioned syllabus of BDS degree, which an aspirant has to go through while completing the degree. In the table below, we have mentioned BDS subjects year-wise."} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data4} />
            <ParaTiles para={"After passing the examination, all candidates are required to do a one-year mandatory rotating internship programme in all the departments for the duration indicated against each department as given below:"} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data5} heading={"BDS internships department and period of posting:"} />
            <ParaTiles para={"Note: Any student who does not clear the BDS course in all the subjects within a period of nine years, including a year mandatory rotatory paid internship from the date of admission shall be disquallified from BDS course."} headingSize={"15px"} />
            <CareerInfoTile headingColor={1} data={data6} />
            <ParaTiles heading={"BDS Specialisations"} para={"BDS specialisations available for the dentists to choose the area in which they would like to mark their career. They have a choice of nine specialisations to choose from while pursuing their masters as given below."} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data7} />
            <ParaTiles heading={"What after BDS?"} para={"In today's world, where oral health is one of the primary concerns for everyone, the scope of BDS in India and abroad is very high. People like to visit the dentist for their oral checkup in a month or two. The scope of a Bachelor of Dental Surgery (BDS) in India is very vast and increasing at a rapid speed day by day. It depends on the respective aspirant’s skills, knowledge, calibers, and the place they are practicing."} headingSize={"15px"} />
            <ParaTiles para={"MDS is not just the only option that is open for students. Dentists can also pursue a management course like MHA (Masters in Hospital Administration) or MPH (Masters in Public Health). This will allow them to step into the management side of health organisations or hospital chains. BDS course is very career-oriented and serves society with its application. BDS graduates can easily earn a handsome salary by working in both private or government organisations."} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={[["Other Popular Medical Degrees"], ["M.CH (Master of Chirurgiae)"], ["MD (Doctor of Medicine)"]]} />
            <ParaTiles heading={"Careers Opportunities after BDS"} para={"A plethora of career options are available after the BDS degree programme. Career as a dentist is the most sought after career option available after BDS course. However, that in itself has choices of where for whom, and as what. An important point is that students must register with the Dental Council of India to be able to practice as a dentist. Some of the career options are mentioned below:"} headingSize={"15px"} />
            <CareerInfoTile data={[["Dentist: ", "Dentists are doctors who diagnose and treat teeth diseases and oral cavities. Dentists recognise and then treat the diseases of teeth, gum, other oral diseases and make dentures. They guide the patients by providing information on how to maintain healthy teeth and gums and how to take care of oral hygiene."], ["Lecturer: ", "Lecturers in the medicl colleges are senior doctors who have completed their MD degree and have work experience. Mostly the doctors attached to the Govt hospitals also work as consulting professors to the students at the attached colleges. However, teaching is an option for dentists who have an inclination for it, after gaining some experience working as a dentist."]]} />
            <ParaTiles heading={"Salary after BDS Degree"} para={"The salary of dental graduates depends upon their caliber and experience. Aspirants can earn a handsome salary both in the private and government sector. Below, we have mentioned the salary after BDS degree:"} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={[[
                "Job Profiles",
                "Average Salary"
            ],
            [
                "Dentist",
                "Rs. 3 LPA"
            ],
            [
                "Lecturer",
                "Rs. 6 LPA"
            ]]} />
            <ParaTiles heading={"Employment Areas"} para={"BDS graduates can join hospitals, other healthcare facilities, and universities. Students who have pursued BDS or Bachelor of Dental Surgery, can also practise individually. Some of the employment areas after graduating from BDS are mentioned below"} headingSize={"15px"} />
            <CareerInfoTile headingColor={1} data={data8} />
             <ParaTiles heading={"Top Private BDS Colleges in India"} para={"In India there are a number of private BDS colleges. Private university education is significantly more expensive than public university education. Some of the greatest private BDS colleges and also BDS fees are discussed below:"} headingSize={"15px"} />
             <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data9} />
            <ParaTiles heading={"Top Government BDS Colleges in India"} para={"Attending a government-run college is less expensive than attending a private college. These colleges are well-known for their high academic standards throughout India. The following are some of the best government BDS colleges and also BDS fees:"} headingSize={"15px"} />
             <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data10} />
             <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data11} />
             <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data12} />
             <ParaTiles heading={"Admission Process."} para={"The national level NEET exam, conducted throughout the nation, is typically the admission process to BDS programmes. Since 2016, students must take the NEET exam to be admitted to medical programmes, including MBBS, BDS, etc."} headingSize={"15px"} />
             <ParaTiles para={"The student’s performance on the qualifying 10+2 exam must be at least 50% to qualify for the degree.Only applicants who meet the requirements can participate in the college’s admissions process.The counselling sessions for college admission can begin if the students pass the exam’s cut-off score. Seats will be allotted to candidates based on rank, filled choices and available seats."} headingSize={"15px"} />
             <ParaTiles heading={"What Is The BDS Eligibility Criteria?"} para={" Being Eligible For A Course Is A Prerequisite For Admission To A Particular College And Course. The Basic Eligibility Criteria For Admissions To BDS Courses Have Been Mentioned As Follows:"} headingSize={"24px"} />
             <ParaTiles para={"The Aspiring Candidate Must Have Passed The 10+2 Qualifying Exam Or An Equivalent Degree With A Minimum Of 50% Aggregate From A Recognised Institute."} headingSize={"15px"} />
             <ParaTiles para={"They Must Have Studied The Subjects Of Physics, Chemistry And Biology Compulsorily In Their 10+2."} headingSize={"15px"} />
             <ParaTiles para={"In Almost Every College Offering This Course, The Admissions Are Based On The Result Of NEET. The Student Must Clear The Cut-off Of The Exam To Be Eligible For Admission."} headingSize={"15px"} />
             <ParaTiles para={"If The Students Manage To Qualify For The Entrance, They Need To Appear For The Counseling Sessions Organised By The Colleges."} headingSize={"15px"} />
             <ParaTiles para={"There Are Generally Three Rounds Of Counseling Sessions Held."} headingSize={"15px"} />
             <ParaTiles heading={"Entrance Exams For Bachelor Of Dental Surgery"} para={"There Are Many Entrance Exams For The BDS Course Students Should Attend. Therefore, Attending The Entrance Exams Is An Essential Criterion In Some Colleges Or Universities. A Good Merit Score From The 10+2 Classes With Physics, Chemistry, And Biology As Essential Subjects To Ensure Admission For The Course. Some Of The Very Best And Mandatory BDS Entrance Exams Are As Follows:"} headingSize={"24px"} />
             <CareerInfoTile data={[["NEET"],["KCET"],["KEAM"],["AP EAMCET"]]} headingColor={1} />
             <ParaTiles heading={"The BDS Course Eligibility For The Entrance Exams Depends Entirely On The Conducting Body Which Conducts The Exam. The BDS Degree Course Entrance Exams Include Questions Related To Reasoning And Knowledge, Chemistry, Physics, And Biology Questions And Quantitative Reasoning, General Knowledge And Current Affairs To Analyze The Aspirants' Knowledge Abilities. The Test Includes:"} para={"The Entrance Exams Include Various Objective And Multiple-choice Type Questions. The Exam Is Conducted Both Online And Offline, And The Duration Is 180 Minutes. The Entrance Exam Assesses The Student's Ability In The Medical Sector, How Well The Students Are Aware Of The Global Medical Systems, Etc. "} headingSize={"15px"} />
             <ParaTiles heading={"Why Study BDS?"} para={"Since NEET Is The Only Entrance Conducted For Admission To BDS Courses In India, It Requires The Candidates To Put In A Lot Of Hard Work To Crack It Off. Every Year, More Than 10 Lac Students Appear For The Exam Which Makes It One Of The Most Competitive Examinations Conducted In India. Given Below Are Certain Tips Which Might Help The Students To Prepare Well For The Exam:"} headingSize={"15px"} />
             <ParaTiles para={"Beware Of The Latest Exam Pattern And Syllabus For The Exam Which Is Usually Available On The Official Website. This Will Help You Not Get Confused And Stay On The Right Track."} headingSize={"15px"} />
             <ParaTiles para={"Make A Study Plan And Include All The Topics That Are Mentioned In The Syllabus. This Will Help You In Knowing How Much You Have Covered And How Much More You Have To."} headingSize={"15px"} />
             <ParaTiles para={"Make A Proper Time Table And Follow It Strictly. This Will Help You To Finish Your Syllabus Well On Time."} headingSize={"15px"} />
             <ParaTiles para={"Buy The Best Study Material For NEET Which Covers All Important Topics. Also, Be Thorough With Your NCERT Books As Questions Might Come From There As Well."} headingSize={"15px"} />
             <ParaTiles para={"Read Newspapers Daily To Stay Updated About The Happenings Around You."} headingSize={"15px"} />
             <ParaTiles para={"Prepare Notes Of What You Have Studied. This Will Help You To Revise Well In The Last Minute."} headingSize={"15px"} />
             <ParaTiles para={"Sit For Mock Tests And Follow The Time Limits Strictly. This Will Give You An Idea Of The Actual Exam Situation."} headingSize={"15px"} />
             <ParaTiles heading={"What Is The BDS Future Scope? "} para={"Students Expect A Rise In Employment Opportunities In The Near Future. The Reason Being That There Has Been A Fast Increase In The Number Of Dental Patients As Well As Doctors And The Government Aims At Providing Better Job Opportunities To Dentists By Increasing The Employment Opportunities. "} headingSize={"15px"} />
            
        </div>
    )
}

export default Bds
