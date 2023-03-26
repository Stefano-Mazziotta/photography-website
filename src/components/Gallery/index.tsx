import { useRef } from 'react'
import Image from 'next/image';


import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import Masonry from 'react-masonry-css';

import david1 from '../../../public/david.jpg';
import david2 from '../../../public/david-2.jpg';
import catedralle from '../../../public/catedralle.jpg';
import catedralle2 from '../../../public/catedralle-2.jpg';
import pieta from '../../../public/pieta.jpg';
import autoretrato from '../../../public/autoretrato.jpg';

import type { LightGallery } from 'lightgallery/lightgallery';
import LightGalleryComponent from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

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

    const lightboxRef = useRef<LightGallery | null>(null)

    const handleInitLightGallery = (ref: any) => {
        lightboxRef.current = ref.instance
    }

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
                                {images.map((image, index) => (
                                    <Image
                                        key={image.src}
                                        className='my-3 cursor-pointer'
                                        src={image}
                                        alt={image.src}
                                        placeholder='blur'
                                        onClick={() => {
                                            const { current } = lightboxRef;
                                            if (current) current.openGallery(index)
                                        }}
                                    />
                                ))}
                            </Masonry>
                        </Tab.Panel>
                        <Tab.Panel>Content 2</Tab.Panel>
                        <Tab.Panel>Content 3</Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>

                <LightGalleryComponent
                    onInit={handleInitLightGallery}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom, lgVideo]}
                    dynamic={true}
                    dynamicEl={images.map(image => (
                        {
                            src: image.src,
                            thumb: image.src
                        }
                    ))}
                />

            </article>
        </section >
    )
}