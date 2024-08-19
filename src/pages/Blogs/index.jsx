import BlogCard from "./BlogCard";

const Blogs = () => {
  const blogList = [
    {
      title: "Dolorum optio tempore voluptas dignissimos",
      blogid: 1,
      category: ["Politics"],
      image: "/assets/img/blog/blog-1.jpg",
      authorname: "Maria Doe",
      authorimage: "/assets/img/blog/blog-author.jpg",
      publishdate: "Jan 1, 2022",
    },
    {
      title: "Nisi magni odit consequatur autem nulla dolorem",
      blogid: 2,
      category: ["Sports"],
      image: "/assets/img/blog/blog-2.jpg",
      authorname: "Allisa Mayer",
      authorimage: "/assets/img/blog/blog-author-2.jpg",
      publishdate: "Jan 5, 2022",
    },
    {
      title: "Possimus soluta ut id suscipit ea ut in quo quia et soluta",
      blogid: 3,
      category: ["Entertainment"],
      image: "/assets/img/blog/blog-3.jpg",
      authorname: "Mark Dower",
      authorimage: "/assets/img/blog/blog-author-3.jpg",
      publishdate: "Feb 14, 2022",
    },
    {
      title: "Non rem rerum nam cum quo minus olor distincti",
      blogid: 4,
      category: ["sports"],
      image: "/assets/img/blog/blog-4.jpg",
      authorname: "Lisa Neymar",
      authorimage: "/assets/img/blog/blog-author-4.jpg",
      publishdate: "Feb 14, 2022",
    },
    {
      title: "Accusamus quaerat aliquam qui debitis facilis consequatur",
      blogid: 5,
      category: ["Entertainment"],
      image: "/assets/img/blog/blog-5.jpg",
      authorname: "Denis Peterson",
      authorimage: "/assets/img/blog/blog-author-5.jpg",
      publishdate: "Feb 26, 2022",
    },
  ];
  return (
    <>
      <section id="blog-posts" class="blog-posts section">
        <div class="container">
          <div class="row gy-4">
            {blogList?.map((post) => (
              <BlogCard
                title={post.title}
                blogid={post.blogid}
                category={post.category}
                image={post.image}
                authorname={post.authorname}
                authorimage={post.authorimage}
                publishdate={post.publishdate}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
