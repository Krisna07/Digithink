import React from "react";

const Blogpage = () => {
  return (
    <div className="w-full h-[100vh] fixed top-0 grid place-items-center bg-white py-20 overflow-auto z-20">
      <div className="laptop:w-[1000px]  bg-gradient-to-r from-white to-gray-100 py-8 px-4 grid gap-8 rounded-lg">
        <h2 className="text-2xl font-semibold">Title of the blog</h2>
        <div className="w-full h-[500px] bg-gradient-to-r from-green-500 to-green-600"></div>
        <div className="grid gap-4">
          <div>
            <h2 className="text-xl font-semibold">Introduction</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              minus quam saepe maxime facilis autem odit aspernatur dignissimos
              quasi ab. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Iusto, fugit.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Body component</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur temporibus velit sit corporis vitae tempora animi,
              totam consectetur vero possimus nihil exercitationem aperiam
              consequuntur, impedit amet quae non perspiciatis quisquam
              excepturi quia. Soluta, labore eaque dignissimos aspernatur
              veritatis, nam voluptates distinctio totam unde, sit explicabo
              voluptatum ratione nulla assumenda molestiae quidem deserunt
              delectus et consequatur quia fugit. Cupiditate numquam nam error
              dignissimos rem unde repellendus fugiat ex explicabo nemo sit
              aperiam corporis assumenda suscipit est fuga, dolorum officiis
              veniam neque? Ipsam voluptatibus voluptate nemo quae delectus
              assumenda quas amet eligendi! Quasi laborum officia, itaque,
              laudantium nesciunt corrupti quod dolorem voluptatum animi
              delectus, eligendi veritatis aperiam. Nihil maxime cum neque
              dolore nostrum dolorum delectus iure reprehenderit repudiandae
              fugit est quasi magnam nesciunt ad quod maiores dicta voluptatibus
              nulla, facere ipsam expedita nisi labore ullam rem. Possimus
              consequuntur dolor minus, mollitia a beatae quas, repudiandae fuga
              atque reprehenderit optio. Inventore, iure earum voluptates libero
              exercitationem a repellat soluta ratione. Architecto aperiam
              molestias obcaecati quo dicta, laboriosam reiciendis quibusdam
              impedit provident saepe quod maxime distinctio cum atque. Incidunt
              rerum, veniam ad voluptas soluta sapiente harum deleniti ullam
              earum impedit quasi deserunt fuga perspiciatis iusto placeat quia
              nemo dolorem iste aliquid ut! Optio, dolor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogpage;
