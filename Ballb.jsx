import React from 'react'
import Header from './Header'
import image from './hdr-bg.jpg'
import ParaTiles from './ParaTiles'
import Table from './Table'
import CareerInfoTile from './CareerInfoTile'

function Ballb() {


    
     const data1 = [
        [
        "Particulars",
        "Details"
      ],
      [
        "Name of the Course",
        "Bachelor of Arts + Bachelor of Legislative Law"
      ],
      [
        "Course Level",
        "Undergraduate"
      ],
      [
        "Course Duration",
        "Five years"
      ],
      [
        "Eligibility Criteria",
        "Candidates must pass 10+2 from a recognised board or university with a minimum aggregate of 45 per cent (general category candidates) and 40 per cent (reserved category candidates)"
      ],
      [
        "Admission and Entrance Examinations",
        "Entrance Examinations or Direct Admission"
      ],
      [
        "Avarage Fees",
        "Rs. 32,000 to Rs. 21 Lakhs"
      ],
      [
        "Top Colleges",
        "National Law School of India University, Bengaluru, National Law University, New Delhi, Jindal Global Law School, Sonipat, Symbiosis Law School, Pune"
      ],
      [
        "Avarage Salary",
        "Rs. 5 LPA"
      ],
      [
        "Career Options",
        "Lawyer, Corporate Lawyer, Legal Advisor, Public Prosecutor"
      ],
      [
        "Top Recruiters",
        "AZB & Partners, Khaitan and Co., Shardul Amarchand Mangaldas & Co., Hammurabi and Solomon, S&R Associates, Trilegal, Desai and Diwanji, Talwar Thakore and Associates"
      ]
    ];
     const data2 = [
        [""],
        [
        "Sincerity and diligence",
        "Ability to persuade"
      ],
      [
        "Verbal and written communication skills",
        "Confidence"
      ],
      [
        "Ability to work under pressure",
        "Time management"
      ],
      [
        "Strong research skills",
        "Objectivity"
      ]
    ];
     const data3 = [
        ["Popular Law Universities in India"],
         [
        "UPES",
        "LPU"
      ],
      [
        "SRM University",
        "GD Goenka University"
      ],
      [
        "GNA",
        "Chandigarh University"
      ],
      [
        "BML",
        "MS Ramaiah"
      ],
      [
        "United Group",
        "Manipal University"
      ]
    ];
     const data4 = [
        [
        "Colleges",
        "Entrance Examination"
      ],
      [
        "ADGITM New Delhi",
        "CLAT"
      ],
      [
        "Asian Law College, Noida",
        "LSAT-India"
      ],
      [
        "Babu Banarasi Das University, Lucknow",
        "CLAT"
      ],
      [
        "Chanakya National Law University, Patna",
        "CLAT"
      ],
      [
        "DES Shri Navalmal Firodia Law College, Pune",
        "MHCET Law"
      ],
      [
        "Delhi Institute of Rural Development, Holambi Khurd, Delhi",
        "CLAT"
      ],
      [
        "Delhi Metropolitan Education, Noida",
        "CLAT"
      ],
      [
        "GITAM School of Law Visakhapatnam",
        "CLAT"
      ],
      [
        "GNLU Gandhinagar",
        "CLAT"
      ],
      [
        "Indian Law Society Law College, Pune",
        "MHCET Law"
      ]
    ];
     const data5 = [
         [
        "Semester 1"
      ],
      [
        "General English – I",
        "Sociology – I"
      ],
      [
        "Political Science – I (Political Theory)",
        "Economics – I"
      ],
      [
        "Indian History – I (Ancient And Modern Indian History)",
        "-"
      ],
      [
        "Semester 2"
      ],
      [
        "General English – II (English Language and Legal Writing)",
        "Sociology – II"
      ],
      [
        "Political Science – II (International Relations)",
        "Economics – II (Economic Problems and Policies in India)"
      ],
      [
        "Law of Torts And Consumer Protection",
        "-"
      ],
      [
        "Semester 3"
      ],
      [
        "General English – III (Communication Skills)",
        "Optional paper:Hindi- I OR Law and Media- I"
      ],
      [
        "Political Science – III (Public Administration)",
        "Contract – I (General Principles of Contract)"
      ],
      [
        "Indian Legal And Constitutional History",
        "-"
      ],
      [
        "Semester 4"
      ],
      [
        "Optional paper:Hindi- II OR Law and Media- II",
        "Political Science – IV (Indian Government And Politics)"
      ],
      [
        "Indian History – II (Modern Indian History)",
        "Law of Human Rights"
      ],
      [
        "Semester 5"
      ],
      [
        "Law of Crimes (Indian Penal Code)",
        "Family Law – I (Hindu Law)"
      ],
      [
        "Constitutional Law of India – I (Nature of The Constitution And Fundamental Rights)",
        "Contract – II (Specific Contract And Law of Partnership)"
      ],
      [
        "Jurisprudence – I (Legal Theory)",
        "-"
      ],
      [
        "Semester 6"
      ],
      [
        "Environmental Law",
        "Family Law – II (Muslim Law)"
      ],
      [
        "Constitutional Law of India – II (Structure And Working of The Indian Constitution)",
        "Public International Law"
      ],
      [
        "Jurisprudence – II (Legal Concepts)",
        "-"
      ],
      [
        "Semester 7"
      ],
      [
        "Labour And Industrial Law",
        "Company Law"
      ],
      [
        "Interpretation of Statutes",
        "Optional Paper:Insurance Law And Accident Claims OR Criminology And Penology"
      ],
      [
        "Professional Ethics, Accountancy of Lawyers And Bar BenchRelation (Practical Training)",
        "-"
      ],
      [
        "Semester 8"
      ],
      [
        "Administrative Law",
        "Law of Property And Easement"
      ],
      [
        "Optional Paper:Intellectual Property Law OR Law Relating to Women And Child",
        "Banking Law Including Negotiable Instrument Act"
      ],
      [
        "Arbitration, Conciliation And Alternate Dispute Resolution (Practical Training)",
        "-"
      ],
      [
        "Semester 9"
      ],
      [
        "Code of Criminal Procedure",
        "Civil Procedure Code And Limitation Act"
      ],
      [
        "Law of Evidence",
        "Consumer Protection Law And Competition Act"
      ],
      [
        "Drafting of Pleading And Conveyancing (Practical Training)"
      ],
      [
        "Semester 10"
      ],
      [
        "Land Laws (U.P. Revenue Code, 2006)",
        "Law of Taxation"
      ],
      [
        "Optional Paper:Indian Judicial System OR Law of Trust, Equity And Fiduciary Relation",
        "Optional Paper:Law Relating To Right To Information OR Information Technology And Cyber Laws"
      ],
      [
        "Moot Court, Pre-Trial Preparations And Participation In Trial Proceedings (Practical Training)",
        "-"
      ]
    ];
     const data6 = [[""],
        [
        "Constitutional Law",
        "Corporate Law and Governance"
      ],
      [
        "Labour Law",
        "Criminal Law"
      ],
      [
        "Family Law",
        "Environmental Law"
      ],
      [
        "Intellectual Property Law",
        "Human Rights"
      ],
      [
        "Taxation Law",
        "Insurance Laws"
      ]
    ];
     const data7 = [
        ["Lawyer: ","Lawyer is a law personal who practises law and takes up cases, both civil and criminal, in the court of law. A lawyer will have the responsibility of representing clients in the court – initiate a lawsuit, document legal papers, attend formal meetings, assess cases and come up with solutions."],
        ["Corporate Lawyer: ","Corporate Lawyers are professionals who work towards giving legal advice to businesses regarding their legal obligations, responsibilities, rights, and so on. Their everyday duties may include drafting, negotiation, contract, merger, acquisition review, among others. They counsel all kinds of businesses, from the multi-billion dollar giants to small start-ups."],
        ["Legal Advisor: ","Legal advisors provide their clients with counsel on all legal issues, documents, and decisions. They are generally employed by large corporations, government organisations, and other legal companies. They help in either preventing or resolving legal conflicts between their client firm and other agencies or organisations."],
        ["Public Prosecutor: ","Public Prosecutors are legal professionals who undertake, institute, and carry out criminal proceedings by finding and presenting the facts of a particular case. Known to be unbiased, objective, and honest, a public prosecutor is an officer in court responsible for helping the judge in the administration of justice."],
        ["Top Recruiters",""]
    ];
     const data8 = [
        ["AZB & Partners"],
        ["Khaitan and Co."],
        ["Shardul Amarchand Mangaldas & Co."],
        ["Hammurabi and Solomon"],
        ["S&R Associates"],
        ["Trilegal"],
        ["Desai and Diwanji"],
        ["Talwar Thakore and Associates"]
    ];
     const data9 = [
        [
        "Job Profiles",
        "Average Salary"
      ],
      [
        "Lawyer",
        "Rs. 3.5 LPA"
      ],
      [
        "Corporate lawyer",
        "Rs. 5.8 LPA"
      ],
      [
        "Legal advisor",
        "Rs. 4.2 LPA"
      ],
      [
        "Public prosecutor",
        "Rs. 6.5 LPA"
      ],
      ["Source: AmbitionBox"]
    ];
     const data10 = [
        [
        "Colleges",
        "Fees"
      ],
      [
        "Army Institute of Law, Mohali",
        "Rs. 7.22 Lakhs"
      ],
      [
        "Alakh Prakash Goyal Shimla University, Shimla",
        "Rs. 5 Lakhs"
      ],
      [
        "Bihar Institute of Law, Patna",
        "Rs. 2.53 Lakhs"
      ],
      [
        "BMS College of Law, Bangalore",
        "-"
      ],
      [
        "Babu Shivnath Agrawal PG College, Mathura",
        "-"
      ],
      [
        "Faculty of Legal Studies, Arunachal University of Studies, Namsai",
        "Rs. 2 Lakhs"
      ],
      [
        "Hindustan Institute of Technology and Science, Chennai",
        "-"
      ],
      [
        "Indore Institute of Law, Indore",
        "Rs. 10.93 Lakhs"
      ],
      [
        "Institute of Law and Research, Faridabad",
        "Rs. 3.55 Lakhs"
      ],
      [
        "Jaipur National University, Jaipur",
        "Rs. 6.21 Lakhs"
      ]
    ];
     const data11 = [
        [
        "Colleges",
        "Fees"
      ],
      [
        "Aligarh Muslim University, Aligarh",
        "-"
      ],
      [
        "Bhagat Phool Singh Mahila Vishwavidyalaya (BPSMV), Khanpur Kalan",
        "-"
      ],
      [
        "Barkatullah University, Bhopal",
        "Rs. 1.05 Lakhs"
      ],
      [
        "Bundelkhand University, Jhansi",
        "Rs. 1.21 Lakhs"
      ],
      [
        "University of Burdwan, Bardhaman",
        "-"
      ],
      [
        "Chaudhary Charan Singh University, Meerut",
        "Rs. 1.77 Lakhs"
      ],
      [
        "CMP Degree College Allahabad",
        "Rs. 2.50 Lakhs"
      ],
      [
        "Chhatrapati Shahu Ji Maharaj University, Kanpur",
        "-"
      ],
      [
        "Dr Harisingh Gour Vishwavidyalaya, Sagar",
        "Rs. 85,250"
      ],
      [
        "Guru Ghasidas Vishwavidyalaya, Bilaspur",
        "Rs. 32,350"
      ]
    ];
     const data12 = [
        ["Based On Entrance Examination: ","Several Law Entrance Exams Are conducted For Admission To BA LLB Programmes. Candidates Seeking Admission To BA LLB Programmes Should Be Aware Of The Entrance Exams And The Law Colleges That Are Conducting Them Or Accept Scores Of Entrance Exams For BA LLB Admission."],
        ["Based On Merit: ","Several Law Colleges And Universities Will Offer BA LLB Admission Based On Marks Obtained By The Candidates In The Qualifying Examination. Candidates Who Do Not Wish To Appear In The Entrance Exams Can Choose The Direct Mode Of BA LLB Admission"],
        ["Admission By Direct Entry: ","Several Law Colleges And Universities Will Offer BA LLB Admission Based On Marks Obtained By The Candidates In The Qualifying Examination. Candidates Who Do Not Wish To Appear In The Entrance Exams Can Choose The Direct Mode Of BA LLB Admission"],
        ["Selection Criteria ","Students Will Get To Know The Cut-off Marks After The Results Are Out. Then, The Aspirants Who Have Cleared The Cut-off Will Attend The Online Counselling. Applicants Would Have To Provide Options Of The Colleges Where They Want To Take Admission During Online Counselling. Based On Their Ranks, The Counselling Body Will Delegate Seats To The Candidates."],
        ["State Level BA LLB Admission Process","The admission process for enrollment in BA LLB may vary from state to state. Several states conduct their own specific entrance examinations to provide admissions to individuals in colleges falling under their region."],
        ["BA LLB Admission Process in Maharashtra","We have provided below details of Maharashtra BA LLB Admission Process."],
        ["","Individuals are required to register for admission in law colleges in Maharashtra"],
        ["","They must register themselves for appearing in MHT CET Law."],
        ["","Individuals are required to appear in MHT CET Law on scheduled date and timings."],
        ["","They are required to acquire the rank within the announced cut-off."],
        ["","Participation in the counselling process is mandatory to freeze the allotted seat."],
        ["","Complete the documentation work at college premises"],
        ["","Pay the academic fee and ensure successful completion of admission."],
        ["BA LLB Admission Process in Andhra Pradesh","The admission process for enrollment in law colleges of Andhra Pradesh is quite similar to Maharashtra. We have provided below details of Andhra Pradesh BA LLB Admission Process."],
        ["","Individuals are required to register for appearing in AP LawCET."],
        ["","They are required to prepare and appear in AP LawCET on the scheduled timings."],
        ["","They must attain the rank within the cutoff to get enrollment in the respective college."],
        ["","To freeze the allotted seat, individuals are required to participate in the counselling round."],
        ["","Pay the academic fee and ensure successful completion of enrollment in the college."]
    ];
     const data13 = [
        ["CLAT: ","CLAT or Common Law Admission Test is a national-level entrance examination wherein nearly 59,000 students appear every year across the country; around 121 colleges accept this entrance test. Students must answer five sections – English Proficiency, Current Affairs including General Knowledge, Legal Aptitude, Logical Reasoning, and Quantitative Techniques."],
        ["LSAT: ","LSAT India or Law School Admission Test India is a national level entrance examination, conducted by the Law School Admission Council (LSAC) and accepted by 55 colleges across India. Students need to answer four sections – Analytical Reasoning, 1st Logical Reasoning, 2nd Logical Reasoning, and Reading Comprehension, each for a time limit of 35 minutes."],
        ["MH CET Law: ","MH CET Law or Maharashtra Common Entrance Test is a national-level entrance test occurring once every year for a duration of two hours. 120 colleges accept MH CET Law examination and nearly 19,000 candidates appear every year. For this offline examination, students need to answer the following five sections – English, Legal Aptitude and Reasoning, Logical Reasoning, General Knowledge and Current Affairs, and Mathematics."],
        ["AP LAWCET: ","AP LAWCET or Andhra Pradesh Common Law Entrance Test is a state level entrance examination conducted by Sri Krishnadevaraya University on behalf of the Andhra Pradesh State Council of Higher Education (APSCHE) and the duration of the online exam is 90 minutes."]
    ];
    return (
        <div>
            <Header tittle={"Bachelor Of Arts - Bachelor Of Legislative Law(BA LLB)"} subTittle={"Elegliblity | Course Fee | Course Duration | Entrance Exams"} BGimage={image} />
            <ParaTiles heading={"What is BA LLB?"} para={"The BA LLB course is a combination of Bachelor of Arts and Bachelor of Legislative Law degree programmes. BA LLB is a full-time integrated course for five-years in law designed to allow candidates to enrol themselves into studying law right after their higher secondary education. The BA LLB course prepares a student to have a promising career in the field of law."} headingSize={"24px"} />
            <ParaTiles para={"BA LLB, as an integrated course curriculum covers a wide range of topics, from non-legal subjects English, Political Science, Sociology, Geography, History and Economics to subjects oriented to law such as Civil Law, Labour Law, Criminal Law. After completing their 10+2 from a recognised board in streams such as science, commerce or arts, students will have to appear for relevant entrance examinations to become eligible for taking admission in a BA LLB programme."} headingSize={"15px"} />
            <ParaTiles heading={"What is BA LLB Full Form?"} para={"BA LLB full form is Bachelor of Arts (BA) and Bachelor of Legislative Law (LLB). BA LLB is a combined full-time integrated five-year course that can be pursued right after 10+2 that prepares a student for a promising career in law. Most institutes offer a semester based course wherein a total ten semesters are involved during the course of five years."} headingSize={"15px"} />
            <Table heading={"BA LLB Highlights"} LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data1} />
            <ParaTiles heading={"BA LLB Fee Structure"} para={"BA LLB fees will differ from one college to the other, this can majorly depend on the students, as in which college they wish to enrol themselves in. BA LLB fees at government colleges ranges from Rs. 32,000 to Rs. 15 lakhs and at private colleges it ranges from Rs. 2 lakhs to Rs. 21 lakhs. BA LLB fees structure includes various aspects including tuition fees, hostel fees, admission fees."} headingSize={"15px"} />
            <ParaTiles heading={"Skills Required to Pursue BA LLB Degree"} para={"Meeting the BA LLB eligibility criteria is just half of the admission procedure, the other half is possessing the following qualities and skill sets required to pursue a BA LLB degree."} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data2} />
            <ParaTiles heading={"BA LLB Cut Off"} para={"BA LLB cut off is the minimum limit of marks, percentage, score or rank that is considered eligible for providing admissions to candidates who have scored equivalent or higher than it. BA LLB cut off is released every year by college authorities to provide enrollment."} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data3} />
            <ParaTiles heading={"Top BA LLB Colleges Accepting Entrance Exams"} para={"Admissions to BA LLB colleges is provided depending on candidates performance in any national level or state level entrance examination. Several universities conduct their own entrance examinations, while others accept the score of national and state level law entrance examinations. We have provided below top law colleges to provide admission based on the entrance examination score."} headingSize={"15px"} />
            <ParaTiles heading={"Top BA LLB Colleges Accepting Entrance Exams"} para={"Admissions to BA LLB colleges is provided depending on candidates performance in any national level or state level entrance examination. Several universities conduct their own entrance examinations, while others accept the score of national and state level law entrance examinations. We have provided below top law colleges to provide admission based on the entrance examination score."} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data4} />
            <ParaTiles heading={"BA LLB Syllabus"} para={"BA LLB Syllabus can slightly differ from one college to another, though the curriculum must be the same for every college. BA LLB syllabus is divided into five years which comprises ten semesters. Below, we have mentioned the BA LLB syllabus of Asian Law College."} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data5} />
            <ParaTiles heading={"BA LLB Specialisations"} para={"There are various law specialisations offered in the BA LLB dual degree programme. Below we have listed the major BA LLB specialisations that are offered by various law colleges."} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data6} />
            <ParaTiles heading={"What after BA LLB Course"} para={"BA LLB has a huge scope in India. In fact, the Indian legal system is suffering from a shortfall of lawyers in practice. Apart from becoming a part of the Bar Council of India, one can venture into several other fields after completing BA LLB. One can join law firms and get into litigation. LLB professionals can explore a plethora of legal jobs available in India. Some of these options are mentioned below."} headingSize={"15px"} />
            <ParaTiles heading={"Career Opportunities After BA LLB Course"} para={"After completing a BA LLB course, the following career avenues open wide for any law aspirant:"} headingSize={"15px"} />
            <CareerInfoTile data={data7} />
            <CareerInfoTile data={data8} headingColor={1} />
            <ParaTiles heading={"Expected Salary after BA LLB"} para={"Salaries in the law field differ based on an individual’s certification, specialisation, skillset, and work experience. For an average entrant into the litigation field, despite being well-versed in both litigation and solicitation, the starting salary generally ranges between Rs. 10,000 to Rs.20,000; however, in corporate firms, graduates have an opportunity of taking home as high as Rs. 12 lakhs to Rs. 13 lakhs per annum."} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data9} />
            <ParaTiles heading={"Top Private BA LLB Colleges in India"} para={"There are numerous private colleges in India that offer BA LLB courses. We have listed below top BA LLB colleges in India. The admission process, academic curriculum and fee structure for these colleges may vary."} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data10} />
            <ParaTiles heading={"Top Government BA LLB Colleges in India"} para={"There are a number of government BA LLB colleges in India. We have provided below a list of top government BA LLB colleges in India. The admission process, academic curriculum and fee structure of these colleges may vary from one college to another."} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data11} />
            <ParaTiles heading={"BA  LLB Admission Procedure"} para={"The Admission Procedure For The BA LLB Course Is Based On The Performance In The Entrance Examination Or On A Merit Basis. Besides Satisfying The Minimum Eligibility Criteria, Getting Admission For BA LLB Requires An Aspirant To Go Through A Fixed Procedure, Including Group Discussion, Written Entrance Exam, Etc. The Admission Process Is Different For Every College, But The Standard Procedure Is Given Below:"} headingSize={"24px"} />
            <ParaTiles  para={"To Apply For The BA LLB Course, Filling Up The Entrance Exam's Admission Form Online Or Offline Is The First Step By Attaching All The Documents, Including The Aadhaar Card, Voter ID, Mark Sheet For The 10th 12th, And Final Year Graduation Mark Sheet."} headingSize={"15px"} />
            <ParaTiles heading={"BA + LLB Admission Process"}  headingSize={"15px"} />
            <CareerInfoTile data={data12} />
            <ParaTiles heading={"BA LLB Eligibility Criteria"} para={"For admission in BA LLB degree programme, candidates must pass their 10+2 examination from a recognised board or university. The BA LLB cutoff for general category candidates is generally 45 per cent and 40 per cent for reserved category students. As per the Bar Council of India (BCI), there is no age limit on the enrolment in BA LLB degree."} headingSize={"24px"} />
            <ParaTiles  para={"Students can pass 10+2 in any stream, such as Science, Arts, Commerce."} headingSize={"15px"} />
            <ParaTiles  para={"Some colleges provide admission to BA LLB courses based on the 10+2 marks and few colleges offer admission based on the national or state level entrance examinations or conduct their own entrance examination."} headingSize={"15px"} />
            <ParaTiles heading={"Entrance Exams Details"} para={"To get themselves enrolled into the course, a candidate must first pass a BA LLB entrance exam. These examinations can either be conducted on a national scale or they could be state-level examinations. Below, we have mentioned the entrance examination for admission in BA LLB course."} headingSize={"24px"} />
            <CareerInfoTile data={data13} />
            <ParaTiles heading={"How to prepare?"} para={"Here are some tips on how to prepare for a Bachelor of Arts/Bachelor of Laws (BA LLB) course:"} headingSize={"15px"} />
            <ParaTiles  para={"1. Develop your reading and writing skills. Law is a very text-heavy field, so it's important to be able to read and write effectively. You can improve your reading and writing skills by reading books and articles on legal topics, and by practicing writing essays and research papers."} headingSize={"15px"} />
            <ParaTiles  para={"2. Learn about the legal system. Before you start your BA LLB course, it's helpful to have a basic understanding of the legal system. You can learn about the legal system by reading books and articles on the topic, or by taking a pre-law course."} headingSize={"15px"} />
            <ParaTiles  para={"3. Take practice tests. There are many practice tests available online and in bookstores. Taking practice tests can help you get a feel for the types of questions that will be asked on the BA LLB entrance exam."} headingSize={"15px"} />
            <ParaTiles  para={"4. Network with law students and lawyers. Networking with law students and lawyers can help you get advice on how to prepare for your BA LLB course. You can network with law students and lawyers by attending law school events, or by joining a law-related student organization."} headingSize={"15px"} />
            <ParaTiles  para={"5. Stay positive and motivated. The BA LLB course can be challenging, but it's important to stay positive and motivated. Remember that you're not alone in this journey, and there are many resources available to help you succeed."} headingSize={"15px"} />
            <ParaTiles heading={"Here are some of the benefits of taking a course:"} para={"Learn new skills: Courses can teach you new skills that can be helpful in your career or personal life. For example, if you are interested in learning how to code, there are many online courses that can teach you the basics."} headingSize={"15px"} />
            <ParaTiles  para={"Gain knowledge: Courses can help you gain knowledge about a particular subject. This can be helpful in your career or personal life. For example, if you are interested in learning about history, there are many online courses that can teach you about different historical periods."} headingSize={"15px"} />
            <ParaTiles  para={"Meet new people: Courses can be a great way to meet new people who share your interests. This can be helpful in your career or personal life. For example, if you are interested in learning about business, there are many online courses that can teach you about business and connect you with other people who are interested in business."} headingSize={"15px"} />
            <ParaTiles  para={"Advance your career: Courses can help you advance your career by giving you the skills and knowledge you need to move up the ladder. For example, if you are interested in becoming a manager, there are many online courses that can teach you about leadership and management."} headingSize={"15px"} />
            <ParaTiles  para={"Achieve your personal goals: Courses can help you achieve your personal goals by giving you the skills and knowledge you need to reach your goals. For example, if you are interested in learning how to play the guitar, there are many online courses that can teach you how to play the guitar."} headingSize={"15px"} />
            <ParaTiles  para={"Have fun: Courses can be a great way to have fun and learn new things. For example, if you are interested in learning how to cook, there are many online courses that can teach you how to cook."} headingSize={"15px"} />

        </div>
    )
}

export default Ballb
