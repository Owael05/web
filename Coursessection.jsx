import CourseCard from "./CourseCard";

export default function CoursesSection() {
  const courses = [
    {
      img: "https://img-c.udemycdn.com/course/750x422/6112535_7103.jpg",
      title: "The AI Engineer Course 2025: Complete AI Engineer Bootcamp",
      instructor: "Instructor: 365 Careers",
      badge: "Bestseller",
      rating: 4.6,
      ratingCount: "11,778 ratings",
      priceNew: "E£309.99",
      priceOld: "E£349.99"
    },
    {
      img: "https://img-c.udemycdn.com/course/750x422/6791359_66d8_2.jpg",
      title: "Intro to AI Agents and Agentic AI",
      instructor: "Instructor: 365 Careers",
      badge: "Bestseller",
      rating: 4.4,
      ratingCount: "1,806 ratings",
      priceNew: "E£309.99",
      priceOld: "E£349.99"
    },
    {
      img: "https://img-c.udemycdn.com/course/750x422/1990136_15e0_10.jpg",
      title: "Artificial Intelligence for Business + ChatGPT Prize [2025]",
      instructor: "Instructors: Hadelin de Ponteves, Kirill",
      badge: "Premium",
      rating: 4.4,
      ratingCount: "4,859 ratings",
      priceNew: "E£579.99",
      priceOld: "E£719.99"
    },
    {
      img: "https://img-c.udemycdn.com/course/750x422/6342521_3968_2.jpg",
      title: "Data Science & AI Masters 2025 - From Python To Gen AI",
      instructor: "Instructors: Dr. Satyajit Pattnaik, Satyajit Pattnaik",
      badge: "Bestseller",
      rating: 4.5,
      ratingCount: "1,623 ratings",
      priceNew: "E£309.99",
      priceOld: "E£349.99"
    }
  ];

  return (
    <section className="Courses">
      {courses.map((course) => (
        <CourseCard key={course.title} {...course} />
      ))}
    </section>
  );
}
