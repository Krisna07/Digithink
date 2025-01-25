import { Facebook, Instagram, Slack, Twitter, Youtube } from "lucide-react";
import React from "react";
import Button from "../../Components/Button";
import {
  FaBook,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaReddit,
  FaSnapchat,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Social = () => {
  const campign = [
    {
      title: "Facebook Ad Event",
      startDate: "2023-07-15",
      endDate: "2023-07-17",
      description:
        "Join us for an exciting Facebook Ad Event where industry experts will share insights on the latest trends and strategies for running successful ad campaigns on Facebook. Whether you're a seasoned marketer or just getting started, this event will provide valuable tips to optimize your ad performance and reach your target audience effectively. Don't miss out on this opportunity to enhance your advertising skills and network with other professionals in the field. See you there!",
      icon: <FaFacebook color="blue" />,
    },
    {
      title: "YouTube Video Challenge",
      startDate: "2023-11-20",
      endDate: "2023-12-05",
      description:
        "Create and upload a video about our brand or products on YouTube to participate in the Video Challenge. The most creative and engaging videos will be featured on our official channel, and winners will receive exciting prizes. Show off your video-making skills and let your imagination shine!",
      icon: <FaYoutube color="red" />,
    },
    {
      title: "Snapchat AR Experience",
      startDate: "2023-12-10",
      endDate: "2023-12-15",
      description:
        "Get ready for an interactive and immersive AR Experience on Snapchat! Scan our Snapcodes and unlock hidden surprises and exclusive offers. Share your experience with friends to spread the fun. Don't miss the chance to engage with our brand like never before!",
      icon: <FaSnapchat color="yellow" />,
    },
    {
      title: "Pinterest Inspirational Boards",
      startDate: "2024-01-05",
      endDate: "2024-01-20",
      description:
        "Join our Pinterest Inspirational Boards challenge! Create boards with your favorite products, images, and ideas related to our brand. The most creative and visually appealing boards will be featured on our official page, gaining exposure to our audience and potential followers.",
      icon: <FaPinterest color="red" />,
    },
    {
      title: "TikTok Dance Challenge",
      startDate: "2024-02-10",
      endDate: "2024-02-28",
      description:
        "Calling all dancers and TikTok enthusiasts! Participate in our TikTok Dance Challenge and showcase your dance moves to our chosen song. Get creative, have fun, and impress us with your performance. The best dancers will win exciting prizes and a chance to be featured on our official TikTok page.",
      icon: <FaTiktok />,
    },
    {
      title: "Reddit AMA (Ask Me Anything)",
      startDate: "2024-03-15",
      endDate: "2024-03-17",
      description:
        "Join us for a Reddit AMA event! Our team of experts will be available to answer any questions you have about our products, services, or industry. This is a unique opportunity to get insights directly from the source. Don't miss out on this interactive and informative session!",
      icon: <FaReddit color="red" />,
    },
    {
      title: "Twitter Promotion Campaign",
      startDate: "2023-08-10",
      endDate: "2023-08-15",
      description:
        "Engage your audience with our Twitter Promotion Campaign! We'll be running exciting giveaways and contests, and sharing valuable content throughout the campaign. Don't miss the chance to win amazing prizes and connect with our brand on Twitter.",
      icon: <FaTwitter color="skyblue" />,
    },
    {
      title: "Instagram Photo Contest",
      startDate: "2023-09-01",
      endDate: "2023-09-15",
      description:
        "Calling all photographers and Instagram enthusiasts! Participate in our Instagram Photo Contest and stand a chance to win a professional camera. Share your best photos with our branded hashtag to enter the contest. Get ready to showcase your creativity and win big!",
      icon: <FaInstagram color="purple" />,
    },
    {
      title: "LinkedIn Webinar Series",
      startDate: "2023-10-05",
      endDate: "2023-10-07",
      description:
        "Join our exclusive LinkedIn Webinar Series featuring industry leaders and experts. Gain valuable insights into the latest trends in your field and expand your professional network. Don't forget to bring your questions and engage in live Q&A sessions with the speakers.",
      icon: <FaLinkedin color="blue" />,
    },
  ];

  return (
    <div className="laptop:w-[1000px] grid place-items-center gap-4 oveflow-hidden ">
      <h2 className="text-3xl font-bold">Our Campigns</h2>
      <h2 className="font-semibold md:w-[80%]">
        We do the social meida campign every now and then. Subscribe our channel
        and get 10% off in our next campgin.
      </h2>
      <div className="laptop:w-[1000px] w-full flex items-start justify-start gap-4 py-4 overflow-x-scroll scrollbar-hide">
        {campign.map((item) => (
          <div
            key={item.title}
            className="max-w-fit min-w-[300px] grid gap-4 text-left bg-gray-400  rounded-md relative p-4 box-border bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 shadow-lg ">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold">{item.title}</h2>
                <div className="text-sm font-semibold text-hover-Text">
                  <span>{item.startDate}</span> - <span>{item.endDate}</span>
                </div>
              </div>
              <div className="p-4 text-[32px] rounded  bottom-4 right-4">
                {item.icon}
              </div>
            </div>

            <Button
              variant={"default"}
              size={"sm"}
              className={""}
              label={"Read"}
              icon={undefined}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Social;
