"use client";

import * as React from "react";

import Link from "next/link";

import Image from "next/image";

import logoRSTC from "@/assets/images/RSTC.png";

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ml-auto h-4 w-4"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ChevronDownMobile = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
      isOpen ? "rotate-180" : ""
    }`}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const navLinkStyle =
  "flex items-center text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10 transition-colors";

const MobileTopLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="block px-4 py-3 text-base font-medium text-white hover:bg-white/10 rounded-md"
  >
    {children}
  </Link>
);

const MobileSubLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="block px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/10 rounded-md pl-8"
  >
    {children}
  </Link>
);

const MobileSubTrigger = ({
  isOpen,
  onClick,
  children,
}: {
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/10 rounded-md"
  >
    <span>{children}</span>
    <ChevronDownMobile isOpen={isOpen} />
  </button>
);

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [openAccordion, setOpenAccordion] = React.useState<string | null>(null);
  const [openSubAccordion, setOpenSubAccordion] = React.useState<string | null>(null);
  const toggleAccordion = (name: string) => {
    setOpenAccordion(openAccordion === name ? null : name);
    setOpenSubAccordion(null);
  };
  const toggleSubAccordion = (name: string) => {
    setOpenSubAccordion(openSubAccordion === name ? null : name);
  };
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`
        flex items-center justify-between px-6 py-1 text-white
        sticky top-0 z-50 transition-all duration-300 ease-in-out
        ${isScrolled 
          ? 'bg-teal-800/90 shadow-md backdrop-blur-lg' 
          : 'bg-teal-800' 
        }
      `}
      >
      <div>
        <Link href="/">
          <Image
            src={logoRSTC}
            alt="RSTC Logo"
            width={100}
            height={30}
            priority
          />
        </Link>
      </div>

      <div className="hidden lg:flex items-center space-x-1">
        <div className="flex items-center space-x-1">
          <Link href="/" className={navLinkStyle}>
            Beranda
          </Link>

          <div className="group relative cursor-pointer">
            <button className={navLinkStyle}>
              <span>Layanan</span>

              <ChevronDown />
            </button>

            <ul className="absolute left-0 top-full z-50 w-56 min-w-max origin-top-left scale-95 rounded-md border bg-white p-1 text-black shadow-lg opacity-0 transition-all duration-150 group-hover:scale-100 group-hover:opacity-100 hidden group-hover:block">
              <li className="group/submenu relative">
                <button className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100">
                  <span>Rawat Jalan</span>

                  <ChevronRight />
                </button>

                <ul className="absolute left-full top-0 z-50 w-56 min-w-max origin-top-left scale-95 rounded-md border bg-white p-1 text-black shadow-lg opacity-0 transition-all duration-150 group-hover/submenu:scale-100 group-hover/submenu:opacity-100 hidden group-hover/submenu:block max-h-96 overflow-y-auto">
                  <li>
                    <Link
                      href="/klinik/kulit-kelamin"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Klinik Kulit Kelamin
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/klinik/interna"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      PoliKlinik Interna
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/klinik/tht"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Klinik THT
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/klinik/obgyn"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Klinik Obygn
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/klinik/gigi"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Klinik Gigi
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/klinik/kusta"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Rawat Jalan Klinik Kusta
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/klinik/saraf"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Klinik Saraf
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/klinik/ginjal"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Klinik Ginjal Hipertensi
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/klinik/paru"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Klinik Paru
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/klinik/jantung"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Klinik Jantung
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/klinik/mata"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      PoliKlinik Mata
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/klinik/digestif"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Klinik Bedah Digestif
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/klinik/vaskular"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Klinik Bedah Vaskular
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/klinik/bedah-saraf"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Klinik Bedah Saraf
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/klinik/bedah-umum"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Klinik Bedah Umum
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/klinik/bedah-ortopedi"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Klinik Bedah Ortopedi
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/klinik/bedah-anak"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Klinik Bedah Anak
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/klinik/endokrin-anak"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Klinik Endokrin Anak
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/klinik/anak"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      PoliKlinik Anak
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/klinik/gizi"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Klinik Gizi
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/klinik/kesehatan-jiwa"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Klinik Kesehatan Jiwa
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/klinik/onklogi"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Klinik Onklogi
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/klinik/Gastroenterohepatologi"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Klinik Gastroenterohepatologi
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/klinik/vitreo-retina"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      PoliKlinik Vitreo Retina
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/klinik/Glaukoma"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      PoliKlinik Glaukoma
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/klinik/rehabilitasi-medik"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      PoliKlinik Rehabilitasi Medik
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/klinik/urolofi"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Klinik Urologi
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/klinik/bedah-plastik"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Klinik Bedah PLastik
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/klinik/endokrin-metabolik"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Klinik Endokrin Metabolik
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="group/submenu relative">
                <button className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100">
                  <span>Rawat Inap</span>

                  <ChevronRight />
                </button>

                <ul className="absolute left-full top-0 z-50 w-56 min-w-max origin-top-left scale-95 rounded-md border bg-white p-1 text-black shadow-lg opacity-0 transition-all duration-150 group-hover/submenu:scale-100 group-hover/submenu:opacity-100 hidden group-hover/submenu:block max-h-96 overflow-y-auto">
                  <li>
                    <Link
                      href="/rawat/inap"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Rawat Inap
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/rawat/inap-anak"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Rawat Inap Anak
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/rawat/inap-kusta"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Rawat Inap Kusta
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/rawat/kamar-bersalin"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Kamar Bersalin
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="group/submenu relative">
                <button className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100">
                  <span>Rawat Darurat</span>

                  <ChevronRight />
                </button>

                <ul className="absolute left-full top-0 z-50 w-56 min-w-max origin-top-left scale-95 rounded-md border bg-white p-1 text-black shadow-lg opacity-0 transition-all duration-150 group-hover/submenu:scale-100 group-hover/submenu:opacity-100 hidden group-hover/submenu:block max-h-96 overflow-y-auto">
                  <li>
                    <Link
                      href="/unit/dumum"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Unit Gawat Darurat Umum
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/unit/dobgyn"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Unit Gawat Darurat Obgyn
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="group/submenu relative">
                <button className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100">
                  <span>Rawat Intensif</span>

                  <ChevronRight />
                </button>

                <ul className="absolute left-full top-0 z-50 w-56 min-w-max origin-top-left scale-95 rounded-md border bg-white p-1 text-black shadow-lg opacity-0 transition-all duration-150 group-hover/submenu:scale-100 group-hover/submenu:opacity-100 hidden group-hover/submenu:block max-h-96 overflow-y-auto">
                  <li>
                    <Link
                      href="/intensif/icu"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      ICU (Intensive Care Unit)
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/intensif/picu"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      PICU (Pediatric Intensive Care Unit)
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/intensif/nicu"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      NICU (Neonatal Intensive Care Unit)
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="group/submenu relative">
                <button className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100">
                  <span>Penunjang</span>

                  <ChevronRight />
                </button>

                <ul className="absolute left-full top-0 z-50 w-56 min-w-max origin-top-left scale-95 rounded-md border bg-white p-1 text-black shadow-lg opacity-0 transition-all duration-150 group-hover/submenu:scale-100 group-hover/submenu:opacity-100 hidden group-hover/submenu:block max-h-96 overflow-y-auto">
                  <li>
                    <Link
                      href="/penunjang/radiologi"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Radiologi
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/penunjang/laboratorium"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Laboratorium
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/penunjang/farmasi"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Farmasi
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/penunjang/gizi"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Gizi
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/penunjang/aula"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Aula Dr Berbudi
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/penunjang/diklatdanpenelitian"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Diklat dan Penelitian
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/penunjang/sterilisasisentral"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Sterilisasi Sentral dan Binatu
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="group/submenu relative">
                <button className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100">
                  <span>Layanan Unggulan</span>

                  <ChevronRight />
                </button>

                <ul className="absolute left-full top-0 z-50 w-56 min-w-max origin-top-left scale-95 rounded-md border bg-white p-1 text-black shadow-lg opacity-0 transition-all duration-150 group-hover/submenu:scale-100 group-hover/submenu:opacity-100 hidden group-hover/submenu:block max-h-96 overflow-y-auto">
                  <li>
                    <Link
                      href="/unggulan/mata"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Unggulan Mata
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/unggulan/bedahvaskular"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Unggulan Bedah Vaskular
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/unggulan/rehabilitasimedik"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Unggulan Rehabilitasi Medik
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="group/submenu relative">
                <button className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100">
                  <span>Layanan PPID</span>

                  <ChevronRight />
                </button>

                <ul className="absolute left-full top-0 z-50 w-56 min-w-max origin-top-left scale-95 rounded-md border bg-white p-1 text-black shadow-lg opacity-0 transition-all duration-150 group-hover/submenu:scale-100 group-hover/submenu:opacity-100 hidden group-hover/submenu:block max-h-96 overflow-y-auto">
                  <li>
                    <Link
                      href="/formulir/offline"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Formulir Offline
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/formulir/online"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Pengajuan Online
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="group relative cursor-pointer">
            <button className={navLinkStyle}>
              <span>Profil</span>

              <ChevronDown />
            </button>

            <ul className="absolute left-0 top-full z-50 w-56 min-w-max origin-top-left scale-95 rounded-md border bg-white p-1 text-black shadow-lg opacity-0 transition-all duration-150 group-hover:scale-100 group-hover:opacity-100 hidden group-hover:block">
              <li>
                <Link
                  href="/profil/Profile-RSTC"
                  className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                >
                  Profile RSTC
                </Link>
              </li>

              <li className="group/submenu relative">
                <button className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100">
                  <span>Profile PPID</span>

                  <ChevronRight />
                </button>

                <ul className="absolute left-full top-0 z-50 w-56 min-w-max origin-top-left scale-95 rounded-md border bg-white p-1 text-black shadow-lg opacity-0 transition-all duration-150 group-hover/submenu:scale-100 group-hover/submenu:opacity-100 hidden group-hover/submenu:block max-h-96 overflow-y-auto">
                  <li>
                    <Link
                      href="/profil/profilPPID"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Profil PPID
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/profil/visiPPID"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Visi & Misi PPID
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/profil/tugasPPID"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Tugas & Fungsi PPID
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/profil/strukturPPID"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Struktur PPID
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/profil/maklumatPPID"
                      className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                    >
                      Maklumat
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="group relative cursor-pointer">
            <button className={navLinkStyle}>
              <span>Artikel</span>

              <ChevronDown />
            </button>

            <ul className="absolute left-0 top-full z-50 w-56 min-w-max origin-top-left scale-95 rounded-md border bg-white p-1 text-black shadow-lg opacity-0 transition-all duration-150 group-hover:scale-100 group-hover:opacity-100 hidden group-hover:block">
              <li>
                <Link
                  href="/profil/Berita"
                  className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                >
                  Berita
                </Link>
              </li>

              <li>
                <Link
                  href="/profil/Galeri"
                  className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                >
                  Galeri
                </Link>
              </li>
            </ul>
          </div>

          <div className="group relative cursor-pointer">
            <button className={navLinkStyle}>
              <span>Informasi</span>

              <ChevronDown />
            </button>

            <ul className="absolute left-0 top-full z-50 w-56 min-w-max origin-top-left scale-95 rounded-md border bg-white p-1 text-black shadow-lg opacity-0 transition-all duration-150 group-hover:scale-100 group-hover:opacity-100 hidden group-hover:block">
              <li>
                <Link
                  href="/informasi/Download-Media-Publikasi"
                  className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                >
                  Download Media Publikasi
                </Link>
              </li>

              <li>
                <Link
                  href="/informasi/Alur-Pelayanan-Pasien"
                  className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                >
                  Alur Pelayanan Pasien
                </Link>
              </li>

              <li>
                <Link
                  href="/informasi/Registrasi-Online"
                  className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                >
                  Registrasi Online
                </Link>
              </li>

              <li>
                <Link
                  href="/informasi/Layanan-Informasi-Publik"
                  className="block rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                >
                  Layanan Informasi Publik
                </Link>
              </li>
            </ul>
          </div>

          <Link href="/pengaduan" className={navLinkStyle}>
            Pengaduan
          </Link>

          <Link href="/diklat" className={navLinkStyle}>
            Diklat & Penelitian
          </Link>

          <Link href="/pengumuman" className={navLinkStyle}>
            Pengumuman
          </Link>
        </div>
      </div>

      <div className="flex lg:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10"
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Buka menu utama</span>
          <MenuIcon />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[calc(100%-40px)] bg-teal-800 z-50 lg:hidden transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        id="mobile-menu"
      >
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Image src={logoRSTC} alt="RSTC Logo" width={100} height={30} />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-md text-white hover:bg-white/10"
          >
            <span className="sr-only">Tutup menu</span>
            <CloseIcon />
          </button>
        </div>

        <div className="space-y-1 px-2 pb-3 pt-2 h-[calc(100vh-80px)] overflow-y-auto">
          <MobileTopLink href="/">Beranda</MobileTopLink>

          <div>
            <button
              onClick={() => toggleAccordion("layanan")}
              className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-white hover:bg-white/10 rounded-md"
            >
              <span>Layanan</span>
              <ChevronDownMobile isOpen={openAccordion === "layanan"} />
            </button>
            {openAccordion === "layanan" && (
              <div className="ml-4 pl-4 border-l-2 border-white/20 py-1">
                
                {/* --- Sub-Accordion Rawat Jalan (Level 2) --- */}
                <div>
                  <MobileSubTrigger
                    isOpen={openSubAccordion === 'rawat-jalan'}
                    onClick={() => toggleSubAccordion('rawat-jalan')}
                  >
                    Rawat Jalan
                  </MobileSubTrigger>
                  {openSubAccordion === 'rawat-jalan' && (
                    <div className="ml-4 pl-4 border-l-2 border-white/20 py-1">
                      {/* --- Daftar Klinik (Level 3) --- */}
                      <MobileSubLink href="/klinik/kulit-kelamin">Klinik Kulit Kelamin</MobileSubLink>
                      <MobileSubLink href="/klinik/interna">PoliKlinik Interna</MobileSubLink>
                      <MobileSubLink href="/klinik/tht">Klinik THT</MobileSubLink>
                      <MobileSubLink href="/klinik/obgyn">Klinik Obygn</MobileSubLink>
                      <MobileSubLink href="/klinik/gigi">Klinik Gigi</MobileSubLink>
                      <MobileSubLink href="/klinik/kusta">Rawat Jalan Klinik Kusta</MobileSubLink>
                      <MobileSubLink href="/klinik/saraf">Klinik Saraf</MobileSubLink>
                      <MobileSubLink href="/klinik/ginjal">Klinik Ginjal Hipertensi</MobileSubLink>
                      <MobileSubLink href="/klinik/paru">Klinik Paru</MobileSubLink>
                      <MobileSubLink href="/klinik/jantung">Klinik Jantung</MobileSubLink>
                      <MobileSubLink href="/klinik/mata">PoliKlinik Mata</MobileSubLink>
                      <MobileSubLink href="/klinik/digestif">Klinik Bedah Digestif</MobileSubLink>
                      <MobileSubLink href="/klinik/vaskular">Klinik Bedah Vaskular</MobileSubLink>
                      <MobileSubLink href="/klinik/bedah-saraf">Klinik Bedah Saraf</MobileSubLink>
                      <MobileSubLink href="/klinik/bedah-umum">Klinik Bedah Umum</MobileSubLink>
                      <MobileSubLink href="/klinik/bedah-ortopedi">Klinik Bedah Ortopedi</MobileSubLink>
                      <MobileSubLink href="/klinik/bedah-anak">Klinik Bedah Anak</MobileSubLink>
                      <MobileSubLink href="/klinik/endokrin-anak">Klinik Endokrin Anak</MobileSubLink>
                      <MobileSubLink href="/klinik/anak">PoliKlinik Anak</MobileSubLink>
                      <MobileSubLink href="/klinik/gizi">Klinik Gizi</MobileSubLink>
                      <MobileSubLink href="/klinik/kesehatan-jiwa">Klinik Kesehatan Jiwa</MobileSubLink>
                      <MobileSubLink href="/klinik/onklogi">Klinik Onklogi</MobileSubLink>
                      <MobileSubLink href="/klinik/Gastroenterohepatologi">Klinik Gastroenterohepatologi</MobileSubLink>
                      <MobileSubLink href="/klinik/vitreo-retina">PoliKlinik Vitreo Retina</MobileSubLink>
                      <MobileSubLink href="/klinik/Glaukoma">PoliKlinik Glaukoma</MobileSubLink>
                      <MobileSubLink href="/klinik/rehabilitasi-medik">PoliKlinik Rehabilitasi Medik</MobileSubLink>
                      <MobileSubLink href="/klinik/urolofi">Klinik Urologi</MobileSubLink>
                      <MobileSubLink href="/klinik/bedah-plastik">Klinik Bedah PLastik</MobileSubLink>
                      <MobileSubLink href="/klinik/endokrin-metabolik">Klinik Endokrin Metabolik</MobileSubLink>
                    </div>
                  )}
                </div>

                {/* --- Sub-Accordion Rawat Inap (Level 2) --- */}
                <div>
                  <MobileSubTrigger
                    isOpen={openSubAccordion === 'rawat-inap'}
                    onClick={() => toggleSubAccordion('rawat-inap')}
                  >
                    Rawat Inap
                  </MobileSubTrigger>
                  {openSubAccordion === 'rawat-inap' && (
                    <div className="ml-4 pl-4 border-l-2 border-white/20 py-1">
                      <MobileSubLink href="/rawat/inap">Rawat Inap</MobileSubLink>
                      <MobileSubLink href="/rawat/inap-anak">Rawat Inap Anak</MobileSubLink>
                      <MobileSubLink href="/rawat/inap-kusta">Rawat Inap Kusta</MobileSubLink>
                      <MobileSubLink href="/rawat/kamar-bersalin">Kamar Bersalin</MobileSubLink>
                    </div>
                  )}
                </div>

                {/* --- Sub-Accordion Rawat Darurat (Level 2) --- */}
                <div>
                  <MobileSubTrigger
                    isOpen={openSubAccordion === 'rawat-darurat'}
                    onClick={() => toggleSubAccordion('rawat-darurat')}
                  >
                    Rawat Darurat
                  </MobileSubTrigger>
                  {openSubAccordion === 'rawat-darurat' && (
                    <div className="ml-4 pl-4 border-l-2 border-white/20 py-1">
                      <MobileSubLink href="/unit/dumum">Unit Gawat Darurat Umum</MobileSubLink>
                      <MobileSubLink href="/unit/dobgyn">Unit Gawat Darurat Obgyn</MobileSubLink>
                    </div>
                  )}
                </div>

                {/* --- Sub-Accordion Rawat Intensif (Level 2) --- */}
                <div>
                  <MobileSubTrigger
                    isOpen={openSubAccordion === 'rawat-intensif'}
                    onClick={() => toggleSubAccordion('rawat-intensif')}
                  >
                    Rawat Intensif
                  </MobileSubTrigger>
                  {openSubAccordion === 'rawat-intensif' && (
                    <div className="ml-4 pl-4 border-l-2 border-white/20 py-1">
                      <MobileSubLink href="/intensif/icu">ICU (Intensive Care Unit)</MobileSubLink>
                      <MobileSubLink href="/intensif/picu">PICU (Pediatric Intensive Care Unit)</MobileSubLink>
                      <MobileSubLink href="/intensif/nicu">NICU (Neonatal Intensive Care Unit)</MobileSubLink>
                    </div>
                  )}
                </div>

                {/* --- Sub-Accordion Penunjang (Level 2) --- */}
                <div>
                  <MobileSubTrigger
                    isOpen={openSubAccordion === 'penunjang'}
                    onClick={() => toggleSubAccordion('penunjang')}
                  >
                    Penunjang
                  </MobileSubTrigger>
                  {openSubAccordion === 'penunjang' && (
                    <div className="ml-4 pl-4 border-l-2 border-white/20 py-1">
                      <MobileSubLink href="/penunjang/radiologi">Radiologi</MobileSubLink>
                      <MobileSubLink href="/penunjang/laboratorium">Laboratorium</MobileSubLink>
                      <MobileSubLink href="/penunjang/farmasi">Farmasi</MobileSubLink>
                      <MobileSubLink href="/penunjang/gizi">Gizi</MobileSubLink>
                      <MobileSubLink href="/penunjang/aula">Aula Dr Berbudi</MobileSubLink>
                      <MobileSubLink href="/penunjang/diklatdanpenelitian">Diklat dan Penelitian</MobileSubLink>
                      <MobileSubLink href="/penunjang/sterilisasisentral">Sterilisasi Sentral dan Binatu</MobileSubLink>
                    </div>
                  )}
                </div>

                {/* --- Sub-Accordion Layanan Unggulan (Level 2) --- */}
                <div>
                  <MobileSubTrigger
                    isOpen={openSubAccordion === 'unggulan'}
                    onClick={() => toggleSubAccordion('unggulan')}
                  >
                    Layanan Unggulan
                  </MobileSubTrigger>
                  {openSubAccordion === 'unggulan' && (
                    <div className="ml-4 pl-4 border-l-2 border-white/20 py-1">
                      <MobileSubLink href="/unggulan/mata">Unggulan Mata</MobileSubLink>
                      <MobileSubLink href="/unggulan/bedahvaskular">Unggulan Bedah Vaskular</MobileSubLink>
                      <MobileSubLink href="/unggulan/rehabilitasimedik">Unggulan Rehabilitasi Medik</MobileSubLink>
                    </div>
                  )}
                </div>

                {/* --- Sub-Accordion Layanan PPID (Level 2) --- */}
                <div>
                  <MobileSubTrigger
                    isOpen={openSubAccordion === 'ppid'}
                    onClick={() => toggleSubAccordion('ppid')}
                  >
                    Layanan PPID
                  </MobileSubTrigger>
                  {openSubAccordion === 'ppid' && (
                    <div className="ml-4 pl-4 border-l-2 border-white/20 py-1">
                      <MobileSubLink href="/formulir/offline">Formulir Offline</MobileSubLink>
                      <MobileSubLink href="/formulir/online">Pengajuan Online</MobileSubLink>
                    </div>
                  )}
                </div>

              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleAccordion("profil")}
              className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-white hover:bg-white/10 rounded-md"
            >
              <span>Profil</span>
              <ChevronDownMobile isOpen={openAccordion === "profil"} />
            </button>
            {openAccordion === "profil" && (
              <div className="ml-4 pl-4 border-l-2 border-white/20 py-1">
                
                {/* Ini adalah link biasa, jadi kita gunakan MobileTopLink */}
                <MobileTopLink href="/profil/Profile-RSTC">
                  Profile RSTC
                </MobileTopLink>

                {/* --- Sub-Accordion Profile PPID (Level 2) --- */}
                <div>
                  <MobileSubTrigger
                    isOpen={openSubAccordion === 'profil-ppid'}
                    onClick={() => toggleSubAccordion('profil-ppid')}
                  >
                    Profile PPID
                  </MobileSubTrigger>
                  {openSubAccordion === 'profil-ppid' && (
                    <div className="ml-4 pl-4 border-l-2 border-white/20 py-1">
                      <MobileSubLink href="/profil/profilPPID">Profil PPID</MobileSubLink>
                      <MobileSubLink href="/profil/visiPPID">Visi & Misi PPID</MobileSubLink>
                      <MobileSubLink href="/profil/tugasPPID">Tugas & Fungsi PPID</MobileSubLink>
                      <MobileSubLink href="/profil/strukturPPID">Struktur PPID</MobileSubLink>
                      <MobileSubLink href="/profil/maklumatPPID">Maklumat</MobileSubLink>
                    </div>
                  )}
                </div>

              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleAccordion("artikel")}
              className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-white hover:bg-white/10 rounded-md"
            >
              <span>Artikel</span>
              <ChevronDownMobile isOpen={openAccordion === "artikel"} />
            </button>
            {openAccordion === "artikel" && (
              <div className="ml-4 pl-4 border-l-2 border-white/20">
                <MobileSubLink href="/profil/Berita">Berita</MobileSubLink>
                <MobileSubLink href="/profil/Galeri">Galeri</MobileSubLink>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleAccordion("informasi")}
              className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-white hover:bg-white/10 rounded-md"
            >
              <span>Informasi</span>
              <ChevronDownMobile isOpen={openAccordion === "informasi"} />
            </button>
            {openAccordion === "informasi" && (
              <div className="ml-4 pl-4 border-l-2 border-white/20">
                <MobileSubLink href="/informasi/Download-Media-Publikasi">
                  Download Media Publikasi
                </MobileSubLink>
                <MobileSubLink href="/informasi/Alur-Pelayanan-Pasien">
                  Alur Pelayanan Pasien
                </MobileSubLink>
                <MobileSubLink href="/informasi/Registrasi-Online">
                  Registrasi Online
                </MobileSubLink>
                <MobileSubLink href="/informasi/Layanan-Informasi-Publik">
                  Layanan Informasi Publik
                </MobileSubLink>
              </div>
            )}
          </div>

          <MobileTopLink href="/pengaduan">Pengaduan</MobileTopLink>
          <MobileTopLink href="/diklat">Diklat & Penelitian</MobileTopLink>
          <MobileTopLink href="/pengumuman">Pengumuman</MobileTopLink>
        </div>
      </div>
    </nav>
  );
}
