import Link from 'next/link';

export function Header() {
    return (
        <header className='w-full py-4 bg-stone-900 flex justify-center shadow-lg sticky top-0 z-10'>
            <nav className='w-4/5 flex justify-between items-center'>
                <Link
                    href={'#'}
                    className='text-2xl font-bold hover:text-violet-500 transition-all'>
                    <h1>photolove</h1>
                </Link>
                <Link
                    href={'#'}
                    className='px-6 py-1 bg-violet-400 text-stone-900 font-bold hover:bg-violet-500 transition-all'>
                    Donate!
                </Link>
            </nav>
        </header>
    )
}