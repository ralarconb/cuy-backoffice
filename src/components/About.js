import { Link } from "react-router-dom";
export default function Home() {
  return (
    <section className="section">
      <h2>About</h2>
      <Link to="/">Back Home</Link>
    </section>
  );
}
