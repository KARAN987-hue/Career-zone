import React from 'react'
import image from './hdr-bg.jpg'
import Header from './Header'
import ParaTiles from './ParaTiles'
import Table from './Table'

function ComedkExam() {

    const data1 = [[""],
        ["Full Name of COMEDK UGET 2024", "Consortium of Medical, Engineering, and Dental Colleges of Karnataka Undergraduate Entrance Test"],
        ["Short Name", "COMEDK UGET"],
        ["COMEDK UGET 2024 Conducting Body", "COMEDK"],
        ["Frequency of Conduct", "Once a year"],
        ["Exam Level Of COMEDK UGET 2024", "State Level"],
        ["Languages of COMEDK UGET 2024", "English"],
        ["Application Process Mode For COMEDK UGET 2024", "Online"],
        ["COMEDK UGET 2024 Registration Fee", "INR 1800"],
        ["Mode of COMEDK UGET 2024", "Online Mode"],
        ["Mode of Counselling of COMEDK UGET 2024", "Offline"],
        ["Participating Colleges in COMEDK UGET 2024", "46"],
        ["COMEDK UGET 2024 Paper Duration", "3 Hours"]
    ];
    const data2 =  [
  ["Events", "Date and Time"],
  ["Registration for COMEDK UGET 2024", "February 1, 2024"],
  ["COMEDK application form last date", "To be notified"],
  ["COMEDK 2024 application form correction", "April 12 to 16, 2024"],
  ["Release date for COMEDK UGET 2024 Admit Card", "May 6, 2024"],
  ["Availability of COMEDK 2024 mock test", "February 15, 2024"],
  ["COMEDK UGET 2024 Exam date (Released)", "May 12, 2024"],
  ["COMEDK provisional answer key", "May 14, 2024"],
  ["Last date to raise objection against COMEDK answer key 2024", "May 16, 2024"],
  ["Final COMEDK 2024 answer key", "May 21, 2024"],
  ["COMEDK 2024 result", "May 24, 2024"]
];
    const data3 = [
        ["Particulars", "Details"],
        ["Age Limit For COMEDK UGET 2024", "There is no age limit for applying for COMEDK."],
        ["Qualifying Examination of COMEDK UGET 2024", "Candidates should have passed/appeared 10+2 from any state or central Board with Physics, and Mathematics as compulsory subjects. Chemistry is a mandatory subject in case of applying for BioTech or Biology or Computer Science or Electronics."],
        ["", "While diploma holders will not be considered for the exam."],
        ["", "B.Arch students are required to qualify for the NATA exam with a minimum cutoff."],
    ]
    const data4 = [
        ["Programmes", "Amount (Rs)"],
        ["PCM/PCB (COMEDK UGET only)", "1500 + 18% GST + Convenience Charges"],
        ["PCM- Both (COMEDK and UNI-GAUGE)", "2400 + 18% GST + Convenience Charges"]
    ]
    const data5 = [
        ["Subject", "Download Link"],
        ["COMEDK UGET Physics Syllabus PDF", "	COMEDK UGET Physics Syllabus Download"],
        ["COMEDK UGET Chemistry Syllabus PDF", "COMEDK UGET Chemistry Syllabus Download"],
        ["COMEDK UGET Maths Syllabus PDF", "COMEDK UGET Maths Syllabus Download"]
    ]
    const data6 = [
        ["Particulars", "Details"],
        ["Examination Mode", "Online"],
        ["Duration of Exam", "3 Hours"],
        ["Medium of Exam", "English"],
        ["", "There will be three sections-"],
        ["Sections", "Physics - 60 Questions"],
        ["", "Chemistry - 60 Questions"],
        ["", "Mathematics - 60 Questions"],
        ["Number of Questions", "180 questions in each paper"],
        ["Marking Scheme", "There will be no negative marking"],
    ]
    return (
        <div>
            <Header tittle={"COMEDK UGET 2024: Registration (Started), Exam Date, Eligibility"} subTittle={"Entrance Exams In India - EXAMS 2025 , DATES, APPLICATION FORM & ALERTS"} BGimage={image} />
            <ParaTiles heading={"COMEDK UGET 2024 Highlights"} headingSize={"28px"} />
            <Table LeftcellWidth={'60%'} RightcellWidth={'38%'} tableData={data1} />
            <ParaTiles heading={"COMEDK UGET 2024 Exam Date"} para={"The authority has announced the COMEDK UGET exam date 2024. Candidates willing to appear for the exam can check the COMEDK UGET 2024 exam dates through the table given below. As of now, the detailed official notification is awaited while the exam dates have been released."} headingSize={"28px"} />
            <ParaTiles para={"COMEDK UGET Exam Date 2024"} headingSize={"28px"} />
            <Table LeftcellWidth={'60%'} RightcellWidth={'38%'} tableData={data2} />
            <ParaTiles heading={"COMEDK UGET 2024 Eligibility Criteria "} para={"Before filling out the COMEDK UGET application form 2024 candidates are advised to check the eligibility conditions so that they do not miss their seat at their desired institute. Candidates can check the COMEDK UGET eligibility criteria 2024 from the website of COMEDK as well as from this page."} headingSize={"28px"} />
            <ParaTiles heading={"COMEDK UGET Eligibility Criteria 2024 for Engineering"} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'75%'} tableData={data3} />
            <ParaTiles heading={"COMEDK UGET Application Form 2024"} para={"The authorities have released the application form of COMEDK UGET 2024 on the official website of COMEDK. Candidates can fill out the COMEDK 2024 application form at comedk.org. All interested candidates are required to submit the COMEDK UGET application form 2024 before the last date of submission to avoid a rush."} headingSize={"28px"} />
            <ParaTiles heading={"How To Fill COMEDK 2024 Registration Form:"} para={"Visit the official website."} headingSize={"15px"} />
            <ParaTiles  para={"Register for the COMEDK exam 2024."} headingSize={"15px"} />
            <ParaTiles  para={"Fill out your COMEDK UGET application form 2024 using details like name, communication details, address details, and email id, qualifying exam details."} headingSize={"15px"} />
            <ParaTiles  para={"Upload the scanned copy of the required documents in the application form."} headingSize={"15px"} />
            <ParaTiles  para={"Pay the UGET 2024 application fee."} headingSize={"15px"} />
            <ParaTiles heading={"COMEDK 2024 Application Fee:"} para={"After filling out the application form, candidates must pay the COMEDK fees online. The application fee for COMEDK UGET 2024 will be different for all the categories of students applying for the exam. Students filling out the COMEDK UGET registration form 2024 can check the application fee from the table given below:"} headingSize={"15px"} />
            <ParaTiles  para={"COMEDK UGET 2024 Registration Fee"} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data4} />
            <ParaTiles  para={"Note: Candidates can make online fee payments in Online mode through Credit Card / Debit Card / Net Banking modes."} headingSize={"15px"} />
            <ParaTiles heading={"COMEDK 2024 Application Correction"} para={"The authority will open the COMEDK 2024 application correction facility after the conclusion of the application process. Candidates will have to rectify the mistakes in the COMEDK application form 2024. The application will get rejected in case of any error. Candidates must verify the details carefully before submitting the COMEDK UGET application form. The application correction facility will be available for a short duration."} headingSize={"28px"} />
            <ParaTiles heading={"COMEDK UGET Syllabus 2024"} para={"The exam conducting authorities will release the COMEDK 2024 syllabus on the website. Candidates who will be applying for the exam can check the COMEDK UGET syllabus pdf 2024 from this page."} headingSize={"28px"} />
            <ParaTiles heading={"COMEDK UGET 2024 Syllabus PDF Download:"}  headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data5} />
            <ParaTiles heading={"COMEDK UGET Exam Pattern 2024"} para={"Before applying for the exam, candidates should check the exam pattern of COMEDK UGET 2024. Checking the COMEDK UGET 2024 exam pattern will help the candidates score better marks and get their desired institute. The COMEDK exam pattern 2024 consists of the mode of exam, type of questions, marking scheme of the exam, etc. The COMEDK UGET paper pattern 2024 is mentioned below:"} headingSize={"28px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data6} />
            <ParaTiles heading={"COMEDK UGET 2024 Mock Test"} para={"Students are advised to practice the COMEDK UGET mock test 2024 to score better marks. The consortium will release the mock test of COMEDK UGET 2024 on the official website a few days before the actual examination."} headingSize={"28px"} />
            <ParaTiles heading={"COMEDK UGET Question Paper"} para={"Aspirants can use the COMEDK question paper for the preparation of the exam. The question paper of COMEDK UGET is available online. The COMEDK question paper will help the candidates to understand how the question is framed. Moreover, the paper will be a good resource for revision. The authority will release the COMEDK 2024 question paper on the official website. Various coaching institutes will upload the COMEDK UGET question paper soon after the conclusion of the exam. Below are the previous year question papers of COMEDK."} headingSize={"28px"} />

        </div>
    )
}

export default ComedkExam
