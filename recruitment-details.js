const RECRUITMENT_DETAILS = [
  {
    id: 1,
    job_code: "JCN00001",
    position: "General Manager - Sales & Marketing",
    slug: "general-manager-sales-and-marketing",
    job_description: `Responsible for the development and delivery of the strategic plan to achieve business objectives, drive profit and champion customer experience.
    Identify new and existing business opportunities to increase the growth of the organisation, promoting strong client engagement, retention and attraction strategies
    Identify and operationalise commercial market opportunities
    Establish a structured multi-channel sales framework across the business operations with a focus on building a high-performance sales culture
    Working in partnership with the COO and Service Delivery team to enable organisational objectives to be achieved
    Maintain an up to date understanding of competitor knowledge, contemporary practices and market opportunities
    Responsible for effective financial management reporting and sales forecasting
    Participate as an active member of the Executive Management Team
    Establish and maintain business partnerships with key stakeholders both internally and externally
    Provide leadership, direction, mentoring and professional development to a large team of experienced sales and marketing professionals
    Communicate and report effectively to the Chief Executive Officer and the Board.`,
    job_requirement: `Responsible for the development and delivery of the strategic plan to achieve business objectives, drive profit and champion customer experience
    Identify new and existing business opportunities to increase the growth of the organisation, promoting strong client engagement, retention and attraction strategies
    Identify and operationalise commercial market opportunities
    Establish a structured multi-channel sales framework across the business operations with a focus on building a high-performance sales culture
    Working in partnership with the COO and Service Delivery team to enable organisational objectives to be achieved
    Maintain an up to date understanding of competitor knowledge, contemporary practices and market opportunities
    Responsible for effective financial management reporting and sales forecasting
    Participate as an active member of the Executive Management Team
    Establish and maintain business partnerships with key stakeholders both internally and externally
    Provide leadership, direction, mentoring and professional development to a large team of experienced sales and marketing professionals
    Communicate and report effectively to the Chief Executive Officer and the Board.`,
    region: "Yangon",
    category: "Sales & Customer Services",
    vacant: 1,
    gendar: "M/F",
    deadline: "24/7/2021",
    benefits: "Yearly Bonus + Transportation Allowance",
    highlights: [
        "An awesone company", "Join a winning team", "You can make a difference"
    ],
    career_opportunities: [
        "Opportunities for promotion",
        "Possibility for job training",
        "Learn new skills and techniques",
    ],
  },
  {
    id: 2,
    job_code: "JCN00002",
    position: "General Manager - Finance",
    slug: "general-manager-finance",
    job_description: `Monitor and improve the system in order to ensure billings are performed on time and in accurate manner.
    Excellent team player coordinating with cross-teams in implementation of company policies and procedures.
    Formulate and recommend the strategy for bill collection
    Monitor and improve the system to ensure management reports relating to Revenue and Accounts Receivable are produced on time and in accurate manner.
    Strong analytical ability and experienced in handling large numbers.
    Formulate, recommend and enforce processes and procedures in order to improve internal control and operational efficiency in relation to store finance.
    Strong client management skill
    Experience in managing a relatively large team with multiple locations across the country.`,
    job_requirement: `Bachelor’s degree in accounting or finance/Advanced degree in accounting, business, economics, finance in a related field
•    5 ~ 8 years’ experience in accounting or finance function with some managerial experience
•    Understand and adhere to financial regulations, legislation, and international financial standard
•    Manage the day-to-day financial operations, interact with consulting firms for tax preparation, auditing, banking,  investments, and financial purpose
•    Managing the financial opportunities and risks of the company’s Financial Planning and Budgeting
•    Prepare monthly, annual reports and present financial reports to board members, stakeholders and executives
•    Experience with computerized general ledger accounting packages
•    Self-motivated, dynamic and strong organizational skills`,
    region: "Yangon",
    category: "Sales & Customer Services",
    vacant: 1,
    gendar: "M/F",
    deadline: "24/7/2021",
    benefits: "Yearly Bonus + Transportation Allowance",
    highlights: [
        "An awesone company", "Join a winning team", "You can make a difference"
    ],
    career_opportunities: [
        "Opportunities for promotion",
        "Possibility for job training",
        "Learn new skills and techniques",
    ],
  },
  {
    id: 3,
    job_code: "JCN00007",
    position: "Assistant General Manager - Sales",
    slug: "assistant-general-manager-sales",
    job_description: `Create strong relationships with key client stakeholders at both senior and mid-management levels · Work closely with colleagues on cross-territory opportunities and other internal teams on marketing materials and cause studies · Understand the competitive landscape and market trends · Understand and effectively communicate the company's value prop, tech, process and current partnerships · Maintain sales staff by recruiting, selecting, orienting and training employees. As well as counseling and disciplining employees; planning, monitoring and appraising job results · Ability to identify and solve client issues strategically · Excellent interpersonal skills, with the ability to communicate effectively with management and cross-functional teams, for both technical and non-technical audiences · Building and maintaining strong, long-lasting customer relationships · Achieve growth and hit sales targets by successfully managing the sales team · Design and implement a strategic business plan that expands company’s customer base and ensure its strong presence`,
    job_requirement: `· Bachelor’s degree in business and any master degree related with applied position · 3 to 5 years experiences in similar position and 8 to 10 years in related fields. · Experience in planning and implementing sales strategic · Successful previous experience as a sales manager, consistently meeting or exceeding targets · Committed to continuous education through workshops, seminars and conferences · Excellent mentoring, coaching and people management skills · Demonstrable experience as head of sales, developing client-focused, differentiated and achievable solutions · Ability to prepare reports and use of appropriate mode of communication. · Must be proficient at analyzing data, building reporting and making strategic recommendations based on data and trends · Previous Experiences and success story is essential to present. · Excellent listening, negotiation and presentation skills · Excellent verbal and written communications skills · A suitable candidate for this position must have great computer skills and demonstrate high proficiency in the use of Ms Word, Ms Excel, and PowerPoint · Must be willing to travel work extended hours , weekends and holiday`,
    region: "Yangon",
    category: "Sales & Customer Services",
    vacant: 3,
    gendar: "M/F",
    deadline: "24/7/2021",
    benefits: "Yearly Bonus + Transportation Allowance",
    highlights: [
        "An awesone company", "Join a winning team", "You can make a difference"
    ],
    career_opportunities: [
        "Opportunities for promotion",
        "Possibility for job training",
        "Learn new skills and techniques",
    ],
  },
];

export function getAllJobs() {
    return RECRUITMENT_DETAILS;
}

export function getJobBySlug(slug) {
    return RECRUITMENT_DETAILS.find((job) => job.slug === slug);
}

