import { Box, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';

const Header = () => {
  return (
    <Box borderBottom="2px solid #ebebeb">
      <Heading as="p" m="1.2rem">HOSII</Heading>
    </Box>
  );
};

export default Header;
