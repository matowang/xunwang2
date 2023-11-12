import Link from "next/link";
import Image from "next/image";
import { TextField } from "@mui/material";
import SlideButton from "../components/SlideButton";
import SquareSpinner from "../components/SquareSpinner";

import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import BGImage from "../public/images/go-future.png";

import contactFormValidation from "../schemaValidation/contactFormValidation";

import { useAlert } from "../context/AlertContext";
import { animated, useTrail, useSpring, useTransition } from "react-spring";
import {
  Children,
  Dispatch,
  FormEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useTranslation } from "next-i18next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import type { GetStaticProps, NextPage } from "next";

const Contacts: NextPage = () => {
  const { t } = useTranslation("contacts");

  return (
    <div className="flex flex-col items-center pt-32">
      <div>{t("email")}: wangmorris@gmail.com</div>
      <div>{t("phone")}: +886 9757260292</div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        "contacts",
        "common",
      ])),
      // Will be passed to the page component as props
    },
  };
};

export default Contacts;
