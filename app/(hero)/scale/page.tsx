import Hero from "@/app/components/hero";
import React from 'react'
import scale from '@/public/scale.jpg'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Scale',
}
export default function Page() {
  return (
    <Hero imgUrl={scale} altTxt="Scale" content="Scale~~~" />
  )
}
