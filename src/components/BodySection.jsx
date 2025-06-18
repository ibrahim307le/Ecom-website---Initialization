export default function BodySection() {
  return (
    <section className="p-6 grid gap-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Lorem Ipsum</h2>
        <p className="text-gray-700 dark:text-gray-300">
          <a href="#" className="text-blue-500 hover:underline">Cristiano Edition</a> Mindset matters, <span className="hover:bg-yellow-200 cursor-pointer">Urban Sport collection</span>.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="w-full h-64 overflow-hidden rounded shadow-md">
  <img
    src="/assets/featured1.jpg"
    alt="Urban Style"
    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
  />
</div>
        <div className="p-4 bg-white dark:bg-gray-800 shadow rounded">Card 2 content</div>
        <div className="p-4 bg-white dark:bg-gray-800 shadow rounded">Card 3 content</div>
      </div>
    </section>
  );
}
