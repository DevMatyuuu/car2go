import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export const metadata: Metadata = {
  title: "Car2Go | About",
  description: "All about Car2Go",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400"
});

export default function About() {
  return (
    <div className='flex flex-col items-center xl:pt-48 py-40 xl:mb-60 xl:h-screen h-auto xl:px-48 px-8 xl:gap-20 gap-8'>
      <div className='flex flex-col gap-5'>
        <h1 className='xl:text-6xl text-4xl text-center xl:mb-12 mb-6 text-primary'>About Us: Car2Go Philippines</h1>
        <p className={`${poppins.className} text-justify`}>Welcome to Car2Go Philippines, where luxury meets convenience on the open road. Our passion for exceptional automobiles drives us to provide an unparalleled car rental experience for discerning enthusiasts. Buckle up as we take you on a thrilling ride through our story.</p>
      </div>
      <Accordion type="single" collapsible className="w-full flex flex-col gap-10">
      <AccordionItem value="item-1">
        <AccordionTrigger className='xl:text-3xl text-2xl'>Our Journey</AccordionTrigger>
        <AccordionContent>
          <p className={`${poppins.className} text-justify`}>Car2Go was born out of a shared love for speed, precision, and elegance. Our founders, avid car aficionados themselves, envisioned a service that would redefine how people experience driving. With the bustling streets of Manila as our canvas, we set out to create a platform that marries performance with practicality.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className='xl:text-3xl text-2xl'>Our Inception</AccordionTrigger>
        <AccordionContent>
          <p className={`${poppins.className} text-justify`}>In the vibrant year of 2024, Car2Go Philippines was established. Our founders, with their shared love for speed and precision, embarked on this journey to bring a new dimension to the car rental industry in the Philippines. Our inception marked the beginning of a new era in the car rental industry, where luxury and convenience coexist.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className='xl:text-3xl text-2xl'>What We Offer</AccordionTrigger>
        <AccordionContent className='flex flex-col gap-7'>
          <p className={`${poppins.className} text-justify`}>At Car2Go, we offer an exclusive range of supercars and sports cars. Our fleet is carefully curated to cater to the unique tastes and preferences of our clientele. While we won’t delve into the specifics of our car models, we assure you that our collection comprises some of the most sought-after vehicles in the world. Each car in our fleet embodies the spirit of performance, offering an exhilarating driving experience that is second to none.</p>
          <p className={`${poppins.className} text-justify`}>Join us at Car2Go Philippines, and let’s hit the road to luxury and convenience!</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    
    </div>
  )
}
