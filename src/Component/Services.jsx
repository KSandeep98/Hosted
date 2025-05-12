// import { Cloud, PieChart, Plane, ShoppingCart, Map } from "lucide-react";

// const Services = () => {
//     const services = [
//         {
//             icon: (
//                 <img
//                     src="https://img.freepik.com/free-vector/confident-people-collection_23-2148392617.jpg?t=st=1741171955~exp=1741175555~hmac=da1f842fb1aea0e49f2663a955d86c613a143a0c5896de114616f06229f19717&w=900"
//                     alt="STEM"
//                     className="w-22 h-20 sm:w-43 sm:h-43 object-cover"
//                 />
//             ),
//             title: "STEM",
//             description:
//                 "STEM, in full science, technology, engineering, and mathematics, field and curriculum centred on education in the disciplines of science, technology, engineering, and mathematics (STEM). STEM is an educational program developed to prepare primary and secondary students for college, graduate study and careers in the fields of science, technology, engineering and mathematics (STEM). In addition to subject-specific learning, STEM aims to foster inquiring minds, logical reasoning and collaboration skills.",
//         },
//         {
//             icon: <ShoppingCart className="w-6 h-6 text-white" />,
//             title: "Consectetur adipiscing",
//             description:
//                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum dolor feugiat at.",
//         },
//         {
//             icon: <Cloud className="w-6 h-6 text-white" />,
//             title: "Lorem ipsum dolor",
//             description:
//                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum dolor feugiat at.",
//         },
//         {
//             icon: <Map className="w-6 h-6 text-white" />,
//             title: "Consectetur adipiscing",
//             description:
//                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum dolor feugiat at.",
//         },
//         {
//             icon: <Plane className="w-6 h-6 text-white" />,
//             title: "Lorem ipsum dolor",
//             description:
//                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum dolor feugiat at.",
//         },
//         {
//             icon: <PieChart className="w-6 h-6 text-white" />,
//             title: "Consectetur adipiscing",
//             description:
//                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum dolor feugiat at.",
//         },
//     ];

//     return (
//         <div className="w-full bg-gray-100 py-16 px-4 sm:px-6 md:px-12 lg:px-20">
//             <div className="container mx-auto">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {services.map((service, index) => (
//                         <div
//                             key={index}
//                             className="flex flex-col items-center text-center p-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-300 transition-transform transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:shadow-xl"
//                         >
//                             <div className="flex items-center justify-center w-20 h-20 sm:w-44 sm:h-44  bg-white/20 mb-4 transition-all duration-300 hover:bg-white/40">
//                                 {service.icon}
//                             </div>
//                             <h3 className="text-white text-lg sm:text-xl font-medium mb-2">{service.title}</h3>
//                             <p className="text-white text-sm sm:text-base max-w-100">{service.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Services;


import { Cloud, PieChart, Plane, ShoppingCart, Map } from "lucide-react";
import { Box, Grid, Paper, Typography } from "@mui/material";

