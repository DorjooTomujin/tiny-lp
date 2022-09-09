import { Heading } from "@chakra-ui/react";

export const Title = ({ title }) => {
  return (
    <Heading color={"pink.main"} fontSize="48px">
      {title}
    </Heading>
  );
};
