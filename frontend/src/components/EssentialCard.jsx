


function EssentialCard() {

    const cardData = [
        { id: 1, icon: 'bi bi-hdd-network', head: 'Work from Any Where', text: 'Keep important info handy—your notes sync automatically across all your devices.'},
        { id: 2, icon: 'bi bi-lightbulb', head: 'Remember Everything', text: 'take notes more by adding text, images, audio, scans, PDFs, and documents'},
        { id: 3, icon: 'bi bi-clock-history', head: 'Find it Faster', text: 'Get what you need. when you need it with powerful and flexible search capabilities.'}
    ]

    

    return (
        <section className="m-12">

            <h1 className="text-3xl max-sm:text-2xl text-center font-bold py-2 dark:text-white">Unlock your <span className="text-[#68f838]">best work</span></h1>
            <p className="text-xl max-sm:text-xs text-center pb-10 dark:text-white">Suppanote helps you and your team unlock your best work with amazing meeting notes all in one place</p>

            <div className="grid md:grid-cols-3 gap-4">
                {
                    cardData.map((card) => (
                        <div key={card.id} className="card max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <i className={`${card.icon} text-2xl dark:text-white`}></i>
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{card.head}</h5>
                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{card.text}</p>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}

export default EssentialCard