import { Box, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import MiniStatistics from 'components/card/MiniStatistics';
import IconBox from 'components/icons/IconBox';
import ComplexTable from 'views/admin/default/components/ComplexTable';
import WeeklyRevenue from 'views/admin/default/components/WeeklyRevenue';
import PieCard from 'views/admin/default/components/PieCard';
import DailyTraffic from 'views/admin/default/components/DailyTraffic';
import { MdAttachMoney, MdBarChart, MdRestaurant, MdStar } from 'react-icons/md';
import tableDataCheck from 'views/admin/default/variables/tableDataCheck';

export default function RestaurantDashboard(): JSX.Element {
  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');

  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      {/* Flash Insights Section */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, '2xl': 4 }} gap="20px" mb="20px">
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={<MdAttachMoney size="32px" color={brandColor} />}
            />
          }
          name="Today's Revenue"
          value="£1,240"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg="linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)"
              icon={<MdRestaurant size="32px" color="white" />}
            />
          }
          name="Orders Completed"
          value="312"
        />
        <MiniStatistics growth="+18%" name="Average Order Value" value="£24.67" />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg="linear-gradient(90deg, #FFD700 0%, #FFA500 100%)"
              icon={<MdStar size="28px" color="white" />}
            />
          }
          name="4.5+ Reviews"
          value="1,235"
        />
      </SimpleGrid>

      {/* Revenue and Sales Section */}
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <WeeklyRevenue title="Weekly Sales" />
        <PieCard title="Customer Profiles" />
      </SimpleGrid>

      {/* Traffic and Insights Section */}
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <DailyTraffic title="Daily Customers" />
        <ComplexTable tableData={tableDataCheck} />
      </SimpleGrid>
    </Box>
  );
}
