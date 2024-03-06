import HeadingTitle from '@/app/components/heading-title'
import { HERO } from '@/app/helper/image.helper'
import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import AvaibilityCard from '../avaibility-card'

const Hero:React.FC = () => {
  return (
    <Flex pos="relative" zIndex={10} bgImage={HERO.HERO_BG} bgRepeat="no-repeat" bgSize="cover" minH="100vh" w="full">
        <Flex w="md" alignItems="center" mx="150px">
        <HeadingTitle />
        <AvaibilityCard />
        </Flex>
    </Flex>
  )
}

export default Hero