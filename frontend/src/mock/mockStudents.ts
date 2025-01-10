import { Student } from "../student-data.types";

export const mockStudents: Student[] = [
  {
    id: 1,
    name: "Alice Johnson",
    class: "Math 101",
    gradeLevel: 10,
    leapScores: [
      {
        subject: "Math",
        score: 85,
        tag: "Mastery",
        pointsToNextBand: 5,
      },
    ],
    subcategories: [
      { name: "Interpreting Functions", performance: "Strong" },
      { name: "Algebra", performance: "Moderate" },
    ],
  },
  {
    id: 2,
    name: "Bob Smith",
    class: "Math 101",
    gradeLevel: 11,
    leapScores: [
      {
        subject: "Math",
        score: 65,
        tag: "High Basic",
        pointsToNextBand: 15,
      },
    ],
    subcategories: [
      { name: "Interpreting Functions", performance: "Weak" },
      { name: "Algebra", performance: "Moderate" },
    ],
  },
];
