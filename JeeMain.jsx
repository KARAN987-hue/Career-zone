import React from 'react'
import image from './hdr-bg.jpg'
import Header from './Header'
import ParaTiles from './ParaTiles'
import Table from './Table'

function JeeMain() {

    
    const data1 = [
        ["Dates", "	Upcoming Exam Dates"],
        ["06 Mar '24 - 07 Mar '24", "JEE Main 2024 Session 2 correction facility"],
        ["04 Apr '24 - 15 Apr '24", "JEE Main 2024 Exam Date Session 2"],
        ["25 Apr '24", "JEE Main 2024 Result Session 2"]
    ]
    // const data = [
    //     ["", ""],
    // ]
    // const data = [
    //     ["", ""],
    // ]

    return (
        <div>
            <Header tittle={"JEE Main 2024: Session 2 Form Correction Open, Exam (April 4-15)"} subTittle={"Entrance Exams In India - EXAMS 2025 , DATES, APPLICATION FORM & ALERTS"} BGimage={image} />
            <ParaTiles para={"The Joint Entrance Examination (Main), popularly called JEE Main, is the exam conducted for admission to BTech, BArch and BPlan courses at NITs, IIITs, other Centrally Funded Technical Institutions (CFTIs), Institutions/Universities funded/recognized by participating State Governments. The JEE Main exam is also an eligibility test for JEE Advanced, conducted for admission to IITs."} headingSize={"28px"} />
            <ParaTiles para={"JEE Entrance exam consists of three papers, Paper 1 for admission to the BE/BTech course, Paper 2A for BArch admission, and Paper 2B for BPlan course admission. National Testing Agency (NTA) conducts the JEE Main exam as a Computer Based Test in various cities in India and abroad. NTA official website JEE 2024 is jeemain.nta.ac.in."} headingSize={"28px"} />
            <ParaTiles para={"Candidates preparing for the JEE Mains 2024 can check here the exam syllabus, the pattern of the exam, and the marking scheme, and download previous year JEE Mains question paper PDF. As per the JEE Mains exam pattern, the exam will be conducted online as a Computer Test. Previous year JEE Main question paper will help candidates understand the difficulty level of the exam. Also, it is advised that students study JEE Mains 2024 chapter-wise weightage to know the topics that have been asked in previous years."} headingSize={"28px"} />
            <ParaTiles para={"JEE Main 2024 will have three papers, Paper 1 for admission to the BE/BTech course, Paper 2A for BArch admission, and Paper 2B for BPlan course admission. The duration of the JEE Main exam is three hours and the question paper will have Multiple Choice (MCQ) and Integer Value (Numerical Value Answer) type questions. JEE Main 2024 Paper 1 will have 90 questions while Paper 2A and 2B will have 82 and 105 questions respectively. "} headingSize={"28px"} />
            <ParaTiles heading={"NTA JEE Mains 2024 April Session: NTA has started the JEE Main Session 2 Correction Window 2024."} para={"Candidates who wish to edit/modify any details in their filled JEE Main 2024 Application form can login to the NTA JEE website jeemain.nta.ac.in and make the required corrections. The last date to make corrections in the form is March 7."} headingSize={"15px"} />
            <ParaTiles  para={"JEE Main Application Form 2024 Session 2 is closed. JEE Mains 2024 Session 2 Registration last date was March 4. NTA JEE Main 2024 Registration 2024 link is available below on this page. JEE Main 2024 Application form session 2 link is also available on the NTA JEE website. NTA has announced the JEE Mains 2nd attempt date 2024. NTA JEE Main Session 2 Exam Date 2024 is April 4 to 15, 2024."} headingSize={"15px"} />
            <ParaTiles  para={"Candidates appearing in the session 2 exam can check here JEE Mains 2024 all shift question paper pdf session 1 and JEE Main Syllabus 2024. Also provided here is the JEE Main 2024 Paper Analysis Session 1 to check the exam difficulty level and subject-wise weightage of questions in the exam. Candidates should check the reduced syllabus of JEE Mains 2024 and JEE Main Previous Year Question Paper. The link to download the JEE 2024 Syllabus PDF is available below on this page."} headingSize={"15px"} />
            <ParaTiles  para={"NTA conducted the JEE Main 2024 Session 1 exam on January 24, 27, 29, 30, 31 and February 1. JEE Main 2024 Result Session 1 was released on February 12. Candidates are provided here the direct link of JEE Mains Result Login 2024 to download the scorecard. JEE Mains Result 2024 direct link official website is also available at jeemain.nta.ac.in and ntaresults.nic.in. The final answer key of JEE Mains 2024 and the list of JEE Main 2024 January Session Toppers was also released along with the result."} headingSize={"15px"} />
            <ParaTiles heading={"JEE Main 2024 Exam Dates & Schedule"} para={"Take a look at the table below for the complete schedule of JEE Main 2024 exam"} headingSize={"25px"} />
            <Table LeftcellWidth={'28%'} RightcellWidth={'60%'} tableData={data1} />
            <ParaTiles heading={"JEE Main 2022 Preparation Tips"} para={"Class 12 students are faced with the difficulty of preparing for the JEE Main 2022 examination and their board exams simultaneously. However, it may appear challenging at first, b"} headingSize={"25px"} />
            <ParaTiles heading={"JEE Main 2022 Preparation Tips"} para={"Class 12 students are faced with the difficulty of preparing for the JEE Main 2022 examination and their board exams simultaneously. However, it may appear challenging at first, b"} headingSize={"25px"} />
            <ParaTiles heading={"How to fill JEE Main 2022 Application Form? - "} para={"NTA had reopened the JEE Main 2022 application form for session 2 in online mode twice. The first reopening was from July 6 to 9, while the second reopening was from July 11 to 12. Earlier,"} headingSize={"15px"} />
            
        </div>
    )
}

export default JeeMain
