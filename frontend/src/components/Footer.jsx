import React from 'react'

const Footer = () => {
  return (
    <footer className='py-6 md:px-8 md:py-0 bg-black text-white border-t border-gray-800'>
        <div className='flex flex-col items-center justify-betweengap-4 md:h-24 md:flex-row'>
            <p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
                Built By{" "}
                <a 
                href=""
                target='_blank'
                className='font-medium underline underline-offset-4'
                >
                    Benjamin and Lizzy
                </a>
                .View Source Code{" "}
                <a 
                href=""
                target='_blank'
                rel='noreferrer'
                className='font-medium underline underline-offset-4'
                >
                    Github
                </a>
                .
            </p>
        </div>
    </footer>
  )
}

export default Footer