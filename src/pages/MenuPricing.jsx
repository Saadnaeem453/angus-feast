import dessertimg from "../assets/dessert.jpg";
import drinkimg from "../assets/drink.jpg";
import fishimg from "../assets/fish.jpg";
import mainimg from "../assets/main.jpg";

const MenuCard = () => {
  // Dummy menu data with images
  const menuItems = [
    {
      category: "Starters",
      image: fishimg,
      items: [
        { name: "Golden Fried Calamari", price: "$12" },
        { name: "Truffle Parmesan Fries", price: "$10" },
        { name: "Lobster Bisque", price: "$15" },
      ],
    },
    {
      category: "Main Courses",
      image: mainimg,
      items: [
        { name: "Wagyu Beef Burger", price: "$25" },
        { name: "Grilled Scottish Salmon", price: "$30" },
        { name: "Signature Ribeye", price: "$45" },
      ],
    },
    {
      category: "Desserts",
      image: dessertimg,
      items: [
        { name: "Dark Chocolate Fondant", price: "$12" },
        { name: "Crème Brûlée", price: "$10" },
        { name: "Tiramisu", price: "$9" },
      ],
    },
    {
      category: "Beverages",
      image: drinkimg,
      items: [
        { name: "Classic Martini", price: "$15" },
        { name: "Old Fashioned", price: "$14" },
        { name: "Glass of Champagne", price: "$20" },
      ],
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen py-16 px-4">
      <div className="flex justify-center flex-col items-center text-center">
        <h1 className=" text-3xl sm:text-5xl font-bold text-white mb-4">Menu Card</h1>
        <p className="text-lg italic text-gray-400 pb-10">&quot;Exquisite flavors crafted with care&quot;</p>
      </div>
      
      <div className="container mx-auto max-w-4xl">
        {menuItems.map((section, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center mb-12">
            
            {/* Image Section */}
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <img src={section.image} alt={section.category} className="rounded-lg w-full md:w-auto" />
            </div>

            {/* Menu Details Section */}
            <div className="w-full md:w-2/3 md:pl-6">
              <h2 className="text-3xl font-semibold text-yellow-500 mb-4">{section.category}</h2>
              <div>
                {section.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center mb-2 border-b border-gray-600 pb-2">
                    <p className="text-xl text-white">{item.name}</p>
                    <span className="text-xl text-yellow-500">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="text-center mt-12">
          <p className="text-2xl text-yellow-500 font-bold">Call us: 088/ 445 45 451</p>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
