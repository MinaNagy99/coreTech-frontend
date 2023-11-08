import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./Footer.css";
import { t } from "i18next";

export default function Footer() {
  return (
    <div className="d-flex flex-column m-0">
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
        id="footer"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="mx-auto">
            <span className="me-4 text-reset">
              <MDBIcon fab icon="facebook-f" />
              {t("facebook")}
            </span>
            <span className="me-4 text-reset">
              <MDBIcon fab icon="twitter" />
              {t("twitter")}
            </span>
            <span className="me-4 text-reset">
              <MDBIcon fab icon="google" />
              {t("google")}
            </span>
            <span className="me-4 text-reset">
              <MDBIcon fab icon="instagram" />
              {t("instagram")}
            </span>
            <span className="me-4 text-reset">
              <MDBIcon fab icon="linkedin" />
              {t("linkedin")}
            </span>
            <span className="me-4 text-reset">
              <MDBIcon fab icon="github" />
              {t("github")}
            </span>
          </div>
        </section>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          {t("copyright")}
          <span className="text-reset fw-bold">{t("teamName")}</span>
        </div>
      </MDBFooter>
    </div>
  );
}
