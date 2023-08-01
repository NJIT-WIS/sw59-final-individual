import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="navbar h-4">
            <div className="navbar-start w-1/4">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box text-neutral-700 font-semibold">
                        <li><a href='/'>Home</a></li>
                        <li><a href='/article' className='text-neutral-700 font-semibold font-sans'>Article</a></li>
                        <li><a href='/skills' className='text-neutral-700 font-semibold font-sans'>Skills</a></li>
                        <li><a href='/project' className='text-neutral-700 font-semibold font-sans'>Project</a></li>
                        <li><a href='/education' className='text-neutral-700 font-semibold font-sans'>Education</a></li>
                        <li><a href='/working-experience' className='text-neutral-700 font-semibold font-sans'>Working Experience</a></li>
                        <li><a href='/contact' className='text-neutral-700 font-semibold font-sans'>Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href='/article' className='text-neutral-700 font-semibold font-sans'>Article</a></li>
                    <li><a href='/skills' className='text-neutral-700 font-semibold font-sans'>Skills</a></li>
                    <li><a href='/project' className='text-neutral-700 font-semibold font-sans'>Project</a></li>
                    <li><a href='/education' className='text-neutral-700 font-semibold font-sans'>Education</a></li>
                    <li><a href='/working-experience' className='text-neutral-700 font-semibold font-sans'>Working Experience</a></li>
                    <li><a href='/contact' className='text-neutral-700 font-semibold font-sans'>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}
