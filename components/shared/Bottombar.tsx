"use client"
import { sidebarLinks } from '@/constants'
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Bottombar() {
 const pathname = usePathname()
  return (
  <section className='bottombar'>
    <div className='bottombar_container'>
    {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;

          return (
            <Link
              key={item.label}
              href={item.route}
              className={`bottombar_link ${isActive && "bg-primary-500"}`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={24}
                height={24}
              />
              <p className="text-light-1 text-subtle-medium  max-sm:hidden">
                {item.label.split(/\s+/)[0]}</p>
            </Link>
          );
        })}
    </div>
  </section>
  )
}
