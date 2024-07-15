import Link from 'next/link';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const SocialAndFooterSection = () => {
    return (
        <section className="flex justify-center items-center bg-black">
            <div className="container mx-auto px-4 text-white">
                <div className="flex justify-center space-x-6 py-12">
                    <Link href="https://twitter.com/ControlOverride" passHref>
                        <FaTwitter className="text-2xl cursor-pointer hover:text-blue-400" aria-label="Twitter" />
                    </Link>
                    <Link href="https://www.instagram.com/control_override/" passHref>
                        <FaInstagram className="text-2xl cursor-pointer hover:text-pink-600" aria-label="Instagram" />
                    </Link>
                    <Link href="https://www.facebook.com/Control-Override-107768984712717" passHref>
                        <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" aria-label="Facebook" />
                    </Link>
                </div>
                <div className="text-center">
                    <span>
                        <p className='inline-block'>© All rights reserved by&nbsp;</p>
                        <Link href="https://brainstation-23.com" passHref>
                            <span className="cursor-pointer text-red-600 transition duration-300 ease-in-out hover:text-gray-300">
                                Brain Station 23
                            </span>
                        </Link>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default SocialAndFooterSection;