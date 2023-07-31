import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
        <h1>
            <Link href="/article">Article</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/project">Project</Link>
            <Link href="/education">Education</Link>
            <Link href="/working-experience">Working Experience</Link>
            <Link href="/contact">Contact</Link>
        </h1>
        
    </nav>
)
}
