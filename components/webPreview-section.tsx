import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "This product completely transformed my workflow. The attention to detail is incredible and it's so intuitive to use.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I was skeptical at first, but after using it for a week, I can't imagine going back to my old tools. Simply outstanding!",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "The performance and design are next level. My productivity has increased by at least 40% since I started using this.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Sarah",
    username: "@sarah",
    body: "The customer support is as impressive as the product itself. Quick responses and actually helpful solutions.",
    img: "https://avatar.vercel.sh/sarah",
  },
  {
    name: "Mike",
    username: "@mike",
    body: "Worth every penny. The ROI was almost immediate. My team adopted it instantly with minimal training needed.",
    img: "https://avatar.vercel.sh/mike",
  },
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

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
        "relative h-[28rem] w-90 cursor-pointer overflow-hidden rounded-2xl border p-6",
        // light styles
        "border-gray-500/[.25] bg-black/[.03] hover:bg-white/[.08] backdrop-blur-lg",
        // dark styles
        "dark:border-gray-50/[.15] dark:bg-gray-50/[.03] dark:hover:bg-gray-50/[.08]",
        // transition
        "transition-all duration-300 ease-in-out hover:scale-[1.02]"
      )}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-purple-500/10 opacity-40" />
      <div className="flex flex-row items-center gap-3">
        <img
          className="rounded-full border-2 border-white/20"
          width="40"
          height="40"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white text-black">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/60">{username}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm leading-6 text-white/90">
        {body}
      </blockquote>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="h-4 w-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <>
      <div className="text-center mt-5 mb-8">
        <h2 className=" text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          Latest Projects
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our comprehensive IT solutions process designed to transform your
          business infrastructure
        </p>
      </div>

      <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden py-12">
        {/* Marquee container with clip-path fade - matching your ToolsSection */}
        <div className="relative h-full w-full overflow-hidden [mask-image:_linear-gradient(to_bottom,transparent_0,black_60px,black_calc(100%-60px),transparent_100%)]">
          <div className="relative flex h-full w-full flex-row items-center justify-center">
            <Marquee reverse pauseOnHover vertical className="[--duration:25s]">
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>

            <Marquee pauseOnHover vertical className="[--duration:25s] mx-4">
              {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>

            <Marquee reverse pauseOnHover vertical className="[--duration:25s]">
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
}
