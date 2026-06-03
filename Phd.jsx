import React from 'react'
import image from './hdr-bg.jpg'
import Header from './Header'
import ParaTiles from './ParaTiles'
import Table from './Table'
import CareerInfoTile from './CareerInfoTile'

function Phd() {


    const data1 = [
        [
            "",
            ""
        ],
        [
            "Degree",
            "Doctorate"
        ],
        [
            "Full Form",
            "Doctor of Philosophy in Engineering"
        ],
        [
            "Duration",
            "3 Years"
        ],
        [
            "Subjects Required",
            "Physics, Chemistry, Mathematics"
        ],
        [
            "Minimum Percentage",
            "PG in Engineering with 50% aggregate marks"
        ],
        [
            "Average Fees",
            "INR 20,000 to 40,000."
        ],
        [
            "Average Salary",
            "INR 3 to 14 LPA"
        ],
        [
            "Employment Roles",
            "Postsecondary Teacher, Computer and Information Research Scientist, Computer Hardware Engineer, IT Support Analyst, Network Engineer and It Consultant"
        ]
    ]
    const data2 = [
        [
            "Sl.No.",
            "Name of the Colleges"
        ],
        [
            "1",
            "PSGCT, Coimbatore"
        ],
        [
            "2",
            "Anna University, Chennai"
        ],
        [
            "3",
            "AIIMS, New Delhi"
        ],
        [
            "4",
            "IIT, Bombay"
        ],
        [
            "5",
            "DSCE, Bangalore"
        ],
        [
            "6",
            "RVCE, Bangalore"
        ],
        [
            "7",
            "IIT, Madras"
        ],
        [
            "8",
            "IIST, Thiruvananthapuram"
        ],
        [
            "9",
            "MMU, Ambala"
        ],
        [
            "10",
            "Chandigarh University"
        ]
    ]
    const data3 = [
        [
            "Sl.No.",
            "Institution"
        ],
        [
            "1",
            "JMI University"
        ],
        [
            "2",
            "IGNOU"
        ],
        [
            "3",
            "University of Delhi"
        ],
        [
            "4",
            "Amity University"
        ],
        [
            "5",
            "JNU"
        ]
    ]
    const data4 = [
        [
            "SI.No.",
            "Institution"
        ],
        [
            "1",
            "IIT Bombay"
        ],
        [
            "2",
            "VJIT"
        ],
        [
            "3",
            "ICT, Mumbai"
        ],
        [
            "4",
            "KJ Somaiya College of Engineering"
        ],
        [
            "5",
            "MPSTME, Mumbai"
        ]
    ]
    const data5 = [
        [
            "Sl.No.",
            "Institution"
        ],
        [
            "1",
            "TMV"
        ],
        [
            "2",
            "UNIPUNE"
        ],
        [
            "3",
            "MIT WPU- Pune"
        ],
        [
            "4",
            "Vishwakarma University"
        ],
        [
            "5",
            "MIT ADT University"
        ]
    ]
    const data6 = [
        [
            "Sl.No.",
            "Institution"
        ],
        [
            "1",
            "IIT Madras"
        ],
        [
            "2",
            "SRM University"
        ],
        [
            "3",
            "Sathyabama University"
        ],
        [
            "4",
            "Dr MGR Educational and Research Institute"
        ],
        [
            "5",
            "TNDALU Chennai"
        ]
    ]
    const data7 = [
        [
            "Sl.No.",
            "Institution"
        ],
        [
            "1",
            "Christ University"
        ],
        [
            "2",
            "NLSIU"
        ],
        [
            "3",
            "IISC"
        ],
        [
            "4",
            "REVA University"
        ],
        [
            "5",
            "IIM Bangalore"
        ]
    ]
    const data8 = [
        [
            "Sl.No.",
            "Institution"
        ],
        [
            "1",
            "Jadavpur University"
        ],
        [
            "2",
            "Techno India University"
        ],
        [
            "3",
            "Presidency University"
        ],
        [
            "4",
            "IIM Calcutta"
        ],
        [
            "5",
            "Aliah University"
        ]
    ]
    const data9 = [
        [
            "Sl.No.",
            "Institutions"
        ],
        [
            "1",
            "Osmania University"
        ],
        [
            "2",
            "IIT Hyderabad"
        ],
        [
            "3",
            "University of Hyderabad"
        ],
        [
            "4",
            "MANUU"
        ],
        [
            "5",
            "Malla Reddy University"
        ]
    ]
    const data10 = [
        [
            "Sl.No.",
            "Institution"
        ],
        [
            "1",
            "JMI ,New Delhi"
        ],
        [
            "2",
            "UniPune"
        ],
        [
            "3",
            "Aligarh Muslim University"
        ],
        [
            "4",
            "NIMS University"
        ],
        [
            "5",
            "University of Hyderabad"
        ]
    ]
    const data11 = [
        [
            "Sl.No.",
            "Institutions"
        ],
        [
            "1",
            "Apex University"
        ],
        [
            "2",
            "IIMC, Hyderabad"
        ],
        [
            "3",
            "Loyola College, Chennai"
        ],
        [
            "4",
            "NLSIU, Bangalore"
        ],
        [
            "5",
            "BITS, Goa"
        ]
    ]
    const data12 = [
        [
            "Institution",
            "Fees"
        ],
        [
            "University of Sydney, Australia",
            "AUD 43,932"
        ],
        [
            "Southern Illinois University, USA",
            "USD 48,401"
        ],
        [
            "University of Dayton, USA",
            "USD 35,587"
        ],
        [
            "University of Montreal, Canada",
            "CAD 16,223"
        ],
        [
            "Duke University, USA",
            "USD 81,186"
        ],
        [
            "Rice University, USA",
            "USD 65,568"
        ],
        [
            "University of Idaho, USA",
            "USD 34,875"
        ],
        [
            "Columbia University",
            "USD 52,352"
        ],
        [
            "Braunschweig University, Germany",
            "EUR 5,163"
        ],
        [
            "Lawrence Technology University, USA",
            "USD 30,842"
        ]
    ]
    const data13 = [
        [
            "Sl.No.",
            "Institution"
        ],
        [
            "1",
            "University of Idaho"
        ],
        [
            "2",
            "Duke University"
        ],
        [
            "3",
            "Rice University"
        ],
        [
            "4",
            "Lawrence Technology University"
        ],
        [
            "5",
            "Columbia University"
        ]
    ]
    const data14 = [
        [
            "Sl.No.",
            "Institutions"
        ],
        ["1",
            "University of Oxford"
        ],
        [
            "2",
            "University of Cambridge"
        ],
        [
            "3",
            "Imperial College London"
        ],
        [
            "4",
            "King’s College London"
        ],
        [
            "5",
            "University of Warwick"
        ]
    ]
    const data15 = [
        [
            "Sl.No.",
            "Institution"
        ],
        [
            "1",
            "University of Toronto"
        ],
        [
            "2",
            "University of British Columbia"
        ],
        [
            "3",
            "McGill University"
        ],
        [
            "4",
            "McMaster University"
        ],
        [
            "5",
            "University of Montreal"
        ]
    ]
    const data16 = [
        [
            "Sl.No.",
            "Institution"
        ],
        [
            "1",
            "University of Queensland"
        ],
        [
            "2",
            "University of Southern Queensland"
        ],
        [
            "3",
            "University of Melbourne"
        ],
        [
            "4",
            "University of Sydney"
        ],
        [
            "5",
            "University of New South Wales"
        ]
    ]
    const data17 = [
        [
            "Sl.No.",
            "Institution"
        ],
        [
            "1",
            "Technical University of Munich"
        ],
        [
            "2",
            "Heidelberg University"
        ],
        [
            "3",
            "LMU Munich"
        ],
        [
            "4",
            "Universitätsmedizin Berlin"
        ]
    ]
    const data18 = [
        [
            "Name of the college",
            "Fees Structure"
        ],
        [
            "Anna University, Chennai",
            "INR 51,000 PA"
        ],
        [
            "Chandigarh University",
            "INR 50,000 PA"
        ],
        [
            "IIT Bombay",
            "INR 1.97 LPA"
        ],
        [
            "IIST Thiruvananthapuram",
            "INR 54,700 PA"
        ]
    ]
    const data19 = [
        ["Applied Science", ""],
        ["Applied Mathematics", ""],
        ["Mechanical Engineering", ""],
        ["Elements of Electrical Engineering", ""],
        ["Electrical Circuits", ""],
        ["Computer-aided Engineering", ""],
        ["Electrical Circuit Technology", ""],
        ["Electrical Power Generation", ""]
    ]
    const data20 = [
        ["Research Scientists,", ""],
        ["Executive Engineers, ", ""],
        ["Mechanical Design Engineers.", ""]
    ]
    const data21 = [
        ["CSIR NET", ""],
        ["UGC NET", ""],
        ["GATE", ""],
        ["BARC PhD Admission Test", ""],
        ["ICMR Junior Research Fellowships", ""],
        ["DBT Biotechnology Eligibility Test", ""],
        ["AIIMS PhD Entrance Exam", ""],
        ["BINC Examination", ""],
        ["BITS PhD Entrance Examination", ""]
    ]
    const data22 = [
        ["Syllabus: ", "Students Must Be Well-versed With The Course Syllabus. This Is The First And Most Fundamental Step In The Preparation Process."],
        ["Exam Pattern: ", "Understand The Examination Patterns And The Kind Of Questions That Are Commonly Asked. Students Will Almost Likely Be Asked Multiple-choice Questions. "],
        ["Important Topics: ", "Students Should Concentrate More On The Important Areas Where Questions Are Most Usually Asked. These Sections Must Be Focused On While Reviewing The Chapters."],
        ["Practice: ", "Practice Questions From Past Years' Question Papers And Sample Papers."]
    ]
    const data23 = [
        ["Lecturing: ", "One of the popular roles undertaken by graduates of the PhD Engineering course is Lecturer. Since students gain a deeper understanding of a specific subject when studying PhD Engineering, it helps them pursue lecturing."]
    ]
    const data24 = [
        ["Diversity in Job roles: ", "There is a diverse range of job roles available for the graduates of this course. Since the specializations available to the students are very flexible, it enables them to pursue a wide range of careers."]
    ]

    // const data10 = [
    //     [
    // ]

    return (
        <div>
            <Header tittle={"Doctor Of Philosophy(Ph. D)"} subTittle={"Elegliblity | Course Fee | Course Duration | Entrance Exams"} BGimage={image} />
            <ParaTiles heading={"About PhD"} para={`The Doctor of Engineering, or Engineering Doctorate, (abbreviated DEng or EngD) is a degree awarded on the basis of advanced study and research in engineering and applied science for solving problems in industry. According to the National Science Foundation in the United States, it is a terminal research doctorate. A DEng/EngD is equivalent to a PhD in engineering, but different in that it has a solid industrial base and an additional taught element. The degree is usually aimed toward working professionals.`} headingSize={"24px"} />
            <ParaTiles para={`The DEng/EngD along with the PhD represents the highest academic qualification in engineering, and the successful completion of either in engineering is generally required to gain employment as a full-time, tenure-track university professor or postdoctoral researcher in the field. However, due to its nature, a DEng/EngD graduate might be more suitable for the Professor of Practice position. Individuals can use the academic title doctor, which is often represented via the English honorific "Dr”.`} />
            <ParaTiles para={`DEng/EngD candidates submit a significant project, typically referred to as a thesis or praxis, consisting of a body of applied and practical methods/products with the main goal of solving complex industrial problems. Candidates must defend this work before a panel of expert examiners called a thesis or dissertation committee.`} />
            <ParaTiles heading={"PhD Engineering Course Details"} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data1} />
            <ParaTiles heading={"Types of PhD Engineering"} para={`Aspirants can pursue the PhD Engineering course in the full-time or part-time mode. Below are the types of PhD Engineering courses in detail:`} headingSize={"15px"} />
            <ParaTiles heading={"Full-Time PhD Engineering"} para={`It is a normal Doctor of Philosophy program whose duration ranges between 4-6 years, depending upon the student's research project. Students mostly conduct their research with a focus and concentration on the Doctor of Philosophy subjects. Most PhD Engineering students act as teaching assistants to various professors in their departments in PhD Engineering colleges.`} headingSize={"15px"} />
            <ParaTiles para={`The full-time Doctor of Philosophy course cost is the highest compared to other modes of PhD Engineering degrees. There are 3 major types of Doctor of Philosophy course students who do a full-time PhD Engineering.`} />
            <ParaTiles heading={"Part-Time PhD Engineering"} para={`A part-time PhD Engineering typically takes five to eight years, but this period depends on how long the university offers you and how much work you put in. One might have more time than you initially thought and finish it sooner, or your work and life balance may get in the way, and it takes longer. You will have several years to complete the degree if you're doing a PhD Engineering part-time. It will benefit PhD Engineering engineering that it becomes easy to work around commitments or employment.`} headingSize={"15px"} />
            <ParaTiles heading={"Distance PhD Engineering"} para={`Apart from a Full-time and Part-time PhD Engineering engineering program, there is a Distance PhD Engineering program, which gives the benefits of supervision from one or more leading University of Reading academics. Working at the forefront of their field, access to high-quality training, delivered on campus or via online packages, access to extensive online Library resources, and a reduced tuition fee set at half the standard full- or part-time rate for periods when studying off-campus.`} headingSize={"15px"} />
            <ParaTiles para={`A PhD Engineering qualification is examined at the same level as a campus-based PhD Engineering and a standard PhD Engineering degree certificate that does not state its mode of study.`} />
            <ParaTiles heading={"Study PhD Engineering in India"} para={`India is home to some of the PhD Engineering colleges in the world. Aspirants have many options to choose from in terms of the best PhD Engineering course as per their preferences. Depending on the type of PhD Engineering programs offered, candidates will have to choose. Below are some of the top colleges in India offering PhD Engineering courses:`} headingSize={"15px"} />
            <ParaTiles heading={"Top 10 PhD Engineering Colleges in India"} para={`Below is the list of the 10 best PhD Engineering Colleges in the country:`} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data2} />
            <ParaTiles heading={"Top PhD Engineering Colleges in New Delhi"} para={`Delhi, the educational hub of India, stands in the fourth position in producing PhD Engineering candidates. Here are the top 5 PhD Engineering Colleges in New Delhi:`} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data3} />

            <ParaTiles heading={"Top PhD Engineering Colleges in Mumbai"} para={`Below is the list of colleges which are the top PhD Engineering colleges in Mumbai:`} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data4} />
            <ParaTiles heading={"Top PhD Engineering Colleges in Pune"} para={`Below is the list of colleges which are the top PhD Engineering colleges in Pune:`} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data5} />
            <ParaTiles heading={"Top PhD Engineering Colleges in Chennai"} para={`Top 5 PhD Engineering Colleges of Chennai are given below:`} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data6} />
            <ParaTiles heading={"Top PhD Engineering Colleges in Bangalore"} para={`Bangalore city has some of India's best colleges for PhD Engineering courses. Here is the list of top colleges for PhD Engineering in Bangalore:`} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data7} />
            <ParaTiles heading={"Top PhD Engineering Colleges in Kolkata"} para={`Check the Table below for the top colleges in Kolkata:`} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data8} />
            <ParaTiles heading={"Top PhD Engineering Colleges in Hyderabad"} para={`The Telangana state capital has some premier institutions for PhD Engineering courses in India. Check the table below for the top PhD Engineering colleges in Hyderabad:`} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data9} />

            <ParaTiles heading={"Top PhD Engineering Government Colleges"} para={`Several top Government Colleges offer quality PhD Engineering programmes across the country. Check the table below for the top PhD Engineering government colleges in India:`} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data10} />

            <ParaTiles heading={"Top PhD Engineering Private Colleges"} para={`India has seen significant growth in the number of quality PhD Engineering private colleges that offer some of the best programmes in the country. Check the table below for the top PhD Engineering private colleges in India:`} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data11} />
            <ParaTiles heading={"Study PhD Engineering Abroad"} para={`Students can opt to study a PhD Engineering course abroad if they can afford it. The PhD Engineering course abroad is for 3 years, depending on the type of course, college and country. Studying a PhD Engineering course abroad is access to some of the best resources, facilities, and faculties, apart from the worldwide subject matter and other cultures. `} headingSize={"15px"} />
            <ParaTiles para={`In addition, PhD Engineering is one of the best courses to study abroad because of its diversity. Below are some of the top PhD Engineering colleges abroad and the relevant fees structure:`} />
            <ParaTiles heading={"Top PhD Engineering Colleges Abroad"} para={`The table below contains the list of the some of the best colleges abroad for PhD Engineering:`} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data12} />
            <ParaTiles heading={"Top PhD Engineering Colleges in the USA"} para={`The USA is home to some of the best universities and colleges offering top-notch PhD Engineering programmes globally. The US is the best country for PhD Engineering studies and settling abroad. It's at PhD Engineering-level that the USA shines through. `} headingSize={"15px"} />
            <ParaTiles para={`America's rigorous approach to graduate study delivers a standard of training and professional development that often surpasses the minimum requirement for more 'traditional' research-focused doctorates in other countries. The table below contains the list of top colleges of PhD Engineering in the USA:`} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data13} />
            <ParaTiles heading={"Top PhD Engineering Colleges in the Canada"} para={`An increasingly attractive and multicultural study destination, Canada is a great option to consider for your PhD Engineering studies, offering a wealth of research opportunities to help you expand your expertise. Here are the top universities of PhD Engineering in Canada:`} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data14} />
            <ParaTiles heading={"Top PhD Engineering Colleges in the Australia"} para={`A PhD Engineering in Australia means that you will develop your knowledge and skills, which ultimately increases your chances of employment within Australia and any country. According to the UN's Education Index, Australia's education system ranks first. The table below shows the top universities of PhD Engineering in Australia:`} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data15} />
            <ParaTiles heading={"Top PhD Engineering Colleges in the Germany"} para={`It is much easier to get a PhD Engineering at a European university, which takes about 3-4 years in a good university in Europe. The PhD Engineering from Germany in engineering enjoys an outstanding reputation. Germany's research institutions, universities and companies welcome international researchers and offer excellent opportunities for doctoral students.`} headingSize={"15px"} />
            <ParaTiles para={`The table below shows the top universities in Germany colleges of PhD Engineering:`} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data16} />
            <ParaTiles heading={"Fee Structure"} para={`The fee structure for PhD Engineering varies for different Universities. Also, the fee structure varies following the course and University. Students can download the admission brochure and the course curriculum to get the details of PhD Engineering admission and fee structure.`} headingSize={"15px"} />
            <ParaTiles para={`In general, government-aided universities have relatively lower fees than private Universities. Some Universities offer a fee waiver system depending upon the candidate’s economic condition, caste, and merit. The average PhD Engineering in Engineering fee in India is INR 20,000 - 3 LPA. Now, read below to learn about the fee structure of different universities.`} headingSize={"15px"} />
            <Table LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data18} />
            <ParaTiles heading={"Syllabus and Subjects for PhD Engineering"} para={`Though the actual course offerings might differ from one university to another, here is a list of major subjects which are commonly studied under a PhD Engineering in Electrical Engineering:`} headingSize={"15px"} />
            <CareerInfoTile data={data19} headingColor={1} />
            <ParaTiles heading={"PhD Engineering Course Comparison"} para={`PhD Engineering stands for Doctor of Philosophy and is typically catered to students interested in and inclined towards research-based degrees and professional application.`} headingSize={"15px"} />
            <ParaTiles heading={"Salary of a PhD Engineering Graduates"} para={`The salary depends on the kind of job you get/you choose to do, your PhD Engineering research area, and your employment. No prior experience is required to be a PhD Engineering Student. The average salary of a PhD Engineering graduate starts from INR 6 - INR 12 LPA (Source: Payscale), depending on the stream you belong from.`} headingSize={"15px"} />
            <ParaTiles heading={"Career Options After PhD Engineering"} para={`A majority of students pursue a PhD Engineering degree because it offers better career options, for example, in academics and research. PhD Engineering is a broad term. It has many specializations that have different career options and jobs. PhD Engineering Jobs include:`} headingSize={"15px"} />
            <CareerInfoTile data={data20} headingColor={1} />
            <ParaTiles heading={"How To Get Admission For PhD?"} para={`A majority of students pursue a PhD Engineering degree because it offers better career options, for example, in academics and research. PhD Engineering is a broad term. It has many specializations that have different career options and jobs. PhD Engineering Jobs include:`} headingSize={"24px"} />
            <ParaTiles heading={"How To Apply?"} para={`Students Can Apply Online Or Offline. Due To The COVID Pandemic, The Admission Process For PhD In Most Universities Has Become Online. Students Need To Visit The Official Website And Look For The Course They Are Interested In. Then They Should Fill Out The PhD Admission Form By Giving Out Their Name, Phone Number, Email Address, Course They Are Interested In, Etc. The Students Must Visit The Respective College For Offline Registration And Fill Out The Application Form By Attaching The Required Documents.`} headingSize={"15px"} />
            <ParaTiles heading={"Selection Process"} para={`Once The Application Is Accepted, There Can Be A Final Round Of Group Discussions Or Personal Interviews Done By Universities Based On The College. They Ask The Aspirants To Explain Their Research Proposal And Defend Its Relevance Before Confirmation Of Admission.`} headingSize={"15px"} />
            <ParaTiles heading={"Eligibility Criteria For PhD"} para={`The admission Procedure for PhD Courses Requires A Master's Degree From A Recognized University. Students Should Have Secured A Minimum Of 45-50% in Their Exams Post, Which They Are Required To Qualify For Any One Of The National/state Level entrance Exams to Get Admitted For PhD. Students Should Prepare Their Research Proposal As They Will Have To Send It To The College Of Their Choice For The Application Process. The PhD Eligibility Criteria Depend On The College, And The Course Students Are Interested In Applying For.`} headingSize={"24px"} />
            <ParaTiles heading={"Popular Entrance Exams For PhD"} para={`PhD Is A Competitive Course That Many Students Apply For. Since A PhD Qualification Is A Very Valued Qualification Not Provided By Many Colleges, There Is A Lot Of Competition Amongst Students To Get Admission There. To Make The Decision-making Process Fair, Colleges Introduce An Entrance Exam As A Screening Process. Some Of The Most Popular PhD Entrance Exams Are Listed Below:`} headingSize={"24px"} />
            <CareerInfoTile data={data21} headingColor={1} />
            <ParaTiles heading={"A Quick Glance At The PhD Entrance Exams "} para={`The Eligibility Criteria Of The Above-mentioned Entrance Exams Are Entirely Dependent On The Conduction Body; Hence It Varies. While The Format Of The Entrance Exams Varies On The Specialisation, As Each College Or Subject Has Its Own Governing Body. Below Listed Are Some Of The General Guidelines Of The PhD Entrance Examinations:`} headingSize={"15px"} />          
            <ParaTiles para={`The Exam Pattern Includes Logical, Reasoning, And Knowledge-based Questions. The Mode Of The Test Will Be Both Online And Offline.`} />
            <ParaTiles para={`The Papers Would Be Objective, And If There Are Subjective Questions, They Are Asked To Judge Argument And Reasoning Skills.`} />
            <ParaTiles para={`The Syllabus, Mode Of Examination, And Question Pattern May Change According To A University/conduction Body.`} />
            <ParaTiles heading={"Preparation Tips For Phd"} para={`There Are Many Tips That Students Must Note When Deciding To Pursue A PhD Mechanical Engineering Degree. Some Important Preparation Tips Are Listed Below To Ensure That The Students Crack The Course And Pass The Exams Without Any Hurdles.`} headingSize={"24px"} />
            <CareerInfoTile data={data22} />
            <ParaTiles heading={"Why Choose PhD Engineering?"} para={`When students decide to pursue the PhD Engineering qualification, they should research PhD Engineering course details to ensure they know the course they are enrolled in. Students encounter some common queries: "What is PhD Engineering" and "Why PhD Engineering?". To understand the answer to these questions, we can make it simpler by breaking it down into the following three short questions:`} headingSize={"15px"} />
            <ParaTiles heading={"What is PhD Engineering All About?"} para={`A PhD Engineering or a Doctor of Philosophy is a doctoral research degree and is the highest academic qualification. It involves engaging in in-depth research, understanding research issues, and solving key problems with exceptional analytical and observational skills. `} headingSize={"15px"} />          
            <ParaTiles para={`The aspirant should be comfortable with long working hours, analyzing and solving complex problems with calmness. A PhD Engineering is also something to be incredibly proud of. `} />
            <ParaTiles heading={"Why Do PhD Engineering Graduates?"} para={`Students can select the subjects of their choice depending on their interest in job prospects available in the specific field. Since graduates with a PhD Engineering degrees possess skills in various subjects, there are career opportunities available in multiple fields. In addition, there are many responsibilities that graduates of this role have to undertake, which makes the role very dynamic and diverse. `} headingSize={"15px"} /> 
            <CareerInfoTile data={data23} />
            <ParaTiles heading={"Reasons Why PhD Engineering Can Fetch You a Rewarding Career?"} para={`PhD Engineering courses are a very reflective and exciting stream of education. Students can gauge the intrinsic worth of a PhD Engineering course because it offers more employment opportunities than any other stream. Thus, the PhD Engineering job scope is forever widening and appealing.`} headingSize={"15px"} /> 
            <CareerInfoTile data={data24} />
            


        </div>
    )
}

export default Phd
