import { createSignal } from 'solid-js';
import { Button, HStack, Heading, VStack, Text } from '@hope-ui/solid';

export default function Home() {
  const [count, setCount] = createSignal(0);

  return (
    <VStack spacing={'$3'}>
      <Heading as={'h2'}>Home</Heading>
      <Text>This is the home page.</Text>
      <HStack spacing={'$3'}>
        <Button variant={'subtle'} onClick={() => setCount(count() - 1)}>
          Decrement
        </Button>
        <output>Count: {count()}</output>
        <Button onClick={() => setCount(count() + 1)}>Increment</Button>
      </HStack>
    </VStack>
  );
}
