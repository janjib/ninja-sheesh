import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          The medulla oblongata or simply medulla is a long stem-like structure
          which makes up the lower part of the brainstem.[1] It is anterior and
          partially inferior to the cerebellum. It is a cone-shaped neuronal
          mass responsible for autonomic (involuntary) functions, ranging from
          vomiting to sneezing.[2] The medulla contains the cardiac,
          respiratory, vomiting and vasomotor centers, and therefore deals with
          the autonomic functions of breathing, heart rate and blood pressure as
          well as the sleep wake cycle.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
