import Link from 'next/link';
import { BsInstagram, BsGithub } from 'react-icons/bs';

export function Footer() {
    return (
        <footer className='w-full h-[90px] flex justify-center'>
            <nav className='w-4/5 flex justify-end items-center gap-5 text-xl'>
                <Link className='hover:text-stone-400 transition-all' href={'#'}><BsInstagram /></Link>
                <Link className='hover:text-stone-400 transition-all' href={'#'}><BsGithub /></Link>
            </nav>
        </footer>
    )
}