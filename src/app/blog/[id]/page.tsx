"use client";
import { usePathname } from "next/navigation";
// import { usePathname } from "next/navigation";
import Blogpage from "../component/Blogpage";
import blog, { BlogPost } from "../dummydata";

const page = () => {
  const router = usePathname();

  const thisblog = router.split("/")[2].split("%20").join(" ");

  const openBlog = blog.find((item: any) => item.title == thisblog);

  return (
    <div>
      <Blogpage Blog={openBlog} />
    </div>
  );
};

export default page;
