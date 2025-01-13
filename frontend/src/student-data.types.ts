export interface Student {
  id: number;
  name: string;
  class: string;
  gradeLevel: number; // New field: Grade level of the student
  leapScores: LeapScore[];
  subcategories: SubcategoryPerformance[];
}

export interface LeapScore {
  subject: string;
  score: number;
  tag: string; // e.g., Mastery, Advanced
  pointsToNextBand: number;
}

export interface SubcategoryPerformance {
  name: string; // Subcategory name, e.g., "Interpreting Functions"
  performance: "Strong" | "Moderate" | "Weak";
}
