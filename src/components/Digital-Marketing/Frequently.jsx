import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./Frequently.css"; // Import CSS file

const faqs = [
  {
    question: "Can I enroll in this course despite my lack of marketing background?",
    answer: "You can enroll even if you have no marketing experience or education. This is a course for beginners that covers the basics."
  },
  {
    question: "Is it a good idea to work in SEO?",
    answer: "SEO training in Chandigarh can be a good choice for a great career. It provides opportunities for growth as businesses and offers job prospects."
  },
  {
    question: "Why should I enroll in this SEO course in Zirakpur to learn SEO and web design?",
    answer: "Our SEO course in Zirakpur provides experienced instructors and 100% hands-on training using only international projects. We guarantee a job in digital marketing and offer practical experience as a company, not an institution, to make sure you succeed."
  },
  {
    question: "How about salary growth and opportunities for earning online?",
    answer: "For earning online, SEO offers strong salary growth and many earning opportunities, like freelancing and consulting."
  },
  {
    question: "What about support for finding jobs after completing the course?",
    answer: "After completing the advanced SEO coaching in Chandigarh, you will get job placement assistance, resume building, and interview preparations."
  },
  {
    question: "Will I get a certificate after finishing this SEO course?",
    answer: "In this SEO course, you will get an industry-recognized certificate after the completion."
  },
  {
    question: "Is coding needed for SEO?",
    answer: "No, SEO does not involve any coding. It is possible to perform excellent SEO without working with code."
  },
  {
    question: "What's the best way to learn digital marketing: online or offline?",
    answer: "Offline courses are better than online courses as they command higher value in the job market."
  },
  {
    question: "What technical knowledge is necessary for this course?",
    answer: "For the SEO courses, there is no need for earlier technical knowledge. It is meant for beginners and covers all the fundamentals."
  },
  {
    question: "What career options are available after completing the course?",
    answer: "After completing our effective SEO training in Zirakpur, there are many options available like SEO specialists, copywriters, Digital marketers, Seo managers, etc."
  },
  {
    question: "Can I pursue a course in digital marketing without a degree?",
    answer: "You can pursue a digital marketing course without a degree. A degree is nice to have, but experience and a strong skill set are far more valuable."
  },
  {
    question: "What if I do not want a job or am not looking for one?",
    answer: "If you are not looking for a job or don’t want a job in digital marketing, this SEO course in Chandigarh will improve your skills, grow your company, and widen your perspective."
  },
  {
    question: "Can this course help me generate passive or secondary income?",
    answer: "After completing the best SEO coaching in Zirakpur, you can generate passive and secondary income by using your skills to create and manage websites, run online ads, and offer freelance services."
  },
  {
    question: "What is the course duration?",
    answer: "The duration of our advanced SEO training in Chandigarh differs between 30 and 90-day programs to suit various schedules and learning needs."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-heading">
        Still have <span className="highlight">Doubts?</span>
      </h2>
      <p className="faq-description">
        Here are some answers to common questions about our advanced SEO coaching in Zirakpur, the application process, certifications, and career assistance.
      </p>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <FaChevronDown className={`icon ${openIndex === index ? "rotate" : ""}`} />
            </button>
            <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
