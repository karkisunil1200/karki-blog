import React from "react";
import "./post.css";

const post = () => {
  return (
    <div className="post">
      <img
        src="https://images4.alphacoders.com/643/643503.jpg"
        alt="some pic"
        className="postImage"
      />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Going to become Priate King</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam ipsam,
        fuga tempore obcaecati voluptatem quod voluptatibus natus fugiat ratione
        sapiente eum magni culpa veritatis expedita veniam explicabo voluptatum,
        dolores eaque temporibus non eveniet. Error iusto iste obcaecati
        consequatur mollitia suscipit. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Magnam ipsam, fuga tempore obcaecati voluptatem quod
        voluptatibus natus fugiat ratione sapiente eum magni culpa veritatis
        expedita veniam explicabo voluptatum, dolores eaque temporibus non
        eveniet. Error iusto iste obcaecati consequatur mollitia suscipit.
      </p>
    </div>
  );
};

export default post;
