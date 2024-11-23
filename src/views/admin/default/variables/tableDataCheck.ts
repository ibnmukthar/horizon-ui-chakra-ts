type RowObj = {
	name: string; // Name of the item
	totalSales: number; // Total quantity sold
	revenue: string; // Revenue generated
	status: string; // Stock status
  };
  
  const tableDataCheck: RowObj[] = [
	{
	  name: 'Cheeseburger',
	  totalSales: 1248,
	  revenue: '£9,984',
	  status: 'Available',
	},
	{
	  name: 'Pepperoni Pizza',
	  totalSales: 948,
	  revenue: '£7,584',
	  status: 'Available',
	},
	{
	  name: 'Grilled Chicken Salad',
	  totalSales: 720,
	  revenue: '£5,760',
	  status: 'Low Stock',
	},
	{
	  name: 'Veggie Wrap',
	  totalSales: 450,
	  revenue: '£3,600',
	  status: 'Out of Stock',
	},
  ];
  
  export default tableDataCheck;
  