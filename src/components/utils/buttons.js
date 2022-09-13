import { Button, Image, Link } from "@chakra-ui/react"

export const DefaultBtn = ({text, bg, icon, href}) => {
    return (
        <Link href={href} target={'_blank'}>
        <Button bg={bg} fontWeight={'bold'} _hover={{bg: {bg}}} fontSize={['16px','20px','20px','20px','20px','20px']} borderRadius={12} py={[6,8,8,8,8,8]} px={[6,10,10,10,10,10]} color='white' pos={'relative'} zIndex={100}>{icon == '' ?  '' :<Image mr={3} src={`/assets/img/${icon}`}/> } {text}</Button></Link>
    )
}