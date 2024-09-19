/* eslint-disable react/no-unescaped-entities */

'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import { Star, Zap, Rocket, CreditCard, Users, Menu, X, Twitter } from "lucide-react"
import AnimatedBackground from './../component/AnimatedBackground'
import PricingSection from '@/component/PricingSection'

export default function Component() {
  const [currentYear, setCurrentYear] = useState("SIMPLE")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(prev => prev === "SIMPLE" ? "Rapide" : prev === "Rapide" ? "Efficace" : "SIMPLE")
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className=" inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q0,30 50,50 T100,50" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.7"></path>
          <path d="M0,50 Q0,30 50,50 T100,50" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.7"></path>
          <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.7"></path>
          <path d="M0,70 Q35,50 70,70 T100,70" fill="none" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="0.7"></path>
        </svg>
                    <path d="M0,50 Q0,30 50,50 T100,50" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.7"></path>

            <path d="M0,50 Q0,30 50,50 T100,50" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.7"></path>
            <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.7"></path>
            <path d="M0,70 Q35,50 70,70 T100,70" fill="none" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="0.7"></path>
          </svg>
        </div>
      </div>
      <header className="relative z-20 px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="https://x.com/CoachJandC">
          <Star className="h-6 w-6 text-yellow-400" />
          <span className="ml-2 font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">CTRL</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
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
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>
      
      {isMenuOpen && (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-90">
          <nav className="flex flex-col items-center justify-center h-full">
            <Link className="text-lg font-medium py-2 hover:text-purple-500 transition-colors" href="https://x.com/CoachJandC" onClick={toggleMenu}>
              Fonctionnalités
            </Link>
            <Link className="text-lg font-medium py-2 hover:text-purple-500 transition-colors" href="https://x.com/CoachJandC" onClick={toggleMenu}>
              Offre VIP
            </Link>
            <Link className="text-lg font-medium py-2 hover:text-purple-500 transition-colors" href="https://x.com/CoachJandC" onClick={toggleMenu}>
              Roadmap
            </Link>
          </nav>
        </div>
      )}

      <main className="flex-1">
        <section className="relative w-full h-screen flex flex-col">
          <div className="relative z-10 text-center px-4 pt-20 flex-grow flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-shadow-lg">
              CTRL c'est <span className="text-purple-500">{currentYear}</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl mb-6 text-shadow">
            CTRL : le programmateur de tweets SIMPLE, RAPIDE et EFFICACE.<br /> Prenez le contrôle de votre présence sur 𝕏 sans effort.
            </p>
          </div>
          <div className="relative w-full h-1/2">
            <AnimatedBackground />
          </div>
        </section>


        <section className=" py-12 md:py-24 lg:py-32 bg-opacity-50 backdrop-blur-lg">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Devenez <span className="text-purple-500">CTRL VIP</span> (a vie) pour un MacDo par mois 🍔
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Rocket className="h-10 w-10 text-purple-500" />}
                title="Crée tes tweets en quelques clics"
                description="Des tweets 𝕏 si rapides qu'ils gagnent les JO."
              />
              <FeatureCard
                icon={<Twitter className="h-10 w-10 text-blue-400" />}
                title="Threads 𝕏 Intelligents"
                description="Des features uniques pensées pour VOUS"
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-yellow-400" />}
                title="Tweets Longs Démentiels"
                description="Vous avez hâte de pouvoir jouer avec CTRL 𝕏 !"
              />
            </div>
          </div>
        </section>

        <section>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Offre <span className="text-purple-500">VIP</span> Limitée 💎
            </h2>
            <div className="max-w-2xl mx-auto bg-gray-800 bg-opacity-50 backdrop-blur-lg p-8 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Rejoins le cercle des élus de 𝕏 !</h3>
              <p className="text-gray-300 mb-6">
              Pour un Macdal, tu seras en contact direct avec JC le créateur et developpeur de CTRL. Tu pourras échanger avec lui et lui demander tes propres fonctionnalités!
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CreditCard className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                  <span>Accès prioritaire aux nouvelles fonctionnalités</span>
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                  <span>Influence directe sur le développement du produit</span>
                </li>
                <li className="flex items-center">
                  <Twitter className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                  <span>Tweets boostés par l'algorithme secret</span>
                </li>
              </ul>
              <Link
                href="https://x.com/CoachJandC"
                className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              >
                Devenir VIP pour seulement 10€/mois
              </Link>
          </div>
        </section>

        
        <section className="relative w-full py-8 md:py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-center">
              <video
                className="w-full max-h-80 max-w-2xl rounded-lg shadow-lg"
                controls
                autoPlay
                src="/videos/gice.mp4"
              />
            </div>
          </div>
        </section>

        <PricingSection />

      </main>

      <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-center text-gray-400">
          © {new Date().getFullYear()} CTRL by Gicé. Tous droits réservés. Oui, je suis très drôle, mais le projet est TRÈS TRÈS sérieux.
        </p>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: JSX.Element; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl shadow-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-purple-400">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}