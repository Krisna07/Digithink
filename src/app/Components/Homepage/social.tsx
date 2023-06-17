import { Facebook, Instagram, Slack, Twitter, Youtube } from "lucide-react";
import React from "react";

const Social = () => {
  return (
    <div className="w-full text-text-color flex items-center justify-end py-8 overflow-hidden">
      <div className="w-[80%] grid gap-4  ">
        <h2 className="text-3xl font-bold">Social media</h2>
        <h2 className="font-semibold w-[40%]">
          We do the social meida campign every now and then. Subscribe our
          channel and get 10% off in our next campgin.
        </h2>
        <div className="flex gap-4 overflow-x-scroll">
          <div className="min-w-[400px] h-[400px] bg-gray-400 rounded-md relative p-4 box-border bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 shadow-lg flex flex-col gap-2">
            <h2 className="text-lg font-bold  ">Facebook Ad event</h2>
            <div className="text-sm font-semibold text-hover-Text">
              <span>6/7/2022</span> - <span>6/8/2022</span>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
              cum maiores omnis commodi harum modi perferendis iure impedit
              earum voluptas inventore, eius qui eveniet labore dicta doloribus.
              Velit omnis dignissimos repellendus, molestiae temporibus,
              debitis, unde vitae minus reiciendis asperiores quibusdam
              voluptatum commodi ratione veniam provident nam autem ipsam optio
              nisi!
            </div>
            <Facebook
              size={80}
              strokeWidth={1}
              absoluteStrokeWidth
              className="p-4 bg-blue-500 rounded absolute bottom-4 right-4"
            />
          </div>
          <div className="min-w-[400px] h-[400px] bg-gray-400 rounded-md relative p-2 box-border bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 shadow-lg">
            <Instagram
              size={80}
              strokeWidth={1}
              absoluteStrokeWidth
              className="p-4 bg-gradient-to-r from-purple-800 to-red-800/75 text-white to-indigo-800 rounded absolute bottom-4 right-4"
            />
          </div>
          <div className="min-w-[400px] h-[400px] bg-gray-400 rounded-md relative p-2 box-border bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 shadow-lg">
            <Twitter
              size={80}
              strokeWidth={1}
              absoluteStrokeWidth
              className="p-4 bg-blue-500 rounded absolute bottom-4 right-4"
            />
          </div>
          <div className="min-w-[400px] h-[400px] bg-gray-400 rounded-md relative p-2 box-border bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 shadow-lg">
            <Youtube
              size={80}
              strokeWidth={1}
              absoluteStrokeWidth
              className="p-4 bg-red-500 rounded absolute bottom-4 right-4"
            />
          </div>
          <div className="min-w-[400px] h-[400px] bg-gray-400 rounded-md relative p-2 box-border bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 shadow-lg">
            <Slack
              size={80}
              strokeWidth={1}
              absoluteStrokeWidth
              className="p-4 bg-blue-500 rounded absolute bottom-4 right-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
