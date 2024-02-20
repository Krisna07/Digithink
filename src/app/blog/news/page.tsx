import NewsPull from "./PullingNews";

export interface news {
  title: string;
  snippet: string;

  imageUrl: string;
  publisher: string;
  newsUrl: string;
  subenews: [
    {
      title: string;
      snippet: string;
      publisher: string;
      timestamp: string;
      newsUrl: string;
      imageUrl: string;
    }
  ];
}

const page = () => {
  return (
    <div>
      <NewsPull />
    </div>
  );
};

export default page;
