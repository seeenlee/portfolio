import {FiDownload} from 'react-icons/fi';
import {Button} from '@/components/ui/button';
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import Link from 'next/link';

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <h1 className='h1 mb-6 '>
              Hello I&apos;m <br/> <span className='text-accent'>Sean Lee</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-gray-700'>
                I'm pursuing a Master of Science in Computer Science at Purdue University, with an anticipated graduation in May 2026.
            </p>
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Link href="/assets/seanleeresume.pdf" download>
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download Resume</span>
                  <FiDownload className='text-xl' />
                </Button>
              </Link>
              <div className='mb-8 xl:mb-0'> 
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>

          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo/>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Home
