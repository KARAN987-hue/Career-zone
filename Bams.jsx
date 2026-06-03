import React from 'react'
import image from './hdr-bg.jpg'
import Header from './Header'
import ParaTiles from './ParaTiles'
import Table from './Table'
import CareerInfoTile from './CareerInfoTile'

function Bams() {

    const data1 = [
        ["Highlights"],
        [
            "Programme Name",
            "Bachelor of Ayurvedic Medicine and Surgery"
        ],
        [
            "Abbreviation",
            "BAMS"
        ],
        [
            "Program Level",
            "Undergraduate"
        ],
        [
            "Program Type",
            "Degree"
        ],
        [
            "Field",
            "Ayurveda Medical Science (Healthcare)"
        ],
        [
            "Duration",
            "5.5 years (including 12 months mandatory internship)"
        ],
        [
            "Average Salary",
            "Rs. 300,000 to Rs. 700,000"
        ],
        [
            "Average Fees",
            "Rs. 25,000 to Rs. 320,000"
        ],
        [
            "Career Opportunities",
            "Pharmacist, Surgeon, Dietician, Gynaecologist, Teacher, Panchkarma Practitioner"
        ]
    ]
    const data2 = [
        [
            "Fee Level",
            "Fees"
        ],
        [
            "BAMS first-year fee",
            "Rs. 50,000 to Rs. 70,000"
        ],
        [
            "BAMS full course fee without yearly charges",
            "Rs. 3,00,000 to Rs. 4,00,000"
        ],
        [
            "BAMS full course fee with yearly charges",
            "Rs. 5,00,000 to Rs. 6,00,00"
        ]
    ]
    const data3 = [
        ["", ""],
        [
            "Knowledge of Ayurveda",
            "Communication Skills"
        ],
        [
            "Enterprising Ability",
            "Research Skills"
        ]
    ]
    const data4 = [["",""],
         [
        "NEET Exam Dates",
        "NEET Preparation Tips"
      ],
      [
        "NEET Eligibility Criteria",
        "NEET Application Form"
      ],
      [
        "NEET Cut off",
        "NEET Result"
      ]
    ]
    const data5 = [
      [
        "Professional 1"
      ],
      [
        "Padartha Vigyan And Ayurved Itihas",
        "Rachana Sharir"
      ],
      [
        "Sanskrit",
        "Maulik Siddhant Avum Ashtang Hridaya"
      ],
      [
        "Kriya Sharir",
        "-"
      ],
      [
        "Professional 2"
      ],
      [
        "Dravyaguna Vighyan",
        "Rasashatra"
      ],
      [
        "Roga Nidan",
        "Charak Samhita"
      ],
      [
        "Professional 3"
      ],
      [
        "Agadtantra",
        "Kaumarbhritya Parichaya"
      ],
      [
        "Swasthavritta",
        "Charak Samhita (Uttaradha)"
      ],
      [
        "Prasuti Tantra Evum Stri Roga",
        "-"
      ],
      [
        "Professional 4"
      ],
      [
        "Kayachikitsa",
        "Shalakya Tantra"
      ],
      [
        "Panchkarma",
        "Research Methodology And Medical Statistics"
      ],
      [
        "Shalya Tantra",
        "-"
      ]
    ]
    const data6 = [["",""],
      [
        "Padartha Vigyan",
        "Charak Samhita"
      ],
      [
        "Sharir Rachana",
        "Prastuti and Stri Roga"
      ],
      [
        "Sharir Kriya",
        "KaumaraBhritya"
      ],
      [
        "Swasthavritta",
        "Kayachikitsa"
      ],
      [
        "Rasa Shastra",
        "Shallya Tantra"
      ],
      [
        "Agad Tantra",
        "Shalakya Tantra"
      ],
      [
        "Rog Vikriti Vigyan",
        "Charak Samhita"
      ]
    ]
    const data7 = [
        [
        "Job Profile",
        "Avarage Salary"
      ],
      [
        "Panchkarma Practitioner",
        "Rs. 2.5 LPA"
      ],
      [
        "Pharmacist",
        "Rs. 2.2 LPA"
      ],
      [
        "Teacher",
        "Rs. 4.5 LPA"
      ],
      [
        "Counselor",
        "Rs. 4.1 LPA"
      ],
      [
        "Dietician",
        "Rs. 2.4 LPA"
      ]
    ]
    const data8 = [
        [
        "Colleges",
        "Fees"
      ],
      [
        "AUAMC Aligarh",
        "-"
      ],
      [
        "DIMS Dehradun",
        "-"
      ],
      [
        "IIAMR Bangalore",
        "-"
      ],
      [
        "JSSAMC Mysore",
        "-"
      ],
      [
        "SCSVMV University",
        "Rs. 15.88 Lakhs"
      ],
      [
        "SDMCAH Hassan",
        "-"
      ],
      [
        "Abhilashi University, Mandi",
        "Rs. 15 Lakhs"
      ],
      [
        "Amrita School of Ayurveda, Amritapuri",
        "Rs. 21.33 Lakhs"
      ],
      [
        "Ankerite Ayurvedic Medical College and Hospital, Lucknow",
        "Rs. 13.96 Lakhs"
      ],
      [
        "Ashokrao Mane Ayurvedic Medical College Hospital and Research Centre",
        "Rs. 6.45 Lakhs"
      ]
    ]
    const data9 = [
        [
          "Colleges",
        "Fees"
      ],
      [
        "AKU Patna",
        "-"
      ],
      [
        "CSJMU Kanpur",
        "-"
      ],
      [
        "DSRRAU Jodhpur",
        "-"
      ],
      [
        "NIA Jaipur",
        "Rs. 1.37 Lakhs"
      ],
      [
        "NTRUHS Vijayawada",
        "Rs. 46,750"
      ],
      [
        "Baba Kheta Nath Government Ayurvedic College and Hospital, Narnaul",
        "Rs. 85,150"
      ],
      [
        "Bundelkhand Government Ayurvedic College and Hospital, Jhansi",
        "Rs. 78,000"
      ],
      [
        "Government Akhandanand Ayurved College, Ahmedabad",
        "Rs. 18,000"
      ],
      [
        "Government Ashtang Ayurved College, Indore",
        "Rs. 2.61 Lakhs"
      ],
      [
        "Government Ayurved College and Hospital, Banda",
        "-"
      ]
    ]
    const data10 = [[""],
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
    ]
    
    const data11 = [[""],
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
    ]
    const data12 = [
        ["Total marks in the paper would be around 180"],
        ["Questions are in MCQ format."],
        ["The total time for attempting the questions is 3 hours or 180 minutes."],
        ["180 objective-based questions with Physics: 45, Chemistry: 45, Biology: 90 divided into Zoology: 45 and Botany: 45 will be asked"],
        ["+4 marks will be awarded for every correct answer and -1 for every incorrect answe"],
    ]
    // const data = [
    //     [
    // ]
    return (
        <div>
            <Header tittle={"Bachelor Of Ayurvedic Medicine And Surgery.(BAMS)"} subTittle={"Elegliblity | Course Fee | Course Duration | Entrance Exams"} BGimage={image} />
            <ParaTiles heading={"About BAMS"} para={`Bams stands for bachelor of ayurvedic medicine and surgery. Bams is an undergraduate degree programme designed to make students familiar with the concepts of ayurveda and use them for the treatment of patients. Bams incorporates ayurveda with the ideas of modern medicines, and students are taught a combination of both as part of the course curriculum .ayurveda is one of the oldest systems of medicine and traces its roots to Vedic times. It is based on the curative properties of herbs, and its treatments are known for the natural elements they contain. Considered an alternate treatment method, the ayurveda medicine system not only cures and prevents an ailment but also reduces the frequency with which diseases enter the human body. It utilizes the self-healing system of the body.`} headingSize={"24px"} />
            <ParaTiles para={`Currently, this alternative method of healing is being accepted by people worldwide. Even the world health organization has provided a worldwide forum for promoting traditional medicine systems such as ayurveda. Therefore, the bachelor of ayurvedic medicine and surgery (bams) as a course has opened up many promising opportunities for students. Bachelor of ayurvedic medicine and surgery is an undergraduate level medical programme based on ancient ayurveda methods of healings.`} />
            <ParaTiles para={`Candidates who could not make it to mbbs programme due to hefty fee can opt for bams programmer. The average fee of the bams is economic. Candidates can opt for postgraduate programmers in ayurveda medicine after successful completion of bams programme. It provides numerous careers in the field of medical sciences. One can become surgeon, gynecologist (ayurveda), pharmacist, teacher and numerous other roles offered in the healthcare industry.`} />
            <ParaTiles para={`BAMS degree full form is Bachelor of Ayurveda Medicine and Surgery. It is a 5½-year-long undergraduate course with a final year as a mandatory internship that is designed to make students familiar with the concepts of Ayurveda and use them for the treatment of patients. BAMS incorporates Ayurveda with the concepts of modern medicines, and students are taught a combination of both as part of the course curriculum.`} />
            <ParaTiles heading={"BAMS Duration & Curriculum"} para={`The whole BAMS course of 5 years and 6 months is divided into three sections   I Profession, II Profession and III Profession. The course is completed in just 4.5 years but additional 1 year should be taken for internship and it is a compulsory part for degree.`} headingSize={"15px"} />
            <ParaTiles para={`Profession I, II, III are called professional courses under Professional (1) Ayurvedic as Modern Anatomy, physiology, Ayurvedic Classic Text and sanskrit language will be taught. Profession (2) Ayurvedic Classic Text, Social and preventive Medicine, Ayurvedic Toxicology, pharmacology and pharmaceutics, Diagnostic and clinical methods. Profession (3) Ayurvedic as well as modern aspect of general medicine, gynecology and obstetrics, general surgery, pediatrics, ENT, ophthalmology, Panchakarma, Ayurvedic Classic Texts. Also, one rotatory internship in clinical department is compulsory.`} />
            <ParaTiles heading={"What is BAMS Full Form?"} para={`The BAMS full form is Bachelor of Ayurveda Medicine and Surgery, is one of the most popular medical and healthcare courses for candidates from PCB branch. Bachelor of Ayurveda Medicine and Surgery (BAMS) course covers the detailed study of traditional ayurvedic and modern medicine.`} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data1} />
            <ParaTiles heading={"Fees Structure"} para={`The fee structure for BAMS colleges varies when it comes to government and private colleges. The course fee structure also differs state-wise. However, aspirants can check the table below to get an idea about the fee structure.`} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data2} />
            <ParaTiles heading={"Why Choose BAMS?"} para={`Bachelor of Ayurvedic Medicine and Surgery is an undergraduate-level medical program based on ancient Ayurveda methods of healing. Candidates who could not make it to the MBBS program due to the hefty fees can opt for the BAMS program. The average fee of the BAMS is economic. Candidates can opt for postgraduate programs in Ayurveda medicine after the successful completion of the BAMS program. It provides numerous careers in the field of medical sciences. One can become a surgeon, gynecologist (ayurveda), pharmacist, teacher, and numerous other roles offered in the healthcare industry.`} headingSize={"15px"} />
            <ParaTiles heading={"Who should study?"} para={`Students who are interested in the integrated study of Medical Science and Traditional Ayurveda can pursue a BAMS degree course to grow in the field.`} headingSize={"15px"} />
            <ParaTiles para={`Students should have completed their !0+2 with Physics, Chemistry and Biology from a recognized board.`} headingSize={"15px"} />
            <ParaTiles para={`Students who are interested in finding alternative methods for the treatment of diseases.`} headingSize={"15px"} />
            <ParaTiles para={`Students who are looking for high-salary medical courses other than MBBS. `} headingSize={"15px"} />
            <ParaTiles heading={"Eligibility Criteria"} para={`It is mandatory for aspirants to fulfill BAMS Eligibility Criteria to get admission to the BAMS course. Some basic BAMS eligibility criteria are mentioned below.`} headingSize={"15px"} />
            <ParaTiles para={`Candidates are required to pass Class 12 or equivalent examination with science subjects (Physics, Chemistry and Biology) and English core in both Class 11 and 12 from a recognised board.`} headingSize={"15px"} />
            <ParaTiles para={`He or she should have completed the age of 17 years at the time of admission.`} headingSize={"15px"} />
            <ParaTiles para={`An aspirant from the general category needs to secure an aggregate of 50 per cent in their Class 12 Board examination. While, for SC/ST/OBC candidates, the qualifying percentage is 40 per cent.`} headingSize={"15px"} />
            <ParaTiles para={`Candidates need to have qualified NEET by securing a minimum qualifying cutoff percentile to get admission to BAMS course, which can be checked in the table below.`} headingSize={"15px"} />
            <ParaTiles para={`For foreign students, any other equivalent qualification approved by the University will be allowed.`} headingSize={"15px"} />
            <ParaTiles heading={"Skills Required for BAMS Course"} para={`Candidates must possess certain skills in order to get the most out of their BAMS courses. After earning BAMS degree, students will need the following skill sets to advance in the career:`} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data3} />
            <ParaTiles heading={"Application Process"} para={`Admission to BAMS (Bachelor of Ayurvedic Medicine and Surgery) courses will be taken on the basis of NEET UG score and the corresponding rank. Therefore, candidates are required to qualify for NEET conducted by National Testing Agency (NTA). For the admission to AYUSH courses, Central Counselling Committee plays a crucial role in the allotment process of seats in Ayurveda, Yoga, Naturopathy, Siddha, and Homeopathy colleges.`} headingSize={"15px"} />
            <ParaTiles heading={"Top BAMS Exams"} headingSize={"24px"} />
            <CareerInfoTile data={[["NEET: ","NEET examination is required for the admission in BAMS degree programme, which is conducted by NTA. In order to take admitted to BAMS course, candidates are required to secure NEET cutoff percentile. Candidates can check the category-wise minimum required percentile in the table below. The admission to BAMS will be taken by a state-wise counseling procedure. For the BAMS admission process, each state will release its own state merit rank based on the NEET merit list for which the candidates will be required to fill out the application form."]]} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data4} />
            <ParaTiles heading={"Cut off"} para={`Bachelor of Ayurvedic Medicine and Surgery (BAMS) cut-off is used to determine the student's merit or test performance. BAMS cut-off is different from one college to another college or university. BAMS cutoff is based on the number of students appearing for the NEET examination, and the difficulty level of the NEET question paper.`} headingSize={"15px"} />
            <ParaTiles heading={"Syllabus"} para={`In this section, we have provided the BAMS syllabus of the National Commission for Indian System of Medicine. The BAMS syllabus is devided into four professionals. We have mentioned the BAMS syllabus in the table below:`} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data5} />
            <ParaTiles para={`Compulsory Rotatory one-year internship in the clinical departments. The theory BAMS course is carried out in four and a half years, while it is necessary for candidates to complete a year rotatory internship for practical training.`} headingSize={"15px"} />
            <ParaTiles heading={"Also Read:"} para={`MBBS (Bachelor of Medicine and Bachelor of Doctor)`} headingSize={"15px"} />
            <ParaTiles para={`BHMS (Bachelor of Homeopathic Medicine and Surgery)`} />
            <ParaTiles para={`BUMS (Bachelor of Unani Medicine and Surgery)`} />
            <ParaTiles heading={"Specialisations"} para={`There are no specialisations offered in the BAMS program. Candidates are required to opt for specialisations in postgraduate programs in Ayurveda Medicine and Surgery. These programs include an M.S. (Master of Surgery) (Ayurveda) and an M.D. (Doctor of Medicine) (Ayurveda).`} headingSize={"15px"} />
            <ParaTiles para={`Candidates can opt for the following specialisations mentioned below in MS (Ayurveda) and MD (Ayurveda) programs.`} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data6} />
            <ParaTiles para={`BUMS (Bachelor of Unani Medicine and Surgery)`} />
            <ParaTiles heading={"What after BAMS?"} para={`With an upsurge of countless grave health issues and limitations of allopathy, Ayurveda has emerged as an alternative. Therefore, BAMS as a medical course is gaining popularity not just in India but all over the world. With almost zero side effects, Ayurveda is being increasingly opted for by people all over the globe. People suffering from lifestyle diseases also seek help in the traditional art of healing which indicates the growing demand for BAMS doctors.`} headingSize={"15px"} />
            <ParaTiles para={`After the completion of the BAMS course, candidates can either opt for practising or may pursue higher studies and specialise in a particular branch of Ayurveda. Along with regular practice, a BAMS graduate can also take up specialized practice after pursuing higher education in the discipline, such as therapy of skin diseases, spinal disorders, ophthalmologic conditions, and anorectal diseases.`} />
            <ParaTiles heading={"Salary after BAMS Degree"} para={`Below, we have mentioned the salary after BAMS degree:`} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data7} />
            <ParaTiles heading={"Top Private BAMS Colleges in India"} para={`In India there are a number of private BAMS colleges. Private university education is significantly more expensive than public university education. Some of the greatest private BAMS Colleges and also BAMS fees are discussed below:`} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data8} />
            <ParaTiles heading={"Top Government BAMS Colleges in India"} para={`Attending a government-run college is less expensive than attending a private college. These colleges are well-known for their high academic standards throughout India. The following are some of the best government BAMS colleges and also BAMS fees:`} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data9} />
            <ParaTiles heading={"Browse Medical Colleges by Cities"} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data10} />
            <ParaTiles heading={"Browse Medical Colleges by States"} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data11} />
            <ParaTiles heading={"How To Get Admission to BAMS?"} para={`For pursuing BAMS, students must ensure that they satisfy the eligibility criteria. Almost all colleges offer admission to the BAMS course based on marks obtained by students in the national-level entrance exams like NEET, KEAM, IPU CET, etc. Aspirants may avail applications for admissions both from the university website or by directly visiting the college's admissions office.`} headingSize={"24px"} />
            <ParaTiles para={`Mentioned below are the details of the admission process in general:`}/>
            <ParaTiles heading={"How to Apply?"} para={`Aspirants can find BAMS course information for admissions on the college's official websites in which the students want to apply. Students must visit the college campus for offline admissions, fill out the application form, collect the brochure, and submit the required documents. Students should visit the college's admission website for online applications and fill out the application form.`} headingSize={"15px"} />
            <ParaTiles heading={"BAMS eligibility:-"} para={`The candidate must be a indian nationals, non-resident Indians (nri), overseas citizen of india (oci), & persons with indian origin (pio)the candidate has completed age of 17 years at the time of admission or will complete that age on or before 31 December of the year of his/her admission to the first year undergraduate medical courses .the upper age limit for neet (ug) is 25 years as on the date of examination with relaxation of 5 years for the candidates belonging to sc/st/obc-ncl category and pwd candidates. The candidate must be medically fit and must submit a certificate of medical fitness at the time of admission. the candidate must have passed the qualifying examination i.e. Higher secondary certificate (hsc/12th standard) or equivalent examination, with english, physics, chemistry and biology (botany & zoology) a candidate belonging to open category and ews category must have obtained not less than 50% (i.e. 150 out of 300) marks in physics, chemistry and biology, taken together at the hsc (or equivalent) examination.  A candidate belonging to constitutional reservation except ews category and constitutional reservation with person with disability claim must have obtained not less than 40% (i.e.  120 out of 300) marks in physics, chemistry and biology taken together at the hsc (or equivalent) examination. Person with disability  candidate in general category must  secure not less than  45% marks (i.e. 135  out of 300) in physics, chemistry & biology (pcb)  taken together at the hsc  (or  equivalent) examination or decided by  respective central council. bams eligibility`} headingSize={"15px"} />
            <ParaTiles heading={"Entrance Exams for BAMS"} para={`Almost all colleges offering BAMS have an entrance exam-based admission process. The National-level entrance exam NEET is the most acceptable for getting into BAMS courses. There are also other entrance exams for admission. BAMS admission without NEET is a possibility, some of the top entrance examinations are:`} headingSize={"24px"} />
            <CareerInfoTile data={[["NEET"],["OJEE"],["KEAM "],["GCET"],["BVP-CET"],["IPU-CET"]]} headingColor={1} />
            <ParaTiles heading={"A Quick Glance at the BAMS Entrance Exams"} para={`Before appearing for the BAMS entrance exams, students should be aware of the details regarding the entrance exams. This will help students in timely preparations and in knowing the exam syllabus. In general, the exam pattern for NEET is: `} headingSize={"24px"} />
            <CareerInfoTile data={data12} headingColor={1} />
            <ParaTiles heading={"Why Choose BAMS?"} para={`Students often wonder about BAMS course details before choosing the course. Before deciding on a career, students encounter queries like, "What is BAMS course?" and "Why choose BAMS?". To clearly understand answers to these questions and know more about BAMS Bachelor of Ayurveda Medicine and Surgery, we have framed the following three pointers: `} headingSize={"15px"} />

        </div>
    )
}

export default Bams
