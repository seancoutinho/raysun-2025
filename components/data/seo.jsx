"use client";
import { useEffect } from "react";

const SEO = ({ pageTitle }) => {
  useEffect(() => {
    document.title = pageTitle + " - Affoarbale Loans in Zimbabwe";
  }, []);
};

export default SEO;