const Services = () => {
    const services = [
        {
            icon: (
                <img
                    src="https://img.freepik.com/free-vector/confident-people-collection_23-2148392617.jpg?t=st=1741171955~exp=1741175555~hmac=da1f842fb1aea0e49f2663a955d86c613a143a0c5896de114616f06229f19717&w=900"
                    alt="STEM"
                    style={{ width: 80, height: 80, objectFit: "cover" }}
                />
            ),
            title: "STEM",
            description:
                "STEM, in full science, technology, engineering, and mathematics, field and curriculum centred on education in the disciplines of science, technology, engineering, and mathematics (STEM). STEM is an educational program developed to prepare primary and secondary students for college, graduate study and careers in the fields of science, technology, engineering and mathematics (STEM). In addition to subject-specific learning, STEM aims to foster inquiring minds, logical reasoning and collaboration skills.",
        },
        {
            icon: <ShoppingCart size={32} color="black" />,
            title: "STEM LAB Setup",
            description:
                "STEM lab creates an atmosphere of learning by doing. The basic idea behind setting up this lab is to provide students with the necessary tools to implement hands-on project‐based learning of key STEM concepts. STEM Lab is a project based, hands‐on learning solution which enables students to apply their knowledge to use. Hostedminds accepts and delivers the basic idea of STEM - Science | Technology | Engineering | Mathematics and helps schools and institutes to set up their Hi-Tech STEM LABs.",
        },
        {
            icon: <Cloud size={32} color="black" />,
            title: "E-Learning",
            description:
                "E-Learning is a household thing these days. Infact it is one of the best ways to get education and learn anything. We at Hostedminds have built a simple and easy to use E-Learning platform called HOSTEDMINDS LEARNING which provides many courses accross various domains/subjects. Courses on the platform are in the form of videos and texts. Take advantage of the free cources on the platform. We also have paid cources which will help students to learn in a better way with practical sessions.",
        },
        {
            icon: <Map size={32} color="black" />,
            title: "Learn to Code",
            description:
                "Software development is a popular profession. Software development involves giving a computer a set of instructions to execute using a programming languages like javascript,Python, etc. While each programming language has its own way of giving instructions, they all use common fundamental programming concepts. You can learn programming by enrolling to any of Hostedminds Learning's programming courses and build websites, mobile apps, softwares, robotics and more.",
        },
        {
            icon: <Plane size={32} color="black" />,
            title: "Experiential Learning",
            description:
                "Experiential Learning is a powerful foundational approach to all forms of learning, development and change. Experiential learning describes the ideal process of learning, invites you to understand yourself as a learner, and empowers you to take charge of your own learning and development. It is the way you solve problems, make decisions, and meet life’s challenges.The experiential learning process supports performance improvement, learning and development.",
        },
        {
            icon: <PieChart size={32} color="black" />,
            title: "Robotics",
            description:
                "Robotics is a hobby that can bring lasting enjoyment and even become a future career as you program and build your robots. If you want to learn robotics, the best way to do so is developing proficiency in computer science, coding, physics, and electronics and mechanical engineering. If you are passionate about learning robotics, you can enrol to Hostedminds Learning's robotics course, learn basics of robotics and start building your own robots like line followers, robotic arms and more.",
        },
        {
            icon: <PieChart size={32} color="black" />,
            title: "Educational Projects",
            description:
                "Academics in India lac innovations ! AT HOSTEDMINDS, we understand your total end to end requirement first, then our research & development team works on your / our ideas to give you a proper details about the feasibility of it. After collecting all the information about your project, we provide you the basics of your projects, a raw design & a blueprint in advance. After your approval, our team gives you the timeline of each module & our Guidance team will provide you required KT about project’s modules.",
        },
        {
            icon: <PieChart size={32} color="black" />,
            title: "Circuit & PCB Designing",
            description:
                "A PCB layout is made to electrically connect the electronic components through conductive tracks and pads. It is backbone of all Electronic products & can almost single-handedly determine the success of an Electronic Product. Hence, it must be carried out with utmost care & responsibility. We have expertise in Circuit & PCB designing. We cater pcb designing services to Industries, Product manufacturers, IoT developers, Software companies, and to students for academic projects as per requirement.",
        },
        {
            icon: <PieChart size={32} color="black" />,
            title: "Electronics Manufacturing Services",
            description:
                "HOSTEDMINDS is an Electronics Manufacturing Services (EMS) provider that caters a wide range of value-added engineering and manufacturing outsourcing services to original equipment manufacturers (OEMs), helping them to improve product. We provide electonics manufacturing services from scratch to finished product. This includes research and development (R&D), PCB disigning, PCB manufacturing, PCB fabrication and assembly, enclosure assembly and more.",
        },
        {
            icon: <PieChart size={32} color="black" />,
            title: "Component Procurement",
            description:
                "We know how to utilise our procurement capabilities to best suit our customers’ unique project needs. AS low-cost component sourcing is fundamental requirement, our team will collaborate closely with our customers. We can take full management of the procurement process, work to specific requirements, or work with components issued by customers. Our engineers and buyers will meticulously review your bill of materials (BOM) at the beginning of the purchasing process and apply our expertise.",
        },
        {
            icon: <PieChart size={32} color="black" />,
            title: "Reverse Engineering",
            description:
                "Looking to gather evidence to prove that one of your competitors has been infringing upon your intellectual property? Interested in recreating obsolete, hard-to-find integrated circuits? Your old product needs a makeover but unable to recreate it? Want to create documentations related to your product? Perhaps you’re performing some PCB competitive analysis, and want to get some insight into a competing product. We will help you get a solution for all above questions through our Reverse Engineering Services.",
        },
        {
            icon: <PieChart size={32} color="black" />,
            title: "Product Unit Testing",
            description:
                "Are you a manufacturer ? do you have electonic circuits in your product ? Then you will surely need to verify the operating conditions of your electronic component or assembly or product under a variety of conditions. Also If you are willing to certify your product you will not want your product to fail during certification. You will have to test it before applying for certification to avoid failure/ rejection. We have the expertise and technology to carry accurate and precise tests as per certification standards.",
        },
        {
            icon: <PieChart size={32} color="black" />,
            title: "IoT & IIoT Services",
            description:
                "At HOSTEDMINDS, we are leveraging IoT technologies to make machine-to-machine (M2M) environments more collaborative than ever, automating processes at the core. We help companies manage, monitor remote devices & gather real-time data. We would create the next-generation M2M & IoT solutions for various line-of-business and industry uses. We help industries, offices & homes get IoT enabled and convert them to smart factories, offices & homes accessible from all over world on our web applications.",
        },
        {
            icon: <PieChart size={32} color="black" />,
            title: "Software & Website Development",
            description:
                "A website is digital showcase for any business. We develop interactive & attractive websites for businesses and individuals. Softwares are running the world. Business, industries, offices, hospitals, machinaries, almost everything in world runs with help of softwares. We develop custom softwares / applications that can be accessed from a PC, tablet or mobiles. We have expertise in customized IoT & IIoT based application development for industrial and commercial use cases.",
        },
        {
            icon: <PieChart size={32} color="black" />,
            title: "Mobile App Development",
            description:
                "We provide full-cycle mobile app development services. This includes expert business analysis, design and development of your mobile application from idea to launch, integrating the new product into your infrastructure and providing further optimization and scale-up on demand. We develop mobile applications on different platforms using top-notch technologies and proven approaches. We can develop mobiles apps for any use case as per customer requirement.",
        },
        {
            icon: <PieChart size={32} color="black" />,
            title: "Research & Development",
            description:
                "R&D means almost any exploratory engineering activity not directly associated with commercial product. It encompasses enabling technologies that improve, enhance, and occasionally create breakthroughs in new product development. As per clients requirements, our team of highly skilled engineers at HOSTEMINDS is capable of doing product based research and develop technically advance and efficient products that fulfills customer needs and at the end, customer has a better product in hand.",
        },
        {
            icon: <PieChart size={32} color="black" />,
            title: "POC & Prototypes",
            description:
                "A Proof of Concept (POC) is a small exercise to test the design idea or assumption. Prototyping is a valuable exercise that allows the innovator to visualize how the product will function, it is a working interactive model of the end product that gives an idea of the design, navigation and layout We help our clients in POC to prove feasibility of a product by creating a working prototype of product. POC plays an important role in decision making in manufacturing of any product or service.",
        },
        {
            icon: <PieChart size={32} color="black" />,
            title: "Product Unit Testing",
            description:
                "Are you a manufacturer ? do you have electonic circuits in your product ? Then you will surely need to verify the operating conditions of your electronic component or assembly or product under a variety of conditions. Also If you are willing to certify your product you will not want your product to fail during certification. You will have to test it before applying for certification to avoid failure/ rejection. We have the expertise and technology to carry accurate and precise tests as per certification standards.",
        },
    ];

    return (
        <>
        <div id="services" style={{paddingTop:"50px"}}></div>
        <Box sx={{ width: '100%', backgroundColor: '#f5f5f5', py: 1, pb:8, px: { xs: 2, sm: 4, md: 6, lg: 10 } }} > 
         {/* fff */}
        
         <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', my: 4 }} >Services</Typography>
        
            <Grid container spacing={4}>
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} lg={4} key={index}>
                        <Paper
                            elevation={1}
                            sx={{
                                p: 3,
                                textAlign: "center",
                                borderRadius: 2,
                                backgroundColor: "#ffffff",
                                color: "#000000",
                                height: 500,
                                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                            }}
                        >
                            <Box
                                sx={{
                                    width: 80,
                                    height: 80,
                                    mx: "auto",
                                    mb: 2,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                {service.icon}
                            </Box>
                            <Typography variant="h6" gutterBottom color="black">
                                {service.title}
                            </Typography>
                            <Typography variant="body2" color="textPrimary">
                                {service.description}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
        </>
    );
};

export default Services;
