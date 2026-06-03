import React from 'react'
import image from './hdr-bg.jpg'
import Header from './Header'
import ParaTiles from './ParaTiles'
import Table from './Table'

function NeetPg() {

    const data1 = [
        ["Dates", "Upcoming Exam Dates"],
        ["May '24 - Jun '24", "NEET PG 2024 registration TENTATIVE"],
        ["Jun '24", "NEET PG 2024 admit card upload TENTATIVE"],
        ["07 Jul '24", "NEET PG 2024 exam"],
        ["Jul '24", "NEET PG 2024 result"]
    ]
    const data2 = [
        ["Events", "Timings"],
        ["Reporting time for candidates", "07:00 AM"],
        ["Last entry for the examination", "08:30 AM"],
        ["The candidate gets access to log in window", "08:45 AM"],
        ["Candidate allowed to log in", "08:50 AM"],
        ["Exam Starts", "09:00 AM"],
        ["Exam concludes", "12:30 PM"],
    ]
    const data3 = [
        ["Events", "Timings"],
        ["Reporting time for candidates", "07:00 AM"],
        ["Last entry for the examination", "08:30 AM"],
        ["The candidate gets access to log in window", "08:45 AM"],
        ["Candidate allowed to log in", "08:50 AM"],
        ["Exam Starts", "09:00 AM"],
        ["Exam concludes", "12:30 PM"],
    ]
    const data4 = [
        ["Full Exam Name", "National Eligibility cum Entrance Test for Post Graduate"],
        ["Short Exam Name", "NEET PG"],
        ["Conducting Body", "National Board of Examinations (NBE)"],
        ["Frequency of Conduct", "Once a year"],
        ["Exam Level", "National Level Exam"],
        ["Languages", "English"],
        ["Mode of Application", "Online"],
        ["Application Fee (General)", "3500 Rs [Online]"],
        ["Mode of Exam", "Online"],
        ["Mode of Counselling", "Online / Offline"],
        ["Participating Colleges", "44"],
        ["Exam Duration", "3 Hours 30 Minutes"]
    ]
    // const data = [
    //     ["", ""],
    // ]
    // const data = [
    //     ["", ""],
    // ]
    return (
        <div>
            <Header tittle={"National Eligibility Entrance Test(NEET PG) 2024"} subTittle={"Entrance Exams In India - EXAMS 2025 , DATES, APPLICATION FORM & ALERTS"} BGimage={image} />
            <ParaTiles para={"NEET PG 2024 exam date has been announced by NBE. The exam will be held on July 7, 2024 in computer-based mode. Application dates and other crucial details for NEET PG 2024 exam will be uploaded along with the official information brochure. Application form for NEET PG 2024 will be released most likely in the first week of May. Candidates will have to register online to submit NEET PG 2024 application form. Candidates are advised to keep a track of dates for NEET PG 2024, otherwise, they may miss the deadline for any crucial event. Having an idea of the schedule of the events, they can plan things in a better manner."} headingSize={"15px"} />
            <ParaTiles para={"NEET PG dates 2024 contain a detailed schedule of the exam-related events, such as the date of release of the admit card, date of the examination, the announcement of the result, and counselling schedule. Read the complete article to know all about NEET PG 2024 dates and other important aspects."} headingSize={"15px"} />
            <ParaTiles heading={"Highlights of NEET PG 2024 Dates"} headingSize={"24px"} />
            <ParaTiles heading={"NEET PG application form 2024:"} para={"The application form for the entrance test will be released on the official website of NBE, nbe.edu.in. Candidates have to register first to access the application form for NEET PG 2024. As part of registration, candidates have to submit basic details to generate login id and password. Thereafter, candidates have to log in to their account and submit the application form. Paying a non-refundable registration fee is mandatory to submit the application form."} headingSize={"15px"} />
            <ParaTiles heading={"NEET PG Admit card 2024:"} para={"NBE will release NEET PG 2024 admit card on its official website. Only those who submit applications by the given deadline are issued the admit card. NEET PG admit card contains details like name, date of birth, exam date and time, centre address, and other important details. Candidates can download the NEET PG admit card 2024 through registration login credentials."} headingSize={"15px"} />
            <ParaTiles heading={"NEET PG 2024 exam and schedule:"} para={"NEET PG exam 2024 will be held on July 7, 2024. The exam will be conducted on a computer-based mode. "} headingSize={"15px"} />
            <ParaTiles para={"NEET PG result 2024: NEET PG 2024 result will be announced online by NBE. The result will be uploaded in PDF form on the official website of NBE, nbe.edu.in. Those who qualify for the exam, scoring the minimum cutoff will be able to download the scorecard for NEET PG 2024."} headingSize={"15px"} />
            <ParaTiles para={"NEET PG counselling 2024: After the result announcement, the counselling process starts. Qualified candidates will have to register online to participate in the NEET PG 2024 counselling. Before counselling, a merit list is released with shortlisted candidates for the counselling round. "} headingSize={"15px"} />
            <ParaTiles heading={"NEET PG 2024 Dates"} para={"Take a look at the table below for the complete schedule of NEET PG 2024 exam"} headingSize={"24px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data1} />
            <ParaTiles heading={"NEET PG 2024 Exam Day Schedule"} para={"Check the event-wise schedule in the table below."} headingSize={"24px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data2} />
            <ParaTiles heading={"Check the event-wise schedule in the table below."} para={""} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data3} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data4} />




            {/*             
            <ParaTiles heading={""} para={""} headingSize={"15px"} />
            <ParaTiles  para={""} headingSize={"15px"} />
            <ParaTiles heading={""} para={""} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data} />
             */}

        </div>
    )
}

export default NeetPg
