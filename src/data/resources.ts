export interface Resource {
  title: string;
  description: string;
  category: string;
  level: string;
  link: string;
}

export const resources: Resource[] = [
  {
    title: "Introduction to Data Science with Python",
    description: "A comprehensive course covering the fundamentals of data science using Python, including pandas, NumPy, and matplotlib.",
    category: "Courses",
    level: "Beginner",
    link: "https://www.coursera.org/specializations/data-science-python"
  },
  {
    title: "Machine Learning Specialization",
    description: "Learn the fundamentals of machine learning and how to use these techniques to build real-world AI applications.",
    category: "Courses",
    level: "Intermediate",
    link: "https://www.coursera.org/specializations/machine-learning-introduction"
  },
  {
    title: "Deep Learning Specialization",
    description: "Master deep learning, understand how to build neural networks, and lead successful machine learning projects.",
    category: "Courses",
    level: "Advanced",
    link: "https://www.coursera.org/specializations/deep-learning"
  },
  {
    title: "Jupyter Notebooks Guide",
    description: "Learn how to effectively use Jupyter Notebooks for data analysis, visualization, and sharing your findings.",
    category: "Tutorials",
    level: "Beginner",
    link: "https://www.dataquest.io/blog/jupyter-notebook-tutorial/"
  },
  {
    title: "Scikit-learn Documentation",
    description: "Official documentation for scikit-learn, a powerful machine learning library for Python.",
    category: "Tools",
    level: "Intermediate",
    link: "https://scikit-learn.org/stable/"
  },
  {
    title: "TensorFlow Tutorials",
    description: "Official tutorials for TensorFlow, covering everything from basic concepts to advanced applications.",
    category: "Tutorials",
    level: "Intermediate",
    link: "https://www.tensorflow.org/tutorials"
  },
  {
    title: "Kaggle: Learn Data Science",
    description: "Free hands-on tutorials and competitions to practice your data science skills.",
    category: "Tools",
    level: "All Levels",
    link: "https://www.kaggle.com/learn"
  },
  {
    title: "Data Visualization with Seaborn",
    description: "Learn how to create beautiful and informative statistical graphics using Seaborn.",
    category: "Tutorials",
    level: "Intermediate",
    link: "https://seaborn.pydata.org/tutorial.html"
  },
  {
    title: "Natural Language Processing Specialization",
    description: "Master cutting-edge NLP techniques to process text data and make machines understand, analyze, and manipulate human language.",
    category: "Courses",
    level: "Advanced",
    link: "https://www.coursera.org/specializations/natural-language-processing"
  },
  {
    title: "SQL for Data Science",
    description: "Learn SQL fundamentals and how to analyze data for data science applications.",
    category: "Courses",
    level: "Beginner",
    link: "https://www.coursera.org/learn/sql-for-data-science"
  },
  {
    title: "Data Science Cheat Sheets",
    description: "Collection of cheat sheets for various data science tools and libraries.",
    category: "Tools",
    level: "All Levels",
    link: "https://www.datacamp.com/community/data-science-cheatsheets"
  },
  {
    title: "Feature Engineering for Machine Learning",
    description: "Learn how to transform raw data into features that better represent the underlying problem to predictive models.",
    category: "Tutorials",
    level: "Advanced",
    link: "https://www.kaggle.com/learn/feature-engineering"
  }
];