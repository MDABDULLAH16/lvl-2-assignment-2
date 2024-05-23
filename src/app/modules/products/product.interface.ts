export interface Variant {
  type: string;
  value: string;
}

export interface Inventory {
  quantity: {
    type: number;
  };
  inStock: {
    type: boolean;
  };
}

export interface Product {
  name: string;
  description: string;
  price: number;
  category?: string;
  tags: string[];
  variants: Variant[];
  inventory: Inventory;
}

// {
//     "name": "iPhone 13",
//     "description": "A sleek and powerful smartphone with cutting-edge features.",
//     "price": 999,
//     "category": "Electronics",
//     "tags": ["smartphone", "Apple", "iOS"],
//     "variants": [
//         {
//             "type": "Color",
//             "value": "Midnight Blue"
//         },
//         {
//             "type": "Storage Capacity",
//             "value": "256GB"
//         }
//     ],
//     "inventory": {
//         "quantity": 50,
//         "inStock": true
//     }
// }
