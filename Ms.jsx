import React from 'react'
import Header from './Header'
import image from './hdr-bg.jpg'
import ParaTiles from './ParaTiles'
import Table from './Table'
import CareerInfoTile from './CareerInfoTile'

function Ms() {

    
     const data1 = [
        [
        "Course Level",
        "Doctorate"
      ],
      [
        "Duration of the Course",
        "3 Years"
      ],
      [
        "Examination Type",
        "Semester System"
      ],
      [
        "Eligibility",
        "MD/MS from a recognized university"
      ],
      [
        "Admission Process",
        "Direct admission to colleges. However, some colleges may check student’s skills through an entrance test."
      ],
      [
        "Course Fee",
        "INR 50,000 - 2 Lacs"
      ],
      [
        "Average Starting Salary",
        "INR 10 Lacs- 15 Lacs"
      ],
      [
        "Top Recruiting Organizations’",
        "Medanta Hospital, Apollo Super Speciality Hospital, AIIMS, GMC, etc."
      ],
      [
        "Top Recruiting Areas’",
        "Neuro Centers, Hospitals, Clinics, Research Centers, Academics, etc."
      ],
      [
        "Top Job Profiles",
        "Neurologist, Neuro Physician, NeuroSurgeon, etc."
      ]
    ];
     const data2 = [
        ["Anatomy of the nervous system"],
        ["Physiology of the nervous system"],
        ["Biochemistry of the nervous system"],
        ["Pathology of the nervous system"],
        ["Clinical neurology"],
        ["Neuropharmacology"],
        ["Neuroimaging"],
        ["Neurophysiology"],
        ["Neurogenetics"],
        ["Neuroimmunology"],
        ["Neurorehabilitation"],
        ["Neuroethics"]
    ];
     const data3 = [
        ["Neurologist"],
        ["Neurosurgeon"],
        ["Neurophysiologist"],
        ["Neuropharmacologist"],
        ["Neuropsychologist"],
        ["Neuroradiologist"],
        ["Neurooncologist"],
        ["Neuroepidemiologist"],
        ["Neurogeneticist"],
        ["Neuroimmunologist"],
        ["Neurorehabilitation specialist"]
    ];
     const data4 = [
        ["Hospitals"],
        ["Clinics"],
        ["Research institutes"],
        ["Pharmaceutical companies"],
        ["Non-profit organizations"],
        ["The job prospects for DM in Neurology graduates are good, and the salary is also competitive."]
    ];
     const data5 = [
        ["Apply for the entrance exam: ","The next step is to apply for the entrance exam. The entrance exam is conducted by the National Board of Examinations (NBE). The exam is for admission into postgraduate medical courses, including DM in Neurology."],
        ["Clear the entrance exam: ","The candidates who clear the entrance exam are shortlisted for the interview. The interview is usually conducted by a panel of experts. The interview is to assess the candidate's knowledge, skills, and suitability for the program"],
        ["Clear the interview: ","The candidates who clear the interview are finally selected for admission into the DM in Neurology program."],
        ["Visit the official website of the college: ","The first step is to visit the official website of the college. The website will have all the information about the program, including the eligibility criteria, the entrance exam, and the application process."],
        ["Download the application form: ","The next step is to download the application form from the website. The application form will have to be filled in and submitted along with the required documents."],
        ["Pay the application fee: ","The application fee will have to be paid along with the application form. The application fee varies from college to college."],
        ["Submit the application form: ","The application form along with the required documents will have to be submitted to the college. The last date for submission of the application form is usually mentioned in the application form."],
    ];
    return (
        <div>
            <Header tittle={"Doctorate Of Medicine In Neurology(DM In Neurology)"} subTittle={"Elegliblity | Course Fee | Course Duration | Entrance Exams"} BGimage={image} />
            <ParaTiles heading={"What is DM Neurology?"} para={"Doctorate of Medicine in Neurology is a three year super – specialty post doctorate course in the field of medicine. In the study of this course, students undergo a rigorous clinical training, which includes seminars, journal clubs, bedside clinics and take part in interdepartmental meetings."} headingSize={"24px"} />
            <ParaTiles para={"DM Neurology Course deals with the study of disorders of the nervous system and finding remedies. Aspirants who have completed Doctor of Medicine (MD) in any branch can apply for DM Neurology. Admissions for this course are taken through an entrance test. Many reputed colleges and universities offer this course in India."} headingSize={"15px"} />
            <ParaTiles para={"DM Neurology course has been inspected and approved by the Medical Council of India. The subjects under study are Neuroanatomy, Neurophysiology, Pediatric Neurology, NeuroRadiology, Neuro ophthalmology, Neuro Biochemistry, Neuropathology, Neuropsychiatry, Neuropsychology, Neuro Pharmacology and others. The candidate will develop essential skills for diagnosing and providing therapeutic interventions to treat diseases. The student learns about treating diseases concerned with the central nervous system of the human body."} headingSize={"15px"} />
            <ParaTiles para={"DM Neurology course fees range between INR 50,000 - 2 lacs for the total duration. The probable salaries offered to successful postgraduates in DM Neurology are between 10-15 lacs per annum.."} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data1} />
             <ParaTiles heading={"Benefits"} para={"DM in Neurology is a postgraduate medical degree program that trains doctors to diagnose and treat disorders of the nervous system."} headingSize={"15px"} />
             <ParaTiles  para={"The program covers a wide range of topics, including the anatomy, physiology, biochemistry, and pathology of the nervous system, as well as the diagnosis and treatment of neurological disorders."} />
             <ParaTiles  para={"DM in Neurology graduates are qualified to work in a variety of settings, including hospitals, clinics, and research institutes."} />
             <ParaTiles  para={"The job prospects for DM in Neurology graduates are good, and the salary is also competitive."} />
             <ParaTiles heading={"Syllabus"} para={"The syllabus for DM in Neurology varies from institution to institution. However, some of the common topics covered in the program include:"} headingSize={"15px"} />
             <CareerInfoTile data={data2} headingColor={1}/>
             <ParaTiles heading={"Fee"} para={"The fee for DM in Neurology varies from institution to institution. However, the average fee for the program is around INR 2 lakhs per year."} headingSize={"15px"} />
             <ParaTiles heading={"Skills Required"} para={"The skills required for DM in Neurology include:"} headingSize={"15px"} />
             <ParaTiles  para={"Strong academic skills"} />
             <ParaTiles  para={"Excellent communication skills"} />
             <ParaTiles  para={"Ability to work independently and as part of a team"} />
             <ParaTiles  para={"Interest in research"} />
             <ParaTiles heading={"Cut Off"} para={"The cut off for DM in Neurology varies from institution to institution. However, the average cut off for the program is around 60%."} headingSize={"15px"} />
             <ParaTiles heading={"Job Profiles"} para={"Some of the job profiles available for DM in Neurology graduates include:"} headingSize={"15px"} />
             <CareerInfoTile data={data3} headingColor={1}/>
             <ParaTiles heading={"Career Opportunities and Job Prospects"} para={"DM in Neurology graduates can work in a variety of settings, including:"} headingSize={"15px"} />
             <CareerInfoTile data={data4} headingColor={1}/>
             <ParaTiles heading={"Top Colleges in India"} para={"Top Colleges in India"} headingSize={"15px"} />
             <ParaTiles  para={"All India Institute of Medical Sciences (AIIMS), Delhi"} />
             <ParaTiles  para={"National Institute of Mental Health and Neuro Sciences (NIMHANS), Bengaluru"} />
             <ParaTiles  para={"Post Graduate Institute of Medical Education and Research (PGIMER), Chandigarh"} />
             <ParaTiles  para={"Christian Medical College (CMC), Vellore"} />
             <ParaTiles  para={"Maulana Azad Medical College (MAMC), Delhi"} />
             <ParaTiles heading={"DM Neurology Admission Process"} para={"The admission process for DM in Neurology varies from college to college. However, the common steps involved in the admission process include:"} headingSize={"24px"} />
             <CareerInfoTile data={[["Check the eligibility criteria: ","The first step is to check the eligibility criteria for the program. The eligibility criteria vary from college to college. However, the common eligibility criteria for the program include:"]]} />
             <ParaTiles  para={"MBBS degree from a recognized university"} />
             <ParaTiles  para={"Valid registration with the Medical Council of India"} />
             <ParaTiles  para={"Good academic record"} />
             <ParaTiles  para={"Good communication skills"} />
             <ParaTiles  para={"Interest in research"} />
             <CareerInfoTile data={data5} />
             <ParaTiles heading={"DM Neurology Eligibility?"} para={"Aspiring Neurologists who wish to study DM Neurology can opt for this course after completing the following trajectory:"} headingSize={"24px"} />
             <ParaTiles  para={"1. The students must have completed their 10+2 level of schooling with subjects like biology, chemistry and physics"} />
             <ParaTiles  para={"2. The student must have successfully completed their MBBS (Bachelor of Medicine and Bachelor of Surgery) from a reputed college or institution. MBBS is a 5½ years course and includes a one-year internship period as well."} />
             <ParaTiles heading={"DM Neurology Entrance Exams"} para={"1. NIMHANS DM Neurology Entrance Exam: "} headingSize={"24px"} />
             <ParaTiles  para={"Conducted twice a year i.e. in January and the July session. "} />
             <ParaTiles  para={"The test is of 90 minutes and has 100 marks worth of MCQs."} />
             <ParaTiles  para={"1 mark is awarded for every correct answer while 0.25 marks are deducted for each incorrect answer."} />
             <ParaTiles  para={"It contains questions from subjects common to the MBBS curriculum, much similar to AIIMS PG and JIPMER PG."} />
             <ParaTiles  para={"60% weightage is given to MBBS subjects and 40% to general neurology questions. "} />
             <ParaTiles heading={"See Also: MPT Neurology Course"} headingSize={"15px"} />
             <CareerInfoTile data={[["AIIMS PG: "," 3 hours of paper consisting of 200 questions:"],["NEET PG: ","Candidates have to complete the test within the estimated time i.e. 3 hr 30 min. The candidate will get one mark for each correct answer and there will be no negative marking for the wrong answer. There will be a total 300 questions and the candidate can score a maximum of 300 marks in the exam."]]} />
             <ParaTiles heading={"How to Preparetion DM Neurology?"} para={"Reasons of studying DM Neurology are mentioned below:"} headingSize={"24px"} />
             <ParaTiles  para={`Neurologist lack implies request is high: As indicated by The Lancet, a week by week peer-audited clinical diary, there is a major deficiency of nervous system specialists. "An ongoing report by the USA's National Center for Health Workforce Analysis gauges that while the gracefully of US nervous system specialists may have developed by 11 percent somewhere in the range of 2013 and 2025, requests will have developed by 16 percent. So how would we train more nervous system specialists? What's more, are there any options to just expand their number?" composes The Lancet. "With the quickly increasing paces of cerebrum illnesses, for example, dementia and stroke simultaneously as the quantity of US clinical inhabitants picking neurology over different claims to fame is unmistakably declining, the US could confront an emergency," said Thomas R. Vidic, MD, with Elkhart Clinic in Elkhart, Indiana and a Fellow with the American Academy of Neurology. "Our investigation found that significant delay times for patients to see a nervous system specialist and trouble discovering nervous system specialists to fill empty positions are adding to the current national deficiency. What's more, the interest for nervous system specialists is required to develop as individuals gain inclusion through social insurance change." `} />
             <ParaTiles  para={"Get the job done to say the interest for nervous system specialists is high. On the off chance that you choose to have practical experience in this field, you will probably not experience any difficulty making sure about an occupation."} />
             <ParaTiles  para={"Grant and fellowship opportunities: Subsidizing advanced education, particularly clinical school and claims to fame, for example, neurology, can be testing. Notwithstanding, because of the popularity for this field, planned nervous system specialists will find that there are adequate subsidizing, grant openings, and associations for qualified competitors. For instance, in the same way as other clinical schools, Stanford's Clinical Neurology and Neuroscience division offers both clinical neurology associations just as neuroscience corporations. Doing your examination and finding the best fit for your neurology program additionally implies searching for monetary help. Have confidence there are numerous grant and cooperation chances to assist you with propelling your profession in neurology."} />
             <ParaTiles heading={"See Also: M.Ch NeuroSurgery Course"} para={`Profoundly compensating profession: "Numerous neurologists have shared throughout the years that they appreciate the field of neurology in view of the wide assortment of conditions they see and maladies they treat, just as the new disclosures being made in the field," reports Andrea Clement Santiago from Very Well Health. Nervous system specialists, by and large, are continually tested and remunerated in their vocations. They are issue solvers, working in a relentless, progressively energizing condition. "Besides, doctors who need a forte that is to some degree system situated, yet additionally like an office-based practice (for example they would prefer not to essentially be a specialist working in an OR full-time) likewise appreciate neurology," includes Santiago. You'll have a genuine effect and a distinction in such a significant number of individuals' lives as a nervous system specialist.`} headingSize={"15px"} />
             <ParaTiles  para={"Rewarding Salary and Opportunities to Work Abroad: Beside feeling remunerated in your profession as a neurologist, you'll likewise be very much made up for your difficult work. Medscape, an exhaustive online asset for clinical understudies and clinical experts reports reliable significant compensations for guaranteed nervous system specialists. Your compensation will be reliant on your specialty, clinical exploration venture, qualifications, just as area, yet nervous system specialists in the US can hope to make a normal six-figure pay and pay rates are tantamount in numerous nations. Whoever said instruction doesn't pay isn't right! "} />
             <ParaTiles  para={"Being paid well is unquestionably an advantage. Another preferred position of turning into a nervous system specialist is the chance to work abroad. Because of the general lack of nervous system specialists on the planet, openings for work exist everywhere throughout the world. You can move to an unfamiliar nation and appreciate life as an expat in a wonderful area."} />
             <ParaTiles  para={"Alternatives for Non-Medical Careers: Intrigued by neurology, however would prefer not to work in medication? Forget about it. Neuroscience is a various field with numerous non-clinical professions accessible. You can investigate, study minds, run clinical preliminaries, and even become a hereditary advocate. This is a front line work that permits neuroscientists to consider conditions like birth surrenders and hereditary issues. You'll have the option to dive profound into research in these neuroscience-related fields. Lawn Brains, an association that advances neuroscience outreach occasions, is another case of how you can effectively utilize your neurology qualification. "} />
             <ParaTiles  para={"Considering neurology will open up such huge numbers of intriguing and remunerating professions that open doors for you. As a forthcoming clinical understudy, you should consider having some expertise in this part of medication. neurology understudies consistently find the mysteries of our boundlessly unpredictable and unbelievable personalities, making it an entrancing field of study and profession."} />
             <ParaTiles heading={"Why MD-Neurology?"} para={"To help people with neurological disorders: Neurology is the medical specialty that deals with the diagnosis and treatment of disorders of the nervous system. As a neurologist, you would have the opportunity to help people with a wide range of neurological conditions, including Alzheimer's disease, Parkinson's disease, multiple sclerosis, and stroke."} headingSize={"15px"} />
             <ParaTiles  para={"To learn about the nervous system: The nervous system is one of the most complex and fascinating systems in the human body. A DM in Neurology would give you the opportunity to learn about the anatomy, physiology, and pathology of the nervous system in great detail."} />
             <ParaTiles  para={"To conduct research in neurology: Neurology is a rapidly evolving field, and there is a great need for research in this area. A DM in Neurology would give you the skills and knowledge you need to conduct research in neurology, and to make a real difference in the lives of people with neurological disorders."} />
             <ParaTiles  para={"To have a rewarding career: A career in neurology can be very rewarding. You would have the opportunity to help people with some of the most challenging medical conditions, and to make a real difference in their lives."} />
             <ParaTiles  para={"If you are interested in helping people with neurological disorders, learning about the nervous system, conducting research in neurology, or having a rewarding career, then a DM in Neurology may be the right choice for you."} />

            
        </div>
    )
}

export default Ms
