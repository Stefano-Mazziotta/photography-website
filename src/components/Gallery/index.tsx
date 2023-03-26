import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import Masonry from 'react-masonry-css';
import Image from 'next/image';

import david1 from '../../../public/david.jpg';
import david2 from '../../../public/david-2.jpg';
import catedralle from '../../../public/catedralle.jpg';
import catedralle2 from '../../../public/catedralle-2.jpg';
import pieta from '../../../public/pieta.jpg';
import autoretrato from '../../../public/autoretrato.jpg';

const tabs = [
    {
        key: 'all',
        display: 'All'
    },
    {
        key: 'oceans',
        display: 'Oceans'
    },
    {
        key: 'forests',
        display: 'Forests'
    },
]

const images = [
    david1,
    david2,
    catedralle,
    catedralle2,
    pieta,
    autoretrato
]

export function Gallery() {

    return (
        <section className='w-full flex justify-center h-auto'>
            <article className='w-4/5 flex flex-col items-center'>

                <Tab.Group>
                    <Tab.List className='flex justify-center items-center gap-10 py-5'>

                        {tabs.map(tab => (
                            <Tab key={tab.key} className='p-2'>
                                {({ selected }) => (
                                    <span className={classNames(
                                        'uppercase text-lg',
                                        selected ? 'text-white' : 'text-stone-600'
                                    )}>
                                        {tab.display}
                                    </span>
                                )}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className='bg-stone-900 bg-opacity-80 h-full max-w-[1000px] w-full p-2 sm:p-4'>
                        <Tab.Panel>
                            <Masonry breakpointCols={2} className='flex gap-3' columnClassName=''>
                                {images.map((image) => (
                                    <Image key={image.src} className='my-3' src={image} alt='el david' placeholder='blur' />
                                ))}
                            </Masonry>
                        </Tab.Panel>
                        <Tab.Panel>Content 2</Tab.Panel>
                        <Tab.Panel>Content 3</Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>

            </article>
        </section>
    )
}