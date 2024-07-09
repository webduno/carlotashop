import Image from 'next/image'
import styles from './page.module.css'
import { FaTwitter, FaTelegram, FaYoutube, FaTiktok, FaExchangeAlt, FaChartLine, FaFilePdf, FaFile, FaGamepad, FaWhatsapp, FaInstagram, FaGlasses, FaSun, FaMoon } from 'react-icons/fa'
import { GiGecko } from 'react-icons/gi'
import { FaEarDeaf, FaEarListen, FaHandBackFist } from 'react-icons/fa6'
import { TbShoe } from 'react-icons/tb'
import { ContactButton, FooterSection, HeroSection, LogoButton, MainSection } from '@/dom/ContactButton'
import { ShopSection } from '@/dom/ShopSection'

export default function Home() {
  return (
    <main className='flex-col w-100 h-100vh autoverflow-y flex-justify-start py-100' style={{background: "#F6F6F6"}}>
      <LogoButton />
      <ContactButton />
      <ShopSection />
    </main>
  )
}


