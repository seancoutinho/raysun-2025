"use client";
import { useEffect } from "react";

const SEO = ({ pageTitle }) => {
  useEffect(() => {
    document.title = pageTitle + " - Customized loans in Zimbabwe";
  }, []);
};

export default SEO;