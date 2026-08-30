export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  metrics: string;
  overview: string;
  problem: string;
  solution: string;
  techStack: string[];
  results: string[];
  githubUrl: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "sentiment-analyzer",
    number: "01",
    title: "AI Sentiment Analyzer",
    category: "AI / NLP / Web Extension",
    tagline: "Manifest V3 Browser Extension & Async Flask Inference Engine",
    metrics: "25k Samples • Dynamic Star Rating",
    overview: "A lightweight context-menu browser extension backed by a trained machine learning model providing real-time text sentiment predictions.",
    problem: "Users reading lengthy online reviews or forum posts lack immediate, non-intrusive tooling to evaluate aggregate text sentiment directly in their workflow.",
    solution: "Trained a custom scikit-learn NLP classification model on 25,000 records. Built an asynchronous Flask REST API backend to process client requests and return dynamic polarity ratings.",
    techStack: ["Python", "Flask", "Scikit-Learn", "NLP", "JavaScript", "Manifest V3"],
    results: [
      "Custom scikit-learn model trained on 25k records.",
      "Asynchronous client-server inference architecture.",
      "Seamless context-menu integration inside Chrome."
    ],
    githubUrl: "https://github.com/jeet8499/quick-comment-analyzer-chromeextension",
    image: "project1.png"
  },
  {
    id: "recommendation-system",
    number: "02",
    title: "Movie Recommendation Engine",
    category: "Machine Learning / Algorithms",
    tagline: "Sparse Matrix Decomposition & Vector Similarity Matching",
    metrics: "Top-N Ranking • Dual Filtering",
    overview: "A personalized recommendation system using content-based and collaborative filtering techniques.",
    problem: "High-dimensional sparse user-item interaction data creates recommendation latency and accuracy dropoffs in discovery engines.",
    solution: "Engineered a pre-processing pipeline for high-sparsity interaction matrices, calculating cosine vector similarities to output optimal top-N entity suggestions.",
    techStack: ["Python", "Scikit-Learn", "NumPy", "Pandas", "Linear Algebra"],
    results: [
      "Dynamic similarity matrix computation.",
      "Hybrid collaborative and content-based recommendation logic.",
      "High-throughput vector ranking."
    ],
    githubUrl: "https://github.com/jeet8499/RECOMMENDATION_SYS-ML/blob/main/RECCOMMLSYS.ipynb",
    image: "project2.png"
  },
  {
    id: "automated-file-organizer",
    number: "03",
    title: "Automated I/O File Pipeline",
    category: "Systems / CLI Tooling",
    tagline: "Automated Directory Tree & File Classifier",
    metrics: "Zero-Collision I/O • Instant Sort",
    overview: "A command-line automation tool that monitors and categorizes system directories by extension and file signature.",
    problem: "Manual filesystem maintenance across large file dumps causes duplicated disk overhead and chaotic directory hierarchies.",
    solution: "Utilized Python's Pathlib and Shutil modules with custom duplicate collision handling, folder creation, and isolated error containment.",
    techStack: ["Python", "Pathlib", "Shutil", "Linux", "CLI"],
    results: [
      "Zero-collision file move architecture.",
      "Automated directory tree synthesis and extension mapping.",
      "Built-in duplicate handling safeguards."
    ],
    githubUrl: "https://github.com/jeet8499/pythonproject/blob/main/cleanerproj/cleaner.py",
    image: "project3.png"
  }
];