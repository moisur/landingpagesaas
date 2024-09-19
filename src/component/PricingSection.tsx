import { Check } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const tiers = [
  {
    name: "EARLY VIP",
    monthlyPrice: "10€",
    yearlyPrice: "100€",
    features: [
      "Programmation illimitée de tweets",
      "Analyse de performance avancée",
      "Threads automatiques",
      "Suggestions de contenu IA",
      "Support prioritaire 24/7",
      "Accès bêta aux nouvelles fonctionnalités",
      "Consultation stratégique mensuelle",
    ],
    cta: "Rejoindre les VIP",
    href: "#",
    places: "20 places",
    description: "Accès exclusif pour les premiers adoptants",
  },
  {
    name: "LATE BIRD",
    monthlyPrice: "15€",
    yearlyPrice: "150€",
    features: [
      "Programmation illimitée de tweets",
      "Analyse de performance standard",
      "Threads automatiques",
      "Suggestions de contenu IA",
      "Support prioritaire",
      "Accès bêta aux nouvelles fonctionnalités",
      "Consultation stratégique mensuelle",
    ],
    cta: "S'inscrire",
    href: "#",
    places: "80 places",
    description: "Pour ceux qui veulent plus que le basique",
  },
  {
    name: "SUPER LATE",
    monthlyPrice: "20€",
    yearlyPrice: "200€",
    features: [
      "Programmation limitée de tweets",
      "Analyse de performance basique",
      "Threads manuels",
      "Support standard",
      "Accès bêta aux nouvelles fonctionnalités",
      "Consultation stratégique mensuelle",
    ],
    cta: "S'inscrire",
    href: "#",
    places: "Places illimitées",
    description: "Fonctionnalités essentielles pour débutants",
  },
]

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  const calculateSavings = (monthly: string, yearly: string) => {
    const monthlyPrice = parseFloat(monthly.replace('€', ''))
    const yearlyPrice = parseFloat(yearly.replace('€', ''))
    const annualCost = monthlyPrice * 12
    const savings = annualCost - yearlyPrice
    return Math.round(savings)
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
          Choisissez votre plan <span className="text-purple-500">CTRL</span>
        </h2>
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800 p-1 rounded-full">
            <button
              className={`px-4 py-2 rounded-full ${
                !isAnnual ? "bg-purple-600 text-white" : "text-gray-300"
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Mensuel
            </button>
            <button
              className={`px-4 py-2 rounded-full ${
                isAnnual ? "bg-purple-600 text-white" : "text-gray-300"
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Annuel
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-8 rounded-xl shadow-2xl flex flex-col relative overflow-hidden"
            >
              {isAnnual && (
                <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 transform rotate-45 translate-x-8 translate-y-4">
                  Vous économisez {calculateSavings(tier.monthlyPrice, tier.yearlyPrice)}€
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2 text-white">{tier.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{tier.description}</p>
              <p className="text-3xl font-bold mb-1 text-purple-500">
                {isAnnual ? tier.yearlyPrice : tier.monthlyPrice}
                <span className="text-sm font-normal text-gray-400">
                  {isAnnual ? "/an" : "/mois"}
                </span>
              </p>
              <p className="text-sm text-white mb-6 font-semibold">{tier.places}</p>
              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={tier.href}
                className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded transition duration-300"
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}