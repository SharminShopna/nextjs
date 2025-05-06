import Link from 'next/link';
import Image from 'next/image';
import icon from "../../../public/images/more/logo1.png"
import icon2 from "../../../public/images/more/19.png"

const Navbar = () => {
    return (
        <nav className='bg-[#dfb380] px-4 py-2 fixed w-full z-40'>
            <div className='container mx-auto flex items-center justify-between'>
                {/* Logo */}
                <div className='flex justify-center'>
                    <div className='text-xs font-bold text-white'>
                        <Image src={icon} alt='' className='w-12' />
                    </div>
                    <div>
                        <Image src={icon2} alt='' className='w-24 h-12 mt-2' />
                    </div>
                </div>
                <div>
                    <ul className='flex space-x-6'>
                        <li>
                            <Link href='/' className="btn bg-[#281818] text-[#dfb380] font-bold  hover:underline">Home</Link>
                        </li>
                        <li>
                            <Link href='/menu' className="btn bg-[#281818] text-[#dfb380] font-bold  hover:underline">Menu</Link>
                        </li>
                        <li>
                            <Link href='/about' className="btn bg-[#281818] text-[#dfb380] font-bold  hover:underline">About us</Link>
                        </li>
                        <li>
                            <Link href='/contact' className="btn bg-[#281818] text-[#dfb380] font-bold  hover:underline">Contact us</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;