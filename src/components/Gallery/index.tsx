import { Tab } from '@headlessui/react';

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
        <section className='w-full h-screen flex justify-center'>
            <article className='w-4/5 flex flex-col items-center'>

                <Tab.Group>
                    <Tab.List className='flex justify-center items-center gap-10 py-5'>

                        {tabs.map(tab => (
                            <Tab key={tab.key} className='p-2'>
                                {({ selected }) => (
                                    <span className={selected ? 'text-white' : 'text-stone-600'}>
                                        {tab.display}
                                    </span>
                                )}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className='bg-stone-900 bg-opacity-80 h-full max-w-[900px] w-full p-2 sm:p-4'>
                        <Tab.Panel>Content 1</Tab.Panel>
                        <Tab.Panel>Content 2</Tab.Panel>
                        <Tab.Panel>Content 3</Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>

            </article>
        </section>
    )
}