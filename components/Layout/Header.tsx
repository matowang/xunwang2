import Link from "next/link";
import Hamburger from "./Hamburger";

import { useRouter } from "next/router";
import {
  useSpring,
  animated,
  useChain,
  useSpringRef,
  useTransition,
} from "react-spring";
import { useTranslation } from "next-i18next";

import { useState, useMemo } from "react";
import useHasScrolled from "../../hooks/useHasScrolled";

const Header = () => {
  const router = useRouter();
  const { hasScrolled } = useHasScrolled();
  const { t } = useTranslation("common");

  const routes = useMemo(
    () => [
      {
        name: t("exhibits"),
        href: "/exhibits",
      },
      {
        name: t("contacts"),
        href: "/contacts",
      },
      {
        name: t("works"),
        href: "/#works",
      },
    ],
    [t]
  );

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const menuSpringRef = useSpringRef();
  const menuStyles = useSpring({
    from: {
      width: "0rem",
      padding: "0rem 0rem",
      border: "0px solid #aaaaaa",
    },
    to: {
      width: menuOpen ? "10rem" : "0rem",
      padding: menuOpen ? "4rem 1rem" : "0rem 0rem",
      border: menuOpen ? "2px solid #aaaaaa" : "0px solid #aaaaaa",
    },
    config: {
      duration: 100,
    },
    ref: menuSpringRef,
  });

  const linksSpringRef = useSpringRef();
  const linksTransitions = useTransition(menuOpen ? routes : [], {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
    trail: 200 / routes.length,
    ref: linksSpringRef,
  });

  const subLinksSpringRef = useSpringRef();
  const subLinksStyles = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: menuOpen ? 1 : 0,
    },
    ref: subLinksSpringRef,
  });

  useChain(
    menuOpen
      ? [menuSpringRef, subLinksSpringRef, linksSpringRef]
      : [linksSpringRef, subLinksSpringRef, menuSpringRef],
    menuOpen ? [0, 0, 0] : [0, 0, 0.2]
  );

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <>
      <header
        className="transition-background fixed z-50 flex w-full p-4 text-white duration-300 ease-in-out"
        style={{
          backdropFilter: !hasScrolled ? undefined : "blur(2px)",
        }}
      >
        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed h-screen w-full"
          />
        )}
        <h1 className="grow">
          <Link href="/">{t("artistName")}</Link>
        </h1>
        <animated.ul
          style={menuStyles}
          className="absolute right-0 top-0 box-border flex h-64 flex-col items-end gap-4 overflow-hidden bg-black px-4"
        >
          {linksTransitions((styles, route) => (
            <animated.li style={styles}>
              <Link
                href={route.href}
                className="outline-1 outline-white hover:outline"
                onClick={() => setMenuOpen(false)}
              >
                {route.name}
              </Link>
            </animated.li>
          ))}
          <animated.hr className="w-full" style={subLinksStyles} />
          <animated.li
            style={subLinksStyles}
            className="text-right outline-1 outline-white hover:outline"
          >
            <Link
              href={router.asPath}
              locale={t("changeLangRoute")}
              scroll={false}
              onClick={() => setMenuOpen(false)}
            >
              {t("changeLang")}
            </Link>
          </animated.li>
        </animated.ul>
        <Link
          href={router.asPath}
          locale={t("changeLangRoute")}
          scroll={false}
          className="mr-8 outline-1 outline-white hover:outline"
        >
          {t("changeLang")}
        </Link>
        <button className="" onClick={toggleMenu}>
          <Hamburger open={menuOpen} />
        </button>
      </header>
    </>
  );
};

export default Header;
