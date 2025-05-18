import Image from "next/image"

const Header = () => {
  return (
    <div
    className="h-24 flex flex-col justify-center max-w-[750px] mx-auto bg-white"
    >
        <Image
        src={'/logo.png'}
        alt="logo"
        height={150}
        width={150}
        className="mx-auto"
        />
    </div>
  )
}

export default Header