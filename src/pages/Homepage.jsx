import "../styles/main.css";
import Hero from "../components/Hero";
import FeatureItem from "../components/FeatureItem";
import IconChat from "../assets/images/icon-chat.png";
import IconMoney from "../assets/images/icon-money.png";
import IconSecurity from "../assets/images/icon-security.png";

export default function Homepage(){
  return(
    <main>
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <FeatureItem
          image={IconChat}
          alt="Chat Icon" 
          title="You are our #1 priority"
          text="Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes."
        />
        <FeatureItem
          image={IconMoney}
          alt="Money Icon"
          title="More savings means higher rates"
          text="The more you save with us, the higher your interest rate will be!"
        />
        <FeatureItem
          image={IconSecurity}
          alt="Security Icon"
          title="Security you can trust"
          text="We use top of the line encryption to make sure your data and money
          is always safe."
        />
      </section>
    </main>
  );
}