const Testing = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);
    const data = { name, email };
    fetch("http://localhost:5000/category", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="text-black p-5 bg-secondary text-center">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br /> <br />
        <input type="email" name="email" />
        <br />
        <button>submit</button>
      </form>
      {/* 




 */}
    </div>
  );
};

export default Testing;
