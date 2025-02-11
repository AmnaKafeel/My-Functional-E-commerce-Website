"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button"
import { NavigationMenuDemo } from "../NavMenu";
import { IoMenu } from "react-icons/io5";

import {
  Sheet,
  
  SheetContent,
  
  
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet"

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid  gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild className="md:hidden">
            <Button className="" >
                < IoMenu/>

            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>SHOP.CO</SheetTitle>
              
            </SheetHeader>
            
            <ul className=''>
        <li className='grid grid-cols-1 gap-y-4'>
          <Link href='#' className="ml-3"><NavigationMenuDemo/></Link>
          <Link href='#' className="ml-3">On Sale</Link>
          <Link href='#' className="ml-3">New Arrival</Link>
          <Link href='#' className="ml-3">Brands</Link>
          
        </li>
      </ul>
            
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
