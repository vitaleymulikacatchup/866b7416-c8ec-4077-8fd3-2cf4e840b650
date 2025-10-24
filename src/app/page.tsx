"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Calendar, CreditCard, Crown, Dumbbell, Globe, Heart, Instagram, Linkedin, Star, Target, Twitter, User, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Programs", id: "feature" },
            { name: "Pricing", id: "pricing" },
            { name: "Trainers", id: "team" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="GoldGym"
          button={{
            text: "Join Now",
            href: "pricing"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Transform Your Body at GoldGym"
          description="Premium fitness equipment, expert trainers, and unlimited classes to help you achieve your fitness goals"
          tag="Premium Fitness"
          tagIcon={Zap}
          buttons={[
            { text: "Start Free Trial", href: "pricing" },
            { text: "View Programs", href: "feature" }
          ]}
          imageSrc="https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern gym interior with professional equipment"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose GoldGym"
          description="We're committed to helping you achieve your fitness goals with state-of-the-art equipment, expert guidance, and a supportive community"
          tag="About Us"
          tagIcon={Award}
          bulletPoints={[
            {
              title: "Professional Equipment",
              description: "Latest cardio machines, free weights, and functional training tools",
              icon: Dumbbell
            },
            {
              title: "Expert Trainers",
              description: "Certified personal trainers with years of experience",
              icon: Users
            },
            {
              title: "Flexible Classes",
              description: "Wide variety of group fitness classes for all levels",
              icon: Calendar
            }
          ]}
          imageSrc="https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="GoldGym training environment"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Our Fitness Programs"
          description="Comprehensive training programs designed to meet your specific fitness goals"
          tag="Programs"
          tagIcon={Target}
          features={[
            {
              title: "Strength Training",
              description: "Build muscle and increase power with our comprehensive weight training programs",
              icon: Dumbbell
            },
            {
              title: "Cardio Fitness",
              description: "Improve your cardiovascular health with our cardio equipment and classes",
              icon: Heart
            },
            {
              title: "Group Classes",
              description: "Join energetic group fitness classes including yoga, spinning, and HIIT",
              icon: Users
            },
            {
              title: "Personal Training",
              description: "One-on-one coaching tailored to your individual fitness goals",
              icon: User
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Membership Plans"
          description="Choose the perfect membership plan that fits your lifestyle and budget"
          tag="Pricing"
          tagIcon={CreditCard}
          plans={[
            {
              id: "basic",
              badge: "Basic Plan",
              price: "$29/mo",
              subtitle: "Perfect for getting started",
              buttons: [
                { text: "Start Free Trial", href: "contact" },
                { text: "Learn More", href: "contact" }
              ],
              features: [
                "Access to gym equipment",
                "Basic fitness assessment",
                "Locker room access",
                "Mobile app access"
              ]
            },
            {
              id: "premium",
              badge: "Premium Plan",
              badgeIcon: Star,
              price: "$59/mo",
              subtitle: "Most popular choice",
              buttons: [
                { text: "Join Premium", href: "contact" },
                { text: "Contact Sales", href: "contact" }
              ],
              features: [
                "All Basic features",
                "Unlimited group classes",
                "2 personal training sessions/mo",
                "Nutrition consultation",
                "Guest passes (2/mo)"
              ]
            },
            {
              id: "elite",
              badge: "Elite Plan",
              badgeIcon: Crown,
              price: "$99/mo",
              subtitle: "Ultimate fitness experience",
              buttons: [
                { text: "Go Elite", href: "contact" },
                { text: "Book Tour", href: "contact" }
              ],
              features: [
                "All Premium features",
                "Unlimited personal training",
                "Priority class booking",
                "Massage therapy sessions",
                "Nutrition meal planning",
                "VIP locker room access"
              ]
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Expert Trainers"
          description="Our certified fitness professionals are here to guide you on your fitness journey"
          tag="Trainers"
          tagIcon={Award}
          members={[
            {
              id: "1",
              name: "Mike Johnson",
              role: "Head Trainer",
              description: "10+ years experience in strength training and bodybuilding. Specializes in muscle building and powerlifting techniques.",
              imageSrc: "https://images.pexels.com/photos/3912516/pexels-photo-3912516.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mike Johnson - Head Trainer at GoldGym",
              socialLinks: [
                { icon: Instagram, url: "https://instagram.com/mikej_fitness" },
                { icon: Linkedin, url: "https://linkedin.com/in/mikejohnson" }
              ]
            },
            {
              id: "2",
              name: "Sarah Davis",
              role: "Yoga Instructor",
              description: "Certified yoga instructor with expertise in Hatha and Vinyasa styles. Passionate about mindfulness and flexibility training.",
              imageSrc: "https://images.pexels.com/photos/6111622/pexels-photo-6111622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Davis - Yoga Instructor at GoldGym",
              socialLinks: [
                { icon: Instagram, url: "https://instagram.com/sarahyoga" },
                { icon: Globe, url: "https://sarahdavisyoga.com" }
              ]
            },
            {
              id: "3",
              name: "Carlos Rodriguez",
              role: "HIIT Specialist",
              description: "High-intensity interval training expert. Helps clients achieve rapid fitness results through innovative workout programs.",
              imageSrc: "https://images.pexels.com/photos/6456323/pexels-photo-6456323.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Carlos Rodriguez - HIIT Specialist at GoldGym",
              socialLinks: [
                { icon: Instagram, url: "https://instagram.com/carlosfitness" },
                { icon: Twitter, url: "https://twitter.com/carlosfit" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardThree
          title="Success Stories"
          description="Real results from real members who transformed their lives at GoldGym"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Jennifer",
              handle: "@jen_fit",
              testimonial: "Lost 30 pounds and gained so much confidence! The trainers at GoldGym are amazing and really care about your success.",
              imageSrc: "https://images.pexels.com/photos/6456206/pexels-photo-6456206.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Jennifer - GoldGym member success story"
            },
            {
              id: "2",
              name: "David",
              handle: "@david_strong",
              testimonial: "Best gym I've ever joined. The equipment is top-notch and the community is so supportive. Highly recommend!",
              imageSrc: "https://images.pexels.com/photos/7991940/pexels-photo-7991940.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David - GoldGym member testimonial"
            },
            {
              id: "3",
              name: "Maria",
              handle: "@maria_wellness",
              testimonial: "The yoga classes changed my life. I'm more flexible, stronger, and have better mental clarity than ever before.",
              imageSrc: "https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Maria - GoldGym yoga member"
            },
            {
              id: "4",
              name: "Alex",
              handle: "@alex_fitness",
              testimonial: "Personal training sessions helped me achieve goals I never thought possible. Worth every penny!",
              imageSrc: "https://images.pexels.com/photos/6740295/pexels-photo-6740295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Alex - GoldGym personal training client"
            },
            {
              id: "5",
              name: "Lisa",
              handle: "@lisa_healthy",
              testimonial: "Great facilities, friendly staff, and excellent variety of classes. This gym has everything you need.",
              imageSrc: "https://images.pexels.com/photos/7991918/pexels-photo-7991918.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa - GoldGym member review"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about GoldGym membership and facilities"
          faqs={[
            {
              id: "1",
              title: "What are your operating hours?",
              content: "We're open Monday through Friday from 5:00 AM to 11:00 PM, Saturday and Sunday from 6:00 AM to 10:00 PM. Holiday hours may vary."
            },
            {
              id: "2",
              title: "Do you offer a free trial?",
              content: "Yes! We offer a complimentary 7-day trial for new members. This gives you full access to our facilities and group classes."
            },
            {
              id: "3",
              title: "Can I freeze my membership?",
              content: "Yes, you can freeze your membership for up to 3 months per year for medical reasons or extended travel with proper documentation."
            },
            {
              id: "4",
              title: "What should I bring to my first workout?",
              content: "Bring comfortable workout clothes, athletic shoes, a water bottle, and a towel. We provide lockers and basic toiletries in our locker rooms."
            },
            {
              id: "5",
              title: "Do you offer personal training?",
              content: "Absolutely! We have certified personal trainers available for one-on-one sessions. Premium and Elite members get personal training sessions included in their membership."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Ready to Start Your Fitness Journey?"
          description="Contact us today to schedule a tour, ask questions, or sign up for your free trial at GoldGym"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your fitness goals or ask any questions...",
            rows: 4,
            required: false
          }}
          buttonText="Get Started"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="GoldGym"
          columns={[
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Programs", href: "feature" },
                { label: "Trainers", href: "team" }
              ]
            },
            {
              items: [
                { label: "Membership", href: "pricing" },
                { label: "Free Trial", href: "contact" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Reviews", href: "testimonial" },
                { label: "Location", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}