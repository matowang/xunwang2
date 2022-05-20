import type { NextPage } from 'next'
import Image from 'next/image';

import XunWorkingImg from '../public/images/xun-working.jpg';

const Home: NextPage = () => {
  return (
    <div className='pt-40'>
      <section className='items-center grid md:grid-cols-2 max-w-7xl mx-auto gap-10 p-5'>
        <div className=''>
          <Image src={XunWorkingImg} alt='xun wang working' width={2000} height={1333} placeholder='blur' />
        </div>
        <div className='flex flex-col gap-4 opacity-70 text-sm'>
          <p>Born in the era of traditional art craftsmanship alongside the rise of digital development, Xun Wang has combined both forms of media. After studying at the sculpture department at the National Taiwan University of Arts, he developed the ability to sculpt human figures and acquired expertise in the art of sculpting. Striving to innovate in his artistic path, Xun Wang went abroad for further studies. </p>
          <p>After graduating from the New York Institute of Technology, he worked in well-known visual effects companies. This allowed him to develop his skills in 3D animation and digital art production. These experiences inspired him to merge traditional and digital art mediums. Through continuous exploration based on traditional skills, coupled with high-tech expertise, he cultivated a set of unique personal cross-generational artworks, which he calls the "Space in Time" sculptures.</p>
        </div>
      </section>
    </div>
  )
}

export default Home
