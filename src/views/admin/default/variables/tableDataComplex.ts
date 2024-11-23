type RowObj = {
	name: string; // Item name
	progress: number; // Popularity in percentage
	status: string; // Current stock status
	date: string; // Date when the item was last updated
  };
  
  const tableDataComplex: RowObj[] = [
	{
	  name: 'Cheeseburger',
	  progress: 85.5,
	  status: 'Available',
	  date: '12 Nov 2024',
	},
	{
	  name: 'Pepperoni Pizza',
	  progress: 75.2,
	  status: 'Available',
	  date: '11 Nov 2024',
	},
	{
	  name: 'Grilled Chicken Salad',
	  progress: 65.8,
	  status: 'Low Stock',
	  date: '10 Nov 2024',
	},
	{
	  name: 'Veggie Wrap',
	  progress: 50.3,
	  status: 'Out of Stock',
	  date: '09 Nov 2024',
	},
  ];
  
  export default tableDataComplex;
  