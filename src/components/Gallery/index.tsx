import { useRef } from 'react'
import Image from 'next/image';

import Masonry from 'react-masonry-css';

import type { LightGallery } from 'lightgallery/lightgallery';
import LightGalleryComponent from 'lightgallery/react';

// import styles - lightgallery
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need - lightgallery
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

import { GalleryProps } from '@/types';

export function Gallery({ photos }: GalleryProps) {
    const lightboxRef = useRef<LightGallery | null>(null);

    const handleInitLightGallery = (ref: any) => {
        lightboxRef.current = ref.instance
    }

    const breakpointColumnsObj = {
        default: 3,
        700: 2,
        500: 1
      };

    return (
        <>
            <Masonry breakpointCols={breakpointColumnsObj} className='flex gap-3' columnClassName=''>

                {photos.map((photo, index) => (
                    <Image
                        key={photo.src}
                        className='my-3 cursor-pointer opacity-[.60] transition-all hover:opacity-100'
                        src={photo.src}
                        alt={photo.src}
                        width={photo.width}
                        height={photo.height}
                        placeholder='blur'
                        blurDataURL={photo.blurDataURL}
                        onClick={() => {
                            const { current } = lightboxRef;
                            if (current) current.openGallery(index)
                        }}
                    />
                ))}
            </Masonry>

            <LightGalleryComponent
                onInit={handleInitLightGallery}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgVideo]}
                dynamic={true}
                dynamicEl={photos.map(photo => (
                    {
                        src: photo.src,
                        thumb: photo.thumb
                    }
                ))}
            />
        </>
    )
}