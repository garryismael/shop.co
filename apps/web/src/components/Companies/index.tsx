import Image from 'next/image';

const Companies = () => {
  return (
    <div className="flex items-center gap-4 gap-y-5 justify-center flex-wrap bg-black pt-10 pb-9">
      <Image src="/images/company/versace.svg" alt='Versace' width="167" height="34" className="h-6 object-contain max-w-28"/>
      <Image src="/images/company/zara.svg" alt='Zara' width="92" height="38" className="h-6 object-contain max-w-16"/>
      <Image src="/images/company/gucci.svg" alt='Gucci' width="157" height="34" className="h-6 object-contain max-w-24"/>
      <Image src="/images/company/prada.svg" alt='Prada' width="195" height="32" className="h-6 object-contain max-w-28"/>
      <Image src="/images/company/calvin-klein.svg" alt='Calvin Klein' width="208" height="34" className="h-6 object-contain max-w-32"/>
    </div>
  )
}

export default Companies
