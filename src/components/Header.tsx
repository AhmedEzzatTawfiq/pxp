import Container from "./Container";
import Link from "next/link";
import SearchInput from "./SearchInput";
import { navBarList } from "../constants";
import Logo from "./Logo";
import DropDown from "./DropDown";
import UserDropdown from "./UserDropdown";
import { auth } from "@/auth";

const Header = async () => {
  const session = await auth();

  return (
    <header className="w-full h-16 bg-black border-b-[1px] border-b-lightText/40 sticky z-50 -top-1">
      <Container className="h-full flex items-center justify-between gap-5 lg:gap-10">
        <div className="md:hidden">
        <DropDown />
        </div>
        <Logo />
        <SearchInput />
        <div className="hidden text-white md:inline-flex lg:gap-9 gap-4 items-center">
          {navBarList?.map((item) => (
            <Link
              className=" hoverEffect"
              key={item?.title}
              href={item.link}
            >
              {item?.title}
            </Link>
          ))}


        </div>
        {session?.user ? (
          <div>
            <UserDropdown userImage={session?.user?.image} />
          </div>
        ) : (
          <Link
            href={"/signin"}
            className="hover:bg-blue-600 hover:text-white text-blue-600 border-blue-600 border-[1px] hoverEffect lg:ml-12 bg-blue-50 px-3 text-sm sm:px-6 py-1 rounded-full sm:w-32 text-center sm:text-xl"
          >
            Sign in
          </Link>
        )}

        
      </Container>
    </header>
  );
};

export default Header;
