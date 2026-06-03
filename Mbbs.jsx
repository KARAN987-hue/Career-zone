import React from 'react'
import image from './hdr-bg.jpg'
import Header from './Header'
import ParaTiles from './ParaTiles'
import Table from './Table'
import CareerInfoTile from './CareerInfoTile'

function Mbbs() {



    const data1 = [
        ["26 May, 2023 : ", "Expected Cut off of NEET 2023, Check Here"],
        ["08 May, 2023 : ", "IPU CET 2023 Expected to be Held From May 30 to June 15; Check Official Notice Here"],
        ["15 March, 2023 : ", "Teerthanker Mahaveer University Admission 2023 Open for UG, PG, Diploma and Integrated Programmes; Check Details Here"]
    ]
    const data2 = [
        ["Highlights - MBBS", ""],
        [
            "Course Name",
            "Bachelor of Medicine and Bachelor of Surgery"
        ],
        [
            "Abbreviation",
            "MBBS"
        ],
        [
            "Type",
            "Degree"
        ],
        [
            "Level",
            "Undergraduate"
        ],
        [
            "Field",
            "Healthcare"
        ],
        [
            "Eligibility",
            "10+2 with Physics, Chemistry, and Biology"
        ],
        [
            "Duration",
            "5.5 years"
        ],
        [
            "Average Fee",
            "Rs. 71,000 to Rs.2,100,000"
        ],
        [
            "Average Salary",
            "Rs. 360,000 per annum"
        ],
        [
            "Career Opportunities",
            "Physician, Doctor, Endocrinologist, Pathologist, Neurologist, Cardiologist, Gynaecologist"
        ],
        [
            "Top Recruiters",
            "Apollo Group, Indian Nursing Council, Fortis Hospitals, Manipal Group, Medica"
        ]
    ]
    const data3 = [
        ["Online Degree and Diploma Courses", ""],
        ["Online Free Courses and Certifications", ""],
        ["Online Short Term Courses and Certifications", ""],
        ["Online Certification Courses", ""],
        ["View List of all Online Courses and Certifications", ""],
        ["Top Certification Course Providers", ""]
    ]
    const data4 = [
        ["", ""],
        [
            "Patience",
            "Physical Strength"
        ],
        [
            "Communication Skills",
            "Attention to Detail"
        ],
        [
            "Critical Thinking",
            "Empathy"
        ]
    ]
    const data5 = [
        ["Browse Medical Colleges Accepting NEET", ""],
        [
            "CMC Vellore",
            "KMC Manipal"
        ],
        [
            "KMC Mangalore",
            "MS Ramaiah Medical College Bangalore"
        ],
        [
            "St Johns Medical College Bangalore",
            "AFMC Pune"
        ],
        [
            "KPC Medical College and Hospital, Jadavpur",
            "Maulana Azad Medical College, New Delhi"
        ],
        [
            "HIMSR New Delhi",
            "IMS BHU"
        ]
    ]
    const data6 = [
        [
            "Semester-I"
        ],
        [
            "Fundamentals of Disease and Treatment",
            "Locomotor System"
        ],
        [
            "Introduction to Medical Practice I",
            "Introduction to Molecular Medicine"
        ],
        [
            "Cell Biology",
            "Introduction of Embryology and Histology"
        ],
        [
            "Semester-II"
        ],
        [
            "Health and the Environment",
            "Neuroscience 1 (Peripheral System)"
        ],
        [
            "Basic Haematology",
            "Respiratory System"
        ],
        [
            "Healthcare Concepts",
            "-"
        ],
        [
            "Semester-III"
        ],
        [
            "General Pathology",
            "Environmental Pathology"
        ],
        [
            "Neoplasia",
            "Nutrition Disorders"
        ],
        [
            "Hereditary Disorder",
            "Immunity"
        ],
        [
            "Semester-IV"
        ],
        [
            "Systemic Pathology",
            "Alimentary System"
        ],
        [
            "Haematology",
            "Common Symptoms and Signs"
        ],
        [
            "Cardiovascular System",
            "-"
        ],
        [
            "Semester-V"
        ],
        [
            "Special Pathology",
            "Growth Disturbance and Neoplasia"
        ],
        [
            "Clinical Pathology",
            "Immunopathology"
        ],
        [
            "General Pathology",
            "-"
        ],
        [
            "Semester-VI"
        ],
        [
            "Epidemiology of communicable diseases",
            "Reproductive and child health"
        ],
        [
            "Epidemiology of nonâ€communicable diseases",
            "-"
        ],
        [
            "Semester-VII"
        ],
        [
            "Infectious disease",
            "Diseases of the immune system, connective tissue, and joints"
        ],
        [
            "Nutritional disease",
            "Hematology and Oncology"
        ],
        [
            "Geriatric disease",
            "-"
        ],
        [
            "Semester-VIII"
        ],
        [
            "Endocrine disease",
            "Brain Death, Organ donation, Organ preservation"
        ],
        [
            "Metabolic and Bone disease",
            "Nervous system"
        ],
        [
            "Emergency medicine and critical care",
            "-"
        ],
        [
            "Semester-IX"
        ],
        [
            "Nervous system",
            "Environmental disorders, poisoning and snake bite"
        ],
        [
            "Kidney disease",
            "Emergency medicine and critical care"
        ]
    ]
    const data7 = [
        ["", ""],
        [
            "M.B.B.S. Colleges in Chennai",
            "M.B.B.S. Colleges in Bangalore"
        ],
        [
            "M.B.B.S. Colleges in New Delhi",
            "M.B.B.S. Colleges in Hyderabad"
        ],
        [
            "M.B.B.S. Colleges in Kolkata",
            "M.B.B.S. Colleges in Bhopal"
        ],
        [
            "M.B.B.S. Colleges in Patna",
            "M.B.B.S. Colleges in Mumbai"
        ],
        [
            "M.B.B.S. Colleges in Ahmedabad",
            "M.B.B.S. Colleges in Jaipur"
        ]
    ]
    const data8 = [
        ["", ""],
        [
            "Ophthalmology",
            "General Medicine"
        ],
        [
            "Orthopedics",
            "General Surgery"
        ],
        [
            "Anaesthesiology",
            "Obstetrics & Gynaecology"
        ],
        [
            "Dermatology",
            "ENT (Ear, Nose, and Throat)"
        ],
        [
            "Psychiatry",
            "Pediatrics"
        ]
    ]
    const data9 = [
        ["Doctor: ", "Doctor is medical professional who work in various healthcare setting and provides surgical, therapeutic and medicinal care to patients. He or she diagnoses, examines and identifies the illness, diseases and checks the medical history of a patient and also prescribes various tests to provide accurate medications. For becoming a doctor, students can pursue MBBS degree programme and then they can also do specialization in postgraduate degree programme."],
        ["Medical Officers: ", "Medical officers are also regarded as chief medical officers are doctors who are mainly in charge of clinics. Such physicians strongly recommend as well as provide medical assistance, problem detection, and instruction on medical conditions and illness control. This profession is one of the best career options for MBBS graduates. Medical officers play an important role in supervising patient treatment and the duties of other medical professionals. When services are initially implemented, they can sometimes actively participate in the treatment. They may very well assist in assessing and diagnosing family and individual necessities and plans of treatment."],
        ["Surgeon: ", "The surgeon is liable for the patient's essential diagnosis, conducting the surgery, and providing continuous medical care and treatment for the patient. The surgeon is one of the best career options after MBBS. The surgeon is often regarded as the surgical team leader. Medical surgeons work to ensure collaboration and coordination among all the other leaders of the surgical team, usually requiring another surgeon or an assistant to the surgeon, anesthesiologist, and nursing staff in the operating theatre. Patients are operated on by them to enhance or recover health, like repairing injury problems or preventing depression."],
        ["General Physician: ", "MBBS degree graduates can begin their careers as a general physician who researches, diagnoses and treats, and cures patient diseases. General Physician is one of the best career options for MBBS graduates. A physician typically treats diseases in the early stage, but if the illness remains serious after identification, then perhaps the patient is referred to a specialised medical professional. General Physicians are professionally educated physicians who provide elderly patients with a variety of nonsurgical medical attention. They treat complicated, critical, or severe health issues, and they proceed to serve the patient unless they have treated or healed such complications."],
        ["Paediatrician: ", "A medical practitioner is in charge of treating kids with the disease and diagnoses their overall development and growth. In order to test and monitor the health and regular physical performance, paediatricians perform regular detailed tests on babies and young children and observe children to evaluate their health and inquire questions to collect knowledge regarding complications. They prescribe medicine and provide specific guidance about how to take it."]
    ]
    const data10 = [
        ["All India Institute of Medical Sciences"],
        ["Apollo Group"],
        ["Indian Nursing Council"],
        ["Fortis Hospitals"],
        ["Manipal Group"],
        ["Medica"]
    ]
    const data11 = [
        [
            "Job Profiles",
            "Average Salary"
        ],
        [
            "Doctor",
            "Rs. 5.4 LPA"
        ],
        [
            "Medical Officer",
            "Rs. 5.2 LPA"
        ],
        [
            "Surgeon",
            "Rs. 10.8 LPA"
        ],
        [
            "General Physician",
            "Rs. 7.2 LPA"
        ],
        [
            "Paediatrician",
            "Rs. 8 LPA"
        ]
    ]
    const data12 = [
        [
            "Colleges",
            "Fees"
        ],
        [
            "ACMS Delhi",
            "Rs. 20.57 Lakhs"
        ],
        [
            "AIMS Mandya",
            "-"
        ],
        [
            "AIMS Thrissur",
            "Rs. 32.10 Lakhs"
        ],
        [
            "ARMCH Solapur",
            "Rs. 36 Lakhs"
        ],
        [
            "AVMC Puducherry",
            "Rs. 87.77 Lakhs"
        ],
        [
            "BMC Hyderabad",
            "-"
        ],
        [
            "BMCH Chitradurga",
            "Rs. 31.30 Lakhs"
        ],
        [
            "BVMC Pune",
            "Rs. 108.38 Lakhs"
        ],
        [
            "CMC Ludhiana",
            "-"
        ],
        [
            "CMC Vellore",
            "-"
        ]
    ]
    const data13 = [
        [
            "Colleges",
            "Fees"
        ],
        [
            "AFMC Pune",
            "-"
        ],
        [
            "AIIMS Bhopal",
            "Rs. 13,720"
        ],
        [
            "AIIMS Bhubaneswar",
            "Rs. 13,720"
        ],
        [
            "AIIMS Delhi",
            "-"
        ],
        [
            "AIIMS Deoghar",
            "Rs. 6,880"
        ],
        [
            "AIIMS Jodhpur",
            "Rs. 13,720"
        ],
        [
            "AIIMS Nagpur",
            "-"
        ],
        [
            "AKU Patna",
            "-"
        ],
        [
            "ANIIMS Port Blair",
            "Rs. 6.04 Lakhs"
        ],
        [
            "ANMMCH Gaya",
            "Rs. 47,500"
        ]
    ]
    const data14 = [
        ["", ""],
        [
            "M.B.B.S. Colleges in Karnataka",
            "M.B.B.S. Colleges in Maharashtra"
        ],
        [
            "M.B.B.S. Colleges in Tamil Nadu",
            "M.B.B.S. Colleges in Uttar Pradesh"
        ],
        [
            "M.B.B.S. Colleges in Kerala",
            "M.B.B.S. Colleges in Andhra Pradesh"
        ],
        [
            "M.B.B.S. Colleges in Gujarat",
            "M.B.B.S. Colleges in Madhya Pradesh"
        ],
        [
            "M.B.B.S. Colleges in Telangana",
            "M.B.B.S. Colleges in Rajasthan"
        ]
    ]
    const data15 = [
        ["Browse Medical Colleges by Cities"],
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
    const data16 = [
        ["Browse Medical Colleges by States"],
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
    const data17 = [
        ["Minimum Age: ", "To study MBBS abroad the student must have completed at least 17 years on or before 31st December of the admission year"],
        ["Maximum Age: ", "The age of the students must not exclude 25 years on or before 31st December of the admission year."]
    ]
    const data18 = [
        ["10th & 12th mark sheet"],
        ["4 color photos"],
        ["Admission letter"],
        ["Caste certificate ( if required)"],
        ["Medical certificate"],
        ["Birth certificate"],
        ["HIV report negative"],
        ["Health insurance"],
        ["Students visa"],
        ["Valid passport with minimum of one year validity"],
        ["NEET score card"],
        ["IELTS/TOEFL score cards if necessary."]
    ]
    const data19 = [
        [
            "Name of Exam",
            "Full-Form"
        ],
        [
            "NEET UG",
            "National Eligibility cum Entrance Test Undergraduate"
        ],
        [
            "AIIMS MBBS",
            "All India Institute of Medical Sciences MBBS Entrance Examination"
        ],
        [
            "AFMC MBBS",
            "Armed Forces Medical College Admission"
        ],
        [
            "JIPMER",
            "Jawaharlal Institute of Postgraduate Medical Education & Research"
        ],
        [
            "CMC Vellore MBBS",
            "CMC Vellore MBBS/BDS Admissions"
        ],
        [
            "John's Medical Entrance Test",
            "St John's MBBS"
        ],
        [
            "Indraprastha University MBBS",
            "IPU MBBS"
        ],
        [
            "Annamalai University All India Medical Entrance Exam",
            "AU AIMEE"
        ],
        [
            "Delhi University MBBS",
            "DU MBBS"
        ],
        [
            "Aligarh Muslim University Medical Entrance Exam",
            "AMU MBBS"
        ],
        [
            "Amrita Medical Entrance Exam",
            "Amrita MBBS"
        ]
    ]
    const data20 = [
        ["Have a study timetable and study smart– ", "mbbs is a tough course and it’s not a child’s play to assume the role and responsibility of being a doctor. Some students prefer group study sessions whereas others like to study alone to avoid distractions. Group study is a better way as everyone has their way of collating information and organize their study materials, which offer variety and vast information"],
        ["The hardest topics should be taken when you are fresh– ", "you would be surprised to know that most of the mbbs students and doctors feel that the first year of mbbs has been the toughest. Almost all the subjects are new and even the approach and way of studying is different. So, expert academicians recommend that you choose tough topics like anatomy, forensic medicine very first and devote more time in understanding them."],
        ["Get adequate sleep- ", "while concentrating on your study material, do not sleep deprive yourself. As a medical student, you should know the importance of sleep. If you sleep well, it will cognitively boost up your health and will help you study better, keep you healthy, happy, and motivated all the time."],
        ["Practice previous year’s exam papers- ", "all the students preparing for mbbs should practice previous year’s question papers for preparation so that they get experience and a fair idea as to what type of questions will be hurled upon them during exams."],
        ["Consult your mentors– ", "professors and teaching faculty are the mentors who can be reached out from time to time for guidance during your medical studies. They have their own experience and information and they listen to your difficulties and encourage you to trust your ideas as they can relate to your struggles. They will also advise you to read plenty of medical blogs and articles, which can be helpful in the future."],
        ["Take a day out for relaxation- ", "lot of hard work and commitment is required to become a competent doctor. Studying 24*7 will leave the students burned out and depressed. Regular hospital shifts along with studying will teach you a lot but relaxing your mind is equally important and is required to keep you fresh. Having a day out with your friends and family will keep you charged and motivated."],
        ["", "To conclude, we can say that if you want to be successful, reviewing study material at regular intervals is a must. Hard work, proper work ethics, and confidence are important aspects and every medical student has them. What is more important is to organize your study methods and opt for the best mbbs colleges in Haryana to make a great career as a doctor."]
    ]
    return (
        <div>
            <Header tittle={"Diploma In Information Technology"} subTittle={"Elegliblity | Course Fee | Course Duration | Entrance Exams"} BGimage={image} />
            <ParaTiles heading={"MBBS in India"} headingSize={"24px"} />
            <ParaTiles heading={"What is Bachelor of Medicine, Bachelor of Surgery [MBBS]?"} para={`MBBS course in India can be completed in 5.5 years. It includes 4.5 years of academic education and 1 year of mandatory internship. Students who have completed 12th with Physics, Chemistry, and Biology as the mandatory subjects are eligible to apply for the MBBS course. Moreover, students need to undertake certain medical examinations to get admission in one of the universities.`} headingSize={"15px"} />
            <ParaTiles para={`The number of Indian students who undertake medical examination keeps on increasing each year. According to reports, the number of students appearing for NEET increase every year. Figures reveal the tough competition that Indian medical aspirants have to face to get into the medical colleges.`} />
            <ParaTiles para={`In India, there is a lot of competition for MBBS seats in government medical colleges due to the subsidised fee structure. The average or minimum fee for MBBS course in government medical colleges is around INR 10,000 per annum. Students with top NEET ranks have chances to get admission in government medical colleges. Apart from government MBBS colleges, there are a number of top private MBBS colleges in India that offer good quality education to students. However, the minimum fee structure of private MBBS colleges in India is around Rs. 4,00,000.`} />
            <ParaTiles heading={"Bachelor of Medicine, Bachelor of Surgery [MBBS] - Latest Notifications"} headingSize={"15px"} />
            <CareerInfoTile data={data1} headingColor={1} />
            <ParaTiles para={`MBBS has been abbreviated from the Latin word Medicinae Baccalaureus Baccalaureus Chirurgiae. It is a combination of 2 advanced medical undergraduate programs called Bachelor of Medicine and Bachelor of Surgery.  `} />
            <ParaTiles heading={"Check Out: Full Form of Medical Courses"} para={"MBBS Admission takes place through the NEET exam. Students must be above 17 years of age and have studied Physics, Chemistry, Mathematics, and Biology as compulsory subjects in class 12 in order to qualify for the NEET Exam. Colleges start calling students according to their NEET scores. Students need to clear the NEET cut off to take admission to a college. "} headingSize={"15px"} />
            <CareerInfoTile data={[["See More: ", "MBBS from AIIMS"]]} />
            <ParaTiles para={`MBBS Course duration is 5 years of studying 19 medical subjects followed by 6 months of internship. MBBS 1st year subjects include Anatomy, Biochemistry, and Physiology while 2nd-year MBBS subjects consist of 7 subjects. MBBS Syllabus includes core and elective subjects such as pharmacology, anatomy, pathology, community health, medicine, etc. Check: MBBS Abroad`} />
            <ParaTiles para={`MBBS fees range from INR 5,00,000 to INR 50,00,000 and after successful completion of MBBS candidates have several job opportunities after MBBS. They can practice as a doctor in private and government hospitals, railways, and armed forces. Students can even go for postgraduate medical degrees such as MD Medicine or pursue MBA after MBBS for better career opportunities. `} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data2} />
            <ParaTiles heading={"MBBS Fees Structure "} para={"MBBS fees vary depending on the college or university that you attend. Before enrolling in any particular college, students should check the MBBS or Bachelor of Medicine and Bachelor of Surgery fees structure. The average MBBS fees is Rs. 5 lakhs."} headingSize={"15px"} />
            <ParaTiles heading={"Why Choose MBBS?"} para={"mBBS is a highly competitive programme as the admissions are offered on the basis of rank acquired in the NEET examination. Lakhs of students appear every year in the NEET examination for MBBS admission. Several students take a year off from their academic year to prepare for the NEET examination to get admission to prestigious medical colleges in India. "} headingSize={"15px"} />
            <ParaTiles para={`Students need to appear for the NEET counseling process once they get the required marks for admission. Successful completion of an MBBS course opens numerous opportunities for a medical career in the healthcare industry. Candidates can opt for an MS, MD, or DNB in any related specialization after successful completion of an MBBS`} />
            <ParaTiles para={`programme. They can opt for numerous careers such as general surgeon, endocrinologist, pathologist, neurologist, physician, ENT specialist, cardiologist, and oncologist.`} />
            <CareerInfoTile data={data3} headingColor={1} />
            <ParaTiles heading={"Skills Required for MBBS Degree "} para={"Candidates must possess certain skills in order to get the most out of their MBBS degree programme. After earning MBBS degree, students will need the following skill sets to advance in the career: "} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data4} />
            <ParaTiles heading={"MBBS Cut off "} para={"Bachelor of Medicine, Bachelor of Surgery or MBBS cut-off is used to determine the student's merit for admission in the MBBS degree programme. For MBBS degree programme, NEET cut off is the main criteria that every medical college accept for the MBBS admission process. MBBS cutoff is based on the number of students appearing for the NEET examination, and the difficulty level of the NEET question paper. "} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data5} />
            <ParaTiles heading={"MBBS Syllabus "} para={"In this section, we have provided the a common MBBS syllabus which is used by many medical colleges in India. The MBBS syllabus is devided into five years and also required to pursue one year rotary internship. We have mentioned below MBBS subjects. "} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data6} />
            <ParaTiles heading={"Also Read: "} para={"BAMS (Bachelor of Ayurvedic Medicine and Surgery)"} headingSize={"15px"} />
            <ParaTiles para={`BHMS (Bachelor of Homeopathic Medicine and Surgery)`} />
            <ParaTiles para={`BUMS (Bachelor of Unani Medicine and Surgery)`} />
            <ParaTiles heading={"Top MBBS Colleges by Locations "} para={"A number of Indian universities offer a MBBS degree. Students are admitted to the MBBS degree based on their academic performance and admission exam results. Here is a list of the MBBS degree institutes in India's major cities. "} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data7} />
            <ParaTiles heading={"MBBS Specializations "} para={"The university aims to provide all MBBS students with a modern, growth-driven education through its MBBS degree programs. A Bachelor of Medicine and a Bachelor of Surgery degree allow the graduates eligible for the market in the world's current scenario. Throughout India, there is a tremendous demand in the medical industry among medical practitioners as there are fewer employment opportunities in the marketplace and the number of doctors is much greater than it is. Earning an MBBS course offers students the opportunity to achieve their objectives in the medical and healthcare industries. "} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data8} />
            <ParaTiles heading={"What after MBBS? "} para={"In the healthcare industry, Bachelor of Medicine and Surgery students are highly focused. MBBS students have employment opportunities in both the government and private sectors. For these specialists, there are more than enough jobs available in the fields of biomedical companies, medical centres, healthcare facilities, laboratories, emergency rooms, community health centres, and private practice. There seem to be a number of choices available for students after MBBS course with both the development and commercialization of the healthcare industry. "} headingSize={"15px"} />
            <ParaTiles para={"MBBS is a medical degree on its own that enables graduates to prescribe drugs, and most participants choose to obtain a master's degree in this area to become known physicians. The major recruitment agencies for MBBS candidates are Apollo Munich Health Industries Co Ltd, Medanta Hospitals, Sun Pharmaceutical Industries Ltd, Fortis Healthcare Ltd, and Cipla Ltd, with positions available like Anesthetist, Cardiologist. "} headingSize={"15px"} />
            <ParaTiles heading={"Other Popular Medical Degrees "} para={"BDS (Bachelor of Dental Surgery) "} headingSize={"15px"} />
            <ParaTiles para={`M.CH (Master of Chirurgiae)`} />
            <ParaTiles para={`MD (Doctor of Medicine)`} />
            <ParaTiles para={`MDS (Master of Dental Surgery)`} />
            <ParaTiles heading={"Careers Opportunities after MBBS"} para={"In this section, we have discussed some of the career opportunities after MBBS degree. "} headingSize={"15px"} />
            <CareerInfoTile data={data9} />
            <ParaTiles heading={"Top Recruiters "} para={"Some of the top recruiters that hire MBBS graduates are mentioned below: "} headingSize={"15px"} />
            <CareerInfoTile data={data10} headingColor={1} />
            <ParaTiles heading={"Salary after MBBS Degree "} para={"The average salary of MBBS gradutes varies depending on different factors. The variation may vary due to the sector and firm of employment and the candidate's dedication and experience in the workplace. Below, we have mentioned the salary after MBBS degree: "} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data11} />
            <ParaTiles heading={"Employment Areas "} para={"MBBS graduates can join hospitals, other healthcare facilities, universities. Students who have pursued MBBS or Bachelor of Medicine and Bachelor of Surgery, can also practice individually. Some of the employment areas for MBBS graduates are: "} headingSize={"15px"} />
            <ParaTiles para={`Hospitals`} />
            <ParaTiles para={`Healthcare facilities`} />
            <ParaTiles para={`Universities`} />
            <ParaTiles para={`Individual Practice`} />
            <ParaTiles heading={"Top Private MBBS Colleges in India "} para={"In India there are a number of private MBBS colleges. Private universities are significantly more expensive than public universities. Some of the top private MBBS Colleges and also MBBS fees are discussed below: "} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data12} />
            <ParaTiles heading={"Top Government MBBS Colleges in India "} para={"Attending a government-run college is less expensive than attending a private college. These colleges are well-known for their high academic standards throughout India. The following are some of the best government MBBS colleges and also MBBS fees: "} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data13} />
            <ParaTiles heading={"Top MBBS Colleges by States"} para={"MBBS graduates have a lot of career opportunities in the future. The top MBBS degree institutes in each of the following states are listed below:"} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data14} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data15} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data16} />
            <ParaTiles heading={"Important Tips: Before Taking MBBS Admission in Abroad "} headingSize={"24px"} />
            <ParaTiles heading={"Taking admission to MBBS degree is no less than a prestige. Therefore selecting a good medical university for the same is very much important. Keep these important points in mind before taking MBBS admission in Abroad: "} headingSize={"15px"} />
            <ParaTiles para={`The age of an Indian student willing to take admission to MBBS in Abroad should be at least of 17 years and maximum of 25 years old on or before the admission date or the 31st December of the admission year.`} />
            <ParaTiles para={`Students must have cleared the HSC exam with minimum of 50% marks. (45% for SC/ST/OBC)`} />
            <ParaTiles para={`For some of the foreign universities IELTS/TOEFL exams are required to be cleared with eligible score. Though this is not compulsory for all the universities.`} />
            <ParaTiles para={`Candidate must clear the NEET exam with eligible score to take admission to MBBS in foreign universities.`} />
            <ParaTiles para={`Candidate must have completed Higher secondary level education with compulsory Physics, Chemistry, Biology and English subjects.`} />
            <ParaTiles heading={"Age Requirement for MBBS in Abroad "} headingSize={"15px"} />
            <CareerInfoTile data={data17} headingColor={1} />
            <ParaTiles heading={"Required Documents for NMC Eligibility Universities "} headingSize={"15px"} />
            <ParaTiles heading={"Before taking admission to MBBS in any university of abroad, Indian students need to have these documents ready. Some countries also need these documents to be translated in their national languages. Ex. Ukraine, Poland. "} headingSize={"15px"} />
            <CareerInfoTile data={data18} headingColor={1} />
            <ParaTiles heading={"Entrance Exam Required to Study MBBS in Abroad "} para={"An entrance exam is required for candidates for the MBBS course. In addition to these exams, other universities may hold their own set of entrance exams for admission to the MBBS course. Among these are:"} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data19} />
            <ParaTiles heading={"A Quick Glance At The MBBS Entrance Exam"} para={"The top MBBS colleges in India hold entrance exams to determine the final merit list. The MBBS exam is used to determine a candidate's merit for admission. The entrance exam cut-offs vary by university and are available online with MBBS course details."} headingSize={"15px"} />
            <ParaTiles heading={"The following is a summary of the MBBS entrance exam:"} headingSize={"15px"} />
            <ParaTiles para={`Typically, the entrance exam is taken offline.`} />
            <ParaTiles para={`The exam will take approximately 3 hours to complete.`} />
            <ParaTiles para={`The questions are objective.`} />
            <ParaTiles para={`The purpose of the exam is to assess qualitative ability, data interpretation, and knowledge of the subject.`} />
            <CareerInfoTile data={[["Read More: ", "MBBS Entrance Exams"]]} />
            <ParaTiles heading={"NEET-UG"} headingSize={"15px"} />
            <ParaTiles heading={"National Testing Agency or NTA conducts NEET. Approximately 13.26 Lakh students appear in the exam every year, conducted in different centers in different cities. Following is the admission process for NEET-UG: "} para={"Candidates need to fill out the application form from the NTA website, clarifying all the eligibility criteria. Then download the admit card when available."} headingSize={"15px"} />
            <ParaTiles para={`Students then need to head toward their respective allotted centers with proper documents and admit cards.`} />
            <ParaTiles para={`The conducting authority will share the exam merit list based on which students have to opt for AIQ or state quota to apply for medical colleges in India.`} />
            <ParaTiles para={`After releasing AIQ and the state merit list, one can fill out counseling forms from different colleges of their choice.`} />
            <ParaTiles para={`The mock seat allotment process will be done to check whether students have got their preferred seats or not. Then students need to lock their choices of preferred college.`} />
            <ParaTiles heading={"Best study tips for MBBS students:- "} para={"While opting for mbbs, the choice of college matters a lot. India has numerous medical colleges across the country but mbbs colleges in Haryana are good and train the professionals to perfection. "} headingSize={"24px"} />
            <ParaTiles para={`Opting for the mbbs course involves a huge investment of time and resources if you wish to get the most out of this course. Though you have undergone several exams at an undergraduate level, going for mbbs requires another level of hard work, organization, and a skilful approach. So even if you are passionate about studying medicine, student life can be overwhelming and at times stressful. You must learn how to work under pressure and prepare yourself for situations right from the beginning. Well, as an mbbs student, you need to be prepared to achieve perfection and become a highly trained doctor. We are sharing some expert level study tips for mbbs students –`} />
            <CareerInfoTile data={data20} headingColor={1} />
        </div>
    )
}

export default Mbbs
