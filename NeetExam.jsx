import React from 'react'
import image from './hdr-bg.jpg'
import Header from './Header'
import ParaTiles from './ParaTiles'
import Table from './Table'
import CareerInfoTile from './CareerInfoTile'

function NeetExam() {


    const data1 = [
        ["Events", "Dates"],
        ["NEET PG 2024 Information Bulletin Date	", "February 2024"],
        ["NEET PG 2024 Application Begins	", "March 2024"],
        ["NEET PG 2024 Registration Last Date	", "April 2024"],
        ["NEET PG 2024 Admit Card Release Date	", "June 2024"],
        ["NEET PG 2024 Exam Date (Out)	", "July 7, 2024"],
        ["Result Announcement Date	", "July 2024"],
        ["Counselling + Admission	", "August/ September 2024"]
    ]
    const data2 = [
        ["Particulars", "Details"],
        ["Mode of Examination", "Online"],
        ["Level of Examination", "National level PG exam"],
        ["Conducting Body", "NBE"],
        ["NEET PG official website", "nbe.edu.in/ natboard.edu.in"],
        ["Conducted for", "MD/ MS/ PG Diploma courses"],
        ["Total Seats Offered", "26,168 MD seats\n13,649 MS seats\n922 PG Diploma seats"],
        ["Medium of the exam", "English"],
        ["Total marks", "800"],
        ["Helpline", "022-61087595\nhelpdesknbeexam@natboard.edu.in"]
    ];
    // const data = [
    //     ["", ""],
    // ]
    // const data = [
    //     ["", ""],
    // ]
    return (
        <div>
            <Header tittle={"NEET PG 2024 Exam Date (Check New Exam Date,"} subTittle={"Entrance Exams In India - EXAMS 2025 , DATES, APPLICATION FORM & ALERTS"} BGimage={image} />
            <ParaTiles para={`NEET PG 2024 exam date has been announced by NBE. The exam will be held on July 7, 2024 in computer-based mode. Application dates and other crucial details for NEET PG 2024 exam will be uploaded along with the official information brochure. Application form for NEET PG 2024 will be released most likely in the first week of May. Candidates will have to register online to submit NEET PG 2024 application form. Candidates are advised to keep a track of dates for NEET PG 2024, otherwise, they may miss the deadline for any crucial event. Having an idea of the schedule of the events, they can plan things in a better manner.`} headingSize={"24px"} />
            <ParaTiles para={`NEET PG dates 2024 contain a detailed schedule of the exam-related events, such as the date of release of the admit card, date of the examination, the announcement of the result, and counselling schedule. Read the complete article to know all about NEET PG 2024 dates and other important aspects.`} />
            <ParaTiles heading={"Highlights of NEET PG 2024 Dates"} para={`NEET PG application form 2024: The application form for the entrance test will be released on the official website of NBE, nbe.edu.in. Candidates have to register first to access the application form for NEET PG 2024. As part of registration, candidates have to submit basic details to generate login id and password. Thereafter, candidates have to log in to their account and submit the application form. Paying a non-refundable registration fee is mandatory to submit the application form.`} />
            <ParaTiles para={`NEET PG Admit card 2024: NBE will release NEET PG 2024 admit card on its official website. Only those who submit applications by the given deadline are issued the admit card. NEET PG admit card contains details like name, date of birth, exam date and time, centre address, and other important details. Candidates can download the NEET PG admit card 2024 through registration login credentials.`} headingSize={"15px"} />
            <ParaTiles para={`NEET PG 2024 exam and schedule: NEET PG exam 2024 will be held on July 7, 2024. The exam will be conducted on a computer-based mode. `} headingSize={"15px"} />
            <ParaTiles para={`NEET PG result 2024: NEET PG 2024 result will be announced online by NBE. The result will be uploaded in PDF form on the official website of NBE, nbe.edu.in. Those who qualify for the exam, scoring the minimum cutoff will be able to download the scorecard for NEET PG 2024.`} headingSize={"15px"} />
            <ParaTiles para={`NEET PG counselling 2024: After the result announcement, the counselling process starts. Qualified candidates will have to register online to participate in the NEET PG 2024 counselling. Before counselling, a merit list is released with shortlisted candidates for the counselling round. `} headingSize={"15px"} />
            <ParaTiles heading={"NEET PG 2024 Exam Date "} headingSize={"28px"} />
            <Table LeftcellWidth={'60%'} RightcellWidth={'38%'} tableData={data1} />
            <ParaTiles heading={"NEET PG 2024 Highlights"} headingSize={"28px"} />
            <Table LeftcellWidth={'60%'} RightcellWidth={'38%'} tableData={data2} />
            <ParaTiles heading={"NEET PG 2024 Eligibility Criteria "} para={"In order to apply for NEET PG 2024 exam, candidates must satisfy all the eligibility requirements mentioned below:"} headingSize={"28px"} />
            <ParaTiles  para={"The candidate must be an Indian Citizen. "} headingSize={"28px"} />
            <ParaTiles  para={"Candidates must have an MBBS degree or a provisional MBBS Qualifying Certificate authorized by MCI in order to apply for the examination."} headingSize={"28px"} />
            <ParaTiles  para={"Applicants must mandatorily have completed at least a one-year internship or are set to complete the internship prior to Aug 15, 2024."} headingSize={"28px"} />
            <ParaTiles  para={"Foreign Nationals are also eligible to appear for NEET PG 2024 exam."} headingSize={"28px"} />
            <ParaTiles heading={"NEET PG 2024 Age Limit"} para={"There is no age limit to apply for NEET PG 2024. If you fulfill the basic eligibility criteria mentioned above, you can apply for NEET PG irrespective of your age. Also, there is no limit on the number of attempts. This means that one can take NEET PG exam any number of times."} headingSize={"20px"} />
            <ParaTiles heading={"NEET PG 2024 Application Form"} para={"NEET PG 2024 application form will be made available only on the official website of NBE- nbe.edu.in. NEET PG 2024 registration process is set to start online in the month of May 2024. NEET PG registration process involves 5 basic steps:"} headingSize={"28px"} />
            <ParaTiles heading={"Visit nbe.edu.in and enter basic details to generate NEET PG login credentials."} para={"Fill the required personal and academic details in NEET PG 2024 application form."} headingSize={"13px"} />
            <ParaTiles  para={"Select NEET PG exam center preference from the list of 260+ test cities."} headingSize={"13px"} />
            <ParaTiles  para={"Upload the scanned images of your photograph, signature, and thumb impression in .jpg/ .jpeg format. Read NEET PG document size and upload guidelines"} headingSize={"13px"} />
            <ParaTiles  para={"Pay NEET PG 2024 exam fee online through net banking or debit card or credit card."} headingSize={"13px"} />
            <ParaTiles heading={"NEET PG 2024 Admit Card"} para={"The National Board of Examination will be releasing NEET PG 2024 Admit Card prior to the commencement of the examination. Those who have filled in the forms will be able to download the same from the official NBE website using NEET PG application number and password. In NEET PG 2024 Admit Card, the following details will be printed- date and time of the exam, exam center’s address, candidate’s name, date of birth, etc."} headingSize={"28px"} />
            <ParaTiles heading={"Following are the steps to download NEET PG 2024 Admit Card from the official website:"} para={"1. Navigate to the official website of NBE, i.e.- nbe.edu.in"} headingSize={"14px"} />
            <ParaTiles para={"2. Followed by clicking on “NEET PG”."} headingSize={"28px"} />
            <ParaTiles para={"3. Then candidates are required to click on the Applicant Login;"} headingSize={"28px"} />
            <ParaTiles para={"4. Enter the details asked for such as User ID and password;"} headingSize={"28px"} />
            <ParaTiles para={"5. Click on download the “NEET PG 2024 admit card” option."} headingSize={"28px"} />
            {/* <ParaTiles para={""} headingSize={"28px"} /> */}

        </div>
    )
}

export default NeetExam
