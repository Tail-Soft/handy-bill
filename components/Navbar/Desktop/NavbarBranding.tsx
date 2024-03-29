import Image from 'next/image';

export const NavbarBranding = () => {
  return (
    <div className="hidden md:flex gap-2 items-center">
      <Image
        src="/images/favicon.ico"
        width={45}
        height={45}
        priority
        alt="handy-bill-logo"
      />
      <h3 className=" text-base font-bold tracking-wide">Handy Bill</h3>
    </div>
  );
};
