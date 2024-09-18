// import React from 'react'

const Footer = () => {
  return (
    <footer className='py-6 md:px-8 md:py-0 bg-black text-white items-center text-center'>
        <div className='flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row'>
            <p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
                Built By{" "}
                    <a href="https://github.com/benjminrichie"
                        target='_blank'
                className='font-medium underline underline-offset-4'
                    >Benjamin</a>{" "} 
                    and {" "}
                    <a href="https://github.com/ElizabethAgada" 
                    target='_blank'
                className='font-medium underline underline-offset-4'
                    >Lizzy</a> {"  "}
                
                .View Source Code{" "}
                <a 
                href="https://github.com/benjminrichie/alx-Stream_App"
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