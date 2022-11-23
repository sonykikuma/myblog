import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/abha1.png"
          alt="An image showing Abha"
          width={300}
          height={200}
        />
      </div>
      <h1> Hi, I'm Abha</h1>
      <p>
        I blog about web development-especially frontend frameworks like React.
      </p>
    </section>
  );
}
export default Hero;
