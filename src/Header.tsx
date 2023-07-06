import { Box, Flex, Heading, Link, Stack } from "@chakra-ui/react"
import { Link as ReachLink } from 'react-router-dom'

interface NavItem {
  label: string;
  children?: NavItem[];
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Home',
    href: '/home',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Personal Writing',
    href: '/personal',
  },
  {
    label: 'Freelance Commissions',
    href: '/freelance',
  },
  {
    label: 'Tribute Works',
    href: '/tributes',
  }
]

const MainNav = () => {
  return (
    <Stack direction='row' spacing={4} justifyContent={'center'}>
      {NAV_ITEMS.map((navItem: NavItem) => (
        <Box key={navItem.label}>
          <Link
            as={ReachLink}
            p={2}
            to={navItem.href}
            fontSize='sm'
            fontWeight={500}
            _hover={{
              textDecoration: 'none',
            }}
          >
          {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  )
}

const Header = () => {
  return (
    <Flex
      w={'full'}
      h={'full'}
      direction='column'
      pt={12}
      pb={4}
      justifyContent='space-around'
    >
      <Heading size='2xl' textAlign='center' fontWeight={200} textTransform={'uppercase'}>
        Salina Zhang
      </Heading>
      <MainNav/>
    </Flex>
  )
}

export default Header