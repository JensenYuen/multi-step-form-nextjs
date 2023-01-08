import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import style from "../styles/navbar.module.css"

const NavBar = () => {
  const router = useRouter();

  return(
    <header>
      <div className={style.navbar}>
        <ul>
          {router.locales?.map(locale => (
            <li key={locale}>
              <Link href={router.asPath}>{locale}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default NavBar;
