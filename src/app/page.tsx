/* eslint-disable react/no-unescaped-entities */

'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import { motion } from "framer-motion"
import { Star, Zap, Rocket, CreditCard, Users, Twitter } from "lucide-react"

export default function Home() {
  const [currentYear, setCurrentYear] = useState(2077)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(prev => prev === 2077 ? 2023 : prev === 2023 ? 3000 : 2077)
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white max-w-screen-lg mx-auto p-4">
      {/* Background effects */}
      <div 
        className="absolute inset-0 filter blur-3xl opacity-30"
      />

      {/* Subtle floating blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-purple-500 opacity-10 filter blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-pink-500 opacity-10 filter blur-3xl"
          animate={{
            x: [0, -150, 0],
            y: [0, -100, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="https://x.com/CoachJandC">
            <Star className="h-6 w-6 text-yellow-400" />
            <span className="ml-2 font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">TweetPro3000</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:text-purple-500 transition-colors" href="https://x.com/CoachJandC">
              Fonctionnalités
            </Link>
            <Link className="text-sm font-medium hover:text-purple-500 transition-colors" href="https://x.com/CoachJandC">
              Offre VIP
            </Link>
            <Link className="text-sm font-medium hover:text-purple-500 transition-colors" href="https://x.com/CoachJandC">
              Roadmap
            </Link>
          </nav>
        </header>
        <main className="flex-1">
          <section className="relative w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-4">
                  Tweet Comme En <span className="text-purple-500">{currentYear}</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl mb-6">
                  Gicé, le génie solitaire derrière TweetPro3000, révolutionne sérieusement le game des réseaux sociaux ! 🚀
                </p>
                <div className="flex justify-center">
                  <video
                    className="w-full max-w-2xl rounded-lg"
                    controls
                    autoPlay // Lecture automatique
                    src="/videos/gice.mp4" // Chemin relatif à partir du dossier public
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 bg-opacity-50 backdrop-blur-lg">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                Sauvez <span className="text-purple-500">1JC</span> avec 10€ par mois 🦸‍♂️
              </h2>
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <FeatureCard
                  icon={<Rocket className="h-10 w-10 text-purple-500" />}
                  title="Tweets du Feu de Dieu"
                  description="Des tweets si chauds qu'ils feraient fondre un iceberg."
                />
                <FeatureCard
                  icon={<Twitter className="h-10 w-10 text-blue-400" />}
                  title="Threads Épiques"
                  description="Des threads si longs qu'ils feraient pâlir 'Guerre et Paix'."
                />
                <FeatureCard
                  icon={<Zap className="h-10 w-10 text-yellow-400" />}
                  title="Tweets Longs Démentiels"
                  description="Exprimez-vous sans limites !"
                />
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                Offre <span className="text-purple-500">VIP</span> Limitée 💎
              </h2>
              <div className="max-w-2xl mx-auto bg-gray-800 bg-opacity-50 backdrop-blur-lg p-8 rounded-xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">Rejoins le cercle des élus !</h3>
                <p className="text-gray-300 mb-6">
                  L'API Twitter coûte 100€ par mois, et c'est pas donné ! Gicé cherche 10 visionnaires pour partager les frais et façonner l'avenir de TweetPro3000. C'est sérieux, mais on va bien se marrer !
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CreditCard className="h-5 w-5 text-purple-500 mr-2" />
                    <span>Accès prioritaire aux nouvelles fonctionnalités</span>
                  </li>
                  <li className="flex items-center">
                    <Users className="h-5 w-5 text-purple-500 mr-2" />
                    <span>Influence directe sur le développement du produit</span>
                  </li>
                  <li className="flex items-center">
                    <Twitter className="h-5 w-5 text-purple-500 mr-2" />
                    <span>Tweets boostés par l'algorithme secret de Gicé</span>
                  </li>
                </ul>
                <Link
                  href="https://x.com/CoachJandC"
                  className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                >
                  Devenir VIP pour seulement 10€/mois
                </Link>
              </div>
            </div>
          </section>
        </main>
        <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
          <p className="text-xs text-center text-gray-400">
            © {new Date().getFullYear()} TweetPro3000 by Gicé. Tous droits réservés. Oui, je suis très drôle, mais le projet est TRÈS TRÈS sérieux.
          </p>
        </footer>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: JSX.Element; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, zIndex: 1 }}
      className="flex flex-col items-center text-center p-6 bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl shadow-lg"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-purple-400">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}