// const React = require("react");

const PostCard = ({ post }: any) => {
  console.log(post.title);
  return (
    <div
      key={post.title}
      className="bg-white text-[#333333] grid gap-3 p-5 rounded-xl shadow-xl font-lato">
      <h2 className="text-2xl font-bold">
        <a
          href={post.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className=" text-[#1c2541] hover:text-pink-600 font-playfair">
          {post.title}
        </a>
      </h2>
      <span className="location-details flex items-center gap-2 text-[#5bc0be]">
        <img
          className="location-icon w-3 h-full object-contain"
          src="location-icon.png"
          alt="location icon"
          height={36}
          width={36}
        />
        <p className="font-bold">{post.location}</p>
      </span>
      <p className="text-[#ff6b6b] text-sm font-playfair">
        {post.startDate} - {post.endDate}
      </p>
      <p className="leading-7 text-wrap font-ligt">{post.description}</p>
      <img
        className="rounded-xl w-full"
        src={post.imageUrl}
        alt={post.title}
        height={200}
        width={250}
      />
    </div>
  );
};

export default PostCard;
