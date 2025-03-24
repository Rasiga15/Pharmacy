import React from "react";
import "./homenews.css";

const HomeNews = () => {
  const blogs = [
    {
      id: 1,
      title: "Discover a treasure trove of practical tips for enhancing",
      description:
        "From nutrition advice to exercise routines, we're here to support your journey toward a healthier life.",
      date: "24 Dec, 2023",
      image: "/images/news2.png",
    },
    {
      id: 2,
      title:
        "Our patients' journeys are filled with courage, resilience, and triumph.",
      description:
        "In this section, we share inspiring narratives of individuals who have overcome health challenges.",
      date: "24 Dec, 2023",
      image: "/images/news3.png",
    },
    {
      id: 3,
      title:
        "From organizing health fairs to partnering with local organizations",
      description:
        "Find out how you can participate in community events and contribute to the health.",
      date: "24 Dec, 2023",
      image: "/images/news4.png",
    },
  ];

  return (
    <section className="latest-news">
      <h2 className="news-title">Our Latest News & Blogs</h2>
      <div className="news-container">
        <div className="featured-news">
          <img
            src="/images/news1.png"
            alt="Featured News"
            className="featured-image"
          />
          <div className="featured-content">
            <span className="badge">Doctor</span>
            <span className="date">📅 24 Dec, 2023</span>
            <h3 className="news-h3">In this section, we delve into various aspects of health</h3>
            <p className="news-p">
              Explore the world of medical specialties through our blog’s
              spotlight feature. From cardiology to pediatrics, we share
              in-depth articles written by our expert physicians.
            </p>
            <button className="read-more">Read More</button>
          </div>
        </div>
        <div className="other-news">
          {blogs.map((blog) => (
            <div key={blog.id} className="news-card">
              <img src={blog.image} alt={blog.title} className="news-image" />
              <div className="news-content">
                <span className="badge">Doctor</span>
                <span className="date">📅 {blog.date}</span>
                <h4 className="o-news-h4">{blog.title}</h4>
                <p className="news-p">{blog.description}</p>
                <button className="read-more">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeNews;
