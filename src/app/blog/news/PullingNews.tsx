"use client";
import { useEffect } from "react";
import { useState } from "react";
import { news } from "./page";

export default function NewsPull() {
  const [currentNews, setNews] = useState<news[]>([]);
  const todaysnews = async () => {
    const url = "https://google-news13.p.rapidapi.com/technology?lr=en-US";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1ca416b795mshd0deeb8e0ac25b6p1a7b37jsna6433fc9d22f",
        "X-RapidAPI-Host": "google-news13.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
      localStorage.setItem("news", result);
      return result;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const storedNews = localStorage.getItem("news");
    if (storedNews) {
      setNews(JSON.parse(storedNews));
    } else {
      todaysnews();
    }
  }, []);

  const dailyRefresh = () => {
    const lastRefresh = localStorage.getItem("lastRefresh");
    if (lastRefresh) {
      const twentyFourHours = 24 * 60 * 60 * 1000;
      const currentTime = new Date().getTime();
      if (currentTime - parseInt(lastRefresh) >= twentyFourHours) {
        localStorage.removeItem("news");
        localStorage.setItem("lastRefresh", currentTime.toString());
      }
    } else {
      const currentTime = new Date().getTime();
      localStorage.setItem("lastRefresh", currentTime.toString());
    }
  };

  useEffect(() => {
    dailyRefresh();
    const interval = setInterval(() => {
      dailyRefresh();
    }, 24 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {/* {currentNews.map((news) => (
        <div>{news.title}</div>
      ))} */}
    </div>
  );
}
