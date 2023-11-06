import clsx from "clsx";

import styles from "./_home.module.scss";

export const Error = () => {
  return (
    <section className={clsx(styles.homeError)}>
      <h1>ERROR(HOME)</h1>
    </section>
  );
};
