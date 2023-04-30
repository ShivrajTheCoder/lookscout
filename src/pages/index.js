import { detectSystemTheme } from '@/Utils/detectSystemTheme';
import FormStageComponenet from '@/components/FormHeaderComponents/FormStageComponenet';
import { useEffect, useState } from 'react';
export default function Home() {
  const isDarkMode=detectSystemTheme()
  return (
    <main className='flex justify-center items-center'>
      <FormStageComponenet/>
      <form>

      </form>
    </main>
  )
}
