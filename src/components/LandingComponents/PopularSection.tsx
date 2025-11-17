import TopHead from "./TopHead"

import { Scissors, Home, Heart, Book, GraduationCap, Wrench } from "lucide-react";

const categories = [
  { name: "Beauty & Wellness", count: "240+ services", icon: Scissors, color: "bg-pink-100 text-pink-600 dark:bg-pink-950 dark:text-pink-400" },
  { name: "Home Services", count: "180+ services", icon: Home, color: "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400" },
  { name: "Fitness", count: "150+ services", icon: Heart, color: "bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400" },
  { name: "Consulting", count: "95+ services", icon: Book, color: "bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400" },
  { name: "Pet Care", count: "75+ services", icon: Heart, color: "bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400" },
  { name: "Education", count: "120+ services", icon: GraduationCap, color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-950 dark:text-yellow-400" },
];



const PopularSection = () => {
  return (
    <section className="py-20">
      <TopHead 
        heading="Popular Categories"
        subheading="Discover services across all categories"
      />
     <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-15 mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-4 p-5 rounded-xl border border-1 border-black/10 hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-sm ">{category.count}</p>
              </div>
              <div className={`flex items-center justify-center py-1 px-2 rounded-lg ${category.color} group-hover:scale-110 transition-transform`}>
                <p> Popular </p>
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}

export default PopularSection