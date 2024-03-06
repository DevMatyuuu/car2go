import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import React from 'react'

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
    <div className='flex flex-col items-center pt-48 mb-60 h-screen px-48 gap-20'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-6xl text-center mb-12 text-primary'>About Us: Car2Go Philippines</h1>
        <p className={poppins.className}>Welcome to Car2Go Philippines, where luxury meets convenience on the open road. Our passion for exceptional automobiles drives us to provide an unparalleled car rental experience for discerning enthusiasts. Buckle up as we take you on a thrilling ride through our story.</p>
      </div>
      <div className='flex flex-col gap-5'>
        <h2 className='text-5xl'>Our Journey</h2>
        <p className={poppins.className}>Car2Go was born out of a shared love for speed, precision, and elegance. Our founders, avid car aficionados themselves, envisioned a service that would redefine how people experience driving. With the bustling streets of Manila as our canvas, we set out to create a platform that marries performance with practicality.</p>
      </div>
      <div className='flex flex-col gap-5'>
        <h2 className='text-5xl'>Our Inception</h2>
        <p className={poppins.className}>In the vibrant year of 2024, Car2Go Philippines was established. Our founders, with their shared love for speed and precision, embarked on this journey to bring a new dimension to the car rental industry in the Philippines. Our inception marked the beginning of a new era in the car rental industry, where luxury and convenience coexist.</p>
      </div>
      <div className='flex flex-col gap-5'>
        <h2 className='text-5xl'>What We Offer</h2>
        <p className={poppins.className}>At Car2Go, we offer an exclusive range of supercars and sports cars. Our fleet is carefully curated to cater to the unique tastes and preferences of our clientele. While we won’t delve into the specifics of our car models, we assure you that our collection comprises some of the most sought-after vehicles in the world. Each car in our fleet embodies the spirit of performance, offering an exhilarating driving experience that is second to none.</p>
        <p className={poppins.className}>Join us at Car2Go Philippines, and let’s hit the road to luxury and convenience!</p>
      </div>
    </div>
  )
}
