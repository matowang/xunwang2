import type { NextPage } from 'next'

import Image from 'next/image';
import Link from 'next/link';
import Masonry from '@mui/lab/Masonry';

import XunWorkingImg from '../public/images/xun-working.jpg';

import works from '../data/works.json';

const Home: NextPage = () => {
  return (
    <>
      <video autoPlay muted loop className='w-full h-screen object-cover fixed -z-99'>
        <source src="/hero-video.mp4" />
        Your browser does not support the video tag.
      </video>
      <section className='w-full h-screen relative grid sm:grid-cols-2 justify-items-start align-end sm:flex-row sm:justify-between items-end p-10 sm:p-20 bg-gradient-to-t from-black via-transparent'>
        <h1 className='text-stone-300 text-3xl'>王尋<br />Xun Wang</h1>
        <a className="sm:justify-self-end" href="https://youtu.be/rXdJrMFju5Y" target='_blank'>
          <button className=' text-stone-400'>Watch Full Documentary on YouTube</button>
        </a>
      </section>
      <div className='bg-white relative'>
        <section className='md:py-80 items-center grid md:grid-cols-2 max-w-7xl mx-auto gap-10 p-5'>
          <div className=''>
            <Image src={XunWorkingImg} alt='xun wang working' width={2000} height={1333} placeholder='blur' />
          </div>
          <div className='flex flex-col gap-4 opacity-70 text-sm'>
            <p>{'Born in the era of traditional art craftsmanship alongside the rise of digital development, Xun Wang has combined both forms of media. After studying at the sculpture department at the National Taiwan University of Arts, he developed the ability to sculpt human figures and acquired expertise in the art of sculpting. Striving to innovate in his artistic path, Xun Wang went abroad for further studies. '}</p>
            <p>{'After graduating from the New York Institute of Technology, he worked in well-known visual effects companies. This allowed him to develop his skills in 3D animation and digital art production. These experiences inspired him to merge traditional and digital art mediums. Through continuous exploration based on traditional skills, coupled with high-tech expertise, he cultivated a set of unique personal cross-generational artworks, which he calls the "Space in Time" sculptures.'}</p>
          </div>
        </section>
        <div className='w-md p-2 max-w-7xl mx-auto'>
          <Masonry columns={{ xs: 1, sm: 3, md: 4 }} spacing={{ xs: 0, sm: 1, md: 2 }}>
            {works.map(work => (
              <div className='group relative text-white py-2 sm:py-0' key={work.id}>
                <div className='hidden group-hover:grid grid-rows-2 grid-cols-2 absolute bg-black/50 w-full h-full p-12'>
                  <div className=''>
                    <h2>{work.cnName}<br />{work.name}</h2>
                  </div>
                  <div className='justify-self-end'>{work.year}</div>
                  <Link href={`/work/${work.id}`}><a className='justify-self-end self-end col-span-full'><button>See More</button></a></Link>
                </div>
                <img className='w-full' alt={work.name} src={`/images/works/${work.id}/1.jpg`} />
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </>
  )
}

export default Home
