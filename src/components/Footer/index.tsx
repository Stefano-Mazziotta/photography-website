import Link from 'next/link';
import { BsInstagram, BsGithub } from 'react-icons/bs';

export function Footer() {
    return (
        <footer className='w-full flex justify-center py-4'>
            <nav className='w-4/5 flex justify-end gap-5 text-3xl'>
                <Link className='hover:text-stone-400 transition-all' href={'#'}><BsInstagram /></Link>
                <Link className='hover:text-stone-400 transition-all' href={'#'}><BsGithub /></Link>
            </nav>
        </footer>
    )
}