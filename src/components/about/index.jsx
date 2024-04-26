"use client";
import React from 'react'
import { Tilt } from 'react-tilt'
import ItemLayout from './ItemLayout';


const AboutDetails = () => {
  return (
    <section className='py-20 w-full'>
      <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>
       
      <Tilt  options={{
          max: 45,
          scale: 1,
          speed: 450,
        }} className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
        <ItemLayout className={'col-span-full lg:col-span-8 row-span-2 flex-col items-start'}>
        <h2 className='md:text-2xl text-left w-full capitalize'>
            Angel of Enchantment
        </h2>
        <p className='font-light text-xs sm:text-sm md:text-base'>
        My odyssey in Software Development is fueled by a diverse arsenal of magical tools and languages, with JavaScript and Python serving as the foundation of my digital incantations. I masterfully wield frameworks and libraries like React.js, Next.js, Tailwind, and Three.js, ReactNative, Anaconda, Tensorflow, Solidity to craft enchanting portals (websites), mobile applications, AI-driven wonders (Machine Learning), and Web 3 web apps that bridge the gap between users across the vast digital expanse.

With the ancient wisdom of the Jamstack at my disposal, I conjure fast, secure, and dynamic experiences that leave a lasting impression. My design prowess ensures that every creation is not only functional but also visually stunning, weaving together form and function in perfect harmony.

Join me on my quest to explore new technologies and spells, as I continue to shape the future of the web and push the boundaries of what is possible in the digital realm
            
        </p>
        </ItemLayout>
        </Tilt>

        <Tilt  options={{
          max: 45,
          scale: 1,
          speed: 450,
        }} className="w-full col-span-full xs:col-span-6 lg:col-span-4 text-accent">
        <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
        <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
            25+ <sub className='font-semibold text-base'> clients </sub>
        </p>
        </ItemLayout>
         </Tilt>
          
        <Tilt  options={{
          max: 45,
          scale: 1,
          speed: 450,
        }} className="w-full col-span-full xs:col-span-6 lg:col-span-4 text-accent">
        <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
        <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
          5+ <sub className='font-semibold text-base'> Years of Experience </sub>
        </p>
        </ItemLayout>
        </Tilt>
          
        <Tilt  options={{
          max: 45,
          scale: 1,
          speed: 450,
        }} className="col-span-full sm:col-span-6 md:col-span-4 !p-0">
        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
      <a className='w-full h-auto' href="https://github.com/ElBalor/">
    <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api/top-langs?username=ElBalor&theme=transparent&hide_border=true&text_color=#00008B&text_bold=true" />
      </a>
        </ItemLayout>
       </Tilt>

       <Tilt  options={{
          max: 45,
          scale: 1,
          speed: 450,
        }} className="col-span-full md:col-span-8 !p-0">
   <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
     <picture className='w-full h-auto'>
          <source
           srcset="https://github-readme-stats.vercel.app/api?username=ElBalor&show_icons=true&theme=transparent&hide_border=true"
            media="(prefers-color-scheme: dark)"
        />
         <source
        srcset="https://github-readme-stats.vercel.app/api?username=ElBalor&show_icons=true&hide_border=true"
        media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
        />
      <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api?username=ElBalor&show_icons=true&hide_border=true" />
    </picture>
        </ItemLayout>
        </Tilt>

        <Tilt  options={{
          max: 45,
          scale: 1,
          speed: 450,
        }} className="col-span-full flex-col">
        <ItemLayout className={"col-span-full flex-col"}>
      <a className='w-full h-auto' href="https://github.com/ElBalor/">
    <img className='w-full h-auto' src=" https://skillicons.dev/icons?i=js,html,css,wasm,nodejs,react,apple,appwrite,babel,blender,discord,docker,express,pnpm,sass" />
      </a>
      <a className='w-full h-auto' href="https://github.com/ElBalor/">
    <img className='w-full h-auto' src=" https://skillicons.dev/icons?i=fastapi,figma,firebase,github,gmail,htmx,jquery,linkedin,mongodb,mysql,nextjs,npm,postgres,solidity,supabase" />
      </a>
        </ItemLayout>
        </Tilt>
        
        <Tilt  options={{
          max: 45,
          scale: 1,
          speed: 450,
        }} className="col-span-full md:col-span-6 !p-0">
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
        <a className='w-full h-auto' href="https://git.io/streak-stats"><img className='w-full h-auto' src="https://github-readme-streak-stats.herokuapp.com?user=ElBalor&theme=dark&hide_border=true&type=svg&ring=00FFFF&currStreakLabel=1A5EB7&background=45%2C48E9EB00%2C70D1EB69" loading='lazy' alt="GitHub Streak" /></a>
        </ItemLayout>
        </Tilt>
         
        <Tilt  options={{
          max: 45,
          scale: 1,
          speed: 450,
        }} className="col-span-full md:col-span-6 !p-0">
        <ItemLayout className={"col-span-full md:col-span-6 !p-0 "}>
        <a className='w-full h-auto' href="https://bank-website-mocha.vercel.app/"><img className='w-full h-auto' src=" https://github-readme-stats.vercel.app/api/pin/?username=ElBalor&repo=bank-website&theme=transparent&hide_border=true" loading='lazy' alt="GitHub Streak" /></a>
        </ItemLayout>
        </Tilt>
        {/* https://github.com/ElBalor/saas-ai */}
      </div>
    </section>
  )
}

export default AboutDetails
