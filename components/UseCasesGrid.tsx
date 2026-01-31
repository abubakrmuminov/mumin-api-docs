'use client'

export function UseCasesGrid() {
    const useCases = [
        {
            icon: '📱',
            title: 'Mobile Apps',
            description: 'Build Islamic apps with daily hadith notifications, search, and bookmarking.',
        },
        {
            icon: '🌐',
            title: 'Websites',
            description: 'Display hadiths on your Islamic website or blog with our easy-to-use API.',
        },
        {
            icon: '🤖',
            title: 'Bots',
            description: 'Create Telegram, Discord, or WhatsApp bots that share daily hadiths.',
        },
        {
            icon: '📊',
            title: 'Research',
            description: 'Analyze hadith data for academic research and Islamic studies.',
        },
    ]

    return (
        <div className="grid md:grid-cols-2 gap-6 my-8">
            {useCases.map((useCase) => (
                <div
                    key={useCase.title}
                    className="p-6 border border-emerald-900/10 rounded-xl"
                >
                    <h3 className="text-lg font-display text-emerald-900 mb-2">
                        {useCase.icon} {useCase.title}
                    </h3>
                    <p className="text-sm text-charcoal/60 font-body">
                        {useCase.description}
                    </p>
                </div>
            ))}
        </div>
    )
}
