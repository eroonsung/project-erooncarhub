import Image from "next/image"
import Link from "next/link"
import CustomButton from "./CustomButton"

const Navbar = () => {
  return (
    <header className='w-full  absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/logo.png'
          alt='logo'
          width={50}
          height={50}
          className='object-contain'
        />
        <p className="logo_text">Eroon Carhub</p>
      </Link>
      <CustomButton
      title="Sign In"
      btnType="button"
      containerStyles="text-green-500 bg-white rounded-full min-w-[130px]"
      />
      </nav>
    </header>
  )
}

export default Navbar