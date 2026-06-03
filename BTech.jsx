import React from 'react'
import Header from './Header'
import image from './hdr-bg.jpg'
import ParaTiles from './ParaTiles'
import Table from './Table'
import CareerInfoTile from './CareerInfoTile'
export function BTech() {

    const data1 = [
        ["Particular", "Value"],
        ["Name of Degree", "Bachelor of Technology"],
        ["Level", "Undergraduate"],
        ["Duration", "Four years"],
        ["Semester/Yearly", "Semester"],
        ["Admission Process", "Entrance test followed by counselling by the authorities."],
        ["Eligibility Criteria", "Should have completed 10+2 in PCM or PCB from a recognized institute/board"],
        ["Course Fee", "Rs. 5 lakhs to Rs. 12 lakhs per annum"],
        ["Top Institute offering Admission", "IITs, NITs, IIITs and GFTIs along with some private institutes such as VIT, BITS, MIT and more"],
        ["Top Recruiters", "Google, Apple, Hindustan Unilever Ltd, ISRO, Microsoft, Amazon, Flipkart, Intel, TATA Consultancy and more"],
        ["Types of Careers", "Civil Engineering, Mechanical Engineer, Computer Engineering, Electrical Engineer, Marine Engineer and more"]
    ];
    const data2 = [
        ["Browse B.E./B.Tech Colleges by City", ""],
        ["B.E /B.Tech Colleges in Hyderabad", "B.E /B.Tech Colleges in Jaipur"],
        ["B.E /B.Tech Colleges in Bangalore", "B.E /B.Tech Colleges in Coimbatore"],
        ["B.E /B.Tech Colleges in Bhopal", "B.E /B.Tech Colleges in Kolkata"],
        ["B.E /B.Tech Colleges in Chennai", "B.E /B.Tech Colleges in Indore"],
        ["B.E /B.Tech Colleges in Pune", "B.E /B.Tech Colleges in Nagpur"]
    ];
    const data3 = [
        ["Table of B.Tech Specializations", ""],
        ["B.Tech in Biotechnology", "B.Tech in Production Engineering"],
        ["B.Tech in Computer Science", "B.Tech in Data Science and Engineering"],
        ["B.Tech in Mechanical Engineering", "B.Tech in Footwear Engineering"],
        ["B.Tech in Civil Engineering", "B.Tech in Food Technology"],
        ["Biotechnology Engineering", "B.Tech in Electronics Engineering"],
        ["B.Tech in Information Technology", "B.Tech in Robotics Engineering"],
        ["B.Tech in Electrical and Electronics Engineering", "B.Tech in Software Engineering"],
        ["B.Tech in Genetic Engineering", "B.Tech in Telecommunication Engineering"],
        ["B.Tech in Electrical Engineering", "B.Tech in Aerospace Engineering"],
        ["B.Tech in Chemical Engineering", "B.Tech in Electronics and Communication Engineering"],
        ["B.Tech in Marine Engineering", "B.Tech in Nano Technology"],
        ["B.Tech in Automobile Engineering", "B.Tech in Artificial Intelligence"],
        ["B.Tech in Aeronautical Engineering", "B.Tech in Plastic Engineering"],
        ["B.Tech in Petroleum Engineering", "B. Tech in Agricultural Engineering"]
    ];
    const data4 = [
        ["Popular Online Engineering Courses and Certifications", ""],
        ["Online Software Engineering Courses", ""],
        ["Online Civil Engineering Courses", ""],
        ["Online Mechanical Engineering Courses", ""],
        ["Online Electrical Engineering Courses", ""],
        ["View All Online Engineering & Architecture Courses", ""]
    ]
    const data5 = [
        ["First Semester", "Second Semester"],
        ["Joy of Engineering", "World Civilizations"],
        ["Communication and Presentation Skills", "Data Structures"],
        ["Workshop Practice", "Writing Skills"],
        ["Computing Fundamentals & C", "Environmental Studies"],
        ["Chemistry", "Mathematics-II"],
        ["Mathematics-I", "Physical-II"],
        ["Physical-I", "Basic Electrical and Electronics Practice"]
    ];
    const data6 = [
        ["Third Semester", "Fourth Semester"],
        ["Mathematics-III", "Emerging Life Sciences"],
        ["Critical Reasoning & Systems Thinking", "Emerging Material Science and Applications"],
        ["Engineering Drawing & Computer Aided Graphics", "Object Oriented Programming"],
        ["Etiquette and Conversational Skills", "Data Base Management Systems"],
        ["Computer Organization and Architecture", "Computer Networks"],
        ["Discrete Mathematics", "Design and Analysis of Algorithms"],
        ["Fundamentals of Digital Logic", "Operating Systems"]
    ];
    const data7 = [
        ["Fifth Semester", "Sixth Semester"],
        ["Understanding Business", "Contemporary Challenges: Societal & Political"],
        ["Selling, Negotiating, and Persuading Skills", "Machine Learning and Data Mining"],
        ["Software Engineering", "Cryptography"],
        ["Optimization Techniques", "Internet of Things"],
        ["Artificial Intelligence", "Mobile Architecture and Programming"],
        ["Microprocessor Based System Design", "-"]
    ];
    const data8 = [
        ["Seventh Semester", "	Eighth Semester"],
        ["Innovation & Entrepreneurship", "	Practice School-III"],
        ["Good Citizenry, and Persuading Skills", "-"],
        ["Distributed Systems", "-"]
    ];
    const data9 = [
        ["Popular Engineering Colleges in India", ""],
        ["UPES Dehradun", "LPU Jalandhar"],
        ["Jain University, Bangalore", "KL University Guntur"],
        ["SRM University Chennai", "NIIT University, Neemrana"],
        ["GD Goenka University, Gurgaon", "GNA University, Phagwara"],
        ["Chandigarh University", "BML Munjal University, Gurgaon"]
    ];
    const data10 = [
        ["Computer Science Engineer: ", "Also known as a computer engineer, looks after the developing, testing, and evaluating the software that makes computers work. They often help in developing software and computer games.Mechanical Engineer: Mechanical engineers primarily design machines that produce power. These machines can be in the form of electric generators, internal combustion engines, turbines, refrigerators and even air-conditioning systems."],
        ["Civil Engineer: ", "A civil engineer is a professional who uses the application of planning, designing, constructing, maintaining and operating infrastructure while keeping in mind the environmental impact and public health."],
        ["Automobile Engineer: ", "Automobile engineers are professionals who assist in the development of passenger cars, trucks, buses, motorcycles and other vehicles. Automobile engineers are also involved with designing products and alter the existing ones."],
        ["Marine Engineer: ", "A marine engineer is a professional who designs, constructs, tests and restores ships, boats, underwater craft, offshore platforms and drilling equipment. A marine engineer often works in tandem with naval architects in order to design all types of sea vessels."],
        ["Aeronautical Engineer: ", "An aerospace engineer is a person who works with aircraft. He/she is involved primarily in designing aircraft, propulsion systems. An aerospace engineer also studies the aerodynamic performance of aircraft and construction material."]
    ];
    const data11 = [
        ["Students also liked", ""],
        ["Online Degree and Diploma Courses", ""],
        ["Online Free Courses and Certifications", ""],
        ["Online Short Term Courses and Certifications", ""],
        ["Online Certification Courses", ""],
        ["View List of all Online Courses and Certifications", ""],
        ["Top Certification Course Providers", ""]
    ];
    const data12 = [
        ["Top Recruiters for B.Tech Graduates", ""],
        ["ISRO", "Google"],
        ["HCL Technologies", "IBM Global Services"],
        ["TATA Consultancy", "Hindustan Unilever Ltd"],
        ["Myntra", "Amazon"],
        ["Apple", "Infosys Technologies"],
        ["Intel", "Amazon"],
        ["Microsoft", "TATA Consultancy"],
        ["Mahindra & Mahindra Ltd", "Schlumberger"]
    ];
    const data13 = [
        ["", "The two important national entrance examinations are as follows:-"],
        ["JEE Main –", " JEE Main is a national level engineering entrance examination that is used for selecting and screening those individuals who are looking to gain admission to B.Tech. courses in institutes such as National Institutes of Technology (NITs), Indian Institutes of Information Technology (IIITs) and Government Funded Technical Institutes (GFTIs). However many state and private colleges also accept JEE Main scores for admissions. JEE Main entrance examination also acts as an eligibility test for JEE Advanced."],
        ["JEE Advanced –", " JEE Advanced is the screening examination for students seeking admission into Indian Institute of Technology (IITs).. Those who come under the top 2,50,000 candidates in JEE Main will be termed eligible to attempt JEE Advanced."]
    ];
    const data14 = [
        ["WBJEE – ", " West Bengal Joint Entrance Examination is conducted by the West Bengal Joint Entrance Examinations Board (WBJEEB). It is conducted for those students who are interested in gaining admission into the undergraduate engineering courses offered by the participating institutes."]
    ];
    const data15 = [
        ["BITSAT – ", "As the name suggests, BITSAT is conducted by Birla Institute of Technology and Science, Pilani for students who are interested in gaining admission in B Tech courses taught at BITS Pilani and other campuses such as BITS Goa and BITS Hyderabad."],
        ["VITEEE – ", "VITEEE is conducted by the Vellore Institute of Technology, for those who are interested in gaining admission for B Tech courses offered at the institute’s Vellore and Chennai campuses."],
        ["SRMJEEE - ", "Conducted by SRM Institute of Science and Technology, this university-level engineering entrance examination offers B.Tech admissions to eligible students into its various campuses. Allotment of seats will be done strictly on the basis of performance in the entrance examination and the preferences of the students"]
    ];
    const data16 = [
        ["1. Choose the right stream. ", "There are many different streams to choose from in B.Tech, such as computer science, electrical engineering, mechanical engineering, and civil engineering. It is important to choose a stream that you are interested in and that you are good at."],
        ["2. Get good grades in your 12th standard. ", "Your 12th standard grades will be a major factor in determining which colleges you are eligible for. So, it is important to get good grades in your 12th standard."],
        ["3. Prepare for the entrance exams. ", "There are many different entrance exams for B.Tech, such as the JEE Main, JEE Advanced, and BITSAT. It is important to prepare for these exams well in advance."],
        ["4. Attend coaching classes. ", "Coaching classes can help you prepare for the entrance exams and for B.Tech itself. They can also help you network with other students who are interested in B.Tech."],
        ["5. Make a study plan. ", "It is important to make a study plan and stick to it. This will help you stay on track and make sure that you are covering all of the material that you need to know."],
        ["6. Take breaks. ", "It is important to take breaks when you are studying. This will help you stay focused and avoid burnout."],
        ["7. Get enough sleep.", "Getting enough sleep is essential for good health and for learning. So, make sure that you are getting at least 7-8 hours of sleep each night."],
        ["8. Stay positive. ", "It is important to stay positive and motivated during your preparation for B.Tech. This will help you overcome any challenges that you face."]
    ];
    const data17 = [
        ["Join a study group. ", "Studying with other people can help you stay motivated and on track."],
        ["Use online resources. ", "There are many online resources that can help you with your B.Tech studies."],
        ["Attend workshops and seminars. ", "Workshops and seminars can help you learn new skills and stay up-to-date on the latest trends in your field."],
        ["Get involved in extracurricular activities. ", "Extracurricular activities can help you develop your leadership skills and network with other students."],
        ["Take advantage of career counseling services. ", "Career counseling services can help you choose the right career path and prepare for your future."]
    ];


    return (
        <div>
            <Header tittle={"Bachelor Of Technology (B.Tech)"} subTittle={"Elegliblity | Course Fee | Course Duration | Entrance Exams"} BGimage={image} />
            <ParaTiles heading={"About Bachelor of Technology (B.Tech)"} para={"Bachelor of Technology is the full form of B.Tech. It is a highly preferred UG course in India. A degree in Bachelor of Technology is often considered as a gateway to the field of engineering. The Btech course duration is between three to four years, depending on the country and the institution. In India, the duration to complete the degree is four years, spread over eight semesters. BTech course fees vary from 1 to 4 lakh per annum, depending on the type of institute, and course applied for."} headingSize={"24px"} />
            <ParaTiles heading={"Bachelor of Technology (B.Tech) Courses"} para={"The alternative course to Bachelor of Technology is Bachelor of Engineering. BE is more of a theoretical-based program while a Bachelor of Technology is based on practical learning as well as theoretical learning."} headingSize={"15px"} />
            <ParaTiles heading={"What is B Tech full form?"} para={"The B Tech full form is Bachelor of Technology, is one of the most popular engineering courses for candidates from PCM branch. Various colleges and education institutions specialised in offering the BTech course."} headingSize={"15px"} />
            <Table heading={"Highlights"} LeftcellWidth={'25%'} RightcellWidth={'70%'} tableData={data1} />
            <ParaTiles heading={"Types of B.Tech"} para={"Bachelor of Technology (B.Tech) is in itself a type of technology course. There are no other types of B Tech courses. The programme is an undergraduate degree course that will help the students to gain specialization for better career opportunities in the future."} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data2} />
            <ParaTiles heading={"B.Tech Specializations"} para={"As a B.Tech student, there are various specialisations an individual can opt for. Some of the specialisations that are popular among those who are interested in entering the field of engineering are given in the table below:"} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data3} />
            <ParaTiles heading={"Skill required for B.Tech"} para={"It is important for an engineer to not only possess great technical skills but also social and emotional intelligence. Compassion, empathy, insights, knowledge, logic, and skill must all combine. If the person has a curious, creative, and innovative mind who likes to dig deeper into problems and apply logical thinking and reasoning then engineering is a profession they could look into. B. Tech, through its four-year full-fledged learning path, teaches prevalent and useful technical skills along with interpersonal skills. It develops a team spirit in students, helps them to be more accurate and precise, provides a platform to improve their communication skills, and teaches them resilience and self-discipline."} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data4} />
            <ParaTiles heading={"Bachelor of Technology (B.Tech)- Advantages"} para={"There are numerous advantages of a Bachelor of Technology programme. Individuals who have an interest in invention of things or they are filled with curiosity how instruments, machines or software are developed. Then a Bachelor of Technology is a programme designed for them to provide them with right career opportunities. Depending on your interest, you can opt for any specialisation such as B.tech in computer science and engineering, B.tech in textile engineering, B.tech in mechanical engineering, B.tech in electronics and communication engineering and numerous other specialisations."} headingSize={"15px"} />
            <ParaTiles heading={"B.Tech Syllabus"} para={"There are various B Tech subjects that are different for different specialisation. During admissions, students will have to choose their B Tech courses. The B Tech subjects of first year is the same for all B Tech courses."} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data5} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data6} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data7} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data8} />
            <ParaTiles heading={"Scope of B.Tech"} para={"Those individuals who have completed their B Tech courses are called engineers. Depending on the specialisation, the prefix will be added to the engineer. For example, if the individual has completed in computer science and engineering, then he or she will be called a computer engineer or those who have done in nuclear science will be called a nuclear engineer. Those who have done B.Tech course can either start working or go for further studies and do their Masters and beyond."} headingSize={"15px"} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data9} />
            <ParaTiles heading={"Careers Opportunities after B.Tech course"} para={"Listed below are some of the career opportunities as per the specialization selected by the candidates after completing B.Tech:"} headingSize={"15px"} />
            <CareerInfoTile data={data10} headingColor={1} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data11} />
            <Table LeftcellWidth={'48%'} RightcellWidth={'48%'} tableData={data12} />
            <ParaTiles heading={"B.Tech Admissions"} para={"Engineers Are Some Of The Highest-paid Professionals Across The World, Especially In Western Countries, So It Is Naturally A Dream For Many In India To Make A Career In The Engineering Field. The Aspiration To Become High-earning Professional Drives Many To Take Admission In Engineering Courses. In India, Becoming An Engineer Is Something Most Of The Science Students Strive For. Therefore, The Competition To Gain Admission Into The Top Engineering Institutes Of India Is Quite Intense."} headingSize={"24px"} />
            <ParaTiles para={"To Ensure That Only The Best Are Granted Admission, There Are Various Entrance Examinations Or Tests For Bachelor Of Technology Or B.Tech. Courses Offered In Institutes Across The Country."} />
            <ParaTiles para={"Entrance Examinations Such As JEE Main, JEE Advanced, BITSAT, AP EAMCET Help The Institutes To Screen Students According To Merit. These Entrance Examinations Test The Prospective Engineering Students On The Basics Of Engineering, Which Is In Line With Their 10+2 Syllabus. Based On The Performances In The Above-mentioned Entrance Examinations, Individuals Are Selected And Further Screening Processes Take Place, Before Finally Gaining Admission To B.Tech. Programme."} />
            <ParaTiles heading={"Top B.Tech Exams"} para={"There are various entrance examinations for gaining admission to B Tech courses that are offered by various institutes. The entrance examinations can be divided into national level entrance examinations, state-level entrance examinations and institute specific examinations. Here, we are going to divide and explain the entrance examinations according to national, state and institute specific examinations."} headingSize={"24px"} />
            <ParaTiles heading={"National Level Examination for B.Tech"} para={"National level examinations are those entrance examinations that are organised and conducted to select the right aspirants for admissions into national level engineering public institutes. There are several private institutes as well which accept and consider scores in these examinations and these entrance examinations also form a part of their admission processes for their B. Tech. courses."} headingSize={"15px"} />
            <CareerInfoTile data={data13} />
            <ParaTiles heading={"State Level Examinations for B.Tech"} para={"Similar to national-level examinations, several states conduct state-level entrance examinations for B.Tech. courses offered in government institutes. Again, several private colleges accept scores of these entrance examinations. Some of the state-level entrance examinations are mentioned below."} headingSize={"15px"} />
            <CareerInfoTile data={data14} />
            <ParaTiles heading={"B.Tech Institute Specific Examinations"} para={"Apart from government institutes, several private institutes offer BTech programs. Several private institutes conduct their entrance examinations for admission purposes."} headingSize={"15px"} />
            <CareerInfoTile data={data15} />
            <ParaTiles heading={"How to Prepare?"} headingSize={"24px"} />
            <CareerInfoTile data={data16} headingColor={1} />
            <ParaTiles heading={"B.Tech is a challenging but rewarding course. By following these tips, you can increase your chances of success."} headingSize={"17px"} />
            <ParaTiles heading={"Here are some additional tips that you may find helpful:"} headingSize={"15px"} />
            <CareerInfoTile data={data17} headingColor={1} />
        </div>
    )
}



// export default  BTech
