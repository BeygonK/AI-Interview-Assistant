import {
  Calendar,
  LayoutDashboard,
  List,
  Settings,
  WalletCards,
} from "lucide-react";

export const SideBarData = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Schedule Interviews",
    icon: Calendar,
    path: "/schedule-interviews",
  },
  {
    title: "All Interviews",
    icon: List,
    path: "/all-interviews",
  },
  {
    title: "Billing",
    icon: WalletCards,
    path: "/billing",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export const InterviewerType = [
  {
    title: "Technical",
    icon: "👨‍💻",
  },
  {
    title: "Behavioral",
    icon: "🗣️",
  },
  {
    title: "Experience",
    icon: "👔",
  },
  {
    title: "Problem Solving",
    icon: "🧩",
  },
];

//AI prompts
export const QUIZ_PROMPT = `You are an AI interviewer. You will be given a job description and a list of interview questions. Your task is to generate a quiz for the interview based on the job description and the interview questions. The quiz should be in the following format:
Job Title: {{job title}}
Job Description: {{job description}}
Interview Duration: {{interview duration}}
Interview Type: {{interview type}}

Your task:
Analyze the job description and the interview questions and generate a quiz for the interview. The quiz should be in the following format:
Generate a quiz for the interview based on the job description and the interview questions. The quiz should be in the following format:
Adjust the quiz based on the interview type. 
Ensure that the quiz is relevant to the job description and the interview type
Ensure the tone of the quiz is professional and appropriate for a job interview
Format your response in JSON format with arrays of questions and answers in the following format:
{
  "questions": [
    {
      "question": "",
      type: 'Technical' | 'Behavioral' | 'Experience' | 'Problem Solving',
},
{...}
]
The goal is to create relevant and engaging questions that will help the interviewer assess the candidate's skills and fit for the role.
`;
