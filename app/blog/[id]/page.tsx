"use client";
import { usePathname } from "next/navigation";
// import { usePathname } from "next/navigation";
import Blogpage from "../component/Blogpage";
import blog, { BlogPost } from "../dummydata";
import { useEffect, useState } from "react";

import { fetchPostByTitle } from "../../../sanity/schemas/post";

const page = () => {
  const router = usePathname();

  const [openBlog, setOpenBlog] = useState<BlogPost | undefined>(undefined);

  const thisblog = router.split("/")[2].split("%20").join(" ");

  useEffect(() => {
    const fetchBlog = async () => {
      let foundBlog = blog.find((item: BlogPost) => item.title === thisblog);
      if (!foundBlog) {
        foundBlog = (await fetchPostByTitle(thisblog)) || undefined;
      }
      setOpenBlog(foundBlog);
    };

    fetchBlog();
  }, [thisblog]);

  return (
    <div>
      <Blogpage Blog={openBlog} />
    </div>
  );
};

export default page;
