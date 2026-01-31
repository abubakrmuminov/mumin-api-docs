'use client'

export function PricingCards() {
    const pricingTiers = [
        {
            name: 'Free Trial',
            price: '1,000',
            unit: 'credits to get started',
            features: [
                '✅ All features',
                '✅ Multi-language',
                '✅ Full API access',
            ],
            highlighted: false,
        },
        {
            name: 'Pay as You Go',
            price: '$0.001',
            unit: 'per request',
            features: [
                '✅ No monthly fees',
                '✅ Only pay for usage',
                '✅ Volume discounts',
            ],
            highlighted: true,
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            unit: 'pricing for high volume',
            features: [
                '✅ Dedicated support',
                '✅ SLA guarantees',
                '✅ Custom features',
            ],
            highlighted: false,
        },
    ]

    return (
        <div className="grid md:grid-cols-3 gap-6 my-8">
            {pricingTiers.map((tier) => (
                <div
                    key={tier.name}
                    className={`p-6 rounded-xl relative ${
                        tier.highlighted
                            ? 'border-2 border-gold-500'
                            : 'border border-emerald-900/10'
                    }`}
                >
                    {tier.highlighted && (
                        <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs px-3 py-1 rounded-bl-lg rounded-tr-lg font-accent">
                            Popular
                        </div>
                    )}
                    <h3 className="text-2xl font-display text-emerald-900 mb-2">
                        {tier.name}
                    </h3>
                    <p className="text-4xl font-display text-gold-500 mb-4">
                        {tier.price}
                    </p>
                    <p className="text-sm text-charcoal/60 font-body mb-4">
                        {tier.unit}
                    </p>
                    <ul className="space-y-2 text-sm text-charcoal/70">
                        {tier.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
