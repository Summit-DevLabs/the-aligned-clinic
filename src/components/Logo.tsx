import logo1 from '/src/images/logo1.jpg'
import Image from 'next/image'

export function Logo() {
  return (
    <Image
      src={logo1}
      alt="Logo"
      width={50}
      height={50}
      style={{
        borderRadius: '50%',
        objectFit: 'cover',
      }}
      
    />
  )
}