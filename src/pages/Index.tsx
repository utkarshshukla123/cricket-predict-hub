import Hero from "@/components/Hero";
import BreakingNews from "@/components/BreakingNews";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import UserReviews from "@/components/UserReviews";
import SocialMedia from "@/components/SocialMedia";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <BreakingNews />
      <About />
      <Testimonials />
      <UserReviews />
      <SocialMedia />
    </div>
  );
};

export default Index;
