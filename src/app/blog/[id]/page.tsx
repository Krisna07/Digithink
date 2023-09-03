"use client";
import { useParams, usePathname, useRouter } from "next/navigation";
import Blogpage from "../component/Blogpage";
import blog from "../dummydata";

const page = ({}) => {
  const router = usePathname();

  const thisblog = router.split("/")[2].split("%20").join(" ");

  const openBlog = blog.find((item: any) => item.title == thisblog);

  return (
    <div>
      <Blogpage blog={openBlog} />
    </div>
  );
};

export default page;
