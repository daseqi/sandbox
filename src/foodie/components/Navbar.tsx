import Link from 'next/link'
import SearchBar from '@/components/Search'
import { DynaPuff } from 'next/font/google'

const dyna = DynaPuff({ subsets: ['latin'] })

export default function Navbar() {
  return (
    <nav className="bg-emerald-500 p-4 sticky top-0 drop-shadow-xl z-10">
        <div className="md:px-6 prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
            <h1 className="text-3xl font-bold text-white flex place-content-center mb-2 md:mb-0">
                <Link href="/" className={dyna.className}>Foodie</Link>
            </h1>
            <div className="wt-width-full wt-display-flex-xs"><SearchBar /></div>
        </div>
    </nav>
  )
}
