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
    question: "What is Hostedminds and what do you specialize in?",
    answer:
      "Hostedminds is a technology-driven company focused on robotics education, STEM learning, IoT, PCB designing, and custom software/app/website development. We also provide industrial automation and robotics solutions tailored for manufacturing sectors."
  },
  {
    question: "Who can benefit from your educational programs?",
    answer: [
      "• School students interested in STEM and robotics",
      "• College students seeking hands-on tech skills",
      "• Educators and institutions looking to set up robotics labs",
      "• Professionals wanting to upskill in software, IoT, or hardware design"
    ]
  },
  {
    question: "Do you offer training for industrial robotics and automation?",
    answer:
      "Yes, we provide custom training programs and workshops on industrial robotics, automation systems, and IoT-based manufacturing solutions for both individuals and companies."
  },
  {
    question: "Can Hostedminds help schools and colleges set up robotics or tech labs?",
    answer:
      "Absolutely. We offer complete lab setup services including hardware kits, software tools, curriculum design, teacher training, and ongoing technical support."
  },
  {
    question: "What technologies do you use for development?",
    answer:
      "We work with HTML, CSS, JavaScript, React.js, WordPress, Node.js, and more. Our stack ensures high performance, mobile responsiveness, and modern design practices."
  },
  {
    question: "Do you offer online courses or only offline workshops?",
    answer: [
      "We offer both! Hostedminds provides:",
      "• Offline, in-person workshops and bootcamps",
      "• Online interactive courses via live sessions and recorded modules",
      "• Hybrid learning options with kits delivered to students’ homes",
    ]
  },
  {
    question: "What industries do you serve with your automation and IoT solutions?",
    answer: [
      "We serve a variety of sectors, including:",
      "• Manufacturing & Assembly Lines",
      "• Agriculture & Smart Farming",
      "• Logistics & Inventory Management",
      "• Educational Institutions and Labs",
    ]
  },
  {
    question: "Do you design and manufacture custom robotics solutions for industries?",
    answer:
      "Yes, we provide custom-built robotics systems and automation solutions tailored to specific industrial use cases — from pick-and-place robots to IoT-enabled smart systems."
  },
  {
    question: "Can startups or small businesses approach you for product development?",
    answer: [
      "Definitely. We assist startups with:",
      "• Prototype development",
      "• MVP creation",
      "• Embedded system design",
      "• App/website development",
      "• PCB fabrication and testing"
    ]
  },
  {
    question: "Do you provide internships or real-time project experience?",
    answer:
      "Yes, we offer internship programs, mentorship, and live projects for students and freshers to gain hands-on experience and build a solid portfolio."
  },
  {
    question: "Is Hostedminds suitable for absolute beginners with no tech background?",
    answer:
      "Yes. Our beginner-level courses are structured to build a solid foundation from scratch — ideal for students, teachers, and even working professionals entering the tech domain for the first time."
  },
  {
    question: "How can we collaborate with Hostedminds as an institution or partner?",
    answer: [
      "We’re always open to partnerships with schools, colleges, training centers, and industries. Contact us to explore:",
      "• Institutional training programs",
      "• Tech lab setup collaborations",
      "• Industrial project partnerships",
      "• Sponsorships for hackathons and events"
    ]
  },
  {
    question: "What kind of industrial solutions does Hostedminds provide?",
    answer:
      "We specialize in custom robotics systems, IoT integration, PCB design, embedded systems, and industrial automation. Whether it’s improving a manufacturing process, developing smart machines, or creating remote monitoring solutions — we deliver tailored technology that solves real-world challenges."
  },
  {
    question: "Do you build custom robots or automation machines for industries?",
    answer: [
      "Yes. We design and manufacture custom robotics systems for:",
      "• Pick-and-place operations",
      "• Material handling",
      "• Smart conveyor systems",
      "• Vision-based sorting and inspection",
      "• AGVs (Automated Guided Vehicles) and more"
    ]
  },
  {
    question: "Can you automate existing machinery or manual processes?",
    answer:
      "Absolutely. We offer retrofitting and automation solutions that allow industries to upgrade existing machinery with smart controls, PLC/IoT-based systems, and real-time monitoring — without needing to replace the whole system."
  },
  {
    question: "Which industries do you serve with your robotics and automation services?",
    answer: [
      "Our solutions are deployed in:",
      "• Manufacturing & Assembly",
      "• Warehousing & Logistics",
      "• Agriculture (smart irrigation, greenhouse automation)",
      "• Pharmaceutical & Food Processing",
      "• Education Labs (for hands-on research)"
    ]
  },
  {
    question: "Do you offer IoT-based monitoring and control systems?",
    answer: [
      "Yes. We develop IoT solutions that include:",
      "• Remote asset tracking",
      "• Temperature, humidity, and gas monitoring",
      "• Predictive maintenance dashboards",
      "• Mobile app integration for real-time alerts and control"
    ]
  },
  {
    question: "Can Hostedminds help with hardware and PCB development for our product?",
    answer: [
      "Yes, we provide:",
      "• Schematic and PCB design",
      "• Custom firmware development",
      "• Prototype fabrication and testing",
      "• We also assist in moving from prototype to small-scale production."
    ]
  },
  {
    question: "Do you provide consulting for technology integration in manufacturing?",
    answer: [
      "Yes, our expert team provides consulting services for industries looking to adopt:",
      "• Industry 4.0 practices",
      "• Smart factory concepts",
      "• IoT and AI/ML-based optimization",
      "• Energy-efficient and sensor-based automation"
    ]
  },
  {
    question: "Can you develop embedded systems or microcontroller-based products?",
    answer: [
      "Yes, we build embedded systems using platforms like:",
      "• STM32, ESP32, Arduino, PIC, Raspberry Pi",
      "• Sensor interfacing and real-time data acquisition",
      "• Custom firmware for specific industrial use-cases"
    ]
  },
  {
    question: "Do you offer web/mobile apps integrated with your hardware solutions?",
    answer:
      "Definitely. We build custom mobile and web dashboards that work with our hardware systems — enabling remote control, real-time analytics, user access control, and reporting."
  },
  {
    question: "Can we collaborate with Hostedminds for long-term R&D or product development?",
    answer: [
      "Yes. We welcome long-term partnerships for:",
      "• Product R&D",
      "• Prototyping and testing",
      "• Continuous automation upgrades",
      "• IoT ecosystem development",
      "• We become your tech partner, not just a service provider."
    ]
  },
  {
    question: "What is your approach to delivering industrial projects?",
    answer: [
      "We follow a structured 5-step process:",
      "• Requirement Analysis",
      "• Concept Design & Planning",
      "• Prototype Development",
      "• Testing & Feedback",
      "• Deployment & Support",
      "• We maintain transparency, timely communication, and focus on innovation that aligns with your business goals."
    ]
  },
  {
    question: "How do we get started with a project or consultation?",
    answer:
      "You can reach us through our website or contact form. After an initial discussion, we’ll schedule a technical consultation, define the scope of work, and provide a project proposal or quotation."
  }
];

export default function FAQPage() {
  return (
    <Container sx={{ py: 4, pt: 10 }}>
      <Typography variant="h4" align="center" fontWeight={600} sx={{ pb: 5 }} gutterBottom>
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion

          key={index}
          sx={{
            borderRadius: 2,
            mb: 2,
            backgroundColor: "#69c",
            boxShadow: 5,
            color: "white",
            "&:before": {
              display: "none"
            }
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }}/>}>
            <Typography sx={{ p: "10px", fontSize: 20 }} fontWeight="bold">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: "",
              p: 4,
              pt:0,
            }}
          >
            {Array.isArray(faq.answer) ? (
              <ul style={{ paddingLeft: "0px",  }}>
                {faq.answer.map((line, idx) => (
                  <li key={idx} style={{ color: "#FFFDD0", marginBottom: "4px" ,m:0 }}>
                    {line}
                  </li>
                ))}
              </ul>
            ) : (
              <Typography sx={{ color: "#FFFDD0" }}>{faq.answer}</Typography>
            )}
          </AccordionDetails>


        </Accordion>
      ))}
    </Container>
  );
}
