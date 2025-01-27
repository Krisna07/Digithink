"use client";

import { useEffect, useState } from "react";
import { News } from "./page";
import { FaGlobe, FaLink, FaSourcetree } from "react-icons/fa";
import Link from "next/link";

const NewsPull: React.FC = () => {
  const [currentNews, setNews] = useState<News[]>([]);
  const [activeNews, setActiveNews] = useState<number>(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=technology&apiKey=b4ae890567394c77b5c35bed6ba28b86`
        );
        const newsData = await response.json();
        console.log(newsData);
        const results: News[] = newsData.articles
          .filter(
            (thisNews: any) => thisNews.description && thisNews.urlToImage
          )
          .map((thisNews: any) => ({
            title: thisNews.title,
            description: thisNews.description,
            link: thisNews.url,
            pubDate: thisNews.publishedAt,
            source_name: thisNews.source.name,
            image_url: thisNews.urlToImage,
            creator: thisNews.author,
            content: thisNews.content,
          }));

        localStorage.setItem("news", JSON.stringify(results));
        setNews(results);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    const storedNews = localStorage.getItem("news");

    if (storedNews?.length) {
      setNews(JSON.parse(storedNews));
    } else {
      fetchNews();
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setActiveNews(activeNews + 1), 5000);
    return () => clearTimeout(timeout);
  }, [activeNews]);
  return currentNews.length ? (
    <div className="max-w-[1200px] grid place-items-center box-border">
      {currentNews[activeNews] && (
        <div className="min-w-fit grid gap-4 p-4 ">
          <div className="grid gap-2">
            <h2 className="text-2xl font-semibold">
              {currentNews[activeNews].title}
            </h2>
            <div className="flex items-center justify-between text-[12px]">
              <div className="grid">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full overflow-hidden shadow ">
                    {currentNews[activeNews].source_icon ? (
                      <img
                        src={currentNews[activeNews].source_icon}
                        alt={currentNews[activeNews].source_name}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-pink-500 to-indigo-700"></div>
                    )}
                  </span>
                  <span>
                    {currentNews[activeNews].source_name
                      ? currentNews[activeNews].source_name
                      : "unknown source"}
                  </span>
                </div>
                <span className="text-sm">
                  {currentNews[activeNews].creator}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaGlobe color="gray" />
                Global
              </div>
            </div>
          </div>
          <Link
            href={currentNews[activeNews].link}
            className="relative group overflow-hidden"
          >
            {currentNews[activeNews].image_url && (
              <img
                src={currentNews[activeNews].image_url}
                alt={currentNews[activeNews].title}
                className="w-full object-cover group-hover:blur-[2px]"
              />
            )}
            <div className="absolute bg-yellow-300 p-2 rounded-full right-2 top-2 opacity-1 translate-x-20 group-hover:translate-x-0 transition-all ">
              <FaLink />
            </div>
            <p className="absolute bottom-2 right-2 text-sm bg-white/50 px-2 rounded-md bg-blend-color-burn">
              {currentNews[activeNews].pubDate}
            </p>
          </Link>
          <p>{currentNews[activeNews].description}</p>
          <p>{currentNews[activeNews].content?.split("[")[0]} read more</p>

          <a
            href={currentNews[activeNews].link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 shadow-[0_0_2px_0_gray] w-fit px-2"
          >
            <FaSourcetree /> visit source
          </a>
        </div>
      )}

      <section className="w-full h-fit overflow-hidden p-4">
        <h2 className="p-2 text-3xl font-semibold">Related News</h2>
        <div className="w-full overflow-x-auto box-border h-fit flex place-items-start ">
          <div>
            <div className="flex gap-4 p-1 h-fit  ">
              {currentNews.length &&
                currentNews
                  .slice(0, Math.floor(currentNews.length / 2))
                  .map((news, index) => (
                    <div
                      key={index}
                      className={`${activeNews === index && "hidden"} shadow-[0_0_0_2px_gray]  p-2 rounded-xl grid auto-rows-[60px_200px_auto] gap-2 box-border`}
                      onClick={() => setActiveNews(currentNews.indexOf(news))}
                    >
                      <h3 className="whitespace-normal  font-semibold text-justify flex items-center  overflow-hidden leading-[20px]">
                        {news.title}
                      </h3>
                      <div className="min-w-[380px]  h-[200px] ">
                        {news.image_url && (
                          <img
                            src={news.image_url}
                            alt={news.title}
                            className="w-full h-full rounded-lg object-cover"
                          />
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-semibold flex items-center gap-2">
                              {news.source_icon && (
                                <img
                                  src={news.source_icon}
                                  alt={news.title}
                                  className="w-4 h-4 rounded-full"
                                />
                              )}
                              {news.source_name}
                            </div>
                            <div className="text-[12px] flex items-center gap-1 px-4 uppercase">
                              <FaGlobe color="gray" />
                              Global
                            </div>
                          </div>
                          <div className="text-[12px] flex items-center bg-slate-300 px-2 rounded-md text-gray-900">
                            {news.content
                              ? Math.floor(
                                  parseInt(
                                    news.content?.split("+")[1]?.split(" ")[0]
                                  ) / 120
                                )
                              : "N/A"}
                            mins read
                          </div>
                        </div>
                        <div className="grid h-full ">
                          <p className="whitespace-normal max-h-[200px] flex flex-wrap overflow-hidden text-justify">
                            {news.description}.
                          </p>
                          <Link
                            className="bg-black w-fit px-2 h-fit rounded-lg text-white font-semibold text-sm self-end "
                            href={news.link}
                          >
                            Read
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-fit overflow-hidden p-4">
        <div className="w-full overflow-x-auto box-border h-fit flex place-items-start ">
          <div>
            <div className="flex gap-4 p-1 h-fit  ">
              {currentNews.length &&
                currentNews
                  .slice(Math.floor(currentNews.length / 2), currentNews.length)
                  .map((news, index) => (
                    <div
                      key={index}
                      className={`${activeNews === index && "hidden"} shadow-[0_0_0_2px_gray]  p-2 rounded-xl grid auto-rows-[60px_200px_auto] gap-2 box-border`}
                      onClick={() => setActiveNews(currentNews.indexOf(news))}
                    >
                      <h3 className="whitespace-normal  font-semibold text-justify flex items-center  overflow-hidden leading-[20px]">
                        {news.title}
                      </h3>
                      <div className="min-w-[380px]  h-[200px] ">
                        {news.image_url && (
                          <img
                            src={news.image_url}
                            alt={news.title}
                            className="w-full h-full rounded-lg object-cover"
                          />
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-semibold flex items-center gap-2">
                              {news.source_icon && (
                                <img
                                  src={news.source_icon}
                                  alt={news.title}
                                  className="w-4 h-4 rounded-full"
                                />
                              )}
                              {news.source_name}
                            </div>
                            <div className="text-[12px] flex items-center gap-1 px-4 uppercase">
                              <FaGlobe color="gray" />
                              Global
                            </div>
                          </div>
                          <div className="text-[12px] flex items-center bg-slate-300 px-2 rounded-md text-gray-900">
                            {news.content
                              ? Math.floor(
                                  parseInt(
                                    news.content?.split("+")[1]?.split(" ")[0]
                                  ) / 120
                                )
                              : "N/A"}
                            mins read
                          </div>
                        </div>
                        <div className="grid h-full ">
                          <p className="whitespace-normal max-h-[200px] flex flex-wrap overflow-hidden text-justify">
                            {news.description}.
                          </p>
                          <Link
                            className="bg-black w-fit px-2 h-fit rounded-lg text-white font-semibold text-sm self-end "
                            href={news.link}
                          >
                            Read
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  ) : (
    <div className="w-full h-screen grid text-6xl font-bold place-items-center animate-pulse">
      Fethcing latest news .......
    </div>
  );
};

export default NewsPull;
