import React from "react";
import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images3.alphacoders.com/905/905410.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          We are going to New World!!
          <div className="singlePostEdit">
            <i className=" singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className=" singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostInfo">
            Author: <b>Sunil</b>
          </span>
          <span className="singlePostInfo">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In iusto
          ratione at commodi reiciendis beatae enim minima dolorem similique
          natus odio omnis ab sequi facere et labore sed maxime placeat rem
          debitis repellat, laudantium est illum. Fugit ipsam sed deleniti
          officiis ab blanditiis corrupti dolores. Nobis ad labore odio
          repellendus, officia modi consectetur, corporis iste, minus officiis
          natus ex quo odit autem consequuntur minima et fugit voluptas
          reiciendis numquam tenetur? Iste error mollitia possimus perspiciatis
          minima, incidunt optio accusantium explicabo illo quaerat quia rem
          illum hic corrupti ullam aperiam tenetur natus veritatis, fugiat quo.
          Quae qui, libero quisquam eaque facilis reiciendis iure officiis
          consequatur repellat velit architecto in inventore laborum mollitia
          sunt autem itaque quo earum corrupti suscipit, rerum exercitationem.
          Quaerat eos at ipsa quia, explicabo repellat quam fugit sed
          necessitatibus distinctio quo quis temporibus dolores in perferendis
          non nulla aspernatur! Quasi fugit placeat fuga ex excepturi quod sunt
          laboriosam unde aspernatur soluta aliquid corrupti quis sit debitis
          laborum aperiam, obcaecati doloribus pariatur autem, ipsum, dolores
          omnis a consectetur! Nobis veniam voluptates consequuntur beatae? Amet
          accusamus enim temporibus incidunt ea quibusdam et quae placeat
          provident accusantium illum nobis, asperiores ipsum magnam id aperiam
          culpa iste cupiditate. Omnis blanditiis debitis quaerat, ducimus
          inventore amet! Quisquam nesciunt architecto sed inventore enim,
          dolorum odio nisi dolorem porro explicabo suscipit praesentium placeat
          illo rem deleniti fugit voluptatem, amet sapiente autem quidem
          pariatur ut! Asperiores quaerat praesentium inventore? Blanditiis
          dignissimos ipsum dolorum quisquam iure quis itaque cum et? Aliquid
          dolor quia laudantium blanditiis earum! Harum delectus minus quas
          animi odit iure, sint nobis incidunt amet. Tempora culpa nostrum
          veniam dolores fugit tenetur minus. Tenetur sequi ad totam, quidem
          perspiciatis unde accusantium, ipsum explicabo a voluptatum ea
          repellendus? Velit est, asperiores illum maxime ab molestiae facilis
          eos neque quis veniam illo tempora assumenda fuga adipisci vel.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
