import React from 'react';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="flex flex-col gap-8 lg:min-h-screen lg:pb-12">
        <div className="flex flex-col gap-6">
          <p className="text-2xl font-light">
            hey I'm Adeel<br />
            a pm working in data center infra
          </p>
        </div>
        <Navigation />
      </section>

      <section className="mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LandGate */}
          <div className="col-span-2">
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="/images/data-center.jpg"
                alt="Data Center Infrastructure"
                width={800}
                height={400}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-4 text-xl font-medium">Data Center Infra Analytics</h3>
            <p className="text-gray-600">LandGate</p>
          </div>

          {/* Secondary Works */}
          <div className="flex flex-col gap-8">
            {/* Neu Money */}
            <div>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="/images/neu.jpg"
                  alt="Neu Money Platform"
                  width={400}
                  height={300}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-xl font-medium">User Journey Optimization</h3>
              <p className="text-gray-600">Neu Money</p>
            </div>

            {/* STVDIO */}
            <div>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="/images/stvdio.jpg"
                  alt="STVDIO Payment System"
                  width={400}
                  height={300}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-xl font-medium">Payment Gateway System</h3>
              <p className="text-gray-600">STVDIO</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
