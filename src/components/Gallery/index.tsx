import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import Masonry from 'react-masonry-css';
classNames

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
                                <img src='/autoretrato.jpg' alt='autoretrato' className='my-3' />
                                <img src='/david.jpg' alt='david' className='my-3' />
                                <img src='/catedralle-2.jpg' alt='catedralle' className='my-3' />
                                <img src='/catedralle.jpg' alt='catedralle' className='my-3' />
                                <img src='/david-2.jpg' alt='david' className='my-3' />
                                <img src='/pieta.jpg' alt='la pieta' className='my-3' />
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