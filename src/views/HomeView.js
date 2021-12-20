import ProductList from "components/ProductList";

function HomeView() {
  return (
    <section className="home section">
      <div className="container">
        <h1 className="title">Home</h1>
        <ProductList />
      </div>
    </section>
  );
}

export default HomeView;
