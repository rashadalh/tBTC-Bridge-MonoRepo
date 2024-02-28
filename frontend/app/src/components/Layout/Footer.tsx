import { Flex, Span } from "@interlay/ui";
import { StyledFooter } from "./Layout.styles";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <StyledFooter justifyContent="flex-end">
      <Flex gap="spacing4">

        <a
          href="https://github.com/rashadalh/tBTC-Bridge-MonoRepo"
          rel="external"
          target="_blank"
        >
          <Flex gap="spacing2">
            <Span>GitHub</Span>
            <FaGithub color="white" size="1.25em" />
          </Flex>
        </a>
      </Flex>
    </StyledFooter>
  );
};

export { Footer };
