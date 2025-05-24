import { ChapterData } from '../types';

export const chapters: ChapterData[] = [
  {
    id: 1,
    title: "Chapter 1: Fundamentals of Management",
    questions: [
      // True/False Questions (1-12)
      { id: "1-1", text: "A great manager makes a job more enjoyable and productive", type: "truefalse", correctAnswer: "true" },
      { id: "1-2", text: "Managers play an important role in dealing with various challenges being faced by organizations today", type: "truefalse", correctAnswer: "true" },
      { id: "1-3", text: "A manager's job is all about personal achievement.", type: "truefalse", correctAnswer: "false" },
      { id: "1-4", text: "In traditionally structured organizations managers can be classified as first-line managers, middle managers, or top managers", type: "truefalse", correctAnswer: "true" },
      { id: "1-5", text: "Efficiency is described as 'doing things right.'", type: "truefalse", correctAnswer: "true" },
      { id: "1-6", text: "According to Robert L. Katz, managers need to have technical, human, and conceptual skills.", type: "truefalse", correctAnswer: "true" },
      { id: "1-7", text: "Technical skills become less important as a manager moves into higher levels of management.", type: "truefalse", correctAnswer: "true" },
      { id: "1-8", text: "Conceptual skills are less important to top managers", type: "truefalse", correctAnswer: "false" },
      { id: "1-9", text: "Innovation is confined to high-tech and other technologically sophisticated organizations.", type: "truefalse", correctAnswer: "false" },
      { id: "1-10", text: "For organizations to survive successfully, managers must create a customer-responsive organization", type: "truefalse", correctAnswer: "true" },
      { id: "1-11", text: "Management is universally needed in all organizations.", type: "truefalse", correctAnswer: "true" },
      { id: "1-12", text: "A portion of a manager's job, especially at lower organizational levels may entail duties that are often more clerical than managerial", type: "truefalse", correctAnswer: "true" },

      // Additional True/False (13-15)
      { id: "1-13", text: "Management offers challenging, exciting and creative opportunities for misunderstanding and fulfilling work.", type: "truefalse", correctAnswer: "false" },
      { id: "1-14", text: "Challenges of Being A Manager to have opportunities to think creatively and use imagination", type: "truefalse", correctAnswer: "false" },
      { id: "1-15", text: "Rewards of Being A Manager to may have duties that are more clerical than managerial", type: "truefalse", correctAnswer: "false" },

      // Multiple Choice Questions (16-35)
      { id: "1-16", text: "Which of the following statements regarding managers in today's world is accurate?", type: "multiplechoice", options: [
        "Their age range is limited to between 30 and 65 years.",
        "They are found only in large corporations.",
        "They can be found exclusively in for-profit organizations.",
        "The single most important variable in employee productivity and loyalty is the quality of the relationship between employees and their direct supervisors."
      ], correctAnswer: 3 },
      
      { id: "1-17", text: "An individual who works with and through other people by coordinating their work activities in order to accomplish organizational goals is ______.", type: "multiplechoice", options: [
        "an assembly line worker", "a laborer", "a manager", "a salesperson"
      ], correctAnswer: 2 },

      { id: "1-18", text: "Managers with titles such as regional manager, project leader, or division manager are", type: "multiplechoice", options: [
        "first-line managers", "top managers", "production managers", "middle managers"
      ], correctAnswer: 3 },

      { id: "1-19", text: "______ are responsible for making organization-wide decisions and establishing the plans and goals that affect the entire organization.", type: "multiplechoice", options: [
        "First-line managers", "Top managers", "Production managers", "Research managers"
      ], correctAnswer: 1 },

      { id: "1-20", text: "A ______ is an example of a first-line manager.", type: "multiplechoice", options: [
        "division manager", "store manager", "regional manager", "shift manager"
      ], correctAnswer: 3 },

      { id: "1-21", text: "______ have titles such as executive vice president, chief operating officer, and chief executive officer.", type: "multiplechoice", options: [
        "Team leader", "Middle managers", "First-line managers", "Top managers"
      ], correctAnswer: 3 },

      { id: "1-22", text: "An automobile manufacturer increased the total number of cars produced keeping the production cost the same. The manufacturer ______.", type: "multiplechoice", options: [
        "increased its equity", "increased its efficiency", "increased its effectiveness", "increased its effabiliy"
      ], correctAnswer: 1 },

      { id: "1-23", text: "Effectiveness is associated with ______.", type: "multiplechoice", options: [
        "reducing inventory", "decreasing production time", "doing the right things", "doing things right"
      ], correctAnswer: 2 },

      { id: "1-24", text: "Today, the basic management functions have been condensed to ______.", type: "multiplechoice", options: [
        "planning, organizing, commanding, and coordinating",
        "planning, organizing, coordinating, and controlling",
        "planning, organizing, commanding, and controlling",
        "planning, organizing, leading, and controlling"
      ], correctAnswer: 3 },

      { id: "1-25", text: "Establishing strategies for achieving organizational goals is a part of the ______ function.", type: "multiplechoice", options: [
        "leading", "coordinating", "planning", "organizing"
      ], correctAnswer: 2 },

      { id: "1-26", text: "Organizing includes ______.", type: "multiplechoice", options: [
        "setting organizational goals", "hiring organizational members",
        "motivating organizational members", "determining who does what tasks"
      ], correctAnswer: 3 },

      { id: "1-27", text: "A manager resolving conflict among organizational members is performing which of the following functions?", type: "multiplechoice", options: [
        "controlling", "planning", "organizing", "leading"
      ], correctAnswer: 3 },

      { id: "1-28", text: "The process of monitoring, comparing, and correcting is called ______.", type: "multiplechoice", options: [
        "controlling", "planning", "leading", "organizing"
      ], correctAnswer: 0 },

      { id: "1-29", text: "According to Mintzberg's managerial roles, the ______ roles are ones that involve people and other duties that are ceremonial and symbolic in nature.", type: "multiplechoice", options: [
        "informational", "interpersonal", "technical", "decisional"
      ], correctAnswer: 1 },

      { id: "1-30", text: "A deliberate arrangement of people to accomplish some specific purpose (that individuals independently could not accomplish alone).", type: "multiplechoice", options: [
        "Organization", "technical", "conceptual", "empirical"
      ], correctAnswer: 0 },

      { id: "1-31", text: "Common Characteristics of Organizations", type: "multiplechoice", options: [
        "Have a distinct purpose (goal)", "Composed of people",
        "Have a deliberate structure", "All of the above"
      ], correctAnswer: 3 },

      { id: "1-32", text: "Which of the following skills tend to be more important for first-line managers since they manage employees who produce the organization's product?", type: "multiplechoice", options: [
        "human", "technical", "conceptual", "empirical"
      ], correctAnswer: 1 },

      { id: "1-33", text: "Which of the following is true regarding a manager's job with respect to customers?", type: "multiplechoice", options: [
        "Today, most employees in developed countries work in product sectors.",
        "Managers have not yet recognized the importance of delivering consistent high-quality customer services.",
        "Managers must create a customer-responsive organization in order to survive successfully in today's environment.",
        "Employees play an insignificant role in delivering quality customer services."
      ], correctAnswer: 2 },

      { id: "1-34", text: "Which of the following is true regarding the changes that a manager's job is undergoing?", type: "multiplechoice", options: [
        "Managers practicing sustainability integrate economic, environmental, and social opportunities into the business strategy.",
        "Digitization hardly affects a manager's responsibilities.",
        "According to managers, employees contribute the least to the success of a customer service organization.",
        "Innovative efforts are exclusively important for managers serving in high-tech organizations."
      ], correctAnswer: 0 },

      { id: "1-35", text: "Which of the following represents one of the challenges of management?", type: "multiplechoice", options: [
        "enjoy relatively easy work", "support, coach, and nurture others",
        "have little influence on organizational outcomes", "must deal with a variety of personalities"
      ], correctAnswer: 3 }
    ]
  },
  {
    id: 2,
    title: "Chapter 2: Decision Making",
    questions: [
      // True/False Questions (36-44)
      { id: "2-1", text: "The decision-making process begins by identifying decision criteria", type: "truefalse", correctAnswer: "false" },
      { id: "2-2", text: "A decision criterion defines what is important or relevant to resolving a problem.", type: "truefalse", correctAnswer: "true" },
      { id: "2-3", text: "In the decision-making process, after allocating weights to the decision criteria, the decision maker lists viable alternatives that could resolve the problem.", type: "truefalse", correctAnswer: "true" },
      { id: "2-4", text: "Once the alternatives to solving a problem have been identified, the next step in the decision-making process is selecting one of these alternatives.", type: "truefalse", correctAnswer: "false" },
      { id: "2-5", text: "Decision making is a part of the planning, organizing, leading, and controlling functions and thus, the essence of management", type: "truefalse", correctAnswer: "true" },
      { id: "2-6", text: "Intuitive decision-making complements rational decision making but not bounded rational decision making.", type: "truefalse", correctAnswer: "false" },
      { id: "2-7", text: "A policy is an explicit statement that tells a manager what can or cannot be done.", type: "truefalse", correctAnswer: "false" },
      { id: "2-8", text: "Managers need to understand cultural differences to make effective decisions in today's fast-moving world.", type: "truefalse", correctAnswer: "true" },
      { id: "2-9", text: "Nonprogrammed decision making relies on procedures, rules, and policies.", type: "truefalse", correctAnswer: "false" },

      // Multiple Choice Questions (45-54)
      { id: "2-10", text: "A series of eight steps that begins with identifying a problem and concludes with evaluating a decision's effectiveness is known as ______.", type: "multiplechoice", options: [
        "the decision-making process", "decision support theory",
        "a decision-tree analysis", "a decision information system"
      ], correctAnswer: 0 },

      { id: "2-11", text: "A(n) ______ is the existence of a discrepancy between an existing and a desired state of affairs.", type: "multiplechoice", options: [
        "hazard", "risk", "uncertainty", "problem"
      ], correctAnswer: 3 },

      { id: "2-12", text: "Amanda, a single parent, is looking for a new job. Considering that she has two school-going children, she is particularly keen on finding an employer who can provide her with alternative work arrangements such as flexible work hours and telecommuting. In terms of the decision-making process, these represent Amanda's ______.", type: "multiplechoice", options: [
        "decision criteria", "problems", "alternatives", "heuristics"
      ], correctAnswer: 0 },

      { id: "2-13", text: "The final step in the decision-making process is to ______.", type: "multiplechoice", options: [
        "determine the criteria for the next decision",
        "analyze the process of allocating weights to the decision criteria",
        "evaluate the outcome of the decision",
        "implement the chosen alternative"
      ], correctAnswer: 2 },

      { id: "2-14", text: "A procedure ______.", type: "multiplechoice", options: [
        "is an explicit statement that tells a manager what can or cannot be done",
        "is a series of sequential steps a manager uses to respond to a structured problem",
        "is used mainly for unstructured, rather than structured, problems",
        "is subject to the interpretation of the decision maker"
      ], correctAnswer: 1 }
    ]
  },


  {
    id: 3,
    title: "Chapter 3: Planning",
    questions: [
  // True/False Questions (1-17)
  { id: "3-1", text: "Planning is concerned with how objectives are to be accomplished, not what is to be accomplished.", type: "truefalse", correctAnswer: "false" },
  { id: "3-2", text: "Planning provides direction to managers and non-managers alike.", type: "truefalse", correctAnswer: "true" },
  { id: "3-3", text: "The presence of planning inhibits the ability of departments and individuals to work together or organizations to move.", type: "truefalse", correctAnswer: "false" },
  { id: "3-4", text: "Planning helps managers eliminate uncertainty and insulates organizations from change.", type: "truefalse", correctAnswer: "false" },
  { id: "3-5", text: "Several research studies have conclusively proven that planning organizations always outperform non-planning organizations.", type: "truefalse", correctAnswer: "false" },
  { id: "3-6", text: "Studies indicate that doing a good job planning and implementing those plans play a bigger part in high performance than does how much planning is done.", type: "truefalse", correctAnswer: "true" },
  { id: "3-7", text: "The number of years used to define short-term and long-term plans has increased considerably because of the greater environmental certainty businesses have today.", type: "truefalse", correctAnswer: "false" },
  { id: "3-8", text: "Long-term plans are those with a time frame beyond five years.", type: "truefalse", correctAnswer: "true" },
  { id: "3-9", text: "Short-term plans are those covering one year or less.", type: "truefalse", correctAnswer: "true" },
  { id: "3-10", text: "When uncertainty is high and managers must be flexible in order to respond to unexpected changes, directional plans are preferable.", type: "truefalse", correctAnswer: "true" },
  { id: "3-11", text: "Directional plans are clearly defined and leave no room for interpretation.", type: "truefalse", correctAnswer: "false" },
  { id: "3-12", text: "The standard procedure to be followed by the human resources department of a company when initiating disciplinary action against an employee is an example of a standing plan.", type: "truefalse", correctAnswer: "true" },
  { id: "3-13", text: "As managers plan, they develop both goals and plans.", type: "truefalse", correctAnswer: "true" },
  { id: "3-14", text: "Most businesses have only the single goal of making profits.", type: "truefalse", correctAnswer: "false" },
  { id: "3-15", text: "Strategic goals focus exclusively on the financial performance of the organization.", type: "truefalse", correctAnswer: "false" },
  { id: "3-16", text: "Stated goals are those that an organization pursues.", type: "truefalse", correctAnswer: "false" },
  { id: "3-17", text: "Firms can monitor, and potentially influence, proposed legislative and political changes using lobbyists.", type: "truefalse", correctAnswer: "true" },

  // Multiple Choice Questions (18-39)
  { id: "3-18", text: "______ involves defining the organization's goals, establishing strategies for achieving those goals, and developing plans to integrate and coordinate work activities.", type: "multiplechoice", options: [
    "Execution", "Logistics", "Planning", "Operations"
  ], correctAnswer: 2 },
  
  { id: "3-19", text: "The effect of planning on managers is that it forces them to ______.", type: "multiplechoice", options: [
    "generate higher profits", "anticipate and respond to change",
    "eliminate uncertainty", "work at cross purposes"
  ], correctAnswer: 1 },

  { id: "3-20", text: "Which one of the following is among the reasons why managers should plan?", type: "multiplechoice", options: [
    "When work activities are coordinated around plans, inefficiencies become obvious.",
    "Uncertainty can be eliminated, and the organization can be insulated from change with planning.",
    "Planning eliminates the need to set goals.",
    "Planning eliminates the need to measure work effort."
  ], correctAnswer: 0 },

  { id: "3-21", text: "Which one of the following is true of the impact of formal planning on organizational performance?", type: "multiplechoice", options: [
    "Formal planning is associated with positive financial results.",
    "Organizations that formally plan invariably outperform those that don't plan.",
    "The amount of planning done is more important to high performance than the quality of planning and implementation.",
    "Companies can start seeing the impact of formal planning on performance about a year after starting the planning process."
  ], correctAnswer: 0 },

  { id: "3-22", text: "Most companies' plans can be classified as either ______ or ______.", type: "multiplechoice", options: [
    "strategic; financial", "operational; tactical",
    "social; economic", "strategic; operational"
  ], correctAnswer: 3 },

  { id: "3-23", text: "When formal planning fails to lead to higher performance, which one of the following is most likely to be the reason for the failure?", type: "multiplechoice", options: [
    "A participative style of planning was used.",
    "Managers were allowed too much autonomy.",
    "The company emphasized the control function over other functions.",
    "External forces constrain managers' options"
  ], correctAnswer: 3 },

  { id: "3-24", text: "Goals are different from plans because ______.", type: "multiplechoice", options: [
    "goals identify specific steps that the organization needs to achieve, and plans identify the overall mission of the organization",
    "goals describe financial objectives, and plans describe objectives related to social responsibility",
    "goals are important only for small companies, and plans are important only for large companies",
    "goals are desired outcomes, and plans describe how those outcomes will be accomplished"
  ], correctAnswer: 3 },

  { id: "3-25", text: "Which one of the following statements is true regarding an organization's plans?", type: "multiplechoice", options: [
    "Plans can differ based on time frame.",
    "Almost all plans are strategic plans.",
    "Strategic plans may result in unethical behaviors by employees.",
    "Long-term success is ensured if managers emphasize operational plans."
  ], correctAnswer: 0 },

  { id: "3-26", text: "Strategic plans are usually ______.", type: "multiplechoice", options: [
    "short term, directional, and standing",
    "short term, specific, and standing",
    "long term, directional, and single use",
    "long term, specific, and standing"
  ], correctAnswer: 2 },

  { id: "3-27", text: "______ plans apply to the entire organization and establish the organization's overall goals.", type: "multiplechoice", options: [
    "Departmental", "Strategic", "Operational", "Long-term"
  ], correctAnswer: 1 },

  { id: "3-28", text: "Operational plans are usually ______.", type: "multiplechoice", options: [
    "short term, directional, and standing",
    "short term, specific, and standing",
    "long term, directional, and single use",
    "long term, specific, and standing"
  ], correctAnswer: 1 },

  { id: "3-29", text: "Mr. Slabaugh wants to formulate a plan that lays out general guidelines for his employees and leaves room for interpretation. Which one of the following types of plans would best suit his requirement?", type: "multiplechoice", options: [
    "Informal", "Specific", "Directional", "Standing"
  ], correctAnswer: 2 },

  { id: "3-30", text: "Long-term plans are defined as those with a time frame beyond ______.", type: "multiplechoice", options: [
    "seven years", "one year", "five years", "three years"
  ], correctAnswer: 3 },

  { id: "3-31", text: "Short-term plans are those covering ______ or less.", type: "multiplechoice", options: [
    "three years", "one year", "six months", "five years"
  ], correctAnswer: 1 },

  { id: "3-32", text: "______ plans are clearly defined and leave no room for interpretation.", type: "multiplechoice", options: [
    "Directional", "Stated", "Long-term", "Specific"
  ], correctAnswer: 3 },

  { id: "3-33", text: "Todd Miller, CEO of Miller's Grocery, has determined that all stores should be well maintained both inside and out. This is an example of a ______.", type: "multiplechoice", options: [
    "directional plan", "specific plan",
    "financial goal", "social goal"
  ], correctAnswer: 0 },

  { id: "3-34", text: "A standing plan is ______.", type: "multiplechoice", options: [
    "an ongoing plan that provides guidance for activities performed repeatedly",
    "a plan that stands in place of a preferred plan in case of the failure of the latter",
    "a one-time plan specifically designed to meet the needs of a unique situation",
    "a flexible plan that sets out general guidelines for company strategy"
  ], correctAnswer: 0 },

  { id: "3-35", text: "Which one of the following is an example of a standing plan?", type: "multiplechoice", options: [
    "A retail chain's plan to counter the entry of a new competitor.",
    "A plan developed to address a sudden, unanticipated surge in demand.",
    "A fire escape policy establishing practices to be followed in an emergency.",
    "A plan to cope with radical changes in the political environment."
  ], correctAnswer: 2 },

  { id: "3-36", text: "When uncertainty is high, plans should be ______ and ______.", type: "multiplechoice", options: [
    "specific; flexible",
    "directional; standing",
    "short-term; directional",
    "general; informal"
  ], correctAnswer: 0 },

  { id: "3-37", text: "The commitment concept says that plans should ______.", type: "multiplechoice", options: [
    "extend far enough to meet those commitments made when the plans were developed",
    "be done for as long a time period as possible",
    "be done for as short a time period as possible",
    "not commit to specifically meeting the goals made when the plans were developed"
  ], correctAnswer: 0 },

  { id: "3-38", text: "In _____, goals set by top managers flow down through the organization and become subgoals for each organizational area.", type: "multiplechoice", options: [
    "management by objectives",
    "management by observation",
    "traditional goal setting",
    "traditional planning"
  ], correctAnswer: 2 },

  { id: "3-39", text: "_____ is a process of setting mutually-agreed upon goals and using those goals to evaluate employee performance.", type: "multiplechoice", options: [
    "Management by objectives",
    "Management by walking around",
    "Management by observation",
    "Management by exception"
  ], correctAnswer: 0 },
  { id: "3-40", text: "Environmental scanning refers to an organization's ________.", type: "multiplechoice", options: [
    "social consciousness with regard to sustainability",
    "adoption of tools to measure its carbon footprint",
    "screening vast amounts of information to detect trends",
    "ability to focus solely on potential political change."
  ], correctAnswer: 2 }
]
  },







  {
    id: 4,
    title: "Chapter 4: Organizing",
    questions: [

      { id: "4-1", text: "Work specialization is also known as division of labor", type: "truefalse", correctAnswer: "true" },
      { id: "4-2", text: "Organizational structure is the formal chain of command of jobs within an organization.", type: "truefalse", correctAnswer: "false" },
      { id: "4-3", text: "Organizational design is the degree to which standardized procedures are in place in an organization.", type: "truefalse", correctAnswer: "false" },
      { id: "4-4", text: "Division of labor refers to the practice of identifying some workers as potential members of a bargaining unit and other workers as members of management.", type: "truefalse", correctAnswer: "false" },
      { id: "4-5", text: "The chain of command is a principle that states that a person should report to only one boss.", type: "truefalse", correctAnswer: "false" },
      { id: "4-6", text: "All other things unchanged, the narrower the span of control, the more efficient the organization is.", type: "truefalse", correctAnswer: "false" },
      { id: "4-7", text: "Employee empowerment gives employees more authority to make decisions.", type: "truefalse", correctAnswer: "false" },

      // Multiple Choice Questions (94-115)
      { id: "4-8", text: "______ is the formal arrangement of jobs within an organization.", type: "multiplechoice", options: [
        "Departmentalization", "Organizational design",
        "Organizational structure", "Work specialization"
      ], correctAnswer: 2 },

      { id: "4-9", text: "Organizational design is a process that involves decisions about ______.", type: "multiplechoice", options: [
        "work specialization and cost-leadership",
        "chain of command and span of control",
        "centralization and differentiation",
        "departmentalization and diversification"
      ], correctAnswer: 1 },

      { id: "4-10", text: "Michelle is very concerned about the formal framework by which job tasks are divided, grouped, and coordinated within her unit. This implies that she is concerned about ______.", type: "multiplechoice", options: [
        "the chain of command", "the organizational structure",
        "the organizational design", "Decentralization"
      ], correctAnswer: 1 },

      { id: "4-11", text: "The process of dividing work activities into separate job tasks is known as ______.", type: "multiplechoice", options: [
        "work specialization", "organizational design",
        "differentiation", "span of control"
      ], correctAnswer: 0 },

      { id: "4-12", text: "In the early 20th century, automobiles were made one at a time by craftsmen who could perform every operation necessary to build the car. Henry Ford decided to limit the number of tasks each worker performed so each person could become expert in his position. With this practice, Ford introduced ______.", type: "multiplechoice", options: [
        "departmentalization", "work specialization",
        "centralization", "Formalization"
      ], correctAnswer: 1 },

      { id: "4-13", text: "The process of grouping jobs together is known as ______.", type: "multiplechoice", options: [
        "departmentalization", "centralization",
        "formalization", "organizational design"
      ], correctAnswer: 0 },

      { id: "4-14", text: "At Chemetron, all the accounting people share one large work area; all the quality control people are housed in a large office next to the production floor; and maintenance has its own space at the back of the building. Chemetron is using ______.", type: "multiplechoice", options: [
        "departmental specialization", "functional departmentalization",
        "process departmentalization", "product specialization"
      ], correctAnswer: 1 },

      { id: "4-15", text: "Departmentalization based on ______ groups jobs on the basis of territory or physical location.", type: "multiplechoice", options: [
        "Customer", "product", "geography", "process"
      ], correctAnswer: 2 },

      { id: "4-16", text: "______ Specialists from different functional departments are assigned to work on projects led by project managers.", type: "multiplechoice", options: [
        "Matrix and project structures", "Liability",
        "Bureaucracy", "Authority"
      ], correctAnswer: 0 },

      { id: "4-17", text: "______ refers to the rights inherent in a managerial position to tell people what to do and to expect them to do it.", type: "multiplechoice", options: [
        "Responsibility", "Liability", "Bureaucracy", "Authority"
      ], correctAnswer: 3 },

      { id: "4-18", text: "______ is the obligation or expectation to perform a duty.", type: "multiplechoice", options: [
        "Responsibility", "Authority", "Commitment", "Duty"
      ], correctAnswer: 0 },

      { id: "4-19", text: "The ______ determines the number of levels and managers in an organization.", type: "multiplechoice", options: [
        "delegation of authority", "unity of command",
        "chain of command", "span of control"
      ], correctAnswer: 3 },

      { id: "4-20", text: "______ is the degree to which decision making takes place at upper levels of the organization.", type: "multiplechoice", options: [
        "Centralization", "Decentralization",
        "Formalization", "Departmentalization"
      ], correctAnswer: 0 },

      { id: "4-21", text: "Which of the following factors would require a more decentralized organizational structure?", type: "multiplechoice", options: [
        "When the lower-level managers want a voice in decisions.",
        "When the lower-level managers are not capable of making decisions.",
        "When the decisions to be made are not significant.",
        "When the company is large."
      ], correctAnswer: 0 },

      { id: "4-22", text: "______ refers to how standardized an organization's jobs are and the extent to which employee behavior is guided by rules and procedures.", type: "multiplechoice", options: [
        "Specialization", "Centralization",
        "Decentralization", "Formalization"
      ], correctAnswer: 3 },

      { id: "4-23", text: "______ Is the result of an interaction between the person and a situation; it is not a personal trait.", type: "multiplechoice", options: [
        "Motivation", "Communication",
        "Decentralization", "Formalization"
      ], correctAnswer: 0 },

      { id: "4-24", text: "______ is the transfer and understanding of meaning.", type: "multiplechoice", options: [
        "Motivation", "Communication",
        "Decentralization", "Formalization"
      ], correctAnswer: 1 },

      { id: "4-25", text: "Someone who can influence others and who has managerial authority.", type: "multiplechoice", options: [
        "Leader", "Manger", "Leadership", "Communication"
      ], correctAnswer: 0 }
    ]
  },
  {
    id: 5,
    title: "Chapter 5: Controlling",
    questions: [
      // True/False Questions (116-119)
      { id: "5-1", text: "Controlling is the process of monitoring, comparing, and correcting work performance.", type: "truefalse", correctAnswer: "true" },
      { id: "5-2", text: "Managers engage in controlling activities to protect the organization and its assets.", type: "truefalse", correctAnswer: "true" },
      { id: "5-3", text: "Managers should do nothing if the variance observed from the standard is acceptable.", type: "truefalse", correctAnswer: "true" },
      { id: "5-4", text: "If the variance between the standard and the actual result is in the organization's favor, managers do not need to do anything.", type: "truefalse", correctAnswer: "false" },

      // Multiple Choice Questions (120-135)
      { id: "5-5", text: "______ refers to the process of monitoring, comparing, and correcting work performance.", type: "multiplechoice", options: [
        "Controlling", "Checking", "Measuring", "Verifying"
      ], correctAnswer: 0 },

      { id: "5-6", text: "______ is the final step in the management process, which provides a critical link back to ______.", type: "multiplechoice", options: [
        "Organizing; planning", "Planning; controlling",
        "Controlling; planning", "Leading; organizing"
      ], correctAnswer: 2 },

      { id: "5-7", text: "Which one of the following management responsibilities determines if organizational goals are being achieved?", type: "multiplechoice", options: [
        "Designing the organization's structure", "Motivating employees",
        "Formulating business strategy", "Measuring firm's performance"
      ], correctAnswer: 3 },

      { id: "5-8", text: "Which one of the following observations best explains why the control function is important?", type: "multiplechoice", options: [
        "An effective control system includes employee empowerment.",
        "An effective control system assures that the organization will meet or exceed its goal.",
        "An effective control system is the only way managers know whether organizational goals are being met.",
        "Organizational strategies are formed during the controlling stage."
      ], correctAnswer: 2 },

      { id: "5-9", text: "Contours, Inc., knows each drill bit can cut approximately 100,000 holes before the hole size is smaller than the print specification so it changes drill bits after 95,000 uses. Contours, Inc. is using ______ control.", type: "multiplechoice", options: [
        "preventive", "predictive", "feedforward", "concurrent"
      ], correctAnswer: 2 },

      { id: "5-10", text: "Charles wants to prevent problems before their occurrence. Which one of the following is the most desirable type of control to achieve this goal?", type: "multiplechoice", options: [
        "Proactive control", "Preventive control",
        "Feedforward control", "Feedback control"
      ], correctAnswer: 2 },

      { id: "5-11", text: "The management control that takes place while a work activity is in progress is known as ______ control.", type: "multiplechoice", options: [
        "Immediate", "concurrent", "feedback", "consistent"
      ], correctAnswer: 1 },

      { id: "5-12", text: "The comparing step in the control process determines ______.", type: "multiplechoice", options: [
        "a company's relative position in the industry in terms of the standards used",
        "a company's relative position in the industry in terms of performance variances",
        "the variation between actual performance and an external benchmark from a noncompetitor",
        "the variation between actual performance and the standard"
      ], correctAnswer: 3 },

      { id: "5-13", text: "Which one of the following sources provides information which is comprehensive, formal, and easy to file and retrieve?", type: "multiplechoice", options: [
        "Oral reports", "Personal observations",
        "Online reports", "Written reports"
      ], correctAnswer: 3 },

      { id: "5-14", text: "Barry wants to use a tool that makes the data easy to visualize and is effective for showing relationships. Which one of the following tools is best suited for this?", type: "multiplechoice", options: [
        "Personal observation", "Spreadsheets",
        "Written reports", "Statistical reports"
      ], correctAnswer: 3 },

      { id: "5-15", text: "Blanca nods as she watches her new employee as he executes the steps in making French fries. Her purpose is to make sure he follows the instructions exactly as given. Blanca is using ______.", type: "multiplechoice", options: [
        "personal observation", "statistical reports",
        "mentoring", "nonverbal feedback"
      ], correctAnswer: 0 },

      { id: "5-16", text: "Sometimes the French fries are rather pale, other times they are golden, sometimes they are quite dark. Anna cooks them according to how much time she has available between customers. The variation in appearance can be attributed to ______.", type: "multiplechoice", options: [
        "customer demand", "the fact that there is no performance standard",
        "differences in the potatoes", "emphasis of quantity over quality"
      ], correctAnswer: 1 },

      { id: "5-17", text: "If a manager investigates how and why performance has deviated beyond the acceptable range of variation, and then corrects the source of the deviation, she is using ______.", type: "multiplechoice", options: [
        "feedback control", "immediate corrective action",
        "basic corrective action", "concurrent control"
      ], correctAnswer: 2 },

      { id: "5-18", text: "'No, James, you must start the timer after you lower the French fry basket into the fryer, not before.' This supervisor is using ______.", type: "multiplechoice", options: [
        "basic corrective action", "disciplinary action",
        "immediate corrective action", "delayed corrective action"
      ], correctAnswer: 2 },
      
      { id: "5-19", text: " Statco, Inc., has struggled to meet projected revenues for each of the past ten quarters. The firm hired Mark Adams to design a control system and offer suggestions to improve the firm's performance. Which one of the following is a key activity that the proposed control system should perform? ", type: "multiplechoice", options: [
        "Organizational planning ", "Performance measurement",
        "Organizational structuring", "Corporate governance"
      ], correctAnswer: 1 },
      
      { id: "5-20", text: " Brenda sometimes leaves out important facts and makes statements that cannot be corroborated. Brenda is delivering ________. ", type: "multiplechoice", options: [
        "observations", "statistical reports",
        "oral reports ", "anecdotes"
      ], correctAnswer: 2 }
    ]
  }
];

// Function to get all questions from all chapters
export const getAllQuestions = () => {
  return chapters.flatMap(chapter => chapter.questions);
};

// Function to get questions for a specific chapter
export const getChapterQuestions = (chapterId: number) => {
  const chapter = chapters.find(c => c.id === chapterId);
  return chapter ? chapter.questions : [];
};
