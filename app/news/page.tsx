import NewsPull from "./PullingNews";

export interface News {
  content?: string;
  title: string;
  description: string;
  link: string;
  pubDate: string;
  source_name: string;
  image_url: string | null;
  creator: string[];
  source_icon?: string;
}
const page = () => {
  return (
    <div className="grid place-items-center w-full h-screen text-4xl text-center">
      Page under construction
      {/* <NewsPull /> */}
    </div>
  );
};

export default page;
