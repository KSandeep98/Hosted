import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "What services does HostedMinds provide?",
    answer:
      "HostedMinds specializes in web development, hosting, UI/UX design, SEO, and digital branding. We help businesses build and grow their online presence with custom solutions tailored to their goals."
  },
  {
    question: "How can I contact HostedMinds for a project?",
    answer:
      "You can reach us via the contact form on our website or directly email us at hostedminds@gmail.com. Our support team typically responds within 24 hours to assist with inquiries and quotes."
  },
  {
    question: "Does HostedMinds build eCommerce websites?",
    answer:
      "Yes, we design and develop user-friendly eCommerce websites using modern technologies like WordPress, Shopify, and custom code. We ensure your online store is responsive, secure, and optimized for conversions."
  },
  {
    question: "Can I host my existing website with HostedMinds?",
    answer:
      "Definitely! We offer secure, fast, and scalable hosting services for new and existing websites. Migration support is also available to help you switch smoothly without downtime."
  },
  {
    question: "What technologies do you use for development?",
    answer:
      "We work with HTML, CSS, JavaScript, React.js, WordPress, Node.js, and more. Our stack ensures high performance, mobile responsiveness, and modern design practices."
  },
  {
    question: "Do you provide maintenance after the website is live?",
    answer:
      "Yes, we offer monthly and annual maintenance plans. These include updates, backups, performance checks, and quick fixes as needed."
  },
  {
    question: "How long does it take to complete a website project?",
    answer:
      "Project timelines vary by complexity, but most websites are completed within 2 to 6 weeks. We provide regular updates throughout the process to keep you informed."
  },
  {
    question: "Can I see some of your previous work?",
    answer:
      "Absolutely! Visit our portfolio page to view recent projects across various industries. It showcases our design approach, functionality, and client success stories."
  },
  {
    question: "Is SEO included in your website packages?",
    answer:
      "All websites include basic on-page SEO setup like meta tags, alt texts, and speed optimization. We also offer advanced SEO services if you need a higher search ranking."
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, we serve clients worldwide and manage time zones efficiently. Communication is seamless via Zoom, WhatsApp, or email, depending on your preference."
  }
];

export default function FAQPage() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          sx={{
            // backgroundColor:"#E0E0E0",
            boxShadow:"-moz-initial",
            // border: "1px solid gray",
            borderRadius: 2,
            mb: 2,
            boxShadow: 5,
            "&:before": {
              display: "none"
            }
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{p:"10px"}} fontWeight="bold">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{backgroundColor:"white", p:" 0 10px"}}>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}
