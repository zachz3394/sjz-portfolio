import { Center, Flex, Heading, Link } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Flex
      w={'full'}
      h={'full'}
      direction='column'
      pt={4}
      pb={2}
      justifyContent='space-around'
    >
      <Heading size='md' textAlign='center' fontWeight={300} textTransform={'uppercase'}>
        Salina Zhang
      </Heading>
      <Center>
        <Link
          href='mailto:salinjz@gmail.com'
          fontSize={14}
        >
          salinajz@gmail.com
        </Link>
      </Center>
      <Center fontSize={12} mt={4}>
        ©2023 by Salina Zhang
      </Center>
    </Flex>
  )
}

export default Footer