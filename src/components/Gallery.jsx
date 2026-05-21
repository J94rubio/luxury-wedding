export default function Gallery() {

  const images = [
    '../assets/1.jpg',
    '../assets/2.jpg',
    '../assets/3.jpg',
  ];

  return (
    <section className="py-32 px-6">

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {images.map((img,index) => (

          <div
            key={index}
            className="overflow-hidden rounded-[30px]"
          >
            <img
              src={img}
              alt=""
              className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
            />
          </div>

        ))}

      </div>

    </section>
  );
}