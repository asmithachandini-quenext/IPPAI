import { Component } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  advisors = [
    {
      name: 'Dr. Pramod Deo',
      title: 'Former Chairman, Central Electricity Regulatory Commission',
      image: 'assets/images/1460107856-1359.jpg',
      description: `Dr. Pramod Deo is the former Chairperson, Central Electricity Regulatory Commission.
He joined MERC as Member in 2002. He was elevated as Chairman in 2005.
Dr. Deo holds a post-graduate degree in Physics, a doctoral degree in Infrastructure
Economics and has done post-doctoral research in Energy Policy and Economics. He
is also co-author of three books on energy planning, energy management and
regulatory practice. <br><br>
Dr. Deo has 30 years of experience in the Indian Administrative Service (IAS) of which
more than 20 years of experience has been at both policy and project management
levels in the energy sector. He has worked in the power sector in the Ministry of
Power, Government of India, Department of Energy, Government of Maharashtra and
international institutions like UNEP and AIT.
<br><br>
In the Department of Energy, Government of Maharashtra his major contribution
was drafting the State Electricity Reform Bill 2000. During this period, he also held
the concurrent charge of Environment Department. He has worked with the UNEP
Risoe Centre on Energy, Climate and Sustainable Development (URC), located in
Denmark as Senior Energy Economist for five years (1993 - 1998). On behalf of
the Centre he also worked for UNDP on the development of Global Environment
Facility (GEF) capacity building proposals to equip Egypt, Jordan and Malaysia to
respond effectively to the Framework Convention on Climate Change (FCCC). All
the energy-environment projects and climate change mitigation studies extensively
covered power sector reforms, energy efficiency and conservation options. Dr. Deo is a
recipient of the World Wind Energy Award 2005 from World Wind Energy Association
for his outstanding achievement in the dissemination of wind energy. Confederation of
Indian Industry (CII) selected him for their national award “Distinguished Personality
- Energy Management” for the year 2006.
`
    },
    {
      name: 'Mr. VP Raja',
      title: 'Former Chairman, Maharashtra Electricity Regulatory Commission',
      image: 'assets/images/43d5630f55154002771ee4d3d529bfc9.jpg',
      description: 'Mr VP Raja is a distinguished leader whose contributions have profoundly shaped India’s power sector. As Chairman of the Expert Appraisal Committee (Thermal Power Plants & Coal Mines) under the Ministry of Environment and Forests, he played a pivotal role in evaluating power and coal mining projects, ensuring environmental sustainability through rigorous impact assessments and management plans.<br><br>His association with institutions varies from being associated with ASSOCHAM, FICCI, CII and PHD to being member of the board of governors of the Institution of Internal Auditors, to serving as guest faculty at IITs, IIMs, ASCI, Hyderabad, MDI and other institutions. He was also panelist on the panel of Euromoney Global Investors Panel London, treasurer of World Energy Council of India and treasurer of Indian Management Association <br><br> Dr. Garg has been felicitated with prestigious awards and recognitions, that of “Pride of India Award” in USA in 2006-2007, “The Golden Peacock Award” 2007, for excellence in corporate governance (National Category); He has addressed “US Congressional Renewable Energy summit” 2008 organized by congressional task force at the library of US Congress at Washington; “Lifetime Achievement award” for infrastructure development in the country; “Best Chief Executive Gold Award”2007; “Shiromani Award” for contribution to industry and infrastructure; “Swami Vivekananda Award” and consecutively won MoU “Excellence” Award for year 2005-05 and 2006-07. <br><br> In his role as Chairman of the Maharashtra Electricity Regulatory Commission (MERC), Mr. Raja led a quasi-judicial body overseeing critical responsibilities, including electricity tariff regulation, renewable energy promotion, power purchase agreement approvals, and dispute resolution among utilities. His leadership seamlessly integrated legislative, executive, and judicial functions, driving stability and innovation in Maharashtras power sector. <br><br>Beyond his regulatory roles, Mr. Raja has been an esteemed educator, teaching Quantitative Techniques, Statistics, Financial Economics, and Environmental Management at JBIMS for over 12 years, shaping future leaders with his expertise and insights.'
    },
    {
      name: 'Mr. R N Prashar',
      title: 'Former Chairman, Harayana Electricity Regulatory Commission',
      image: 'assets/images/R-N-Prasher.png',
      description: "Mr. RN Prasher, IAS (Retd.) took over as Chairman of Haryana Electricity Regulatory Commission in 2012. He holds Master’s degrees in Economics and Physics and Bachelor’s degree in Law. <br><br>Mr. Prasher joined Indian Administrative Service (IAS) in 1975. An IAS officer of 1975 batch (Haryana Cadre), he served the State in various capacities fro  heading district administration as Deputy Commissioner to important Government Departments like Home, Town & Country Planning, Education, Food and Supplies, Excise and Taxation, Transport, Irrigation and Power etc. He has also been Home Secretary, Chandigarh Administration, Chandigarh (U.T.) during 1990-92. He headed large Govt. Undertakings such as Housing Board, HUDA, HARTRON etc.<br><br> He retired in 2009 from the post of Financial Commissioner and Principal Secretary to Government, Haryana, Irrigation Department. After retirement, Mr. Prasher was re-employed as Principal Advisor to Chief Minister, Haryana."
    },
    {
      name: 'Dr. V K Garg',
      title: 'Former Chairman, Joint Electricity Regulatory Commission',
      image: 'assets/images/mqdefault.jpg',
      description: "Dr. VK Garg has experience of over 17 years with Government of India, Ministry of Industry & Commerce, Planning commission and Ministry of finance. Furthermore, he and Director (Fin.) at Powergrid Corporation of India Ltd. <br><br> Dr. Garg has been founder director of Power Link Transmissions Ltd., joint venture between Tata Power & PowergridCorp.Ltd. He was also director at power trading corporation. <br><br>Dr. Garg is a MA, MBA and has also pursued Ph.D in business administration; he has had exposure at Bradford University, U.K., Texas University Dallas, USA and Cambridge University, U.K. He received on the job training at Ministry of industry, Commerce, Agriculture, Labor, Planning Commission, RBI, IDBI, UTI, EXIM bank, CSO, Department of Statistics and Department of Public Enterprises. His association with institutions varies from being associated with ASSOCHAM, FICCI, CII and PHD to being member of the board of governors of the Institution of Internal Auditors, to serving as guest faculty at IITs, IIMs, ASCI, Hyderabad, MDI and other institutions. He was also panelist on the panel of Euromoney Global Investors Panel London, treasurer of World Energy Council of India and treasurer of Indian Management Association.<br><br> Dr. Garg has been felicitated with prestigious awards and recognitions, that of “Pride of India Award” in USA in 2006-2007, “The Golden Peacock Award” 2007, for excellence in corporate governance (National Category); He has addressed “US Congressional Renewable Energy summit” 2008 organized by congressional task force at the library of US Congress at Washington; “Lifetime Achievement award” for infrastructure development in the country; “Best Chief Executive Gold Award”2007; “Shiromani Award” for contribution to industry and infrastructure; “Swami Vivekananda Award” and consecutively won MoU “Excellence” Award for year 2005-05 and 2006-07."
    },
    {
      name: 'Ms. Sudha Mahalingam',
      title: 'Former Regulator, Petroleum and Natural Gas Regulatory Board',
      image: 'assets/images/images.jpeg',
      description: "Ms. Sudha Mahalingam is an energy economist with over 25 years of professional experience. She is currently Member of India's Petroleum and Natural Gas Regulatory Board entrusted with the responsibility of regulating downstream hydrocarbon sector. She is also a Member of India's National Security Advisory Board which advises the Prime Minister through the National Security Advisor on security-related issues. In this capacity, she provides policy inputs on India's energy security to the highest decision-making levels.<br><br>Prior to her current assignment, she held the prestigious Senior Fellowship at the Jawaharlal Nehru Centre for Contemporary Studies, Nehru Memorial Museum & Library, New Delhi, India where she contributed to shaping the country's discourse on energy security. In 2007, Sudha Mahalingam, was awarded the first K. Subrahmanyam award for excellence in strategic studies by IDSA, India's leading think-tank on strategic studies, in recognition of her contribution to the debate on India's energy security.<br><br>During her long career, she has worked for several leading think-tanks and research institutes as well as in mainstream business journalism. Her areas of interest encompass the geopolitical, economic, environmental and regulatory dimensions of all forms of energy including oil, gas, electricity including nuclear, hydro and coal as well as midstream and downstream activities like refining, petrochemicals, fertilizers etc. She has published numerous articles in Indian and international journals and writes regularly in the opinion columns of newspapers. Sudha Mahalingam has represented India in several international conferences in her capacity as an energy expert. She is a star speaker in national conferences on energy-related issues."
    },
    {
      name: 'Mr. Chintan Shah',
      title: 'Group President, ReNew',
      image: 'assets/images/chintan-shah.jpg',
      description: "Mr. Chintan Shah is a seasoned professional with 28 years of extensive experience in the renewable energy sector, spanning manufacturing, project execution, consultancy, financing, and policy planning. A distinguished leader in the field, he has significantly contributed to the growth and development of India’s renewable energy landscape.<br><br>He is currently the Group President for Strategic Business Development & Policy Affairs at Renew Pvt. Ltd., a leading de-carbonization company. In this role, he leads strategic initiatives and advocates for policies to advance the company’s vision of sustainable and clean energy.<br><br>Previously, Mr. Shah served as the Director (Technical) at the Indian Renewable Energy Development Agency Ltd. (IREDA), India’s only dedicated financial institution for renewable energy and energy efficiency projects. During his tenure at IREDA, which began on March 5, 2018, he oversaw various portfolios and played a crucial role in achieving key performance targets related to loan sanctions, disbursements, gross margins, non-performing assets (NPAs), corporate social responsibility, sustainable development, and R&D. His responsibilities included project appraisal, financing, policy formulation, planning, and monitoring of renewable energy projects, including wind, small and large hydro, biomass, cogeneration, solar, biogas, waste-to-energy, and energy efficiency initiatives.<br><br>In addition to his tenure at IREDA, Mr. Shah served as Principal Advisor to the National Solar Energy Federation of India (NSEFI) in an honorary capacity. Earlier in his career, he held the position of President at Suzlon Group, where he led Strategic Business Development and played an instrumental role in guiding the group towards new business opportunities and advocating for progressive policy and regulatory frameworks.<br><br>Mr. Shah’s journey in the renewable energy sector began at The Energy and Resources Institute (TERI) in 1996 as a Research Associate. Over the years, he has been at the forefront of innovative projects and impactful policy advocacy, earning a reputation as a thought leader in the industry."
    },
    {
      name: 'Mr. Balawant Joshi',
      title: 'MD, Idam Infrastructure Advisory',
      image: 'assets/images/1516286862013.jpeg',
      description: "With over 31 years of experience in the renewable energy and utilities sector, Mr. Balawant Joshi is a pioneer in driving India’s energy transition. His expertise spans the entire power value chain, from generation to distribution. He played a key role in shaping India’s renewable energy landscape by designing the Feed-In Tariff (FIT) framework, implementing Renewable Purchase Obligations (RPO), and introducing the Renewable Energy Certificate (REC) Mechanism. <br><br>In the field of energy efficiency, Mr. Balawant was involved in designing the Perform, Achieve and Trade (PAT) mechanism—a market-based approach to enhancing industrial energy efficiency. He has also made significant contributions to institutionalizing demand-side management in India. He is a member of the Institute of Electrical and Electronics Engineers (IEEE) and a life member of the Computer Society of India. An electrical engineer by training, he also holds degrees in finance and software technology."
    },
    {
      name: 'Mr. Harry Dhaul',
      title: 'Director General, IPPAI',
      image: 'assets/images/big_347979_1418200924.webp',
      description: "Mr. Harry Dhaul is a visionary leader with over 30 years of experience in the power and infrastructure sectors. As the Founder and Director General of the Independent Power Producers Association of India (IPPAI), he has been at the forefront of driving policy discourse and advocating for private sector participation in India's evolving energy landscape.<br><br>A dynamic thought leader, Mr. Dhaul is currently a member of the Advisory Group of the Ministry of Power, the Convenor of the Sub Group on Transmission, and a member of the Sub Group on amendments to the Electricity Act 2003. He also serves on the State Advisory Committee of the Maharashtra Electricity Regulatory Commission.<br><br>His contributions to India’s energy sector date back to the 1990s when he served on the Planning Commission consultative committee for the 8th and 9th Five-Year Plans of the Central Electricity Authority, Government of India. As the energy sector transitioned from state-controlled to increased private sector participation, Mr. Dhaul recognized the need for a neutral platform to deliberate on policy and regulatory issues. This insight led to the founding of IPPAI in 1994 as an independent, non-profit organization dedicated to promoting dialogue and examining critical issues in the power and infrastructure sectors.<br><br>Under his leadership, IPPAI has collaborated with numerous ministries, including the Ministry of Power, Ministry of Panchayati Raj, and Ministry of Rural Development, to shape policy and regulatory frameworks that encourage sustainable development and private investment.<br><br>Mr. Dhaul’s vast experience and deep understanding of the sector have made him a trusted consultant and advisor to the Ministry of Power, Planning Commission, and various regulatory bodies. He has also been an integral part of several ministerial delegations since 1992, aiming to attract investment into India's power sector.<br><br>An Economics graduate from the University of Mumbai, Mr. Dhaul continues to be a driving force in shaping the future of the Indian power sector through his visionary leadership and commitment to fostering collaboration between the public and private sectors."
    }
  ];

  selectedAdvisor: any = null;

  openPopup(advisor: any) {
    this.selectedAdvisor = advisor;
  }

  closePopup() {
    this.selectedAdvisor = null;
  }

  getFormattedDescription(description: string): string {
    return description.replace(/\n/g, '<br><br>');
  }
  
}
