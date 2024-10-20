import { styles } from "@/app/styles/style";
import Image from "next/image";
import React from "react";
import ReviewCard from "../Review/ReviewCard";

type Props = {};

export const reviews = [
  {
    name: "Md. Abdussamad",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Student | Bangalore University",
    comment: "Your content is very special. The thing I liked the most is that the videos are so long, which means they cover everything in details. for that any person had beginner-level can complete an integrated project when he watches the videos. Thank you very much. Im very excited for the next videos Keep doing this amazing work",
  },
  {
    name: "Najnin Pravin",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    profession: "Student | Bihar University",
    comment: "Your content is very special. The thing I liked the most is that the videos are so long, which means they cover everything in details. for that any person had beginner-level can complete an integrated project when he watches the videos. Thank you very much. Im very excited for the next videos Keep doing this amazing work",
  },
  {
    name: "Md. Abdussamad",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    profession: "Student | Bangalore University",
    comment: "Your content is very special. The thing I liked the most is that the videos are so long, which means they cover everything in details. for that any person had beginner-level can complete an integrated project when he watches the videos. Thank you very much. Im very excited for the next videos Keep doing this amazing work",
  },
  {
    name: "Najnin Pravin",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    profession: "Student | Bihar University",
    comment: "Your content is very special. The thing I liked the most is that the videos are so long, which means they cover everything in details. for that any person had beginner-level can complete an integrated project when he watches the videos. Thank you very much. Im very excited for the next videos Keep doing this amazing work",
  },
  {
    name: "Md. Abdussamad",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    profession: "Student | Bangalore University",
    comment: "Your content is very special. The thing I liked the most is that the videos are so long, which means they cover everything in details. for that any person had beginner-level can complete an integrated project when he watches the videos. Thank you very much. Im very excited for the next videos Keep doing this amazing work",
  },
  {
    name: "Najnin Pravin",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    profession: "Student | Bihar University",
    comment: "Your content is very special. The thing I liked the most is that the videos are so long, which means they cover everything in details. for that any person had beginner-level can complete an integrated project when he watches the videos. Thank you very much. Im very excited for the next videos Keep doing this amazing work",
  },
];

const Reviews = (props: Props) => {
  return (
    <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
        <div className="800px:w-[50%] w-full">
          <Image
            src="/assets/business-img.jpg"
            alt="business"
            height={700}
            width={700}
          />
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${styles.title} 800px:!text-[40px]`}>
            Our Students Are <span className="text-gradient">Our Strength</span>{" "}
            <br />
            See What They Say About Us
          </h3>
          <br />
          <p className={styles.label}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ad
            debitis repellendus dicta veritatis, corrupti nihil, laborum natus
            dolorem labore minima deleniti autem quod vitae quam assumenda
            officia fugiat consequatur. Reiciendis ipsa nostrum magnam
            consectetur?
          </p>
        </div>
        <br />
        <br />
      </div>
      <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0 md:[&>*:nth-child(8)]:mt-[-60px] md:[&>*:nth-child(6)]:!mt-[-40px]">
        {reviews &&
          reviews.map((i, index) => <ReviewCard item={i} key={index} />)}
      </div>
    </div>
  );
};

export default Reviews;
