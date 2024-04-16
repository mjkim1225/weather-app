'use client'

import { useRouter } from "next/navigation"

export default function HomeBtn() {
     
  const router = useRouter();

  const goHome = () => {
    router.push('/');
  }

  return (
    <>
      <button onClick={goHome}>홈으로</button>
    </>
  )
}