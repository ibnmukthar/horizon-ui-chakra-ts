import {
	Box,
	Flex,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useColorModeValue,
  } from '@chakra-ui/react';
  import Card from 'components/card/Card';
  
  type RowObj = {
	name: string; // Name of the item
	totalSales: number; // Total quantity sold
	revenue: string; // Revenue generated
	status: string; // Stock status
  };
  
  export default function ComplexTable(props: { tableData: RowObj[] }): JSX.Element {
	const { tableData } = props;
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  
	return (
	  <Card flexDirection="column" w="100%" px="0px" overflowX={{ sm: 'scroll', lg: 'hidden' }}>
		<Flex px="25px" mb="8px" justifyContent="space-between" align="center">
		  <Text color={textColor} fontSize="22px" fontWeight="700" lineHeight="100%">
			Top Selling Items
		  </Text>
		</Flex>
		<Box>
		  <Table variant="simple" color="gray.500" mb="24px" mt="12px">
			<Thead>
			  <Tr>
				<Th borderColor={borderColor}>Item</Th>
				<Th borderColor={borderColor}>Total Sales</Th>
				<Th borderColor={borderColor}>Revenue</Th>
				<Th borderColor={borderColor}>Status</Th>
			  </Tr>
			</Thead>
			<Tbody>
			  {tableData.map((row, index) => (
				<Tr key={index}>
				  <Td borderColor={borderColor}>
					<Text color={textColor} fontSize="sm" fontWeight="700">
					  {row.name}
					</Text>
				  </Td>
				  <Td borderColor={borderColor}>
					<Text color={textColor} fontSize="sm" fontWeight="500">
					  {row.totalSales}
					</Text>
				  </Td>
				  <Td borderColor={borderColor}>
					<Text color={textColor} fontSize="sm" fontWeight="500">
					  {row.revenue}
					</Text>
				  </Td>
				  <Td borderColor={borderColor}>
					<Text
					  color={
						row.status === 'Available'
						  ? 'green.500'
						  : row.status === 'Low Stock'
						  ? 'orange.500'
						  : 'red.500'
					  }
					  fontSize="sm"
					  fontWeight="500"
					>
					  {row.status}
					</Text>
				  </Td>
				</Tr>
			  ))}
			</Tbody>
		  </Table>
		</Box>
	  </Card>
	);
  }
  