import { FunctionComponent } from "react";
import "./Spinner.css";

export const Spinner: FunctionComponent = () => (
  <div className={"spinner-container"}>
    <div data-testid={"spinner"} className={"spinner"} />
  </div>
);
