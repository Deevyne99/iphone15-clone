import { appleImg, searchImg, bagImg } from '../utils/index'
import { navLists } from '../constants/index'
const Navbar = () => {
  return (
    <header className='w-full sm:px-10 py-5 px-5 flex justify-between items-center'>
      <nav className='flex w-full screen-max-width'>
        <img src={appleImg} alt='logo' width={14} height={18} />
        <div className='max-sm:hidden flex flex-1 justify-center  text-sm cursor-pointer '>
          {navLists.map((nav, i) => {
            return (
              <div className='px-5 text-gray hover:text-white' key={i}>
                {nav}
              </div>
            )
          })}
        </div>
        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <img src={searchImg} alt='search' width={14} height={18} />
          <img src={bagImg} alt='bag' width={14} height={18} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
