import { motion, useSpring } from "framer-motion";
import { Facebook, Twitter, Instagram } from "lucide-react";

export const Team = () => {
    const teamMembers = [
        {
            name: "Parth Kalekar",
            role: "Software Engineer",
            image: "https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197908.png",
        },
        {
            name: "Sandeep Kushwaha",
            role: "FrontEnd Developer",
            image: "https://api.duniagames.co.id/api/content/upload/file/8143860661599124172.jpg",
        },
        {
            name: "Vishal Jatti",
            role: "Scrum Master",
            image: "https://yt3.ggpht.com/a/AGF-l7_AeX_ZelljTB8o8biFKnNh-It9iq_Riuo95w=s900-mo-c-c0xffffffff-rj-k-no",
        },
        {
            name: "Abhishek Ghuge",
            role: "Software Engineer",
            image: "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        },
    ];

    return (
        <section id="team" className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 text-center">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-gray-700">Our Team</h1>
                <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                    This team page has a quirky, vibrant energy that immediately catches your attention – a good sign for a design company.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
                    {teamMembers.map((member, index) => {
                        const rotateX = useSpring(0, { damping: 30, stiffness: 100 });
                        const rotateY = useSpring(0, { damping: 30, stiffness: 100 });
                        const scale = useSpring(1, { damping: 30, stiffness: 100 });

                        function handleMouse(e) {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const offsetX = e.clientX - rect.left - rect.width / 2;
                            const offsetY = e.clientY - rect.top - rect.height / 2;
                            
                            rotateX.set((offsetY / (rect.height / 2)) * -14);
                            rotateY.set((offsetX / (rect.width / 2)) * 14);
                        }

                        function handleMouseEnter() {
                            scale.set(1.1);
                        }

                        function handleMouseLeave() {
                            scale.set(1);
                            rotateX.set(0);
                            rotateY.set(0);
                        }

                        return (
                            <motion.div
                                key={index}
                                className="p-6 shadow-lg bg-amber-50 transition-all duration-300 hover:bg-blue-600 hover:text-white rounded-lg"
                                onMouseMove={handleMouse}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                style={{ rotateX, rotateY, scale }}
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="rounded-full w-32 h-32 mx-auto mb-4 object-cover border-4 border-gray-200 hover:border-white transition-all"
                                />
                                <h3 className="text-lg font-bold">{member.name}</h3>
                                <h5 className="font-medium">{member.role}</h5>
                                <p className="mt-2 text-sm">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, recusandae.
                                </p>
                                <div className="flex justify-center gap-4 mt-4">
                                    <a href="#" className="text-blue-950 hover:text-white">
                                        <Facebook className="w-6 h-6" />
                                    </a>
                                    <a href="#" className="text-blue-400 hover:text-blue-200">
                                        <Twitter className="w-6 h-6" />
                                    </a>
                                    <a href="#" className="text-pink-500 hover:text-pink-700">
                                        <Instagram className="w-6 h-6" />
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Team;