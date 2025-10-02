import Banner from "@/components/Banner";
import Composite from "@/components/Blog/Composite";
import FeaturedIcons from "@/components/Blog/FeaturedIcon";
import Delivery from "@/components/Delivery";
import Image from "next/image";
import Blogcard from "@/components/Blog/Blogcard";
import LatestCollection from "@/components/Blog/LatestCollection";
import CustomerTestimonials from "@/components/Blog/CustomerTestimonials";
import News from "@/components/Blog/News";
import DailyUpdate from "@/components/Blog/DailyUpdate";



export default function Blog() {
  return (
    <>
      <Banner title="Shop Grid" breadcrumb="Shop Grid" />
      <FeaturedIcons />
      <Composite />
      <Delivery />
      <Blogcard />
      <LatestCollection />
      <CustomerTestimonials />
      <News />
      <DailyUpdate />

    </>
  )
}
