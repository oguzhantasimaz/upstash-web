import {
  Container,
  SimpleGrid,
  Heading,
  Text,
  Box,
  Accordion
} from '@chakra-ui/react'
import IconRedis from './icon-redis'
import IconNext from './icon-next'
import IconAws from './icon-aws'
import SupportCard from './section-support-card'

function SectionSupport() {
  return (
    <Box as="section" py={['100px', '140px']} textAlign="center">
      <Container maxW="5xl">
        {/**/}

        <Box as="header">
          <Heading tag="h2" size="2xl">
            Supports any <br />
            Modern Framework
          </Heading>
          <Text fontSize="lg" mt={2} color="gray.500">
            UpStash simplifies database access, saves repetitive CRUD
            boilerplate and increases type safety It's the perfect database
            toolkit for building robust and scalable web APIs.
          </Text>
        </Box>

        <SimpleGrid mt={[10, 20]} columns={[1, 1, 3]} spacing={6}>
          <SupportCard theme="next">
            <IconNext />
            <Text>
              Check out docs to <br />
              <Text tag="b" fontWeight="bold">
                Next
              </Text>
            </Text>
          </SupportCard>
          {/**/}
          <SupportCard theme="aws">
            <IconAws />
            <Text>
              Check out docs to <br />
              <Text tag="b" fontWeight="bold">
                AWS Lambda
              </Text>
            </Text>
          </SupportCard>
          {/**/}
          <SupportCard theme="redis">
            <IconRedis />
            <Text>
              Check out docs to <br />
              <Text tag="b" fontWeight="bold">
                Redis
              </Text>
            </Text>
          </SupportCard>
          {/**/}
        </SimpleGrid>

        {/**/}
      </Container>
    </Box>
  )
}

export default SectionSupport
