import React from 'react'
import Header from './Header'
import image from './hdr-bg.jpg'
import ParaTiles from './ParaTiles'
import Table from './Table'
import CareerInfoTile from './CareerInfoTile'

function Llb() {

    
     const data1 = [[""],
        [
        "Course Name",
        "LLB or Bachelor of Legislative Law"
      ],
      [
        "Level",
        "Undergraduate"
      ],
      [
        "Course Duration",
        "Three years or Five years"
      ],
      [
        "Admission Process",
        "Entrance test followed by counselling by the authorities."
      ],
      [
        "Eligibility Criteria",
        "Bachelor's degree or 10+2"
      ],
      [
        "Entrance Exams",
        "CLAT UG, LSAT"
      ],
      [
        "Specialisations",
        "Constitutional Law, Labour Law, Family Law, Intellectual Property Law, Taxation Law, Criminal Law, Environmental Law, Human Rights, Insurance Laws"
      ],
      [
        "Course Average Fees",
        "Rs. 5000 to Rs. 15 Lakhs"
      ],
      [
        "Top Colleges",
        "University of Delhi, Government Law College, Mumbai, Guru Nanak Dev University, Amritsar, IIT Kharagpur, ILS Pune - Indian Law Society Law College, Pune"
      ],
      [
        "Job Profiles",
        "Corporate Lawyer, Legal Advisor, Family Lawyer, Civil Lawyer, Criminal Lawyer"
      ],
      [
        "Annual Salary",
        "Rs. 3 LPA to Rs. 20 LPA"
      ],
      [
        "Top recruiters",
        "Morgan Stanley, Deloitt, E & Y, KPMG, McKinsey, Barclays, Boston Consulting Group, Goldman Sachs"
      ]
    ];
     const data2 = [
        [""],
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
        "GNA University, Phagwara"
      ],
      [
        "MSRIT Bangalore",
        "United College of Engineering and Management, Allahabad"
      ]
    ];
     const data3 = [
        [""],
        [
        "Information analysis",
        "Research skills"
      ],
      [
        "Self confidence",
        "Attention to detail"
      ],
      [
        "Judgement skills",
        "Perseverance"
      ],
      [
        "Decision making skills",
        "Communication skills"
      ]
    ];
     const data4 = [
        ["Browse List of LLB Colleges by States"],
        [
        "L.L.B Colleges in Uttar Pradesh",
        "L.L.B Colleges in Maharashtra"
      ],
      [
        "L.L.B Colleges in Rajasthan",
        "L.L.B Colleges in Madhya Pradesh"
      ],
      [
        "L.L.B Colleges in Karnataka",
        "L.L.B Colleges in Gujarat"
      ],
      [
        "L.L.B Colleges in Haryana",
        "L.L.B Colleges in Andhra Pradesh"
      ],
      [
        "L.L.B Colleges in Punjab",
        "L.L.B Colleges in West Bengal"
      ]
    ];
     const data5 = [
        ["Browse List of LLB Colleges by Location"],
        [
        "L.L.B Colleges in Bangalore",
        "L.L.B Colleges in Mumbai"
      ],
      [
        "L.L.B Colleges in Jaipur",
        "L.L.B Colleges in Allahabad"
      ],
      [
        "L.L.B Colleges in Ghaziabad",
        "L.L.B Colleges in Lucknow"
      ],
      [
        "L.L.B Colleges in Pune",
        "L.L.B Colleges in Indore"
      ],
      [
        "L.L.B Colleges in Hyderabad",
        "L.L.B Colleges in Greater Noida"
      ]
    ];
     const data6 = [
        [
        "Semester 1"
      ],
      [
        "Jurisprudence-I",
        "Constitutional Law I"
      ],
      [
        "Law of Contract",
        "Family Law I"
      ],
      [
        "Law of Torts and Consumer Protection Act",
        "-"
      ],
      [
        "Semester 2"
      ],
      [
        "Jurisprudence II",
        "Constitutional Law II"
      ],
      [
        "Special Contracts",
        "Family Law II"
      ],
      [
        "Public International Law",
        "-"
      ],
      [
        "Semester 3"
      ],
      [
        "Law of Crimes-I",
        "Property Law"
      ],
      [
        "Labour Law",
        "Information Technology Act & RTI Act"
      ],
      [
        "Land Laws",
        "International Organisations, Human Rights and Humanitarian Law"
      ],
      [
        "Interpretation of Statutes and Principles Of Legislation",
        "-"
      ],
      [
        "Semester 4"
      ],
      [
        "Law of Crimes-II",
        "Company Law"
      ],
      [
        "Administrative Law",
        "Environmental and WildLife Protection Laws"
      ],
      [
        "Law of Taxation",
        "Intellectual Property Laws"
      ],
      [
        "Semester 5"
      ],
      [
        "Law of Evidence",
        "Criminal Procedure Code-I"
      ],
      [
        "Service Law",
        "Civil Procedure Code"
      ],
      [
        "Laws Relating to Registration, Limitation and Trust",
        "Private International Law"
      ],
      [
        "Business Law",
        "-"
      ],
      [
        "Semester 6"
      ],
      [
        "Alternate Dispute Resolution",
        "Criminal Procedure Code-II"
      ],
      [
        "Drafting, Pleading and Conveyancing",
        "Professional Ethics & Professional Accountability"
      ],
      [
        "Criminology, Penology and Victimology",
        "International Labour Organization and Labour Laws"
      ]
    ];
     const data7 = [
        [""],[
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
     const data8 = [
        ["Government Lawyer: ","A Government Lawyer is a professional lawyer who works for the government. He or she is a trained or certified lawyer and barrister who offers legal counsel to government ministers and administrative personnel. A government lawyer is in charge of addressing a variety of duties, including pursuing criminal offences, making regulations, advising local authorities, and resolving policy matters."],
        ["Legal Advisor:","Legal advisers are attorneys who work for government agencies, major corporations, and other organisations to offer legal counsel and services to the business and its personnel. A legal advisor assists businesses by giving advice on the law. He or she settles conflicts and assists clients with contracts, legal paperwork, and draughts."],
        ["Corporate Lawyer:","Corporate lawyers advise the board of directors in order to assist them in making firm and legally sound administrative decisions. Assisting the board of directors, overseeing the company's legal matters, defending the organisation's interests to officials of the other party, and ensuring that the business and its directors comply with the law are all responsibilities of a corporate lawyer."],
        ["Salary after LLB (Bachelor of Legislative Law) Degree","The salary of a LLB (Bachelor of Legislative Law) graduates depends upon their experience, skills, education qualification. Graduates can earn a handsome salary after pursuing a LLB (Bachelor of Legislative Law) degree programme. Below, we have mentioned the salary after LLB course:"],
    ];
     const data9 = [
        [
        "Job Profiles",
        "Average Salary (annually)"
      ],
      [
        "Government Lawyer",
        "Rs. 4.6 LPA"
      ],
      [
        "Legal Advisor",
        "Rs. 4.2 LPA"
      ],
      [
        "Corporate Lawyer",
        "Rs. 5.8 LPA"
      ]
    ];
     const data10 = [
        [
        "Colleges",
        "Fees"
      ],
      [
        "New Law College Kolhapur",
        "Rs. 6880"
      ],
      [
        "New Law College Pune",
        "-"
      ],
      [
        "PGCL Mumbai - Pravin Gandhi College of Law, Mumbai",
        "Rs. 3.08 Lakhs"
      ],
      [
        "Prestige Institute of Management and Research, Indore",
        "Rs. 2.79 Lakhs"
      ],
      [
        "Pt Kishori Lal Shukla Law College, Rajnandgaon",
        "Rs. 30000"
      ],
      [
        "S S Law College Shahjahanpur",
        "Rs. 60000"
      ],
      [
        "SGT University",
        "Rs. 4.92 Lakhs"
      ],
      [
        "SLS Bangalore",
        "Rs. 3.60 Lakhs"
      ],
      [
        "Symbiosis Law School, Pune",
        "Rs. 8.25 Lakhs"
      ],
      [
        "SOA National Institute of Law, Bhubaneswar",
        "Rs. 2.85 Lakhs"
      ]
    ];
     const data11 = [
        [
        "Colleges",
        "Fees"
      ],
      [
        "Bundelkhand University, Jhansi",
        "Rs. 72,300"
      ],
      [
        "University of Burdwan, Bardhaman"
      ],
      [
        "CMP Degree College Allahabad",
        "Rs. 5,540"
      ],
      [
        "Dr Harisingh Gour Vishwavidyalaya, Sagar",
        "Rs. 15,150"
      ],
      [
        "University of Delhi, Delhi"
      ],
      [
        "Faculty of Law, University of Delhi, Delhi",
        "Rs. 13,930"
      ],
      [
        "Government Law College, Mumbai",
        "Rs. 19,700"
      ],
      [
        "Guru Nanak Dev University, Amritsar",
        "Rs. 1.01 Lakhs"
      ],
      [
        "National Law University, New Delhi",
        "Rs. 1.21 Lakhs"
      ],
      [
        "Faculty of Law, Banaras Hindu University, Varanasi",
        "Rs. 23,320"
      ]
    ];
     const data12 = [
        ["Browse List of Law Colleges by States"],
        [
        "Law Colleges in Uttar Pradesh",
        "Law Colleges in Maharashtra"
      ],
      [
        "Law Colleges in Rajasthan",
        "Law Colleges in Madhya Pradesh"
      ],
      [
        "Law Colleges in Karnataka",
        "Law Colleges in Delhi NCR"
      ],
      [
        "Law Colleges in Gujarat",
        "Law Colleges in Haryana"
      ],
      [
        "Law Colleges in West Bengal",
        "Law Colleges in Punjab"
      ]
    ];
     const data13 = [
        ["Browse List of Law Colleges by Location"],
        [
        "Law Colleges in Bangalore",
        "Law Colleges in Mumbai"
      ],
      [
        "Law Colleges in Indore",
        "Law Colleges in Jaipur"
      ],
      [
        "Law Colleges in New Delhi",
        "Law Colleges in Pune"
      ],
      [
        "Law Colleges in Allahabad",
        "Law Colleges in Lucknow"
      ],
      [
        "Law Colleges in Kolkata",
        "Law Colleges in Greater Noida"
      ]
    ];
     const data14 = [
        ["Other Cases: ","Such Candidates Who Are Appearing In The Final Year/semester Exam Of Their Graduation Course May Also Apply For The Law Degree, But They Need To Meet The Other Eligibility Requirements Postulated By The College Which The Candidate Is Seeking Admission To."],
        ["Age Limit:","Meet The Other Eligibility Requirements Postulated By The College Which The Candidate Is Seeking Admission To.Age Limit: There"],
        ["Minimum Marks In Qualifying Exam: ","The Minimum Marks May Vary, As Some Colleges Demand 50%, While Others Require Only 45%. Further, In The Case Of Public Law Colleges, There Is Relaxation In Minimum Marks For Reserved Category Candidates."],
        ["Qualifying Exam:","Since 3-year LLB Is A Law Course Offered After Graduation, Candidates Aspiring For A Law Degree Must Have Passed Graduation From A Recognized Institute In Any Discipline Like BA, B.Com, B.Sc, BBA, BCA Etc."]
    ];
     const data15 = [
        ["CLAT-","CLAT refers to the Common-Law Admission Test is an entrance test in the area of law which is conducted by the National Law University at a national level in India. It is an offline examination and is widely accepted in most law institutions and colleges."],
        ["LSAT- ","LSAT refers to the India Law School Admission Test is a national level entrance examination conducted by the Law School Admission Council. 55 colleges across the nation recognise the LSAT India score."],
        ["MH CET Law- ","MH CET law referred to as Maharashtra Common Entrance Test Law, is a state-level entrance test that is held to admit students to law schools in the state of Maharashtra. The MH CET law is carried out offline. Every year, about 19000 applicants apply for the MH CETLaw."],
        ["AP LAWCET-","AP Law CET referred to Andhra Pradesh Law Common Entrance Test. is a state-level entrance test, conducted by Sri Krishnadevaraya University on behalf of APSCHE."],
        ["","Law After +2 Is An Attractive Study Option And Ensures A Prospective Future For An Individual. The Law Entrance Tests Follows A Comprehensive Testing Pattern Wherein Different Subjects Are Covered. The Candidates Have To Give Individual Attention To Each Such Subject. For The Candidates To Score Well It Is Important To Have An Overall And Inclusive Learning."],
        ["","Any Test Relating To Law For Which A Student Appears After +2 Includes Various Areas Such As Legal Aptitude, Maths, English, Logical And Analytical Aptitude, General Knowledge And Current Affairs."]
    ];
     const data16 = [
        ["1. Read Newspaper Daily:-","Beginning With The Basic Step For Law Exam Preparation A Candidate Has To Be Aware Of All Events Happening Around Him. This Basic Awareness In A Candidate Is Quintessential, As This Awareness Will Be Tested In Two Separate Categories Of General Knowledge And Current Affairs. Keeping This In Mind, A Candidate Must Regularly Read Newspaper, Which Is The Foremost Source To Brush Up Current Affairs And Also Enhance Their General Knowledge. Through A Newspaper A Candidate Can Improve And Add To His Knowledge Both."],
        ["2. Read And Watch General Knowledge Content:-","Secondly A Candidate Can Purchase Specific Books Which Publish Material Solely About Current Affairs And General Knowledge. Watching Debates Is Another Way Of Brushing Up Current Affairs. By Studying In This Manner, Topics Of Current Affairs And General Knowledge Can Be Prepared Thoroughly."],
        ["3. Read English Books And Newspaper To Improve English Language Skills:-","In A Law Entrance Test Next Important Topic Is English, The Source Of Honing This Language Is The Newspaper. Newspaper Is An Absolutely Wonderful Source Of Improving One’s Command Over The Language. Self-help Books Containing Simple And Easy Tips For Preparing English Can Help. English Books Of Elementary Classes Can Help In Revising The Basic Topics. A Candidate Can Use These Books For Revising The Topics And Also Simultaneously For Practicing The Same."],
        ["4. Prepare Maths From Elementary Books:-","By Now It Is Clear That Preparation For Law Entrance Test Is Not Just Restricted To Law And Hence The Next Topic To Be Prepared By An Aspiring Law Student Is Mathematics And The Questions Here Are Based On Various Topics Covered By A Student In Class 10th. For Maths, Practice Is The Key. Also While Preparing For The Law Entrance Tests, Practicing Questions Within The Stipulated Time Frame Is Important As It Will Help Candidates To Maintain Speed While Solving These Questions. The More A Candidate Practices Questions Of Different Types The More He Will Get The Clarity And Confidence Of Solving Those Questions. Topics Such As Speed And Distance, Ratio, Average Are Commonly Asked."],
        ["5. Constant Practice The Logical And Analytical Section Questions:- ","Logical And Analytical Aptitude Is Another Area In The Law Entrance Test Which Requires Constant Practice. The Questions Asked In This Area Are Varied And A Candidate Must Practice And Brace Himself For All Sort Of Questions."],
        ["6. Study Legal Aptitude And Prepare Your Notes:- ","For A Candidate Appearing For Law Entrance Test, Clarity In The Section Of Legal Aptitude Is A Matter Of Primary Concern. Candidates Have To Study Variety Of Topics In This Section Such As Contract, Torts, IPC, IPR, Family Law. The Number Of Questions In Each Area Varies But A Clear Understanding Of The Basic Concepts In Each Of These Topics Shall Prove To Be Really Helpful And A Score Fetcher. Reading And Understanding Examples And Making One’s Own Notes Will Help Bring More Clarity."],
        ["Why Choose LLB (Bachelor of Legislative Law)?","LLB (Bachelor of Legislative Law) courses provide a solid foundation to empower students to combine their law studies with business or accounting, as well as to combine law and non-legal degrees. Law graduates can join various fields such as media and law, academics, commerce and industry, social work, politics. The LLB course provides the knowledge and skills acquired in the study of law to enable students to analyse both sides of complex situations and to make effective solutions based on solid reasoning and critical thinking."]
    ];
    
    return (
        <div>
            <Header tittle={"Bachelor Of Legislative Law (LLB)"} subTittle={"Elegliblity | Course Fee | Course Duration | Entrance Exams"} BGimage={image} />
            <ParaTiles heading={"About LLB"} para={`The LLB full form is Legislative of Law. The course Wikipedia says, "The LLB is the most common law degree offered and conferred by Indian universities that has three years. Almost all law universities follow a standard LLB curriculum, wherein students are exposed to the required bar subjects." The LLB duration in India is around 3 Years.`} headingSize={"24px"} />
            <ParaTiles para={"Law is a unique set of rules and regulations categorized under the country in which it is governed. LLB course involves the study from Bar Council of India with subjects like labour law, civil procedure, human rights, and other deep insight into the laws and legislature."} headingSize={"15px"} />
            <ParaTiles para={"An LLB degree allows a person to enrol as a legal fraternity member and practice law in India. The job scope of LLB allows the aspirants to gain exposure in law firms and other private and public sector organizations."} headingSize={"15px"} />
            <Table heading={"Highlights - LLB (Bachelor of Legislative Law)"} LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data1} />
            <ParaTiles heading={"LLB Fees Structure"} para={"LLB or Bachelor of Laws fees majorly depend on the type of academic institution in which students are enrolling. Prior to taking the admission in the LLB course students must check the Bachelor of Laws or LLB fees of any particular college in which they want to take the admission. The average LLB fees range from Rs. 5,000 to Rs. 15 Lakhs."} headingSize={"15px"} />
            <ParaTiles heading={"Top Law Colleges in India offering LLB"} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data2} />
            <ParaTiles heading={"Skills Required for LLB (Bachelor of Legislative Law) Degree"} para={"Candidates who want to pursue a LLB degree programme should have a unique skill set, including time management and patience. Below, we have mentioned the skill sets that the students should possess for pursuing a LLB course."} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data3} />
            <ParaTiles heading={"LLB (Bachelor of Legislative Law) Cut off"} para={"For admission in the LLB (Bachelor of Legislative Law) degree programme in various colleges in India, the LLB cut off is a necessary factor. Some colleges offer admission in LLB courses based on merit and some colleges conduct entrance examinations. Entrance examination score is also considered by many colleges for admission in LLB (Bachelor of Legislative Law) courses."} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data4} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data5} />
            <ParaTiles heading={"LLB (Bachelor of Legislative Law) Syllabus"} para={"LLB (Bachelor of Legislative Law) is a bachelor degree programme for three years and five years. Below, we have mentioned the LLB syllabus of Panjab University."} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data6} />
            <ParaTiles heading={"LLB (Bachelor of Legislative Law) Specialisations"} para={"LLB (Bachelor of Legislative Law) is a three year and five long undergraduate degree programme, can be pursued after completing a bachelor's degree or 10+2 respectively. The undergraduate degree usually covers core modules like Criminal Law, Tort Law, Contract Law, Constitutional/Administrative Law, Equity and Trusts, Land Law, and European Law. At the postgraduate level, the candidate can do specialization in a chosen subject, which may be:"} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data7} />
            <ParaTiles heading={"What after LLB (Bachelor of Legislative Law)?"} para={"Law is regarded as a safe professional path, many individuals choose to pursue LLB (Bachelor of Legislative Law) after college. If the candidate successfully completes the LLB programme, they may practise as attorneys and advocates. The LLB degree holder has the choice of working for the government or as a private attorney. Usually, a candidate must clear an entrance exam conducted by the Public Service Commission in order to work in the government sector."} headingSize={"15px"} />
            <ParaTiles  para={"Then some may also decide to go for higher studies and pursue LLM and even PhD. At the master's level, one may opt for specialisation, which can give more muscle to one’s resume and job prospects. Again, some may decide to become teachers, a profession which is getting more attention in recent times."} headingSize={"15px"} />
            <ParaTiles heading={"Careers Opportunities after LLB (Bachelor of Legislative Law)"} para={"Students after pursuing LLB (Bachelor of Legislative Law) courses, can opt for various job roles. Below, we have mentioned some of the career options available after LLB course"} headingSize={"15px"} />
            <CareerInfoTile data={data8} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data9} />
            <ParaTiles heading={"Employment Areas"} para={"LLB (Bachelor of Legislative Law) graduates will find employment in both the public and private sector organisations. Below we have mentioned some of the employment areas where LLB (Bachelor of Legislative Law) graduates can find employment."} headingSize={"15px"} />
            <CareerInfoTile data={[["Law Firms"],["Colleges & Universities"],["Corporate Houses (legal departments)"],["Research Dept"],["Courtrooms"],["Arbitration Consultancies"]]} headingColor={1} />
            <ParaTiles heading={"Top Private LLB Colleges in India"} para={"Several private colleges in India offer LLB degree programmes. Private LLB colleges are significantly more expensive than government LLB colleges. We have mentioned below some of the top private LLB colleges as well as LLB fees."} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data10} />
            <ParaTiles heading={"Top Government LLB Colleges in India"} para={"There are also several government colleges in India that offer LLB degree courses. Students can pursue LLB degree programmes from these government LLB colleges at an affordable cost. Government colleges are popular for delivering high academic standards across India. The table below lists some of the best government LLB colleges along with LLB fees."} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data11} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data12} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data13} />
            <ParaTiles heading={"LLB Admissions Process"} para={"One can take admission to a three year long LLB law degree after a bachelor’s degree. Students can also pursue a five year long LLB degree programme after completing 10+2. Admission to LLB courses can be done through two ways, based on scores of entrance exams like PU LLB, DU LLB, and MH CET Law, and based on scores of qualifying exams."} headingSize={"15px"} />
            <ParaTiles  para={"Candidates who want to take admission to five year LLB courses can appear in the entrance exams such as CLAT, AILET, SLAT, KLEE.The candidate can choose an entrance exam based on the college they want to get admission to; for example, for admission to Delhi University, one has to qualify the DU LLB entrance exam"} headingSize={"15px"} />
            <ParaTiles  para={"Direct admission based on qualifying exam marks is also a common admission route, with KSLU admission being a good example."} headingSize={"15px"} />
            <ParaTiles  para={"In this case, there is no entrance exam, and the candidate is only expected to fulfil LLB eligibility criteria like qualifying exam, minimum marks. The merit list, in this case, is prepared considering marks of the qualifying exam."} headingSize={"15px"} />
            <ParaTiles  para={"National Law Universities (NLSs) do not offer the three year Bachelor of Legislative Law degree programme. They only have five year integrated programmes at the undergraduate level."} headingSize={"15px"} />
            <ParaTiles heading={"LLB Eligibility"} para={"The Eligibility Criteria Of Bachelor Of Legislative Law May Vary Across Colleges, Especially Those Related To Minimum Marks; Refer The Points Below For Full Details. It Is Important That The Candidate Knows The Eligibility Criteria Beforehand Because Otherwise One's Candidature Can Be Nullified At Any Stage Of The Admission Process."} headingSize={"24px"} />
            <ParaTiles heading={"Eligibility Criteria Of LLB Programme"} headingSize={"15px"} />
            <CareerInfoTile data={data14} />
            <ParaTiles heading={"Entrance Exams Details"} headingSize={"24px"} />
            <ParaTiles heading={"Top LLB (Bachelor of Legislative Law) Exams"} headingSize={"15px"} />
            <CareerInfoTile data={data15} />
            <ParaTiles heading={"Steps To Prepare The LLB Entrance Exam"} headingSize={"15px"} />
            <CareerInfoTile data={data16} />
            


        </div>
    )
}

export default Llb
