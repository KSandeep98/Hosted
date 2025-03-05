import { Cloud, PieChart, Plane, ShoppingCart, Map } from "lucide-react";

const Services = () => {
    const services = [
        {
            icon: (
                <img
                    src="https://img.freepik.com/free-vector/confident-people-collection_23-2148392617.jpg?t=st=1741171955~exp=1741175555~hmac=da1f842fb1aea0e49f2663a955d86c613a143a0c5896de114616f06229f19717&w=900"
                    alt="STEM"
                    className="w-22 h-20 sm:w-23 sm:h-23 object-cover rounded-full"
                />
            ),
            title: "STEM",
            description:
                "STEM, in full science, technology, engineering, and mathematics, field and curriculum centred on education in the disciplines of science, technology, engineering, and mathematics (STEM). STEM is an educational program developed to prepare primary and secondary students for college, graduate study and careers in the fields of science, technology, engineering and mathematics (STEM). In addition to subject-specific learning, STEM aims to foster inquiring minds, logical reasoning and collaboration skills.",
        },
        {
            icon: <ShoppingCart className="w-6 h-6 text-white" />,
            title: "Consectetur adipiscing",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum dolor feugiat at.",
        },
        {
            icon: <Cloud className="w-6 h-6 text-white" />,
            title: "Lorem ipsum dolor",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum dolor feugiat at.",
        },
        {
            icon: <Map className="w-6 h-6 text-white" />,
            title: "Consectetur adipiscing",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum dolor feugiat at.",
        },
        {
            icon: <Plane className="w-6 h-6 text-white" />,
            title: "Lorem ipsum dolor",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum dolor feugiat at.",
        },
        {
            icon: <PieChart className="w-6 h-6 text-white" />,
            title: "Consectetur adipiscing",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum dolor feugiat at.",
        },
    ];

    return (
        <div className="w-full bg-gray-100 py-16 px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-300 transition-transform transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:shadow-xl"
                        >
                            <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/20 mb-4 transition-all duration-300 hover:bg-white/40">
                                {service.icon}
                            </div>
                            <h3 className="text-white text-lg sm:text-xl font-medium mb-2">{service.title}</h3>
                            <p className="text-white text-sm sm:text-base max-w-100">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
