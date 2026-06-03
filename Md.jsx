import React from 'react'
import image from './hdr-bg.jpg'
import Header from './Header'
import ParaTiles from './ParaTiles'
import Table from './Table'
import CareerInfoTile from './CareerInfoTile'
import graph from './graph.png'  
import styles from './Md.module.css'

function Md() {



    const data1 = [
        ["Highlights", ""],
        [
            "Degree",
            "Masters"
        ],
        [
            "Full Form",
            "Doctorate of Medicine in Pathology"
        ],
        [
            "Duration",
            "3 Years"
        ],
        [
            "Age",
            "No age limit as such"
        ],
        [
            "Minimum Percentage",
            "50%"
        ],
        [
            "Average Fees",
            "INR 42,000 - 12.3 LPA"
        ],
        [
            "Similar Options of Study",
            "MD (Anatomy), MD (Microbiology), MD (Community Medicine), MD (Psychiatry) etc"
        ],
        [
            "Average Salary",
            "INR 10 LPA [Source:Glassdoor]"
        ],
        [
            "Employment Roles",
            "Pathologist, Discovery Breeder, Research Assistant, Professor/Associate Professor - Pathology, Business Dev Executive - Pathology, Lab Technician, OP Guest Relationship Executive, Pathology Code etc"
        ],
        [
            "Opportunities",
            "Non-Profit Organizations, Nursing Homes, Government, and Private Hospitals and Clinics, Academic Institutions, Private Clinics, Government Agencies, AIIMS, Apollo, Fortis, Max, BLK Hospital"
        ]
    ]
    const data2 = [
        [
            "SI.No.",
            "Name of the College"
        ],
        [
            "1",
            "All India Institute of Medical Sciences"
        ],
        [
            "2",
            "Jawaharlal Institute of Postgraduate Medical Education and Research"
        ],
        [
            "3",
            "Kasturba Medical College"
        ],
        [
            "4",
            "St. John's Medical College"
        ],
        [
            "5",
            "Stanley Medical College"
        ],
        [
            "6",
            "Saveetha Institute of Medical and Technical Sciences"
        ],
        [
            "7",
            "Amrita Vishwa Vidyapeetham"
        ],
        [
            "8",
            "Aligarh Muslim University"
        ],
        [
            "9",
            "Sri Balaji Vidyapeeth University"
        ],
        [
            "10",
            "Post Graduate Institute of Medical Education and Research"
        ]
    ]
    const data3 = [
        ["College Names	", "Fees"],
        [
            "Grant Medical College",
            "INR 50,000"
        ],
        [
            "SETH GS Medical College",
            "INR 67,000"
        ],
        [
            "Lokmanya Tilak Municipal Medical College",
            "INR 98,000"
        ],
        [
            "TATA Memorial Centre",
            "INR 2,70,000"
        ],
        [
            "Topiwala National College",
            "INR 85,500"
        ]
    ]
    const data4 = [
        ["College Names	", "Fees"],
        [
        "AIIMS",
        "INR 3000"
      ],
      [
        "Maulana Azad Medical College",
        "INR 10,000"
      ],
      [
        "Jamia Hamdard University",
        "INR 2,60,000"
      ],
      [
        "UCMS Delhi",
        "INR 50,000"
      ],
      [
        "Lady Hardinge Medical College",
        "INR 20,000"
      ]
    ]
    const data5 = [
        ["College Names	", "Fees"],
        [
        "KMC",
        "INR"
      ],
      [
        "IPGMER",
        "INR"
      ],
      [
        "R G Kar Medical College",
        "INR"
      ],
      [
        "Nilratan Sircar",
        "INR"
      ],
      [
        "CNMC",
        "INR"
      ]
    ]
    const data6 = [
        ["College Names	", "Fees"],
        [
        "St. John’s Medical College",
        "INR 9,10,000"
      ],
      [
        "Ramaiah Medical College",
        "INR 1,15,000"
      ],
      [
        "BMCRI",
        "INR 1,10,000"
      ],
      [
        "BRAMC",
        "INR 1,15,000"
      ],
      [
        "KIMS",
        "INR 2,00,000"
      ]
    ]
    const data7 = [
        ["College Names	", "Fees"],
        [
        "Dr DY Patil VIdhyapeeth",
        "INR 3,30,000"
      ],
      [
        "Maharashtra Institute of Medical Education",
        "INR 8,00,000"
      ],
      [
        "SKNMCGH",
        "INR 10,60,000"
      ],
      [
        "Bharati Bidhyapeeth Deemed University",
        "INR 4,00,000"
      ]
    ]
    const data8 = [
        [
        "College Name",
        "Fees Per Annum"
      ],
      [
        "Bharati Vidyapeeth Deemed University, Pune",
        "INR 4 Lakhs"
      ],
      [
        "St. John’s Medical College, Bangalore",
        "INR 9 Lakhs"
      ],
      [
        "Jamia Hamdard University, Delhi",
        "INR 3 Lakhs"
      ],
      [
        "Lokmanya Tilak Municipal Medical College, Mumbai",
        "INR 1 Lakhs"
      ],
      [
        "Maharashtra Institute of Medical Education, Pune",
        "INR 8 LPA"
      ]
    ]
    const data9 = [
        ["Anatomy"],
        ["Biochemistry"],
        ["Physiology"],
        ["Community Medicine"],
        ["Forensic Medicine"],
        ["Pathology"]
    ]
    const data10 = [
      [
        "Semester I",
        "Semester II"
      ],
      [
        "Applied Basic Science Knowledge",
        "Biostatistics And Clinical Epidemiology"
      ],
      [
        "Diseases Concerning General Medicine",
        "Diagnostic Investigation And Procedures"
      ],
      [
        "Recent Advances in Medicine",
        "-"
      ]
    ]
    const data11 = [
      [
        "Semester III",
        "Semester IV"
      ],
      [
        "Monitoring Ill Patients",
        "Research Project"
      ],
      [
        "Counseling Patients and Relatives",
        "Ward Patient Management"
      ],
      [
        "Research Project",
        "OPD Patient Management"
      ]
    ]
    const data12 =[
      [
        "Semester V",
        "Semester VI"
      ],
      [
        "Presentations",
        "Journal Conferences"
      ],
      [
        "Ward Rounds, Case Presentations, and Discussions",
        "PG Case Presentation Skills"
      ],
      [
        "Clinico- Radiological and Clinicopathological Conferences",
        "Research View"
      ]
    ]
    const data13 = [
        ["Anatomy"],
        ["Biochemistry"],
        ["Physiology"],
        ["Community Medicine"],
        ["Forensic Medicine"]
    ]
     const data14 = [
        ["MD Pathology"],
        ["MD Community Medicine"],
        ["MD General Science"],
        ["MD Microbiology"],
        ["MD Physiology"]
    ]
    const data15 = [
      [
        "Books",
        "Authors"
      ],
      [
        "The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma",
        "Bessel van der Kolk M.D."
      ],
      [
        "Harrison's Principles of Internal Medicine",
        "J. Larry Jameson, MD, Ph.D., Anthony S. Fauci, MD, Dennis L. Kasper, MD, et al"
      ],
      [
        "Atlas Of Human Anatomy",
        "Frank H. Netter, MD"
      ],
      [
        "Being Mortal: Medicine and What Matters in the End",
        "Atul Gawande"
      ],
      [
        "The White Coat Investor: A Doctor's Guide to Personal Finance and Investing",
        "James M. Dahle, M"
      ]
    ]
    

    // const data = [
    //     [
    // ]
    return (
        <div>
            <Header tittle={"Doctor Of Medicine In Pathology (MD - Pathology)"} subTittle={"Elegliblity | Course Fee | Course Duration | Entrance Exams"} BGimage={image} />
            <ParaTiles heading={"About MD - Patholog"} para={`MD Pathology is a postgraduate degree in medicine and diagnostics/ the study of disease. The eligibility for this course is MBBS Degree from an institution recognized by the Medical Council of India (MCI) with minimum aggregate marks as required by the institute.`} headingSize={"24px"} />
            <ParaTiles para={`This specialty addresses the main 3 components of disease – cause, mechanism of development or origin, consequences of changes.`} />
            <ParaTiles para={`The branch deals with diagnostic, testing and treatment methods using genetic technologies, thus underpinning the concept of patient care and prevention of diseases. Physicians practicing pathology are called pathologists.`} />
            <ParaTiles para={`They generally work with other doctors, scientists, and health professionals in hospitals and clinics to diagnose, treat and prevent diseases.`} />
            <ParaTiles para={`The process of pathology is quite simple, mapping the overall response of the body to any foreign influence, i.e. antigen or disease. Subsequently, this knowledge is used to diagnose and treat illnesses.`} />
            <ParaTiles para={`Pathologists compare the normal structure and function (cell count, blood) of a human body to the abnormal structure and function observed when a person is not well.`} />
            <ParaTiles heading={"What is MD Pathology All About?"} para={`An MD Pathology duration is a three-year-old doctorate course that focuses on developing the skills and techniques of a pathology student. An MD Pathology is a medical science and technology domain that correlates with pathology principles. The MD Pathology course is an advanced version of the medical field with a demanding vision. This course is mainly one of the core branches of medical science. The technological advancement in this field is also developing day by day.`} headingSize={"15px"} />
            <ParaTiles heading={"What Does an MD Pathology Post Graduate Do?"} para={`MD Pathology doctorate holds a Ph.D. degree in Pathology, a good career option. The MD in Pathology degree can open the door to many new and exciting jobs. A career in dental science means that aspirants can make a career in the medical field. Here are some qualities which an MD Pathology doctorate does.`} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data1} />
            <ParaTiles heading={"Top 10 MD Pathology Colleges in India"} para={`Top MD Pathology colleges in India and abroad offer courses in doctorate degrees to students interested in learning applications related to science. Some of the very best colleges for MD Pathology colleges in India are as follows:`} headingSize={"15px"} />
            <ParaTiles heading={"Top MD Pathology Colleges in India"} headingSize={"15px"} />
            <Table LeftcellWidth={'5%'} RightcellWidth={'90%'} tableData={data2} />
            <ParaTiles heading={"Top MD Pathology Colleges in Indian States"} para={`There are numerous reputed colleges in India which offer MD in Pathology degree or post graduation in pathology courses. Here we have mentioned some of them.`} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data3} heading={"Mumbai"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data4} heading={"Delhi"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data5} heading={"Kolkata"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data6} heading={"Bangalore"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data7} heading={"Pune"} />
            <ParaTiles heading={"Scope"} para={`Career opportunities in the field of pathology abound since there are multiple specialties in pathology, and a postgraduate can choose to specialize in any of the areas such as histopathology, cytopathology, clinical pathology, and immunohistochemical techniques, and work under the supervision of some of the best pathologists.`} headingSize={"15px"} />
            <ParaTiles para={`They may even set up their own private clinics known as diagnostic laboratories. Pathologists are lucratively recruited in the private/ corporate sectors/ hospitals and are paid in the range of INR 60 to 80,000 per month.`} />
            <ParaTiles para={`Typically, pathologists function in 3 broad areas- as diagnosticians in hospitals; investigators or researchers in medical laboratories, and as teachers in colleges and universities.`} />
            <ParaTiles para={`Successful postgraduates of the discipline work as Specialists in any of the sub-branches of pathology such as surgical pathology, clinical pathology, anatomical pathology, veterinary pathology, molecular pathology, plant pathology, and forensic pathology.`} />
            <ParaTiles para={`They may also choose to work as consultants to doctors or medical examiners. Employment opportunities for experienced professionals in this field are also open in universities, laboratories, and hospitals.`} />
            <ParaTiles para={`They are employed in areas of public health, law enforcement, government agencies, among other fields. Additionally, they may even step into research and pursue a Ph. D in any specialized branch of pathology.`} />
            <ParaTiles para={`As a fresh postgraduate, pathologists earn about INR 8000 to Rs.12000 monthly. With experience, the salary increases to INR15,000 to 22,000 monthly. In private hospitals, they may earn about INR 3,00,000 to 3,50,000 yearly in the beginning.`} />
            <ParaTiles heading={"Fee Structure"} para={`MD Pathology Fees structure ranges from INR 1 - 12 LPA. The fee for the course may vary depending upon the facilities and amenities provided at the college/university and the level of education offered.`} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data8} heading={"MD Pathology Fee Structure"} />           
            <img className={styles.graph} src={graph} alt="" />
            <ParaTiles heading={"Syllabus and Subjects for MD Pathology"} para={`The syllabus and subjects for the MD Pathology course are structured in such a way so that the students get a better understanding of different subjects of the course, which are necessary for them to emphasize their knowledge in various domains. The MD Pathology in India has multiple seminars, Class discussions, lectures, workshops, conferences, assignments, and research submissions. Some of the essential subjects of the MD Pathology course are:`} headingSize={"15px"} />
            <CareerInfoTile data={data9} headingColor={1} />
            <ParaTiles para={`MD Pathology subjects list and electives consist of an in-depth medical science syllabus, emphasizing doctorates' knowledge. In addition to that, a MD Pathology course imparts specific practical, laboratory, and theoretical knowledge in the subject areas to the students, such as science, dental, health care, projects, dissertation, training, and so on. `} />
            <ParaTiles heading={"Semester Wise Syllabus of MD Pathology"} para={`MD Pathology is a semester-wise syllabus. MD Pathology course aims to introduce students to various techniques that medical doctors use to treat patients better. MD syllabus mainly concentrates on core subjects, while other subjects help students gain theoretical and practical experience in the medical field. The MD covers Anatomy, Anesthesia, Aerospace Medicine, Biochemistry, Dermatology, ENT, Forensic Medicine, Geriatrics, General Surgery, Ophthalmology, Obstetrics & Gynecology, Orthopedics, and many more. The syllabus for MD Pathology semester wise are:`} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data10} heading={"MD Pathology First Year Syllabus"} /> 
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data11} heading={"MD Pathology Second Year Syllabus"} /> 
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data12} heading={"MD Pathology Third Year Syllabus"} /> 
            <ParaTiles heading={"MD Pathology Subjects"} para={`The MD Pathology subjects like Anatomy, Anesthesia, Aerospace Medicine, Biochemistry, Dermatology, ENT, Forensic Medicine, Geriatrics, General Surgery, Ophthalmology, Obstetrics & Gynecology, Orthopedics, etc. taught in the course curriculum. The subjects in MD Pathology are necessary for the doctorates to expand their knowledge in the practical and theoretical aspects, which will be beneficial for them to get a better scope in jobs in India and abroad on behalf of their skills.`} headingSize={"15px"} />
            <ParaTiles heading={"Core Subjects:"}  headingSize={"15px"} />           
            <CareerInfoTile data={data13} headingColor={1} />
            <ParaTiles heading={"Elective Subjects:"}  headingSize={"15px"} />
            <CareerInfoTile data={data14} headingColor={1} />
            <ParaTiles heading={"Course Structure"} para={`The MD Pathology syllabus and course curriculum is structured into 3 years and six semesters, namely core and elective subjects. The course for the curriculum has been divided into six semesters, consisting of Medical autopsy: Techniques and interpretation, Recent advances in all fields, related to Pathology, Organization of laboratories including quality control, Systemic pathology, Haematology, etc. Some of the MDS course details are:`} headingSize={"15px"} />         
            <CareerInfoTile data={[["VI Branches"],["Core subjects"],["Practical and Laboratory"],["Projects"],["Dissertation"]]} headingColor={1} />
            <ParaTiles heading={"MD Pathology Teaching Methodology and Techniques"} para={`The MD Pathology doctorate course curriculum includes various teaching methods and techniques that help students understand multiple topics taught in their classes. Some of the different teaching methodologies and techniques adopted in the course curriculum of the MDS doctorate course are as follows:`} headingSize={"15px"} /> 
            <ParaTiles heading={"Projects"} para={`Project Topics for MD in Pathology is a fantastic resource for students and researchers who will become doctors in the medical field and looking to complete ground-breaking research. The students can take the MD Pathology project topics based on their subjects and syllabus, motivating them to develop additional knowledge to complete the project work. Some of the best topics for MD Pathology is:`} headingSize={"15px"} />    
            <CareerInfoTile data={[["Epidemics versus pandemics"],["Child health care"],["Medical humanitarian missions in the developing world"],["Homeopathic medicines – the placebo effect"],["Virus infections – causes and treatment"]]} headingColor={1} />
            <ParaTiles heading={"Reference Books"} para={`Best books for MD Pathology help students understand various subjects and topics covered in the course curriculum. The MD Pathology books help doctorates expand their knowledge and vision about multiple topics covered in their classes. Some of the best books for this course are:`} headingSize={"15px"} /> 
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data15} heading={"MD Pathology Books"} /> 
            <ParaTiles heading={"Admission Process for MD Pathology"} para={`The admission process for MD Pathology in India is carried out either from the college premises or online. The admission process for the course is undertaken strictly based on the scores from MBBS degree courses corresponding to that of science or any science-related courses and the scores obtained in the entrance exams.  Listed below are the various procedures to get admission for the course details:`} headingSize={"15px"} /> 
            <ParaTiles para={`Admission to MD Pathology is based on a national level entrance examination- National Eligibility Cum Entrance Test.`} headingSize={"15px"} /> 
            <ParaTiles para={`NEET PG which is a single window entrance examination to MD/MS/PG diploma courses in medicine in India. Candidates who have secured the qualifying percentile for the National Eligibility cum Entrance Test (NEET) are eligible.`} headingSize={"15px"} /> 
            <ParaTiles para={`National Eligibility Cum Entrance Test (NEET) PG – NEET PG is an eligibility-cum-ranking examination, conducted by the Central Board of Secondary Education (CBSE), for admission to MS/MD and PG Diploma courses in India in Medical/ Dental Colleges running with the approval of the Medical Council of India/ Dental Council of India.`} headingSize={"15px"} /> 
            <ParaTiles heading={"Admission"} para={`The application submission dates for MD Pathology are still open at AIIMS and Jawaharlal Institute, while many have closed the application dates such as PGIMER.`} headingSize={"15px"} /> 
            <ParaTiles para={`There are other colleges such as CMC Vellore, BHU, JIPMER, and Aligarh Muslim University. These are some of the best universities in India for MD pathology courses.`} /> 
            <ParaTiles para={`Some of the applications are yet to be released, the notifications for them will be updated here.`} /> 
            <ParaTiles heading={"How to Apply?"} para={`The aspirants eager to study MD Pathology can apply online or offline for the course. The aspirants can apply for the course by downloading an admission form available online at the university or on the college website. After submitting the college or university application form, the aspirants will be invited to appear for a written test, personal interview, group discussion, and counseling.`} headingSize={"15px"} /> 
            <ParaTiles heading={"Selection Process"} para={`The selection process for the course is carried out based on the entrance exam score relating to science or any other discipline and the marks scored in 10+2+3 along with the MBBS degree marks scored to that of the course. After which, the university or college conducts a written test, personal interview, counseling, and group discussion, the aspirants are allocated seats based on various eligibility Science criteria fulfilled by the aspirants proposed by the college/university officials.`} headingSize={"15px"} />  
            <ParaTiles heading={"Eligibility Criteria for MD Pathology"} para={`Admission for the MD Pathology course in India requires the aspirants to complete their course corresponding to MBBS, Post Graduation, Bachelor's degree in Science with a minimum of 55% aggregate marks in completion of an MBBS degree. Also, the students pursuing the course must have cleared the standard entrance examination with good scores from any reputed institute to get admission. Furthermore, there is no specific age limit or criteria for admission.`} headingSize={"24px"} /> 
            <ParaTiles para={`Typically, to pursue an MD degree, candidates need to satisfy the eligibility criteria mentioned below:`}/>  
            <ParaTiles heading={"Entrance Exams for MD Pathology"} para={`There are many entrance exams for the MD Pathology course in India for which the students can attend. Appearing for entrance exams is an essential criterion and a good merit score from the MBBS degree. The doctorates can grab a seat for the course in a reputed college or university. Some of the very best and mandatory entrance exams are:`} headingSize={"24px"} /> 
            <CareerInfoTile data={[["UPSEE"],["DNB CET"],["NEET PG"],["AIIMS PG"],["JIPMER"]]} headingColor={1} />
            <ParaTiles heading={"Quick Glance At the MD Pathology Entrance Exams"} para={`The MD Pathology eligibility criteria for entrance exams depends entirely on the colleges and universities that conduct the exam. The entrance examinations conducted for the course details include various MBBS subjects and clinical, pre-clinical, and para-clinical subjects to analyze the aspirants' knowledge and abilities regarding the course as a whole. The test includes:`} headingSize={"15px"} />
            <ParaTiles heading={"Why Choose MD Pathology?"} para={`MD Pathology doctorates are highly demanding in the medical branch of pathology. An MDS degree can lead to a variety of new and intriguing opportunities. Therefore, an MD Pathology doctorate course has always been popular, which is reasonably significant. This course helps to master practical knowledge of problems related to medical science. In today's medical world, everything from health to treatment is based on medical principles. `} headingSize={"15px"} />
            
            
            

        </div>
    )
}

export default Md
