import React from "react";
import BackOfficeForm from "../components/BackOffice_form";
import BackOfficeHeader from "../components/BackOffice_header";
import BackOfficeContent from "../components/BackOffice_content";
import Cookies from "js-cookie";
import { useState } from "react";

export default function BackOffice() {
  const [token, setToken] = useState(Cookies.get("token") || null);

  const saveToken = (value) => {
    setToken(value);
    Cookies.set("token", value);
  };

  return (
    <div>
      <BackOfficeHeader token={token} />

      {token ? (
        <BackOfficeContent />
      ) : (
        <BackOfficeForm token={token} saveToken={saveToken} />
      )}
    </div>
  );
}
