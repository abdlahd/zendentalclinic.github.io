body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  scroll-behavior: smooth;
  color: #1e1e1e;
}
.navbar {
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
.navbar .logo {
  font-weight: bold;
  font-size: 1.4rem;
  color: #004080;
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
}
.nav-links li a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
}
.nav-links li a:hover {
  color: #0077cc;
}
.hero-section {
  background: url('https://images.unsplash.com/photo-1598257006821-e98d0f76e43d') center center/cover no-repeat;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding-top: 4rem;
}
.hero-content {
  background-color: rgba(0,0,0,0.5);
  padding: 2rem;
  border-radius: 10px;
  animation: fadeIn 2s ease-in-out;
}
.cta-button {
  margin-top: 1rem;
  display: inline-block;
  background: #25D366;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
}
.section {
  padding: 5rem 2rem;
  text-align: center;
}
.services .cards {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
}
.card {
  width: 300px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}
.card:hover {
  transform: translateY(-10px);
}
.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card h3 {
  color: #004080;
}
.about, .contact {
  background: #f0f8ff;
}
.contact iframe {
  width: 100%;
  height: 300px;
  margin-top: 2rem;
  border-radius: 10px;
  border: none;
}
footer {
  background: #002244;
  color: white;
  text-align: center;
  padding: 1rem;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  .services .cards {
    flex-direction: column;
  }
}

