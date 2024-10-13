import React from 'react';
import pottery from "../assets/Pottery.png";


const BlogCard = ({ title, author, date, description, image }) => {
  return (
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      margin: '20px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'left',
      maxWidth: '350px'
    }}>
      {/* Blog Image */}
      <img src={image} alt={title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />

      {/* Blog Details */}
      <div style={{ marginTop: '20px', width: '100%' }}>
        <h2 style={{ fontSize: '24px', color: '#2F4F4F', marginBottom: '10px' }}>{title}</h2>
        <p style={{ fontSize: '14px', color: '#A9A9A9', marginBottom: '15px' }}>
          {author} • {date}
        </p>
        <p style={{ fontSize: '16px', color: '#696969', lineHeight: '1.6', marginBottom: '20px' }}>
          {description}
        </p>
        <a href="#" style={{
          backgroundColor: '#2F4F4F',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '5px',
          textDecoration: 'none',
          fontSize: '16px'
        }}>
          Read More
        </a>
      </div>
    </div>
  );
};

const Blogs = () => {
  const blogPosts = [
    {
      title: 'The Art of Pottery: Ancient Craft, Modern Twist',
      author: 'Meghana Pidaparthi',
      date: 'October 10, 2024',
      description: 'Discover the timeless art of pottery and how artisans at KalaBazaar are reviving this ancient craft...',
      image: {pottery},
    },
    {
      title: 'Eco-Friendly Dyes: A Sustainable Fashion Movement',
      author: 'John Doe',
      date: 'September 28, 2024',
      description: 'Learn about the journey of eco-friendly dyes and how they are transforming the world of sustainable fashion...',
      image: 'https://source.unsplash.com/350x200/?fashion,eco'
    },
    {
      title: 'Local Artisans: The Heartbeat of KalaBazaar',
      author: 'Jane Smith',
      date: 'September 15, 2024',
      description: 'Meet the talented artisans who bring life to the marketplace and how KalaBazaar helps preserve their culture...',
      image: 'https://source.unsplash.com/350x200/?artisans,culture'
    }
  ];

  return (
    <div style={{
      fontFamily: 'Fraunces',
      color: '#2F4F4F',
      backgroundColor: '#f2e5d7',
      padding: '50px',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        {/* Heading */}
        <h1 style={{ fontSize: '40px', marginBottom: '20px' }}>KalaBazaar Blogs & Articles</h1>

        {/* Intro Text */}
        <p style={{ fontSize: '18px', color: '#696969', marginBottom: '40px' }}>
          Explore our latest blogs and articles to dive deep into the world of arts, crafts, and sustainable living.
        </p>

        {/* Blog Post Cards */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              author={post.author}
              date={post.date}
              description={post.description}
              image={post.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
