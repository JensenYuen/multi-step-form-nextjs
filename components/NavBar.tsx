import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NavBar = () => {
  const router = useRouter();

  return(
    <header>
      <ul>
        {router.locales?.map(locale => (
          <li key={locale}>
            <Link href={router.asPath}>{locale}</Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default NavBar;
