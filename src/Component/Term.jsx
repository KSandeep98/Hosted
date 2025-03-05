import { motion } from 'framer-motion';

const Terms = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <>
            <div className="max-w-4xl mx-auto mt-20 space-y-2">
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    className="text-3xl font-bold text-center text-blue-500"
                >
                    NAVONMESHAK HOSTEDMINDS TECHSOLUTIONS PVT LTD
                </motion.h1>
                {/* Title Section */}
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    className="text-2xl font-bold text-center text-blue-500"
                >
                    Terms & Conditions
                </motion.h1>
            </div>

            <div className="mx-10 my-10 space-y-2 text-gray-800">
                {/* Introduction */}
                <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
                    <p className='mb-2.5 font-bold'>Welcome to <span className="font-extrabold">HOSTEDMINDS.COM</span>!</p>
                    <p>These terms and conditions outline the rules and regulations for the use of NAVONMESHAK HOSTEDMINDS TECHSOLUTIONS PVT LTD’s Website, located at https://hostedminds.com/.<br /><br />

                        By accessing this website we assume you accept these terms and conditions. Do not continue to use HOSTEDMINDS.COM if you do not agree to take all of the terms and conditions stated on this page.<br /><br />

                        The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company’s terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of India. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>
                </motion.div>

                {/* Refund Policy */}
                <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
                    <h2 className="text-xl font-semibold text-blue-500">Refund Policy</h2>
                    <p>Thank you for shopping at NAVONMESHAK HOSTEDMINDS TECHSOLUTIONS PVT LTD! We offer refund and/or exchange within the first 7 days of your purchase,if 7 days have passed since your purchase, you will not be offered a refund and/or exchange of any kind.<br /><br /><span className='font-bold'>Eligibility for Refunds and Exchanges</span>
                        <ul className="list-disc list-inside ">
                            <li>Refunds and exchanges are eligible only for electronic kits.</li>
                            <li>Refunds and exchanges are not eligible for courses and any other services under any condition.</li>
                            <li>Your item must be unused and in the same condition that you received it.</li>
                            <li>The item must be in the original packaging.</li>
                            <li>To complete your return, we require a receipt or proof of purchase.</li>
                            <li>Only regular-priced items may be refunded; sale items cannot be refunded.</li>
                        </ul></p>
                    <h2 className="font-bold">Exchanges (if applicable)</h2>
                    <p>We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at <span className="text-blue-600 font-medium">info@hostedminds.com</span> send your item to the address mentioned in the reply email.</p>
                    <h2 className="font-bold">Exempt Goods</h2>
                    <p><ul className="list-disc list-inside ">
                        <li>Educational Cources</li>
                        <li>Any Services provided by NAVONMESHAK HOSTEDMINDS TECHSOLUTIONS PVT LTD.</li>

                    </ul></p>
                    <p><ul className="list-disc list-inside ">
                        <li>
                            Any item not in its original condition, is damaged or missing parts for reasons not due to our error.</li>
                        <li>Any item that is returned more than 7 days after delivery.</li>
                        <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund. <br /><br />If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.</p>

                    </ul>
                        <h2 className="font-bold">Late or missing refunds</h2>
                        <ul className="list-disc list-inside ">
                            <li>If you have not received a refund yet, first check your bank account again. Then contact your credit card company, it may take some time before your refund is officially posted.</li>
                            <li>If you have done all of this and you still have not received your refund yet, please contact us at info@hostedminds.com</li>
                        </ul>
                        <h2 className="font-bold">Shipping</h2>
                        <ul className="list-disc list-inside ">
                            <li>Please do not send the product back to the manufacturer. It must be sent to the adress mentioned in the email reply to your email.</li>
                            <li>You will be responsible for paying for your own shipping costs for returning your item.</li>
                            <li>Shipping costs are non-refundable! If you receive a refund, the cost of return shipping will be deducted from your refund.</li>
                            <li>Depending on where you live, the time it may take for your exchanged product to reach you, may vary.</li>
                            <li>Please see, we cannot guarantee that we will receive your returned item.</li>
                        </ul>
                    </p>
                </motion.div>
            </div>
        </>
    );
};

export default Terms;
