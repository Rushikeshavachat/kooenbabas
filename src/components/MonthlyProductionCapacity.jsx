// import React from 'react';
import WhyToChooseUs from "./WhyToChooseUs";
const capacities = [
  { type: 'Hand Tufted', capacity: '45,000 sq. mtrs' },
  { type: 'Handloom', capacity: '35,000 sq. mtrs' },
  { type: 'Handloom Knot/Double Back', capacity: '25,000 sq. mtrs' },
  { type: 'Gabbeh', capacity: '10,000 sq. mtrs' },
  { type: 'Shaggy', capacity: '11,000 sq. mtrs' },
  { type: 'Hand Knotted', capacity: '15,000 sq. mtrs' },
  { type: 'Indo-Nepali', capacity: '15,000 sq. mtrs' },
  { type: 'Leather Carpet', capacity: '5,000 sq. mtrs' },
  { type: 'Jute', capacity: '15,000 sq. mtrs' },
  { type: 'Dari', capacity: '20,000 sq. mtrs' }
];

const MonthlyProductionCapacity = () => {
  return (
<section className=" flex flex-col items-center justify-normal w-full h-full ">
        <h2 className="text-2xl font-bold mb-4">Monthly Production Capacity:</h2>
        <div className="flex flex-col items-center  text-gray-400">
          {capacities.map(({ type, capacity }, index) => (
            <div key={index} className="border-b py-2 flex items-center gap-4">
              <div className="font-bold flex items-center gap-4">{type}</div>
              <div className="font-bold flex items-center gap-4">{capacity}</div>
            </div>
          ))}
        </div>
        <section className="">
  <WhyToChooseUs/>
</section>
      </section>
  );
};

export default MonthlyProductionCapacity;

