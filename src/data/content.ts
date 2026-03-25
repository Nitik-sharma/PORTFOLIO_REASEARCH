export interface Publication {
  id: string;
  title: string;
  authors: string[];
  year: number;
  journal: string;
  doi?: string;
  arxiv?: string;
  category: string;
  abstract: string;
}

export interface Course {
  id: string;
  title: string;
  code: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
}

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  framework: string;
  results: string;
  math: string;
}

export const publications: Publication[] = [
  {
    id: "1",
    title: "Non-linear Dynamics in High-Dimensional Manifolds",
    authors: ["A. Aurelius", "J. Doe", "S. Smith"],
    year: 2024,
    journal: "Journal of Mathematical Physics",
    doi: "10.1063/jmp.2024.001",
    arxiv: "2401.00001",
    category: "Dynamics",
    abstract: "We explore the topological constraints on non-linear flows within high-dimensional manifolds, providing new bounds for stability."
  },
  {
    id: "2",
    title: "Computational Complexity of Quantum Phase Transitions",
    authors: ["A. Aurelius", "M. Planck"],
    year: 2023,
    journal: "Nature Computational Science",
    doi: "10.1038/ncomms.2023.042",
    arxiv: "2305.12345",
    category: "Quantum",
    abstract: "A novel algorithm for simulating phase transitions in quantum systems with O(log n) complexity."
  },
  {
    id: "3",
    title: "Stochastic Optimization in Neural Architectures",
    authors: ["A. Aurelius"],
    year: 2022,
    journal: "SIAM Journal on Optimization",
    doi: "10.1137/22M123456",
    category: "Optimization",
    abstract: "Proving convergence rates for stochastic gradient descent in non-convex landscapes with Lipschitz continuity."
  }
];

export const courses: Course[] = [
  {
    id: "c1",
    title: "Advanced Real Analysis",
    code: "MATH 401",
    role: "Lead Instructor",
    period: "Fall 2024",
    description: "Measure theory, Lebesgue integration, and Hilbert spaces.",
    tags: ["Proof-oriented", "Graduate"]
  },
  {
    id: "c2",
    title: "Computational Fluid Dynamics",
    code: "PHYS 305",
    role: "Guest Lecturer",
    period: "Spring 2024",
    description: "Numerical solutions to Navier-Stokes equations using finite element methods.",
    tags: ["Computational", "Lab included"]
  }
];

export const researchAreas: ResearchArea[] = [
  {
    id: "r1",
    title: "Topological Data Analysis",
    description: "Extracting shape-based features from high-dimensional datasets using persistent homology.",
    framework: "Simplicial complexes and Morse theory.",
    results: "Developed a robust noise-filtering algorithm for point cloud data.",
    math: "H_k(X) = Z_k(X) / B_k(X)"
  },
  {
    id: "r2",
    title: "Stochastic Processes",
    description: "Modeling uncertainty in dynamical systems with applications in financial mathematics.",
    framework: "Itô calculus and Fokker-Planck equations.",
    results: "Closed-form solutions for a class of non-Markovian jump-diffusion models.",
    math: "dX_t = \mu(t, X_t)dt + \sigma(t, X_t)dW_t"
  }
];
