import { Center, Spinner } from "native-base";

const Loading = () => (
  <Center flex={1} bg="gray.700">
    <Spinner color="green.500" />
  </Center>
);

export default Loading;
