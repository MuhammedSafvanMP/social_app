import React from 'react'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { Button } from "@/components/ui/button"
import ModeToggle from '@/components/ModeToggle'


export default function Home() {
  return (
    <>
    <SignedOut>
    <SignInButton >
    <Button variant="outline">Sign In</Button>
      </SignInButton> 
  </SignedOut>
  <SignedIn>
    <UserButton />
  </SignedIn>
  <ModeToggle />
    </>
  )
}
