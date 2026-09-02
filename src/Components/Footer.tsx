import React from 'react'

export default function Footer() {
  return (
    <footer className='flex flex-col items-center justify-center gap-3 bg-(--second-background-color) px-4 py-5 text-center text-sm text-(--white-color) sm:gap-5 sm:px-8 sm:text-base lg:px-40'>
        <p>Copyright &copy; 2025 All rights reserved.</p>
        <p>Designed and Developed by <span className='font-bold italic'>Kerolos Fayez</span></p>
    </footer>
  )
}
