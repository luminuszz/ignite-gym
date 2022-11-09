import BackgroundImf from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";
import { Button, Input } from "@components/index";
import Strings from "@config/strings";
import { PublicPage } from "@routes/public.routes";
import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base";

const SignIn: PublicPage<"SignIn"> = ({ navigation }) => (
  <ScrollView
    contentContainerStyle={{ flexGrow: 1 }}
    showsVerticalScrollIndicator={false}
  >
    <VStack flex="1" bg="gray.700" px={10} pb={16}>
      <Image
        source={BackgroundImf}
        alt="Pessoas treinando"
        resizeMode="contain"
        position="absolute"
      />

      <Center my={24}>
        <LogoSvg />

        <Text color="gray.100" fontSize="sm">
          {Strings.screens.SignIn.title}
        </Text>
      </Center>

      <Center>
        <Heading fontSize="xl" mb={6} fontFamily="heading" color="gray.100">
          {Strings.screens.SignIn.subtitle}
        </Heading>

        <Input
          type="text"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="E-email"
        />
        <Input
          placeholder="Senha"
          type="password"
          secureTextEntry
          autoCapitalize="none"
        />

        <Button title={Strings.screens.SignIn.signInButton} />
      </Center>

      <Center mt={24}>
        <Text mb={3} color="gray.100" fontFamily="body" fontSize="md">
          {Strings.screens.SignIn.footer}
        </Text>
        <Button
          onPress={() => navigation.navigate("SignUp")}
          title={Strings.screens.SignIn.footerButton}
          variant="outline"
        />
      </Center>
    </VStack>
  </ScrollView>
);

export default SignIn;
