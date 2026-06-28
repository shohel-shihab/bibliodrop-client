import Banner from "@/components/banner/Banner";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import NewsletterSection from "@/components/NewsletterSection";

import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div>
     <Banner></Banner>
     <FeaturedBooks></FeaturedBooks>
     <WhyChooseUs></WhyChooseUs>
      <NewsletterSection></NewsletterSection>
    </div>
  );
}
