import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";

const reviews = [
  {
    name: "Rajesh Sharma",
    username: "@rajeshdigital",
    body: "Dynexia transformed our e-commerce platform with their exceptional web development skills. Our sales increased by 150% after their redesign!",
    img: "https://avatar.vercel.sh/rajesh",
  },
  {
    name: "Priya Patel",
    username: "@priyatech",
    body: "As a startup founder, I was amazed by Dynexia's affordable yet professional web solutions. They delivered beyond our expectations.",
    img: "https://avatar.vercel.sh/priya",
  },
  {
    name: "Amit Singh",
    username: "@amitenterprises",
    body: "Best web development agency in India! Our corporate website now stands out from competitors thanks to Dynexia's innovative approach.",
    img: "https://avatar.vercel.sh/amit",
  },
  {
    name: "Neha Gupta",
    username: "@nehacreative",
    body: "Dynexia's team understood our vision perfectly. The website they built has significantly improved our customer engagement.",
    img: "https://avatar.vercel.sh/neha",
  },
  {
    name: "Vikram Joshi",
    username: "@vikrambusiness",
    body: "Working with Dynexia was a game-changer for our online presence. Their technical expertise is unmatched in the Indian market.",
    img: "https://avatar.vercel.sh/vikram",
  },
  {
    name: "Ananya Reddy",
    username: "@ananyastartup",
    body: "From concept to launch, Dynexia provided complete web solutions with 24/7 support. Truly a reliable partner for Indian businesses!",
    img: "https://avatar.vercel.sh/ananya",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 shrink-0 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        // transition
        "transition-all duration-300 hover:scale-[1.02]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full border border-white/20"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm dark:text-white/80">
        {body}
      </blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <>
      <section className="py-8 md:py-16 px-4 relative">
        <div className="text-center mt-5 mb-8">
          <h2 className=" text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            What Our Clients Say
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses across India for delivering exceptional web
            development solutions
          </p>
        </div>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8">
          {/* Main container with mask for fade effect */}
          <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,black_60px,black_calc(100%-60px),transparent_100%)]">
            <div className="flex flex-col gap-4">
              <Marquee className="[--duration:20s]">
                {firstRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <Marquee reverse className="[--duration:20s]">
                {secondRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
