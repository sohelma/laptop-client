
"use client";

export default function Testimonials() {
  const reviews = [
    {
      name: "John Doe",
      text: "Great laptop store! Quality products and fast delivery.",
      role: "Software Engineer",
    },
    {
      name: "Sarah Ahmed",
      text: "Amazing customer service. Recommended!",
      role: "Doctor",
    },
    {
      name: "Michael Carter",
      text: "Affordable prices and trusted brands!",
      role: "Freelancer",
    }
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-yellow-100 p-6 shadow rounded-lg hover:shadow-lg transition ">
              <p className="text-gray-600 italic">"{review.text}"</p>
              <h4 className="mt-4 font-bold">{review.name}</h4>
              <span className="text-sm text-gray-500">{review.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
