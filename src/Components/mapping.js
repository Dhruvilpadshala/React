import React from 'react';

const Mapping = () => {
  const data = [
    {
      category: 'Fruits',
      items: [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
      ],
    },
    {
      category: 'Vegetables',
      items: [
        { id: 3, name: 'Carrot' },
        { id: 4, name: 'Broccoli' },
      ],
    },
  ];

  return (
    <div>
      {data.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h2>{category.category}</h2>
          {category.items.map((item) => (
            <p key={item.id}>{item.name}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Mapping;
