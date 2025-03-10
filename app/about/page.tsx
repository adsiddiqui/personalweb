import React from 'react';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';

export default function About() {
  return (
    <>
      <section className="flex flex-col gap-8 lg:min-h-screen">
        <Navigation />
        
        <div className="about-container max-w-3xl">
          <div className="about-text space-y-6 text-lg">
            <p>Hi, I'm Adeel.</p>
            
            <p>I enjoy building tech solutions that solve real problems and make everyday life a little easier. Technology moves fast and I love keeping up.</p>
            
            <p>Currently, I work at LandGate, focusing on data center infrastructure. I work with leading tech companies to evaluate power and network infrastructure, and provide domain-specific insights on operational efficiency.</p>
            
            <p>I studied Quantitative Economics and Data Science at UCLA, where I learned how to break down complex problems and make sense of messy data.</p>
            
            <p>Outside of work, I like working on personal projects, discovering new coffee spots around town, and hiking the scenic trails nearby. Whether I'm building something new or exploring the outdoors, I always enjoy new challenges.</p>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
} 